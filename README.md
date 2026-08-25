# Raia Delta

[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-lightgrey.svg)](#license)
[![Version](https://img.shields.io/badge/version-1.2.3-brightgreen.svg)](#)
[![Status](https://img.shields.io/badge/status-active-success.svg)](#)
[![Website](https://img.shields.io/badge/website-raia--delta.haiere.workers.dev-3B82F6.svg)](https://raia-delta.haiere.workers.dev/)

A lightweight, privacy-first text diff checker with smart line and word comparison, split and unified views, and instant export.

Raia Delta is a client-side text comparison tool that helps you identify differences between two versions of text or code. It processes all data locally in your browser, meaning no text is ever sent to a server.

The tool is designed for developers, writers, and anyone who needs to compare documents, code changes, or configuration files quickly and securely. It supports both line-by-line and word-level diffing, offers split and unified views, and includes features like file upload, export, and keyboard shortcuts.

---

## Features

- Line-by-line diff — compare text at the line level, ideal for code and structured documents.
- Word-level diff — highlight changes within lines for precise comparison of prose or formatted text.
- Split view — display original and changed text side by side with synchronized scrolling.
- Unified view — show all changes in a single view with clear addition and removal markers.
- Privacy-first — all processing occurs locally in the browser. No data is transmitted or stored.
- File upload — load text files directly from your device for comparison.
- Export diff — copy the diff to your clipboard or download it as a `.diff` file.
- Ignore options — toggle case sensitivity and whitespace handling to focus on meaningful changes.
- Keyboard shortcut — press `Ctrl+Enter` on Windows or `Cmd+Enter` on Mac to trigger comparison.
- Responsive design — works seamlessly on desktop, tablet, and mobile devices.

---

## Requirements

- A modern web browser with JavaScript enabled, such as Chrome, Firefox, Safari, or Edge.
- An internet connection is required only for the first page load if fonts, icons, or the diff library are hosted externally. After that, the tool can work offline.

No additional software, runtime, or package manager is required.

---

## Installation

Raia Delta is a single-page web application and does not require installation in the traditional sense.

### Access the hosted version

The tool is available at:

```text
https://raia-delta.haiere.workers.dev/
```

### Run locally

To run the tool on your own machine:

1. Download `index.html` from the repository.
2. Open the file in your preferred web browser.

Or clone the repository and open the file:

```bash
git clone https://github.com/haiere/raia-delta
cd raia-delta
open index.html
```

No build step, server, or package installation is required.

---

## Quick Start

1. Open Raia Delta in your browser.
2. Paste or type the original text into the left pane.
3. Paste or type the changed text into the right pane.
4. The diff updates automatically after a short delay.
5. Switch between Split and Unified views using the toolbar.
6. Toggle between Line and Word diff modes as needed.
7. Use the Compare button or press `Ctrl+Enter` to refresh the diff.

---

## Usage

### Input panes

- **Original** — the base version of your text.
- **Changed** — the modified version to compare against the original.

Each pane includes:
- A character counter.
- An upload button for loading text files.
- A clear button to reset the pane.

### File upload

The tool supports the following file types:

| Extension | Format |
|---|---|
| `.txt` | Plain text |
| `.md` | Markdown |
| `.json` | JSON |
| `.csv` | CSV |
| `.js` | JavaScript |
| `.ts` | TypeScript |
| `.html` | HTML |
| `.css` | CSS |
| `.py` | Python |

Click the Upload button in either pane and select a file. The content loads automatically and the diff updates.

### Toolbar controls

| Control | Description |
|---|---|
| Compare | Manually trigger the diff comparison. |
| Clear | Clear both input panes and reset the output. |
| Swap | Swap the content between the original and changed panes. |
| Mode (Line / Word) | Switch between line-level and word-level diffing. |
| Ignore Case | Toggle case-sensitive comparison. |
| Ignore WS | Toggle whitespace-insensitive comparison. |
| View (Split / Unified) | Switch between side-by-side and unified diff views. |

### Output

The diff output is displayed below the input panes. It shows:
- Removed lines or words, highlighted in red.
- Added lines or words, highlighted in green.
- Unchanged content, shown in a neutral color.

In Split view, the original and changed content appear side by side with synchronized scrolling.

In Unified view, all changes are shown in a single flow with clear visual indicators.

### Export options

- **Copy** — copies the diff to your clipboard in plain text format using `-`, `+`, and spaces for context.
- **Export** — downloads the diff as a `.diff` file.

---

## Commands

| Action | Command / Shortcut |
|---|---|
| Compare | `Ctrl+Enter` / `Cmd+Enter` |
| Clear panes | Click Clear button |
| Swap texts | Click Swap button |
| Toggle Line / Word mode | Click toolbar toggle |
| Toggle Split / Unified view | Click toolbar toggle |
| Copy diff | Click Copy button |
| Export diff | Click Export button |

---

## Project Structure

```text
raia-delta/
├── index.html       # Main HTML structure and entry point
├── css/
│   └── style.css    # Stylesheets and layout design
└── js/
    └── script.js    # Core application logic and event handling
```

The entire tool is contained in a single HTML file with embedded CSS and JavaScript. This makes it portable and easy to distribute.

---

## Supported Platforms

| Platform | Support |
|---|---|
| Desktop browsers | Full |
| Tablet browsers | Full |
| Mobile browsers | Full |
| Offline | Yes, after initial load |

The tool is tested on the latest versions of Chrome, Firefox, Safari, and Edge.

---

## Troubleshooting

### The diff library failed to load

Ensure you have an active internet connection. The tool loads the diff library from a CDN such as `cdn.jsdelivr.net`. If the CDN is blocked or unavailable, comparison may not work.

### My file does not load

Verify that the file format is supported. The tool accepts `.txt`, `.md`, `.json`, `.csv`, `.js`, `.ts`, `.html`, `.css`, and `.py` files. For other formats, copy and paste the content manually.

### The diff output is not updating

Check that both input panes contain text. The diff requires content in at least one pane to produce output. If you have made changes and the output is not updating, click the Compare button to force a refresh.

### Character count is inaccurate

The character counter includes all characters, including whitespace and line breaks. This is expected behavior.

---

## Security Considerations

- No data transmission — all text processing happens locally in your browser. No content is sent to any external server.
- No persistent storage — the tool does not store your text in cookies, local storage, or any other persistent storage.
- No tracking — the tool does not include analytics, tracking pixels, or third-party monitoring scripts.

---

## Privacy Considerations

Raia Delta is designed with privacy as a core principle:

- All computations are performed client-side.
- No text, file content, or diff results are transmitted over the network.
- No cookies are set by default.
- The tool does not require authentication, user accounts, or data collection.

---

## Performance Notes

- The diff algorithm is optimized for typical text sizes. Very large files may cause a brief delay, but the tool remains responsive.
- Live preview is debounced by 350ms to avoid excessive computation during typing.
- The tool uses efficient DOM updates to minimize reflows and repaints.

---

## Roadmap

Possible future enhancements:
- Syntax highlighting for code comparison.
- Support for additional diff algorithms.
- Dark/light theme toggle.
- Side-by-side line matching with word-level highlights inside lines.

---

## Contributing

Contributions are welcome. If you would like to suggest improvements, report issues, or submit changes, please contact the maintainer or open an issue in the project repository.

---

## Development Setup

Since the tool is a single HTML file, development is straightforward:

1. Open `index.html` in your preferred code editor.
2. Make changes to the HTML, CSS, or JavaScript sections.
3. Refresh the browser to see the results.

No build tools, transpilers, or package managers are required.

---

## Testing

Testing is performed manually across modern browsers and devices. Key test areas include:
- Diff accuracy for line and word modes.
- View switching (Split / Unified).
- File upload and content loading.
- Responsive layout on different screen sizes.
- Keyboard shortcuts and accessibility features.
- Export and copy functionality.

---

## Build and Release

The project is distributed as a single HTML file. There is no build step. Releases are versioned and deployed as static assets.

---

## License

All rights reserved. This tool is provided for personal and internal use. Unauthorized distribution or commercial use is not permitted without prior consent from the author.

---

## Author

Developed and maintained by Haiere & Hajir Studio.

---

## Support and Contact

For questions, feedback, or support, visit the project repository or contact the author through the official Haiere channels.