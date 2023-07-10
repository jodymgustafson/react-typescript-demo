# React + TypeScript Demo

React + TypeScript == 🌈🦄

This app is used for the React + TypeScript = Maintainable Web Apps Demo.
It is used to demonstrate using TypeScript to write a React app.

This monorepo contains three packages
- code-city-beer: The React app
- service-clients: Classes to help call the REST API
- web-server: The REST API used by the React app

# Branches

For the demo there are three primary branches

- init-install (state after create-react-app)
- demo/no-routing
- demo/routing

Other branches are more fine grained steps in this order

- init-install (state after create-react-app)
- welcome (welcome view markup)
- welcome-impl (welcome view implemented)
- beer-list (menu view markup)
- beer-list-impl (beer list implemented)
- view-tab (order view markup)
- view-tab-impl (order view implemented)
- container-component (default-container)
- custom-hooks
- side-effect-cleanup (welcome-view)
- routing
- main

## Build
You only need to build the web server and service clients code by running a TypeScript build.

The React app doesn't require a build.

## Run

To start the web server run
    npm run start-server

To start the React app run
    npm start
