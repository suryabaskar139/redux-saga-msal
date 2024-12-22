src/
├── app/
│   ├── auth/                 # Authentication-related files
│   │   ├── authConfig.js       # MSAL configuration
│   │   ├── authService.js      # MSAL service functions
│   │   └── authSaga.js         # Redux saga for authentication
│   ├── products/             # Product-related files
│   │   └── productSaga.js      # Redux saga for product data fetching
│   ├── components/            # Reusable UI components
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.module.css
│   │   │   └── index.js
│   │   ├── Input/
│   │   │   ...
│   │   └── ...
│   ├── config/                # Application configuration
│   │   ├── api.js
│   │   └── index.js
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAuth.js
│   │   └── useDebounce.js
│   ├── pages/                 # Page-level components (views)
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   ├── Home.module.css
│   │   │   └── index.js
│   │   ├── Login/
│   │   │   ├── Login.jsx
│   │   │   └── index.js
│   │   └── ...
│   ├── routes/                # Routing configuration
│   │   └── index.jsx
│   ├── store/                 # Redux store setup
│   │   ├── index.js           # Root store creation
│   │   ├── middleware.js      # Custom middleware (optional)
│   │   ├── reducers/          # All Redux slices
│   │   │   ├── authSlice.js
│   │   │   └── productSlice.js
│   │   ├── sagas/             # All Redux Sagas
│   │   │   ├── authSaga.js
│   │   │   └── productSaga.js
│   │   ├── rootReducer.js    # Combines all reducers
│   │   └── rootSaga.js       # Combines all sagas
│   │   └── selectors.js       # Centralized selectors
│   ├── types/                 # TypeScript types and interfaces (if using TypeScript)
│   │   ├── User.ts
│   │   ├── Product.ts
│   │   └── ...
│   ├── utils/                 # Utility functions
│       ├── apiUtils.js
│       └── formatters.js
├── index.js                   # Entry point of the application
├── index.html                 # HTML template
├── styles/                  # Global styles
│   ├── index.css
│   └── variables.css
├── .env                     # Environment variables
├── package.json             # Project dependencies