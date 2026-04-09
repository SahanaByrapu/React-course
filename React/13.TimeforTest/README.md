# Hello React

# Parcel

- Zero Config
- Dev Build
- Local Server
- HMR ( Hot Module Replacement)
- File Watcher Algorithm (written in C++)
- Caching-Faster Build
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Spliting
- Differential Bundling - support older browsers
- Diagnostics 
- Error Handling
- HTTPS
- Tree Shaking - remove unused code
- Different dev and prod bundles


** Parcel Documentation:** https://parceljs.org/

# Namaste Food

Header
 - Logo
 - Nav Items
Body
 - Search 
 - RestuarantContainer
   - RestuarantCard
     -Image
     -Name of Res, Star Rating, cuisines, delivery time
Footer
 - Copyright
 - Links
 - Address
 - Contact


Two Types of Export/Import

- Default Export/Import
export default <name of Variable> / <Component>;
import <COmponent> from <path>;

- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks
(Normal JS utility functions)

- useState() - Superpowerful react variable
- useEffect() 
  
**Reconciliation Algorithm:** ( React Fibre )(React 16)

Res-container

7 cards => 3 Filtered cards

Virtual DOM => representation of actual DOM.

**React Fibre**
Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames

**Diff Algorithm:** finds out difference between updated and previous DOM.

Old Virtual DOM ; New Virtual DOM

updates the actual DOM 


# 2 Types Routing in web apps
- Client Side Routing
- Server Side Routing

# Project link
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# Styles

- Tailwind-CSS
- Material-UI
- Ant Design
- Chakra UI
- Bootstrap

* npm install -D tailwindcss postcss

* npm install -D tailwindcss@3 postcss autoprefixer
* npx tailwindcss init -p

* Tailwind CSS IntelliSense extension

# React-Redux

* Add button -> dispatch (action) -> Fn() (Reducer) -> updates the slice of Redux store (say, Cart)

* Slice of the Redux Store -> Selector (subscribing to the store)-> provides data on the UI

# Redux Toolkit

* Install @reduxjs/toolkit - npm install @reduxjs/toolkit
* Install react-redux - npm i react-redux
* Build our store
* Connect our store to our Application
* Slice (cartSlice)
* Dispatch(action)
* Selector
  

# Types of Testing (Developer)

* Unit Testing 
* Integration Testing
* End to End Testing ( E2E )
  
# Setting up Testing in our app

* Installed React Testing Library: npm i -D @testing-library/react
* Installed jest: npm i - D jest
* Installed Babel dependencies
* Configure Babel
* Configure Parcel Config file to disable default babel transpilation.
* Jest Configurations
* Jest - npx jest --init
* Install JSDom library
* Install @babel/preset-react - to make JSX work in test cases
* Install @babel/preset-react inside my babel config
* Install @testing-library/jest-dom 
  
  






