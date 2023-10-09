# Authorization Demo project

A demo prototype application featuring authentication and a private page.

The authentication state is managed using the Context API with the useReducer hook. The app comprises two routes: `"/"` for the Login page and the second private `"/home"` route for the Home page. LocalStorage is utilized to persist the authentication state between tab refreshes.

There may be instances where the consideration of storing the token in the `serviceWorker` is warranted. However, concerning the persistence of authentication state, any other browser storage options, such as: _indexedDB, cache, or sessionStorage_, are also vulnerable to _XSI attacks_.

## Technology used

- Vite
- React
- TypeScript
- Context API
- Tailwind CSS
- React Hook Form
- React-testing-library

## Project structure

    .
    ├── dist                    # Compiled files
    ├── src                     # Source files
    ├── __tests__               # Small unit test to cover core functionality
    └── .eslintrc.cjs           # Eslint configuration file
    └── setupTest.js            # Vitest configuration file
    └── README.md

#### The project adheres to a file structure inspired by Redux, so the context related files are organized as follows:

    ├── src
    │   ├── context
    │   │   ├── actions.js
    │   │   ├── context.js
    │   │   ├── index.js
    │   │   └── reducer.js
    ...

## Installation

Install _auth-demo-project_ with npm:

#### 1. Clone the repo

```bash
git clone https://github.com/Exoft/auth-demo-project.git
```

#### 2. Install NPM packages

```bash
npm install
```

#### 3. Run the application

```bash
npm run dev
```

#### For executing tests, use the command

```bash
npm test
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
