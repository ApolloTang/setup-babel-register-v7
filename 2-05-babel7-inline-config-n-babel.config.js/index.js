require('@babel/register')(
  {
    "cache": true,
    "presets": [
      [
        '@babel/env',
        {
          'modules': "commonjs",
          targets: { "node": "current" }
        }
      ]
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties"
    ]
  }
);

// import someScript from  './script-1.js'; // <-- import does not work here but will work in ./script-1.js
require( './script-1.js')



