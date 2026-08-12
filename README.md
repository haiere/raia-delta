# Raia Delta

A lightweight, privacy-first text diff checker with smart line and word comparison, split and unified views, and instant export.

Raia Delta is a client-side text comparison tool that helps you identify differences between two versions of text or code. It processes all data locally in your browser, meaning no text is ever sent to a server.

The tool is designed for developers, writers, and anyone who needs to compare documents, code changes, or configuration files quickly and securely. It supports both line-by-line and word-level diffing, offers split and unified views, and includes features like file upload, export, and keyboard shortcuts.

***

## Features

- Line-by-line diff — Compare text at the line level, ideal for code and structured documents.
- Word-level diff — Highlight changes within lines for precise comparison of prose or formatted text.
- Split view — Display original and changed text side by side with synchronized scrolling.
- Unified view — Show all changes in a single view with clear addition and removal markers.
- Privacy-first — All processing occurs locally in the browser. No data is transmitted or stored.
- File upload — Load text files directly from your device for comparison.
- Export diff — Copy the diff to your clipboard or download it as a `.diff` file.
- Ignore options — Toggle case sensitivity and whitespace handling to focus on meaningful changes.
- Keyboard shortcut — Press `Ctrl+Enter` (or `Cmd+Enter`) to trigger comparison.
- Responsive design — Works seamlessly on desktop, tablet, and mobile devices.

***

## Requirements

- A modern web browser with JavaScript enabled (Chrome, Firefox, Safari, Edge, or similar).
- Internet connection is required only for loading the page and its dependencies (fonts, icons, and the diff library) on first visit. After the page is loaded, the tool works offline.

No additional software, runtime, or package manager is required.

***

## Installation

Raia Delta is a single-page web application and does not require installation in the traditional sense.

### Access the hosted version

The tool is available at:

```
https://raia-delta.haiere.workers.dev/
```

### Run locally

To run the tool on your own machine:

1. Download the `index.html` file from the repository.
2. Open the file in your preferred web browser.

Alternatively, clone the repository and open the file:

```bash
git clone https://github.com/haiere/raia-delta
cd raia-delta
open index.html
```

No build step, server, or package installation is required.

***

## Quick Start

1. Open Raia Delta in your browser.
2. Paste or type the original text into the left pane.
3. Paste or type the changed text into the right pane.
4. The diff updates automatically with a short delay.
5. Switch between Split and Unified views using the toolbar.
6. Toggle between Line and Word diff modes as needed.
7. Use the Compare button or press `Ctrl+Enter` to refresh the diff.

***

## Usage

### Input panes

- **Original** — The base version of your text.
- **Changed** — The modified version to compare against the original.

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

Click the Upload button in either pane and select a file. The content is loaded automatically and the diff is updated.

### Toolbar controls

| Control | Description |
|---|---|
| Compare | Manually trigger the diff comparison. |
| Clear | Clears both input panes and resets the output. |
| Swap | Swaps the content between the original and changed panes. |
| Mode (Line / Word) | Switches between line-level and word-level diffing. |
| Ignore Case | Toggles case-sensitive comparison. |
| Ignore WS | Toggles whitespace-insensitive comparison. |
| View (Split / Unified) | Switches between side-by-side and unified diff views. |

### Output

The diff output is displayed below the input panes. It shows:

- Removed lines or words (highlighted in red).
- Added lines or words (highlighted in green).
- Unchanged content (in neutral color).

In Split view, the original and changed content are shown side by side with synchronized scrolling.

In Unified view, all changes are presented in a single table with clear visual indicators.

### Export options

- **Copy** — Copies the diff to your clipboard in a plain text format with `-`, `+`, and spaces for context.
- **Export** — Downloads the diff as a `.diff` file.

***

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

***

## Project Structure

```
raia-delta/
└── index.html    # Single-file web application
```

The entire tool is contained in a single HTML file with embedded CSS and JavaScript. This makes it portable and easy to distribute.

***

## Supported Platforms

| Platform | Support |
|---|---|
| Desktop browsers | Full |
| Tablet browsers | Full |
| Mobile browsers | Full |
| Offline | Yes (after initial load) |

The tool is tested on the latest versions of Chrome, Firefox, Safari, and Edge.

***

## Troubleshooting

### The diff library failed to load

Ensure you have an active internet connection. The tool loads the diff library from a CDN (`cdn.jsdelivr.net`). If the CDN is blocked or unavailable, the comparison will not work.

### My file does not load

Verify that the file format is supported. The tool accepts `.txt`, `.md`, `.json`, `.csv`, `.js`, `.ts`, `.html`, `.css`, and `.py` files. For other formats, copy and paste the content manually.

### The diff output is not updating

Check that both input panes contain text. The diff requires content in at least one pane to produce output. If you have made changes and the output is not updating, click the Compare button to force a refresh.

### Character count is inaccurate

The character counter includes all characters, including whitespace and line breaks. This is normal behavior.

***

## Security Considerations

- No data transmission — All text processing happens locally in your browser. No content is sent to any external server.
- No persistent storage — The tool does not store your text in cookies, local storage, or any other form of persistent storage.
- No tracking — The tool does not include analytics, tracking pixels, or third-party monitoring scripts.

***

## Privacy Considerations

Raia Delta is designed with privacy as a core principle:

- All computations are performed client-side.
- No text, file content, or diff results are transmitted over the network.
- No cookies are set by default. Cookie consent is managed locally and does not involve external services.
- The tool does not require authentication, user accounts, or data collection.

***

## Performance Notes

- The diff algorithm is optimized for typical text sizes. Very large files (thousands of lines) may cause a brief delay, but the tool remains responsive.
- Live preview is debounced by 350ms to avoid excessive computation during typing.
- The tool uses efficient DOM updates to minimize reflows and repaints.

***

## Roadmap

Possible future enhancements:

- Syntax highlighting for code comparison.
- Support for additional diff algorithms.
- Dark / light theme toggle.
- Side-by-side line matching with word-level highlights inside lines.

***

## Contributing

Contributions are welcome. If you would like to suggest improvements, report issues, or submit changes, please contact the maintainer or open an issue in the project repository.

***

## Development Setup

Since the tool is a single HTML file, development is straightforward:

1. Open `index.html` in your preferred code editor.
2. Make changes to the HTML, CSS, or JavaScript sections.
3. Refresh the browser to see the results.

No build tools, transpilers, or package managers are required.

***

## Testing

Testing is performed manually across modern browsers and devices. Key test areas include:

- Diff accuracy for line and word modes.
- View switching (Split / Unified).
- File upload and content loading.
- Responsive layout on different screen sizes.
- Keyboard shortcuts and accessibility features.
- Export and copy functionality.

***

## Build and Release

The project is distributed as a single HTML file. There is no build step. Releases are versioned and deployed as static assets.

***

## License

All rights reserved. This tool is provided for personal and internal use. Unauthorized distribution or commercial use is not permitted without prior consent from the author.

***

## Author

Developed and maintained by Haiere.

***

## Support and Contact

For questions, feedback, or support, visit the project repository or contact the author through the official Haiere channels.