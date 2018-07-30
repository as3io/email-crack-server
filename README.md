# Email Crack (Server)
🔬 Experiment with MJML + Handlebars 🔬

## Requirements
This project requires [Docker Compose](https://docs.docker.com/compose/overview/) to develop and test. The [Yarn](https://yarnpkg.com) package manager is also required, and is used instead of `npm`.

## Runnning
1. Clone repository
2. In the project root, run `yarn run start`
3. The server is now accessible on `http://localhost:8472/` (or whatever port you configure)

## Accessing/Creating Templates
To load a template, visit `/email/{template-name}` in your browser. For example, accessing `/email/current-time` in the browser will load the `current-time.hbs` file from the `emails` folder. See the `routes/email.js` file for more information.

## Interactive Terminal
You can load an interactive terminal for the app container via `yarn terminal`. This will allow you to add, remove, or upgrade project dependencies using Yarn (among other things). Note: _the application instance must be running via `yarn start` for the terminal to load._

