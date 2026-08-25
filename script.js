/* State Variables */
var diffMode = 'line';
var viewMode = 'split';
var debounceTimer = null;
var lastDiffResult = [];
var toastTimer = null;

/* DOM Content Loaded Initializer */
document.addEventListener('DOMContentLoaded', function() {
    initCookieBanner();
    initHeaderScroll();
    initHamburger();
    updateCount('a');
    updateCount('b');

    console.log('🚀 Raia Delta v1.2.3 — Smart Text Diff Checker');
    console.log('📦 Built with ❤️ by Haiere & Hajir Studio');
});

/* Cookie Consent */
function initCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    var consent = localStorage.getItem('cookie-consent');
    if (!consent && banner) {
        setTimeout(function() {
            banner.classList.remove('hidden');
        }, 800);
    }
}

function acceptCookies() {
    localStorage.setItem('cookie-consent', 'accepted');
    document.getElementById('cookie-banner').classList.add('hidden');
    showToast('Cookies accepted ✓');
}

function declineCookies() {
    localStorage.setItem('cookie-consent', 'declined');
    document.getElementById('cookie-banner').classList.add('hidden');
    showToast('Cookies declined');
}

/* Header Scroll */
function initHeaderScroll() {
    var header = document.getElementById('mainHeader');
    var didScroll = false;
    if (!header) return;

    window.addEventListener('scroll', function() {
        if (!didScroll) {
            window.requestAnimationFrame(function() {
                if (window.scrollY > 20) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                didScroll = false;
            });
            didScroll = true;
        }
    }, { passive: true });
}

/* Mobile Hamburger Menu */
function initHamburger() {
    var btn = document.getElementById('hamburgerBtn');
    var menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function() {
        var isOpen = menu.classList.toggle('open');
        btn.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen);
        if (isOpen) {
            menu.focus();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
            menu.classList.remove('open');
            btn.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
            btn.focus();
        }
    });

    document.addEventListener('click', function(e) {
        if (menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.remove('open');
            btn.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });
}

/* UI Helper Actions */
function focusInputA() {
    var el = document.getElementById('text-a');
    if (el) el.focus();
}

function focusAndCompare() {
    focusInputA();
    runCompare();
}

/* Toolbar Mode & View Switchers */
function setMode(m) {
    diffMode = m;
    document.getElementById('mode-line').classList.toggle('active', m === 'line');
    document.getElementById('mode-line').setAttribute('aria-pressed', m === 'line');
    document.getElementById('mode-word').classList.toggle('active', m === 'word');
    document.getElementById('mode-word').setAttribute('aria-pressed', m === 'word');
    runCompare();
}

function setView(v) {
    viewMode = v;
    document.getElementById('view-split').classList.toggle('active', v === 'split');
    document.getElementById('view-split').setAttribute('aria-pressed', v === 'split');
    document.getElementById('view-unified').classList.toggle('active', v === 'unified');
    document.getElementById('view-unified').setAttribute('aria-pressed', v === 'unified');
    runCompare();
}

/* Clear & Swap Operations */
function clearBoth() {
    document.getElementById('text-a').value = '';
    document.getElementById('text-b').value = '';
    updateCount('a');
    updateCount('b');
    resetOutput();
    showToast('Cleared all text');
}

function clearPane(id) {
    document.getElementById('text-' + id).value = '';
    updateCount(id);
    debouncedCompare();
}

function swapTexts() {
    var a = document.getElementById('text-a');
    var b = document.getElementById('text-b');
    var tmp = a.value;
    a.value = b.value;
    b.value = tmp;
    updateCount('a');
    updateCount('b');
    debouncedCompare();
    showToast('Swapped texts');
}

/* File Upload Reader */
function loadFile(input, side) {
    var file = input.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('text-' + side).value = e.target.result;
        updateCount(side);
        debouncedCompare();
        showToast('Loaded: ' + file.name);
    };
    reader.onerror = function() { 
        showToast('Failed to read file.'); 
    };
    reader.readAsText(file);
    input.value = '';
}

/* Character Counter */
function updateCount(side) {
    var ta = document.getElementById('text-' + side);
    var el = document.getElementById('count-' + side);
    if (ta && el) {
        el.textContent = ta.value.length.toLocaleString() + ' chars';
    }
}

/* Debounced Compare Function */
function debouncedCompare() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(runCompare, 350);
}

/* Main Comparison Logic */
function runCompare() {
    if (typeof Diff === 'undefined') {
        showError('jsDiff library failed to load. Check your internet connection.');
        return;
    }

    var textA = document.getElementById('text-a').value;
    var textB = document.getElementById('text-b').value;

    if (!textA.trim() && !textB.trim()) {
        resetOutput();
        return;
    }

    var ignoreCase = document.getElementById('opt-ignore-case').checked;
    var ignoreWS = document.getElementById('opt-ignore-ws').checked;

    var a = textA;
    var b = textB;

    if (ignoreCase) { 
        a = a.toLowerCase();
        b = b.toLowerCase(); 
    }
    if (ignoreWS) { 
        a = normalizeWhitespace(a);
        b = normalizeWhitespace(b); 
    }

    var parts;
    try {
        if (diffMode === 'line') {
            parts = Diff.diffLines(a, b, { ignoreWhitespace: ignoreWS });
        } else {
            parts = Diff.diffWords(a, b, { ignoreWhitespace: ignoreWS });
        }
    } catch (e) {
        showError('Diff error: ' + e.message);
        return;
    }

    lastDiffResult = parts;

    if (viewMode === 'unified') {
        renderUnified(parts);
    } else {
        renderSplit(parts);
    }
    updateStats(parts);
}

/* Utility Helpers */
function normalizeWhitespace(text) {
    return text.split('\n').map(function(line) { 
        return line.trim().replace(/\s+/g, ' '); 
    }).join('\n');
}

function resetOutput() {
    var out = document.getElementById('diff-output');
    out.innerHTML =
        '<div class="diff-placeholder" id="diff-placeholder">' +
        '<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">' +
        '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>' +
        '<polyline points="14 2 14 8 20 8"/>' +
        '<line x1="16" y1="13" x2="8" y2="13"/>' +
        '<line x1="16" y1="17" x2="8" y2="17"/>' +
        '<polyline points="10 9 9 9 8 9"/>' +
        '</svg>' +
        '<p>Enter text in both panes and press <strong>Compare</strong><br />or start typing — live preview is enabled.</p>' +
        '</div>';
    document.getElementById('diff-stats').style.display = 'none';
    document.getElementById('stat-del-val').textContent = '0 removed';
    document.getElementById('stat-add-val').textContent = '0 added';
    lastDiffResult = [];
}

function updateStats(parts) {
    var removed = 0, added = 0, equal = 0;
    parts.forEach(function(p) {
        var lines = p.value.split('\n').filter(function(l) { return l !== '' || p.value.endsWith('\n'); }).length;
        if (p.removed) removed += lines;
        else if (p.added) added += lines;
        else equal += lines;
    });
    document.getElementById('ds-removed').textContent = '— ' + removed;
    document.getElementById('ds-added').textContent = '+ ' + added;
    document.getElementById('ds-equal').textContent = '= ' + equal;
    document.getElementById('diff-stats').style.display = 'flex';
    document.getElementById('stat-del-val').textContent = removed + ' removed';
    document.getElementById('stat-add-val').textContent = added + ' added';
}

function showError(msg) {
    var out = document.getElementById('diff-output');
    out.innerHTML = '<div class="diff-placeholder"><p style="color:#f87171;">' + esc(msg) + '</p></div>';
}

function esc(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function splitLines(str) {
    var lines = str.split('\n');
    if (lines[lines.length - 1] === '') lines.pop();
    return lines;
}

/* Render Unified View */
function renderUnified(parts) {
    var out = document.getElementById('diff-output');
    if (diffMode === 'word') {
        var html = '<div style="padding:14px 18px;font-family:var(--font-mono);font-size:var(--text-sm);line-height:var(--leading-loose);color:var(--slate-bright);">';
        parts.forEach(function(p) {
            var e = esc(p.value);
            if (p.removed) html += '<span class="word-del">' + e + '</span>';
            else if (p.added) html += '<span class="word-add">' + e + '</span>';
            else html += '<span>' + e + '</span>';
        });
        html += '</div>';
        out.innerHTML = html;
        return;
    }

    var html = '<table class="unified-table">';
    var lineOld = 1, lineNew = 1;
    parts.forEach(function(p) {
        var lines = splitLines(p.value);
        lines.forEach(function(line) {
            if (p.removed) {
                html += '<tr class="row-del">' +
                    '<td class="gutter"></td>' +
                    '<td class="line-num">' + lineOld++ + '</td>' +
                    '<td class="line-num" style="color:transparent;">·</td>' +
                    '<td class="sign-col">−</td>' +
                    '<td class="line-content">' + (esc(line) || '&nbsp;') + '</td>' +
                    '</tr>';
            } else if (p.added) {
                html += '<tr class="row-add">' +
                    '<td class="gutter"></td>' +
                    '<td class="line-num" style="color:transparent;">·</td>' +
                    '<td class="line-num">' + lineNew++ + '</td>' +
                    '<td class="sign-col">+</td>' +
                    '<td class="line-content">' + (esc(line) || '&nbsp;') + '</td>' +
                    '</tr>';
            } else {
                html += '<tr class="row-neu">' +
                    '<td class="gutter" style="background:transparent;"></td>' +
                    '<td class="line-num">' + lineOld++ + '</td>' +
                    '<td class="line-num">' + lineNew++ + '</td>' +
                    '<td class="sign-col" style="color:transparent;">·</td>' +
                    '<td class="line-content">' + (esc(line) || '&nbsp;') + '</td>' +
                    '</tr>';
            }
        });
    });
    html += '</table>';
    out.innerHTML = html;
}

/* Render Split View */
function renderSplit(parts) {
    var out = document.getElementById('diff-output');

    if (diffMode === 'word') {
        var leftHtml = '', rightHtml = '';
        parts.forEach(function(p) {
            var e = esc(p.value);
            if (p.removed) leftHtml += '<span class="word-del">' + e + '</span>';
            else if (p.added) rightHtml += '<span class="word-add">' + e + '</span>';
            else { 
                leftHtml += '<span>' + e + '</span>';
                rightHtml += '<span>' + e + '</span>'; 
            }
        });
        var wrap = function(content, side) {
            return '<div class="split-col" id="split-' + side + '">' +
                '<div class="split-col-header ' + (side === 'left' ? 'left' : 'right') + '">' +
                (side === 'left' ?
                    '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Original' :
                    '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Changed') +
                '</div>' +
                '<div style="padding:14px 18px;font-family:var(--font-mono);font-size:var(--text-sm);line-height:var(--leading-loose);color:var(--slate-bright);">' + (content || '&nbsp;') + '</div>' +
                '</div>';
        };
        out.innerHTML = '<div class="split-wrapper">' + wrap(leftHtml, 'left') + wrap(rightHtml, 'right') + '</div>';
        return;
    }

    var leftRows = [], rightRows = [];
    var i = 0;
    while (i < parts.length) {
        var p = parts[i];
        if (!p.removed && !p.added) {
            var lines = splitLines(p.value);
            lines.forEach(function(l) { 
                leftRows.push({ type: 'neu', value: l });
                rightRows.push({ type: 'neu', value: l }); 
            });
            i++;
        } else if (p.removed && parts[i + 1] && parts[i + 1].added) {
            var removedLines = splitLines(p.value);
            var addedLines = splitLines(parts[i + 1].value);
            var maxLen = Math.max(removedLines.length, addedLines.length);
            for (var j = 0; j < maxLen; j++) {
                leftRows.push({ type: j < removedLines.length ? 'del' : 'empty', value: removedLines[j] || '' });
                rightRows.push({ type: j < addedLines.length ? 'add' : 'empty', value: addedLines[j] || '' });
            }
            i += 2;
        } else if (p.removed) {
            splitLines(p.value).forEach(function(l) { 
                leftRows.push({ type: 'del', value: l });
                rightRows.push({ type: 'empty', value: '' }); 
            });
            i++;
        } else if (p.added) {
            splitLines(p.value).forEach(function(l) { 
                leftRows.push({ type: 'empty', value: '' });
                rightRows.push({ type: 'add', value: l }); 
            });
            i++;
        } else { 
            i++; 
        }
    }

    var buildTable = function(rows) {
        var lineNum = 1;
        var t = '<table class="split-table">';
        rows.forEach(function(row) {
            if (row.type === 'empty') {
                t += '<tr class="empty-row">' +
                    '<td class="gutter" style="background:rgba(148,163,184,0.04);width:3px;"></td>' +
                    '<td class="line-num" style="color:transparent;">·</td>' +
                    '<td class="sign-col" style="color:transparent;">·</td>' +
                    '<td class="line-content">&nbsp;</td>' +
                    '</tr>';
            } else if (row.type === 'del') {
                t += '<tr class="row-del">' +
                    '<td class="gutter"></td>' +
                    '<td class="line-num">' + lineNum++ + '</td>' +
                    '<td class="sign-col">−</td>' +
                    '<td class="line-content">' + (esc(row.value) || '&nbsp;') + '</td>' +
                    '</tr>';
            } else if (row.type === 'add') {
                t += '<tr class="row-add">' +
                    '<td class="gutter"></td>' +
                    '<td class="line-num">' + lineNum++ + '</td>' +
                    '<td class="sign-col">+</td>' +
                    '<td class="line-content">' + (esc(row.value) || '&nbsp;') + '</td>' +
                    '</tr>';
            } else {
                t += '<tr class="row-neu">' +
                    '<td class="gutter" style="background:transparent;"></td>' +
                    '<td class="line-num">' + lineNum++ + '</td>' +
                    '<td class="sign-col" style="color:transparent;">·</td>' +
                    '<td class="line-content">' + (esc(row.value) || '&nbsp;') + '</td>' +
                    '</tr>';
            }
        });
        t += '</table>';
        return t;
    };

    var html = '<div class="split-wrapper">' +
        '<div class="split-col" id="split-left">' +
        '<div class="split-col-header left">' +
        '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
        'Original' +
        '</div>' +
        buildTable(leftRows) +
        '</div>' +
        '<div class="split-col" id="split-right">' +
        '<div class="split-col-header right">' +
        '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>' +
        'Changed' +
        '<span class="sync-badge">SYNC</span>' +
        '</div>' +
        buildTable(rightRows) +
        '</div>' +
        '</div>';

    out.innerHTML = html;

    /* Sync Scroll */
    var left = document.getElementById('split-left');
    var right = document.getElementById('split-right');
    var syncing = false;
    var syncScroll = function(src, dst) {
        if (syncing) return;
        syncing = true;
        dst.scrollTop = src.scrollTop;
        dst.scrollLeft = src.scrollLeft;
        syncing = false;
    };
    if (left && right) {
        left.addEventListener('scroll', function() { syncScroll(left, right); }, { passive: true });
        right.addEventListener('scroll', function() { syncScroll(right, left); }, { passive: true });
    }
}

/* Copy & Export */
function copyDiff() {
    if (!lastDiffResult.length) { showToast('Nothing to copy yet.'); return; }
    var text = lastDiffResult.map(function(p) {
        var lines = splitLines(p.value);
        if (p.removed) return lines.map(function(l) { return '- ' + l; }).join('\n');
        if (p.added) return lines.map(function(l) { return '+ ' + l; }).join('\n');
        return lines.map(function(l) { return '  ' + l; }).join('\n');
    }).join('\n');

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(function() { showToast('Diff copied!'); })
            .catch(function() { fallbackCopy(text); });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand('copy');
        showToast('Diff copied!');
    } catch (e) {
        showToast('Could not copy.');
    }
    document.body.removeChild(ta);
}

function downloadDiff() {
    if (!lastDiffResult.length) { showToast('Nothing to export yet.'); return; }
    var text = lastDiffResult.map(function(p) {
        var lines = splitLines(p.value);
        if (p.removed) return lines.map(function(l) { return '- ' + l; }).join('\n');
        if (p.added) return lines.map(function(l) { return '+ ' + l; }).join('\n');
        return lines.map(function(l) { return '  ' + l; }).join('\n');
    }).join('\n');

    var blob = new Blob([text], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'raia-delta-diff.diff';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Diff exported!');
}

/* Toast Notification Helper */
function showToast(msg, duration) {
    duration = duration || 2500;
    var t = document.getElementById('toast');
    var msgEl = document.getElementById('toast-msg');
    if (!t || !msgEl) return;

    msgEl.textContent = msg;
    t.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function() { 
        t.classList.add('hidden'); 
    }, duration);
}

/* Global Keyboard Shortcuts */
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCompare();
    }
});
