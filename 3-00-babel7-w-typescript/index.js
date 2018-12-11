require('@babel/register')({
  // Setting this will remove the currently hooked extensions of `.es6`, `.es`, `.jsx`, `.mjs`
  // and .js so you'll have to add them back if you want them to be used again.
  extensions: [".es6", ".es", ".jsx", ".js", ".mjs", ".ts"]
})

// import someScript from  './script-1.js'; // <-- import does not work here but will work in ./script-1.js
require( './script-1.js')





