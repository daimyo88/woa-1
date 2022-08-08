# World of Anime

This is just a light anime library that is based on data from [MyAnimeList.net](https://myanimelist.net) provided via [Jikan REST API](https://docs.api.jikan.moe) The main goal with this project for me as a developer was harnessing my skills, but on the other hand creating something fun and useful (at least I hope so). The website doesn't contain any information, that can't be found on [MyAnimeList.net](https://myanimelist.net), but the general idea was to provide functional search tool and only general information about anime (to make UI lighter) as well as links to external sources, where more information can be found.

## Technologies

  - React
  - TypeScript
  - Redux (Redux Toolkit)
  - Material UI
  - Axios
  - Formik (with Yup)

## To start the project

`npm i --force`

Why do we need the '--force' flag? Well, I used React v18 in this project, but at the moment Material UI oficially supports only version 17, so to install the packages we need the '--force' flag.

### To run the project in development mode

`npm run start` - the project will run on port 3000 by default

### Tu run the project in production mode

First you need to build the project:

`npm run build`

Then you will be able to run it using any simple web server. The most easiest example is to use [serve](https://www.npmjs.com/package/serve).
First, install it globally on your machine:

`npm i serve -g`

Then from the project's folder:

`serve -s build`






