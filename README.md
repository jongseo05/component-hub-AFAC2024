# Component Hub - AFAC2024

Component Hub is a platform designed for users to upload, preview, and share reusable frontend components (JS and CSS) with a community. The project provides a simple interface for uploading JavaScript and CSS files, along with a live preview functionality to showcase the behavior of these components.

## Features

- **Component Upload**: Users can upload JavaScript and CSS files to create new components.
- **Live Preview**: Uploaded components are rendered in an isolated iframe to allow users to preview their behavior.
- **User Authentication**: Includes a login system for user access.
- **Dynamic Categories**: Browse and organize components by categories (e.g., Navbar, Modal).
- **Responsive Design**: Optimized for viewing on desktop and mobile devices.

## Installation

### Prerequisites
- Node.js (>= 14.x)
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/jongseo05/component-hub-AFAC2024.git
cd component-hub-AFAC2024
```

### Install Dependencies
```bash
npm install
```

### Run the Development Server
```bash
npm start
```
This will start the app on [http://localhost:3000](http://localhost:3000).

## Project Structure
```
component-hub-AFAC2024/
├── public/                # Static files (e.g., example JS and CSS)
├── src/
│   ├── components/       # Reusable components (e.g., PreviewWithCodeSandbox)
│   ├── pages/            # Pages (e.g., SubmitPage, Homepage)
│   ├── App.js            # Root component with routes
│   ├── index.js          # Entry point
├── package.json          # Project dependencies
├── README.md             # Documentation
```

## How to Use

### Submit Page
1. Navigate to the **Submit** page by visiting [http://localhost:3000/Submit](http://localhost:3000/Submit).
2. Use the upload section to drag and drop or select your `JS` and `CSS` files.
3. View the live preview of your uploaded component in the preview section.

### Example Files
To test the upload and preview functionality, use the example files:
- `example.js`: Adds a "Hello World" message to the DOM.
- `example.css`: Styles the page with a light gray background.

Place these files in the `public/example` folder to easily fetch them during testing.

## Troubleshooting

### Common Errors
1. **Cross-Origin Policy Error in Preview**
   - Ensure `iframe.srcdoc` is being used to inject the HTML and JS content.
2. **File Upload Issues**
   - Verify that the uploaded files are valid `JS` and `CSS` formats.
3. **Preview Not Updating**
   - Check the console logs for errors in `Submit.js` or `PreviewWithCodeSandbox.js`.

### Debugging
- Open the browser developer tools (F12) and check the **Console** and **Network** tabs for detailed error information.

## Contributing
Contributions are welcome! If you encounter any bugs or have suggestions, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
