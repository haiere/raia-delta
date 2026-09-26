# Raia Delta

<p align="center">
  <img
    src="https://i.postimg.cc/8PJ0bhb1/H-haiere.webp"
    alt="Raia Delta logo"
    width="96"
  />
</p>

<h1 align="center">Raia Delta</h1>

<p align="center">
  A lightweight, privacy-first text diff checker for comparing text, code, and files directly in your browser.
</p>

<p align="center">
  <a href="https://raia-delta.haiere.workers.dev/" target="_blank">
    <img
      src="https://img.shields.io/badge/website-raia--delta.haiere.workers.dev-3B82F6.svg?style=for-the-badge"
      alt="Raia Delta website"
    />
  </a>
  <a href="https://github.com/haiere/raia-delta" target="_blank">
    <img
      src="https://img.shields.io/badge/version-1.2.4-brightgreen.svg?style=for-the-badge"
      alt="Version 1.2.4"
    />
  </a>
  <img
    src="https://img.shields.io/badge/status-active-success.svg?style=for-the-badge"
    alt="Project status active"
  />
</p>

<p align="center">
  <a href="https://buymeacoffee.com/hajirstudio" target="_blank">
    <img
      src="https://img.shields.io/badge/Support%20the%20project-Buy%20Me%20a%20Coffee-FFDD00.svg?style=for-the-badge&logo=buymeacoffee&logoColor=000000"
      alt="Support Raia Delta on Buy Me a Coffee"
    />
  </a>
</p>

<p align="center">
  <img
    src="https://img.shields.io/badge/License-All%20Rights%20Reserved-lightgrey.svg?style=flat-square"
    alt="All Rights Reserved license"
  />
  <img
    src="https://img.shields.io/badge/JavaScript-client--side-F7DF1E.svg?style=flat-square&logo=javascript&logoColor=000000"
    alt="Client-side JavaScript"
  />
  <img
    src="https://img.shields.io/badge/Privacy-first-local%20processing-8B5CF6.svg?style=flat-square"
    alt="Privacy-first local processing"
  />
</p>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage](#usage)
  - [Input Panes](#input-panes)
  - [File Upload](#file-upload)
  - [Toolbar Controls](#toolbar-controls)
  - [Diff Output](#diff-output)
  - [Export Options](#export-options)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Project Structure](#project-structure)
- [Supported Platforms](#supported-platforms)
- [Security and Privacy](#security-and-privacy)
- [Performance Notes](#performance-notes)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Support](#support)

---

## Overview

Raia Delta is a free, client-side text comparison tool for identifying differences between two versions of text, code, or documents.

It supports line-by-line and word-level comparison, split and unified layouts, file uploads, live preview, clipboard copying, and diff export.

All comparison work is performed locally in the browser. Text is not intentionally uploaded to a backend server for processing.

Raia Delta is designed for:

- Developers comparing source code.
- Writers reviewing document revisions.
- Students checking changes between assignments.
- Researchers comparing notes and references.
- Anyone who needs a fast and simple text comparison tool.

---

## Features

| Feature | Description |
|---|---|
| Line diff | Compare text line by line for code and structured documents. |
| Word diff | Detect detailed changes inside individual lines or sentences. |
| Split view | Display original and changed content side by side. |
| Unified view | Display all changes in one readable flow. |
| Local processing | Perform comparison directly in the browser. |
| File upload | Load supported text files from your device. |
| Live preview | Update the result automatically while typing. |
| Ignore Case | Compare text without considering uppercase or lowercase differences. |
| Ignore Whitespace | Ignore whitespace differences during comparison. |
| Copy diff | Copy the result as plain text. |
| Export diff | Download the comparison result as a `.diff` file. |
| Responsive layout | Work on desktop, tablet, and mobile screens. |
| Keyboard shortcuts | Trigger comparison quickly with a keyboard shortcut. |
| Cookie preference | Store only the local consent preference when enabled. |

---

## Requirements

Raia Delta requires:

- A modern web browser.
- JavaScript enabled.
- Chrome, Firefox, Safari, or Microsoft Edge.
- An internet connection during the first page load for external fonts, icons, and the diff library.

No build tool, runtime, package manager, or server is required.

After the required resources are cached by the browser, the application may continue working offline depending on browser cache behavior.

---

## Installation

Raia Delta is a static three-file web application.

### Hosted Version

Open the official hosted version:

```text
[https://raia-delta.haiere.workers.dev/](https://raia-delta.haiere.workers.dev/)
```

### Run Locally

Clone the repository:

```bash
git clone [https://github.com/haiere/raia-delta.git](https://github.com/haiere/raia-delta.git)
cd raia-delta
```

Open the application:

```bash
open index.html
```

For Windows:

```bash
start index.html
```

For Linux:

```bash
xdg-open index.html
```

You can also download these files and place them in the same directory:

```text
index.html
style.css
script.js
```

Then open `index.html` in a modern browser.

---

## Quick Start

1. Open Raia Delta.
2. Paste the original text into the left input pane.
3. Paste the changed text into the right input pane.
4. Wait for the live comparison or click **Compare**.
5. Choose **Line** or **Word** comparison mode.
6. Choose **Split** or **Unified** result view.
7. Enable **Ignore Case** or **Ignore Whitespace** when needed.
8. Copy or export the result.

---

## Usage

### Input Panes

Raia Delta provides two input areas:

| Pane | Purpose |
|---|---|
| Original Text | The base or previous version of the content. |
| Changed Text | The new or modified version of the content. |

Each pane includes:

- A live character counter.
- A local file upload button.
- A clear button.
- Automatic comparison while typing.

---

### File Upload

Supported file extensions:

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

To upload a file:

1. Click **Upload** in the desired pane.
2. Select a supported file.
3. Wait for the file content to appear.
4. Compare it with content in the other pane.

Files are read locally by the browser.

---

### Toolbar Controls

| Control | Description |
|---|---|
| Compare | Manually run the comparison. |
| Clear | Clear both input panes and reset the result. |
| Swap | Exchange the original and changed content. |
| Line | Compare content line by line. |
| Word | Compare content word by word. |
| Ignore Case | Treat uppercase and lowercase characters as equivalent. |
| Ignore Whitespace | Ignore differences caused by whitespace. |
| Split | Display original and changed content separately. |
| Unified | Display all changes in a single result flow. |

---

### Diff Output

The result area displays three types of content:

- Removed content with a `−` marker.
- Added content with a `+` marker.
- Unchanged content with a neutral marker.

The result header also displays comparison statistics:

- Number of removed items.
- Number of added items.
- Number of unchanged items.

On larger screens, split view displays both sides next to each other. On smaller screens, the layout adapts for mobile use.

---

### Export Options

| Action | Description |
|---|---|
| Copy | Copies the plain-text diff to the clipboard. |
| Export | Downloads the result as `raia-delta-diff.diff`. |

The exported format uses conventional diff markers:

```text
- Removed content
+ Added content
  Unchanged content
```

---

## Keyboard Shortcuts

| Action | Shortcut |
|---|---|
| Compare | `Ctrl + Enter` on Windows/Linux |
| Compare | `Cmd + Enter` on macOS |
| Close mobile menu | `Escape` |
| Focus original pane | Click **Start Typing** |

---

## Project Structure

```text
raia-delta/
├── index.html      # Main application markup and SEO metadata
├── style.css       # Layout, colors, typography, and responsive styles
├── script.js       # Diff logic, controls, upload, export, and interactions
└── README.md       # Project documentation
```

The project does not require a build process.

---

## Supported Platforms

| Platform | Support |
|---|---|
| Desktop browsers | Full |
| Tablet browsers | Full |
| Mobile browsers | Full |
| Chrome | Supported |
| Firefox | Supported |
| Safari | Supported |
| Microsoft Edge | Supported |
| Offline after initial load | Depends on browser cache |

---

## Security and Privacy

Raia Delta is designed with a privacy-first approach:

- Text comparison runs locally in the browser.
- Text is not intentionally sent to a comparison server.
- No account or registration is required.
- No authentication data is collected.
- No text database is used by the application.
- No analytics or tracking pixel is included by default.
- Uploaded files are read locally by the browser.
- The cookie banner stores only the consent preference locally.

External resources may include:

- Google Fonts.
- Font Awesome.
- The `diff` library hosted on jsDelivr.
- The Buy Me a Coffee support page when opened by the user.

---

## Performance Notes

- Live comparison uses a short debounce delay to avoid unnecessary calculations while typing.
- DOM updates are minimized to keep the interface responsive.
- The application is lightweight and does not require a backend.
- Very large files may take longer to process.
- Word-level comparison can require more processing than line-level comparison.
- Split-view synchronization is most useful on larger screens.
- Unified view may be more comfortable for long content on mobile devices.

---

## Troubleshooting

### The Diff Library Failed to Load

Check your internet connection and confirm that jsDelivr is accessible:

```text
[https://cdn.jsdelivr.net/npm/diff@5.2.0/dist/diff.min.js](https://cdn.jsdelivr.net/npm/diff@5.2.0/dist/diff.min.js)
```

If the CDN is blocked, consider downloading and self-hosting the library.

### My File Does Not Load

Confirm that the file uses one of the supported extensions:

```text
.txt .md .json .csv .js .ts .html .css .py
```

For unsupported files, copy and paste the content manually.

### The Diff Does Not Update

Try the following:

1. Confirm that at least one pane contains text.
2. Click **Compare**.
3. Press `Ctrl + Enter` or `Cmd + Enter`.
4. Refresh the page.
5. Check the browser developer console for errors.

### The Character Count Looks Inaccurate

The character counter includes:

- Letters.
- Numbers.
- Symbols.
- Spaces.
- Tabs.
- Line breaks.

This behavior is intentional.

### Split View Looks Crowded on Mobile

Use **Unified** view for a more compact mobile layout. The interface automatically adapts at smaller screen widths.

---

## Roadmap

Potential future improvements:

- [ ] Syntax highlighting for common programming languages.
- [ ] Patience diff algorithm.
- [ ] Histogram diff algorithm.
- [ ] Dark and light theme switcher.
- [ ] Inline word highlights in line mode.
- [ ] Collapsible unchanged sections.
- [ ] Drag-and-drop file upload.
- [ ] Larger-file performance improvements.
- [ ] Custom export formats.
- [ ] Improved accessibility controls.
- [ ] Optional local history.
- [ ] Installable Progressive Web App support.

---

## Development

Raia Delta uses a simple static structure.

### Development Workflow

1. Open the project directory in a code editor.
2. Edit `index.html`, `style.css`, or `script.js`.
3. Open or refresh `index.html`.
4. Test the interface in multiple browsers.
5. Check desktop, tablet, and mobile layouts.
6. Verify comparison, upload, copy, and export features.

No transpiler, bundler, package manager, or build command is required.

### Testing Checklist

- [ ] Line comparison works correctly.
- [ ] Word comparison works correctly.
- [ ] Split view displays both versions.
- [ ] Unified view displays all changes.
- [ ] Ignore Case works correctly.
- [ ] Ignore Whitespace works correctly.
- [ ] File upload works for supported formats.
- [ ] Clear buttons reset the correct pane.
- [ ] Swap exchanges both input values.
- [ ] Copy exports plain-text diff content.
- [ ] Export downloads a `.diff` file.
- [ ] Keyboard shortcuts work correctly.
- [ ] Mobile navigation opens and closes correctly.
- [ ] Cookie preference persists correctly.
- [ ] Layout remains usable on mobile screens.
- [ ] External resources load correctly.

---

## Contributing

Contributions, bug reports, and suggestions are welcome.

### Report a Bug

1. Open an issue.
2. Describe the problem clearly.
3. Include the browser and operating system.
4. Add steps to reproduce the issue.
5. Include screenshots or console errors when useful.

### Submit a Change

1. Fork the repository.
2. Create a feature branch.
3. Make the required changes.
4. Test the feature locally.
5. Commit the changes.
6. Open a pull request with a clear description.

Example:

```bash
git checkout -b feature/improved-diff-output
git add .
git commit -m "Improve diff output"
git push origin feature/improved-diff-output
```

---

## License

Copyright © 2026 Haiere. All rights reserved.

Raia Delta is provided for personal and internal use. Unauthorized redistribution, resale, modification, or commercial use is not permitted without prior written permission from the author.

---

## Author

Developed and maintained by:

**Haiere & Hajir Studio**

- Website: [raia-delta.haiere.workers.dev](https://raia-delta.haiere.workers.dev/)
- Repository: [github.com/haiere/raia-delta](https://github.com/haiere/raia-delta)
- Support: [Buy Me a Coffee](https://buymeacoffee.com/hajirstudio)

---

## Support

If Raia Delta is useful to you, consider supporting its continued development:

<p align="center">
  <a href="https://buymeacoffee.com/hajirstudio" target="_blank">
    <img
      src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Support%20Development-FFDD00.svg?style=for-the-badge&logo=buymeacoffee&logoColor=000000"
      alt="Buy Me a Coffee"
    />
  </a>
</p>

Support helps with:

- Hosting costs.
- Domain and infrastructure maintenance.
- Bug fixes.
- Accessibility improvements.
- New comparison features.
- Long-term project maintenance.

---

<p align="center">
  <strong>Raia Delta · Where every change becomes clear</strong>
</p>

<p align="center">
  <a href="https://raia-delta.haiere.workers.dev/">
    Visit Raia Delta
  </a>
  ·
  <a href="https://buymeacoffee.com/hajirstudio">
    Support the Project
  </a>
</p>

<p align="center">
  © 2026 Haiere. All rights reserved.
</p>