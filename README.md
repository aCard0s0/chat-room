# chat-room
Chat room using the stack: Angular, Nodejs, WebSockets and Nx

## Installing
To code along with the instructor, you must have:
NodeJS installed; the course was developed with node v16.4.0. Run node -v to see your version
NPM installed; the course was developed with npm v8.3.0. Run npm -v to see your version
Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.
Run npm install to get all dependencies installed
Working with a Monorepo
The Chat product we're building is a monorepo made up of 3 distinct packages:

The Shared Library exposes interfaces that are used by both the front and backend
The Websocket Server is the backend in charge of managing websocket connections and relaying chat messages
The Angular Web Application is the Chat application UI
The Monorepo is managed using the Nx build system to greatly simplify setup. Here are the commands used to scaffold each package (we'll go through them during the course):

### Creating the Shared Library
```
npx nx generate @nrwl/workspace:library types
```
### Creating the Websocket Server
```
npx nx generate @nrwl/node:app server
```
### Creating the Angular Web Application
```
npx nx generate @nrwl/angular:app webapp --backendProject server --strict false --style scss --routing false
```
### Adding Angular Material
```
npx nx generate @angular/material:ng-add --project=webapp --typography false --theme indigo-pink --animations true
```
After install, add the Angular material theming CSS file of your choice to the styles array of project.json. For example:

"node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
Options are indigo-pink.css, deeppurple-amber.css, pink-bluegrey.css and purple-green.css

Tools Used to build this application
### WS Library
https://github.com/websockets/ws

### nx Build system
https://nx.dev/

### Angular Frontend Framework
https://angular.io/docs

### Angular Material UI Library
https://material.angular.io/

### rxjs webSocket
https://rxjs.dev/api/webSocket/webSocket

### A dvanced Websocket Client (Chrome/Brave extension)
https://chrome.google.com/webstore/detail/advanced-websocket-client/lgimpnfdefcpkicbflpmainbcdnlblej

### The Websocket Weasel (Firefox extension)
https://addons.mozilla.org/en-US/firefox/addon/websocket-weasel/

### External References
Typescript introductory course
