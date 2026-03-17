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

