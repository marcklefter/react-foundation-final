This document describes the examples that were coded during the Edument React Foundation course.

# Requirements
Ensure that [NodeJS](https://nodejs.org/) is installed on your system.

The editor used during the course is [Visual Studio Code](https://code.visualstudio.com/).

Also install [React Devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi).

# Usage
In the project directory, run:

    npm install

to install the project's dependencies.

## Available Scripts

    npm start

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

    npm test

Launches the test runner in the interactive watch mode.<br>

    npm run build

Builds the app for production to the `build` folder.<br> It correctly bundles and optimizes React for production mode.

> This project was initially generated with the command `npx create-react-app react-foundation-final`.

# Examples
The code for each example is located in a separate folder under `src`.

A code example can be run by uncommenting it in `src/index.js`. This renders the _App_ component for that example. 

## feed/v1
This example demonstrates the fundamentals of coding React components, including JSX syntax and rendering lists.

## todo
This example demonstrates component styling, event handling, hooks and parent / child component communication.

*   Common hooks:

    *   _useState_
    *   _useEffect_

*   Styling via: 

    *   Styled components with the __styled-components__ library (see `Todo.jsx`).
    *   Inline styling (see `TodoForm.jsx`).
## useEffect
The `useEffect` folder contains microexamples that highlight certain aspects of using the _useEffect_ hook. See each file in the folder for comments.

> Choose which microexample to run by uncommenting it in `useEffect/index.js`.

## feed/v2
Demonstrates how to catch application errors that may occur in a component when it's rendered. 

In this example, an error occurs in the _Card_ component if it receives an invalid (undefined) title; this results in an error being thrown.

By wrapping each _Card_ component in an _ErrorBoundary_ component, which implements a so-called _error boundary_, the error is caught and another _Card_ component, reflecting the error, is rendered as a fallback UI instead. 

The _ErrorBoundary_ component is implemented using the _render props_ pattern, which makes it __reusable__ and not coupled to logic that determines _what kind of_ error fallback is rendered. 

Finally, as it's possible to sometimes render an invalid list of items, a top-level error boundary catches such an error and allows for __retrying__ rendering the list.

## dependencyContext
A demo of rendering a component tree in a React Context, enabling global state to be shared among many components.

Also, a context may be used for __dependency injection__ of "services", such as a log service that can be properly configured depending on the runtime environment (development vs production).

## auth
The general structure of this example is as follows:

*   "Users" data is fetched from a REST API.

*   The _React Router_ library is used to implement routes and navigation. 

    The available routes are:

    *   `/`

        Displays a welcome message.

    *   `/users`

        Displays links to all users.

    *   `/users:id`

        Displays data about a single user (with the user id indicated by the _route parameter_ `id`).

        > Note that this route is "contained" as a __subroute__ within the `/users` route, which serves as an "index page" for all users. This means that the `/users` route is always rendered _first_, and if React 
        Router then determines that the current browser path also matches this route, it will render the 
        data about a specific user. 

    *   A non-existent route, such as `/foo`, will be caught by a _default_ route.

*   Each of the routes above corresponds to a component being rendered, which may be considered a "page". 
    These page components are located in the `pages` folder.

*   The `/users` route required the user to be logged in. 

    User authentication logic is wrapped in a custom hook (`useAuth.js`). 
    
    The component tree is rendered in a React Context called _AppContext_ (see `AppProvider.jsx`). This context invokes the _useAuth_ hook to get and subsequently manage global authentication state and related functionality (login and logout).
    
    The components that access the _AppContext_ to retrieve global authentication state and functionality are:

    *   The page component _Login_, enabling a user to log in.

    *   The _RouteGuard_ component, guarding (preventing navigation to) the `/users` route.

    *   The _Navigation_ component, allowing the logged in user to log out.

## reduxCounter
This example demonstrates the Redux library for managing global state in a simple React application.

> Install the [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) to inspect a Redux store and its state at runtime.

## authRedux
A reimplementation of the previous `auth` example, using Redux instead of React Context for managing user authentication state.

### Data fetching using thunks
As an alternative to fetching users in the _Users_ page component with an _useEffect_, the data fetching logic has been moved to an __async action creator__ (see _usersFetch_ in `actions.js`). 

A specific Redux middleware named __redux-thunk__ makes it possible to structure such asynchronous logic in an action that is a function ("thunk"). 

# References
*   [Lifting state up](https://reactjs.org/docs/lifting-state-up.html)

    Tips on managing state that is needed by multiple components.

*   [styled-components](https://styled-components.com/)

    Create styled components using the styled-components library.

*   [react-hook-form](https://react-hook-form.com/)

    Create and manage complex forms in React.

*   [Render props](https://reactjs.org/docs/render-props.html)

    Encapsulate reusable code in components by implementing the "render props" pattern. This pattern is e.g. used to implement the _ErrorBoundary_ component in the `feed/v2` example.

*   [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

*   [Redux](https://redux.js.org/introduction/getting-started)

*   [Application state management](https://kentcdodds.com/blog/application-state-management-with-react)

    Thoughts on implementing global application state, using React and Context (as an alternative to Redux).

*   [Data fetching with React Query](https://youtu.be/seU46c6Jz7E)

    Working with global application state, specifically related to how fetched data should be stored and managed, and how to implement data fetching with a dedicated library (React Query).

# Contact
Marc Klefter | marc.klefter@edument.se
