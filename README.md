<div align="center">

# Raia Delta

**A lightweight, privacy-first text diff checker**

Compare text, code, and files directly in your browser — no uploads, no accounts, no backend.

<br />

<a href="https://raia-delta.haiere.workers.dev/">
  <img src="https://i.postimg.cc/8PJ0bhb1/H-haiere.webp" alt="Raia Delta logo" width="96" />
</a>

<br />

<a href="https://raia-delta.haiere.workers.dev/">
  <img src="https://img.shields.io/badge/Live_Demo-raia--delta.haiere.workers.dev-3B82F6?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Raia Delta website" />
</a>
<a href="https://buymeacoffee.com/hajirstudio">
  <img src="https://img.shields.io/badge/Support_the_Project-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black" alt="Support Raia Delta on Buy Me a Coffee" />
</a>

<br />

<img src="https://img.shields.io/badge/Version-1.2.4-brightgreen?style=flat-square" alt="Version 1.2.4" />
<img src="https://img.shields.io/badge/Status-Active-success?style=flat-square" alt="Project status active" />
<img src="https://img.shields.io/badge/License-All_Rights_Reserved-lightgrey?style=flat-square" alt="All Rights Reserved" />

<br />

<img src="https://img.shields.io/badge/JavaScript-Client_Side-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="Client-side JavaScript" />
<img src="https://img.shields.io/badge/Privacy_First-Local_Processing-8B5CF6?style=flat-square" alt="Privacy-first local processing" />
<img src="https://img.shields.io/badge/No_Build_Step-4B0082?style=flat-square" alt="No build step" />

</div>

---

<div align="center">

### Table of Contents

<table>
<tr>
<td valign="top" width="33%">

**Getting Started**

- [Overview](#overview)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage](#usage)

</td>
<td valign="top" width="33%">

**Reference**

- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Project Structure](#project-structure)
- [Supported Platforms](#supported-platforms)
- [Security and Privacy](#security-and-privacy)
- [Performance Notes](#performance-notes)
- [Troubleshooting](#troubleshooting)

</td>
<td valign="top" width="33%">

**Community**

- [Roadmap](#roadmap)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Support](#support)

</td>
</tr>
</table>

</div>

---

## Overview

> **Raia Delta** is a free, client-side text comparison tool for identifying differences between two versions of text, code, or documents.

It supports line-by-line and word-level comparison, split and unified layouts, file uploads, live preview, clipboard copying, and diff export.

<table>
<tr>
<td width="50%" valign="top">

### What it does

- Line-by-line and word-level comparison
- Split and unified result views
- File uploads with live preview
- Clipboard copying and diff export
- All comparison work performed locally

</td>
<td width="50%" valign="top">

### Designed for

- **Developers** comparing source code
- **Writers** reviewing document revisions
- **Students** checking changes between assignments
- **Researchers** comparing notes and references
- **Anyone** who needs a fast, simple comparison tool

</td>
</tr>
</table>

> [!IMPORTANT]
> All comparison work is performed locally in the browser. Text is not intentionally uploaded to a backend server for processing.

---

## Features

| Feature | Description |
|---|---|
| **Line diff** | Compare text line by line for code and structured documents |
| **Word diff** | Detect detailed changes inside individual lines or sentences |
| **Split view** | Display original and changed content side by side |
| **Unified view** | Display all changes in one readable flow |
| **Local processing** | Perform comparison directly in the browser |
| **File upload** | Load supported text files from your device |
| **Live preview** | Update the result automatically while typing |
| **Ignore Case** | Compare text without considering uppercase or lowercase differences |
| **Ignore Whitespace** | Ignore whitespace differences during comparison |
| **Copy diff** | Copy the result as plain text |
| **Export diff** | Download the comparison result as a `.diff` file |
| **Responsive layout** | Work on desktop, tablet, and mobile screens |
| **Keyboard shortcuts** | Trigger comparison quickly with a keyboard shortcut |
| **Cookie preference** | Store only the local consent preference when enabled |

---

## Requirements

> Raia Delta requires:

| Requirement | Details |
|---|---|
| **Browser** | A modern web browser — Chrome, Firefox, Safari, or Microsoft Edge |
| **JavaScript** | Enabled |
| **Connection** | An internet connection during the first page load for external fonts, icons, and the diff library |
| **Build tools** | None — no build tool, runtime, package manager, or server is required |

> [!NOTE]
> After the required resources are cached by the browser, the application may continue working offline depending on browser cache behavior.

---

## Installation

> Raia Delta is a static three-file web application.

### Hosted Version

Open the official hosted version:

<div align="center">

**[raia-delta.haiere.workers.dev](https://raia-delta.haiere.workers.dev/)**

</div>

### Run Locally

Clone the repository:

```bash
git clone https://github.com/haiere/raia-delta.git
cd raia-delta
```

Open the application:

<table>
<tr>
<td width="33%" valign="top">

macOS

```bash
open index.html
```

</td>
<td width="33%" valign="top">

Windows

```bash
start index.html
```

</td>
<td width="33%" valign="top">

Linux

```bash
xdg-open index.html
```

</td>
</tr>
</table>

You can also download these files and place them in the same directory:

```text
index.html
style.css
script.js
```

Then open index.html in a modern browser.

---

Quick Start

1. Open Raia Delta
2. Paste the original text into the left input pane
3. Paste the changed text into the right input pane
4. Wait for the live comparison or click Compare
5. Choose Line or Word comparison mode
6. Choose Split or Unified result view
7. Enable Ignore Case or Ignore Whitespace when needed
8. Copy or export the result

---

Usage

Input Panes

Raia Delta provides two input areas.

Pane Purpose
Original Text The base or previous version of the content
Changed Text The new or modified version of the content

Each pane includes:

· A live character counter
· A local file upload button
· A clear button
· Automatic comparison while typing

---

File Upload

Supported file extensions:

Extension Format
.txt Plain text
.md Markdown
.json JSON
.csv CSV
.js JavaScript
.ts TypeScript
.html HTML
.css CSS
.py Python

To upload a file:

1. Click Upload in the desired pane
2. Select a supported file
3. Wait for the file content to appear
4. Compare it with content in the other pane

[!NOTE]
Files are read locally by the browser.

---

Toolbar Controls

Control Description
Compare Manually run the comparison
Clear Clear both input panes and reset the result
Swap Exchange the original and changed content
Line Compare content line by line
Word Compare content word by word
Ignore Case Treat uppercase and lowercase characters as equivalent
Ignore Whitespace Ignore differences caused by whitespace
Split Display original and changed content separately
Unified Display all changes in a single result flow

---

Diff Output

The result area displays three types of content.

Marker Meaning
− Removed content
+ Added content
(neutral) Unchanged content

The result header also displays comparison statistics:

· Number of removed items
· Number of added items
· Number of unchanged items

[!TIP]
On larger screens, split view displays both sides next to each other. On smaller screens, the layout adapts for mobile use.

---

Export Options

Action Description
Copy Copies the plain-text diff to the clipboard
Export Downloads the result as raia-delta-diff.diff

The exported format uses conventional diff markers:

```text
- Removed content
+ Added content
  Unchanged content
```

---

Keyboard Shortcuts

Action Shortcut
Compare Ctrl + Enter on Windows / Linux
Compare Cmd + Enter on macOS
Close mobile menu Escape
Focus original pane Click Start Typing

---

Project Structure

```text
raia-delta/
├── index.html      # Main application markup and SEO metadata
├── style.css       # Layout, colors, typography, and responsive styles
├── script.js       # Diff logic, controls, upload, export, and interactions
└── README.md       # Project documentation
```

The project does not require a build process.

---

Supported Platforms

Platform Support
Desktop browsers Full
Tablet browsers Full
Mobile browsers Full
Chrome Supported
Firefox Supported
Safari Supported
Microsoft Edge Supported
Offline after initial load Depends on browser cache

---

Security and Privacy

Raia Delta is designed with a privacy-first approach.

<table>
<tr>
<td width="50%" valign="top">

What stays local

· Text comparison runs locally in the browser
· Text is not intentionally sent to a comparison server
· Uploaded files are read locally by the browser
· The cookie banner stores only the consent preference locally
· No account or registration is required

</td>
<td width="50%" valign="top">

What is not collected

· No authentication data is collected
· No text database is used by the application
· No analytics or tracking pixel is included by default
· No user profiling or telemetry

</td>
</tr>
</table>

External resources

These may be loaded by the application:

· Google Fonts
· Font Awesome
· The diff library hosted on jsDelivr
· The Buy Me a Coffee support page — only when opened by the user

---

Performance Notes

· Live comparison uses a short debounce delay to avoid unnecessary calculations while typing
· DOM updates are minimized to keep the interface responsive
· The application is lightweight and does not require a backend
· Very large files may take longer to process
· Word-level comparison can require more processing than line-level comparison
· Split-view synchronization is most useful on larger screens
· Unified view may be more comfortable for long content on mobile devices

---

Troubleshooting

<details>
<summary><b>The diff library failed to load</b></summary>

<br />

Check your internet connection and confirm that jsDelivr is accessible:

```text
https://cdn.jsdelivr.net/npm/diff@5.2.0/dist/diff.min.js
```

If the CDN is blocked, consider downloading and self-hosting the library.

</details>

<details>
<summary><b>My file does not load</b></summary>

<br />

Confirm that the file uses one of the supported extensions:

```text
.txt .md .json .csv .js .ts .html .css .py
```

For unsupported files, copy and paste the content manually.

</details>

<details>
<summary><b>The diff does not update</b></summary>

<br />

1. Confirm that at least one pane contains text
2. Click Compare
3. Press Ctrl + Enter or Cmd + Enter
4. Refresh the page
5. Check the browser developer console for errors

</details>

<details>
<summary><b>The character count looks inaccurate</b></summary>

<br />

The character counter includes:

· Letters
· Numbers
· Symbols
· Spaces
· Tabs
· Line breaks

This behavior is intentional.

</details>

<details>
<summary><b>Split view looks crowded on mobile</b></summary>

<br />

Use Unified view for a more compact mobile layout. The interface automatically adapts at smaller screen widths.

</details>

---

Roadmap

Potential future improvements:

<table>
<tr>
<td width="50%" valign="top">

☐ Syntax highlighting for common programming languages
☐ Patience diff algorithm
☐ Histogram diff algorithm
☐ Dark and light theme switcher
☐ Inline word highlights in line mode
☐ Collapsible unchanged sections

</td>
<td width="50%" valign="top">

☐ Drag-and-drop file upload
☐ Larger-file performance improvements
☐ Custom export formats
☐ Improved accessibility controls
☐ Optional local history
☐ Installable Progressive Web App support

</td>
</tr>
</table>

---

Development

Raia Delta uses a simple static structure.

Development Workflow

1. Open the project directory in a code editor
2. Edit index.html, style.css, or script.js
3. Open or refresh index.html
4. Test the interface in multiple browsers
5. Check desktop, tablet, and mobile layouts
6. Verify comparison, upload, copy, and export features

[!NOTE]
No transpiler, bundler, package manager, or build command is required.

Testing Checklist

<table>
<tr>
<td width="50%" valign="top">

☐ Line comparison works correctly
☐ Word comparison works correctly
☐ Split view displays both versions
☐ Unified view displays all changes
☐ Ignore Case works correctly
☐ Ignore Whitespace works correctly
☐ File upload works for supported formats
☐ Clear buttons reset the correct pane

</td>
<td width="50%" valign="top">

☐ Swap exchanges both input values
☐ Copy exports plain-text diff content
☐ Export downloads a .diff file
☐ Keyboard shortcuts work correctly
☐ Mobile navigation opens and closes correctly
☐ Cookie preference persists correctly
☐ Layout remains usable on mobile screens
☐ External resources load correctly

</td>
</tr>
</table>

---

Contributing

Contributions, bug reports, and suggestions are welcome.

<details>
<summary><b>Report a bug</b></summary>

<br />

1. Open an issue
2. Describe the problem clearly
3. Include the browser and operating system
4. Add steps to reproduce the issue
5. Include screenshots or console errors when useful

</details>

<details>
<summary><b>Submit a change</b></summary>

<br />

1. Fork the repository
2. Create a feature branch
3. Make the required changes
4. Test the feature locally
5. Commit the changes
6. Open a pull request with a clear description

Example:

```bash
git checkout -b feature/improved-diff-output
git add .
git commit -m "Improve diff output"
git push origin feature/improved-diff-output
```

</details>

---

License

Copyright © 2026 Haiere. All rights reserved.

Raia Delta is provided for personal and internal use. Unauthorized redistribution, resale, modification, or commercial use is not permitted without prior written permission from the author.

---

Author

<div align="center">

Developed and maintained by Haiere & Hajir Studio

<br />

<a href="https://raia-delta.haiere.workers.dev/">
  <img src="https://img.shields.io/badge/Website-raia--delta.haiere.workers.dev-3B82F6?style=flat-square&logo=cloudflare&logoColor=white" alt="Website" />
</a>
<a href="https://github.com/haiere/raia-delta">
  <img src="https://img.shields.io/badge/Repository-github.com%2Fhaiere%2Fraia--delta-181717?style=flat-square&logo=github&logoColor=white" alt="Repository" />
</a>
<a href="https://buymeacoffee.com/hajirstudio">
  <img src="https://img.shields.io/badge/Support-Buy_Me_a_Coffee-FFDD00?style=flat-square&logo=buymeacoffee&logoColor=black" alt="Buy Me a Coffee" />
</a>

</div>

---

Support

If Raia Delta is useful to you, consider supporting its continued development.

<table>
<tr>
<td width="50%" valign="top">

Your support helps with

· Hosting costs
· Domain and infrastructure maintenance
· Bug fixes
· Accessibility improvements
· New comparison features
· Long-term project maintenance

</td>
<td width="50%" valign="top">

<div align="center">

<br />

<a href="https://buymeacoffee.com/hajirstudio">
  <img src="https://img.shields.io/badge/Buy_Me_a_Coffee-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black" alt="Buy Me a Coffee" />
</a>

</div>

</td>
</tr>
</table>

---

<div align="center">

Raia Delta · Where every change becomes clear

<br />

<a href="https://raia-delta.haiere.workers.dev/">
  <img src="https://img.shields.io/badge/Visit_Raia_Delta-3B82F6?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Visit Raia Delta" />
</a>
<a href="https://buymeacoffee.com/hajirstudio">
  <img src="https://img.shields.io/badge/Support_the_Project-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black" alt="Support the Project" />
</a>

<br />
<br />

<sub>
© 2026 Haiere. All rights reserved.
</sub>

</div>
