## Project style

This is the style for the project that should be followed. This includes:

- Folder structure
- Naming convention

### Project structure

key:

- [prefix] : is the projects scope prefix

```
project
├── .github         // All files relevant to github
├── bopr            // Folder containing all files relevant to bopr
├── gulpfile.js     // Folder containing all gulp functions
├── node_modules    // All the modules used for this project (Don't open)
├── public          // Contains the index.html file that will be displayed
│
├─┬ src                                          // contains the source code
│ ├── components                                 // A folder that contains all of the components
│ │ ├── bo-[prefix]-exammplebutton               // This is a folder with a specific component
│ │ │ ├── bo-[prefix]-exammplebutton.vue         // The actual component using kebab case
│ │ │ ├── scripts                                // Any code used by the component
│ │ │ │ ├── bo-[prefix]-examplebutton-click.ts   // Example code file for this component
│ │ │ │ └── README.md                            // Documentation on the scripts for this component
│ │ │ └── README.md                              // Documentation on the component
│ │ └── README.md                                // Documentation of all the components (Live and being developed)
│ │
│ ├── enums                             // A folder that contains all enum specific variables
│ │ ├── api                             // Contains the enums for the api
│ │ │ ├── e-app-version                 // Contains the enums for the app version
│ │ │ └── README.md                     // The readme fpr this enum
│ │ └── README.md                       // The readme list of all enums
│ │
│ ├── interfaces               // The folder containing all the interfaces
│ │ ├── version                // Folder for a grouped interfaces
│ │ │ ├── i-api-version        // The api version interface
│ │ │ ├── i-page-version       // The page version interface
│ │ │ └── README.md            // The readme fpr this interface
│ │ └── README.md              // The readme list of all interfaces
│ │
│ ├── scripts                                      // All global scripts
│ │ ├── bo-[prefix]-decimal-point-rounding         // A folder for a given script
│ │ │ ├── bo-[prefix]-decimal-point-rounding.ts    // The functions for the script
│ │ │ └── README.md                                // The readme doc for the given script
│ │ └── README.md                                  // The readme list of all scripts
│ │
│ ├── services                   // Any services used for the code for example google analytics
│ │ ├── google-analytics         // A folder for a given service
│ │ │ ├── google-analytics.ts    // The functions for the service
│ │ │ └── README.md              // The readme doc for the given service
│ │ └── README.md                // The readme list of all services
│ │
│ ├── styles                                     // All the global styles
│ │ ├── bo-[prefix]-example-buttonstyles         // Folder container a certain style
│ │ │ └── _bo-[prefix]-background-colour.less    // A set style with class tags and less coding. This also used kebab casing
│ │ ├── _colours.less                            // The less file that contains all the colours used
│ │ ├── _variables.less                          // The less file that contains all the css variables used
│ │ ├── index.less                               // this compiles all the styles into one file which is imported into the app.vue
│ │ └── README.md                                // The readme list of all services
│ │
│ ├── types                             // A folder that contains all the types
│ │ ├── api                             // Contains the types for the api
│ │ │ ├── t-api                         // Contains the type for the boprAPIEndpoint
│ │ │ └── README.md                     // The readme fpr this type
│ │ └── README.md                       // The readme list of all types
│ │
│ ├── app.vue       // The main start app
│ └── main.ts       // The main ts file where the vue app is created
│
├── dev.md               // The dev guide
├── Contributing.md      // The contribution guide
└── package.json         // Build-related configuration files.
```

### Naming convention

The naming convention that we will be following is from the Vue.js style guide:

- https://v3.vuejs.org/style-guide/#rule-categories

We must comply by section A which is an essential though all other practices in the guide should also be followed

Also we will be follow BEM (Block Element Modifier)

- http://getbem.com/