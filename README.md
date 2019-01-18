# HCard Builder App

HCard Builder App is a React app that accepts necessary form information to allow users edit information to generate an hCard (http://microformats.org/wiki/hCard).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>

The design is based on the provided design in `design.psd` and created based on the below working requirements:
### Requirements

* As the form is filled out, the preview should be automatically updated
* The submit button does not need to function (ie; no backend is required for
  this task)
* When the user selects an image, a thumbnail should be shown in the preview
  (no backend is required for this task)
* The app should be responsive for 3 screen widths:
  * Full-screen
  * Tablet
  * Mobile
* The form should work in the following browsers:
  * Internet Explorer 10+
  * Latest Chrome
  * Latest Firefox

### Technology used
* Create React App
* Node Sass
* Enzyme for testing
* In-built Jest for testing
* React Test Renderer for testing

## Installation
Clone or download from Github repository: [hcard-builder-app](https://github.com/hen-chow/hcard-builder-app).

```
git clone
cd hcard-builder-app
nvm use
npm install
```

## Running
To run hCard Builder App locally, run `npm start`. You can now open `http://localhost:300` to test locally.

## Utility commands

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Runs the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## TODO
Due to time-constraints, I wasn't able to address some areas.
* More comprehensive test coverage - particularly tests for `hcard-builder.jsx`.
* Planning for reusability of some components - for instance, creating a `<Form />` and `<FormField />` components to use for different forms.
* More media queries to address different screensizes and landscape vs portrait formats.
