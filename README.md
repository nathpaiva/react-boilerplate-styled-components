# Boilerplate for react project
## To has facility start project I created this repository.
To create this project I used  [webpack](https://webpack.js.org/), [storybooks](https://github.com/storybooks/storybook) and  [Jest ](https://facebook.github.io/jest/).
You can [download](https://github.com/nathpaiva/react-boilerplate/archive/master.zip]) or clone this repository.
I create a component with test and storybook to have an example.

```bash
.
├── config
│   └── ImageStub.js
├── index.js
├── package.json
├── src
│   ├── App.js
│   ├── components
│   │   └── box
│   │       ├── __snapshots__
│   │       │   └── box.spec.js.snap
│   │       ├── box.css.js
│   │       ├── box.spec.js
│   │       ├── box.story.js
│   │       └── index.js
│   ├── css
│   │   └── reset.css.js
│   ├── html
│   │   └── template.html
│   ├── images
│   │   ├── favicon.ico
│   │   └── watermelon-shark.jpg
│   └── index.js
├── webpack
│   ├── webpack.config.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
└── yarn.lock
```

### Project developed with:
* React;
* Storybook
* Jest.

### Test developed with:
* Jest, (back-end e front-end)
* Storybook - Viewing Components

### To run the project you need to install:
* [Node](https://nodejs.org/en/download/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/) or NPM (already installed with the node)

### Before starting the project you must install the dependencies:
* `$ yarn` ou `$ npm i`

### To start the project you have to run the commands:
`$ yarn start` or `$ npm start`
* This command to access [project in http://localhost:7000](http://localhost:7000)

### If you want to see the test coverage:
`$ yarn test` or `$ npm test`

### To be able to see the components in Storybook:
`$ yarn storybook` or `$ npm run storybook`
* This command to access [storybook in http://localhost:6000/](http://localhost:6006/)
