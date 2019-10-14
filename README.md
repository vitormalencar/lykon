# Lykon-pwa

Lykon PWA . Try the [live demo](https://staging-lykon.surge.sh/).


# API:
  - api created with [json-server](https://github.com/typicode/json-server)
  - sercvice deployed using [Now](https://zeit.co/now) service
  - all the schemes available in https://lykon-api.now.sh/


# Stack:
  - React
  - React-Router
  - Redux
  - Redux-Thunk as middleware
  - SW-Precache
  - Reselect

# Features
  - Code Spliting
  - async Modules and reduces
  - Offline Caching (via serviceWorker)
  - Asset Versioning (aka "cache-busting")
  - ES2015 (ES6) and ES2016 (ES7) support
  - Webpack Bundle Analysis (see dashboard)
  - Hot Module Replacement (HMR) for all files
  - React's Developer Tools
  - Lighthouse certified


# JS Build files
  - main.js - 61.45kb 📦
  - challenge.js - 1.89kb 🚀
  - main.css - 1.6kb 🚀


# Project Structure
```
src
├── Common // Aplication common assets
│   ├── AsyncComponent.js
│   ├── UI  // Common UI components
│   │   ├── AppTemplate
│   │   ├── Button
│   │   ├── Card
│   │   ├── Container
│   │   ├── Header
│   │   ├── Loader
│   │   └── Navigation
│   └── Utils
│       ├── api.js
│       ├── persistency.js
│       ├── placeholders.js
│       └── selectors.js
├── Modules // Async Split Modules
│   ├── Challenge
│   │   ├── actions
│   │   ├── components
│   │   ├── containers
│   │   ├── index.js
│   │   └── reducers
│   ├── Challenges
│   │   ├── actions
│   │   ├── components
│   │   ├── containers
│   │   ├── index.js
│   │   └── reducers
│   └── Profile
│       ├── actions
│       ├── components
│       ├── containers
│       ├── index.js
│       └── reducers
├── Routes
│   └── index.js
├── index.css
├── index.js
├── module.js
├── registerServiceWorker.js
└── store.js
```

# Quick-Start Guide

- [Installation](#installation)
- [Development Workflow](#development-workflow)

## Installation

**1. Dowload the zip file  and go to the aplication directory**

```sh
cd lykon
```


**2. Install the dependencies:**

```sh
yarn
```

> You're done installing! Now let's get started developing.


## Development Workflow


**3. Start a live-reload development server:**

```sh
yarn run start
```


**4. Generate a production build in `./build`:**

```sh
yarn run build
```

You can now deploy the contents of the `build` directory to production!
