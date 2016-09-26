# iPonzi
## PennApps 2016 - Winner of Google's - "Best Progressive Web App"

#### Preview:
![About](/images/README-images/about.png)![Launcher](/images/README-images/launcher.png)
![Desktop](/images/README-images/desktop.jpg)

This template, along with the `polymer-cli` toolchain, also demonstrates use
of the "PRPL pattern" This pattern allows fast first delivery and interaction with
the content at the initial route requested by the user, along with fast subsequent
navigation by pre-caching the remaining components required by the app and
progressively loading them on-demand as the user navigates through the app.

The PRPL pattern, in a nutshell:

* **Push** components required for the initial route
* **Render** initial route ASAP
* **Pre-cache** components for remaining routes
* **Lazy-load** and progressively upgrade next routes on-demand

#### Dev:
```
npm install -g polymer-cli
polymer build && bower install OR polymer build && sudo bower install --allow-root
polymer serve --open
```
Views: always fragment in polymer.json to ensure pre-caching

#### Deployment:
```
polymer build
```
Preview:
```
polymer serve build/bundled
```
Set firebase.json to bundled build folder
```
firebase deploy
```

### Tests

This command will run
[Web Component Tester](https://github.com/Polymer/web-component-tester) against the
browsers currently installed on your machine.

    polymer test
