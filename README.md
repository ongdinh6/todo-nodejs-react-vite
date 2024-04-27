# todo-nodejs-react-vite
Using Monorepo project 

## Introduction
Techs stack:
1. Nodejs - ExpressJS for backend
2. ReactJS - Vite for frontend
3. Jest - unit testing

### Start point
#### Clone the project using run this command:
```
git clone https://github.com/ongdinh6/todo-nodejs-react-vite.git
```

#### Run start the project:
##### Root dir:
```agsl
npm run dev:backend // The server is running on port 8080
npm run dev:frontend // The application is running on port 3000
```

##### Run backend:
```agsl
npm run dev
```
The server is running on port 8080

##### Run frontend:
```agsl
npm run dev
```
The application is running on port 3000

### Build to production
#### Root dir:
```agsl
npm run build // Run this command to build backend for frontend
npm run start // Run this command to start the application, the application will run on port 8080
```
Building for specific modules:
```agsl
npm run build:backend // Only run build for backend
npm run build:frontend // Only run build for frontend
```

### Linter
#### Root dir:
```agsl
npm run lint  // This command will check the code lint based on the configured rules
npm run lint:fix // Apply fix the eslint automatically
```
#### Frontend:
````agsl
cd packages/frontend
npm run lint 
npm run lint:fix 
````

#### Backend:
````agsl
cd packages/backend
npm run lint
npm run lint:fix
````

### Testing
#### Root dir:
```agsl
npm run test // Run this command will run the unit testing for both frontend and backend
npm run test:backend // Only run the unit testing inside the backend module
npm run test:frontend // Only run the unit testing inside the frontend module
```
```agsl
npm run test:watch // Run the unit testing with --watchAll --notify flag
npm run test:coverage // Run this to coverage the unit testing for both frontend and backend
```