# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

## 📁 Project Structure

```
Dashboard/
├── public/                      # Static files
│   ├── index.html               # HTML root
│   └── img/                     # Web assets (e.g., .webp image)
│
├── src/                         # React app source
│   ├── components/              # Custom components
│   │   ├── MovementChart.js     # Plots movement trends
│   │   ├── MovementValue.js     # Displays numeric movement data
│   │   └── RoomStatus.js        # Shows current room occupancy status
│   ├── App.js                   # Main component layout
│   ├── index.js                 # Entry point
│   ├── App.css / index.css      # Stylesheets
│   └── ...                      # Misc: logo, setupTests, metrics
│
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation
```

---

## 🎯 Component Overview

- **MovementChart**: Plots historical CSI-derived motion intensity using a charting library.
- **MovementValue**: Displays real-time movement values numerically.
- **RoomStatus**: Indicates occupancy based on threshold logic or ML classification.

---

## 🌐 Running the Dashboard

To start the development server:

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Build for Production

To generate a production-optimized static build:

```bash
npm run build
```

Deploy the contents of the `build/` folder to a static host like Vercel or Netlify.

---

## 🧠 Developer Notes

- Extend `RoomStatus.js` logic for dynamic ML-based predictions.
- Use WebSockets or REST polling for live CSI data feeds.
- Consider CSS modules or Tailwind for scalable styling.

---

## 📦 Key Dependencies

Check `package.json` for full list. Highlights include:

- `react`
- `charting library` (e.g., Chart.js or Recharts)
- `react-scripts`

---
