# PotatoGPT

PotatoGPT is a simple AI-powered chat application that leverages Google’s Gemini API to generate conversational responses. It features a sleek, dark-themed UI and supports both click and keypress interactions for sending messages.

## Features

* **AI-Powered Responses**: Uses Google Gemini 1.5 Flash model for content generation.
* **Dark Theme UI**: Modern, responsive interface with CSS animations.
* **User & Bot Avatars**: Visual distinction between user messages and bot replies.
* **Loading Spinner**: Indicates when the AI is processing a request.
* **Send via Enter or Click**: Convenient input handling.

## Demo

**Live Demo:** [https://ai-project-eight-omega.vercel.app/](https://ai-project-eight-omega.vercel.app/)

![PotatoGPT Demo](logo.webp)

## Getting Started

### Prerequisites

* A Google Cloud API key with access to the Gemini API.
* Modern web browser (Chrome, Firefox, Edge).

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/potatogpt.git
   cd potatogpt
   ```

2. **Add your API Key**

   * Open `script.js` and replace the placeholder API key with your own:

     ```js
     const key = "YOUR_API_KEY_HERE";
     ```

3. **Run Locally**

   * Simply open `index.html` in your browser.

## Project Structure

```
├── index.html       # Main HTML file
├── style.css        # Stylesheet for UI
├── script.js        # JavaScript for API calls & DOM manipulation
├── logo.webp        # App logo and favicon
└── README.md        # Project documentation
```

## Usage

1. Open the app in your browser.
2. Type your message in the input field.
3. Press **Enter** or click the **send icon**.
4. View AI-generated response.

## Customization

* **Styling**: Modify `style.css` to change the theme, layout, or animations.
* **Model**: Switch to a different Gemini model by updating the request URL in `script.js`.

## Troubleshooting

* **No Response**: Check console for errors and ensure your API key is valid.
* **CORS Issues**: Run a local server (e.g., `npx http-server`) to avoid file:// restrictions.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
