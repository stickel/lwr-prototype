# LWR Standalone Prototype

- build as a static site when running on Heroku

## Run on Dev

In order to get this running on a dev environment change into this directory (`cd lwr-prototype`), install the dependencies (`yarn install`), then run `yarn dev`. This should build the files and start on `localhost:3000` with hotswapping turned on.

## Run on Heroku

This project was built so it will also run on a Heroku. Create an "Eco" project on Heroku using the `heroku-22` or greater stack. Choose the `Node.js` framework (or add the `heroku/nodejs` buildpack).

Set up Heroku as a remote path for the repository so you can push directly from the terminal.

Before you push code to Heroku for review, run `yarn build:static` on your local dev environment. This will generate the static site locally so Heroku doesn't give any timeout errors trying to generate the site files.

Now you can push to Heroku and visit the website.

## Adding more routes

Aside from the normal steps of creating the modules and getting the features to work in dev mode, you'll also need to add your new modules and routes to the config files.

The properties to pay attention to are `_additionalRoutePaths` and `_additionalModules` in the `staticSiteGenerator` block of `lwr.config.json`
```
"staticSiteGenerator": {
    "outputDir": "__generated_site__",
    "locales": ["en-US"],
    "_additionalRoutePaths": ["/your/route", "/your/otherroute"],
    "_additionalModules": ["your/module", "your/otherModule"]
}
```

An example. If I created a new module in `/src/modules/setup` called `Slack` and it only had one route, the `staticSiteGenerator` block would look like this:
```
"staticSiteGenerator": {
    "outputDir": "__generated_site__",
    "locales": ["en-US"],
    "_additionalRoutePaths": ["/setup/slack"],
    "_additionalModules": ["setup/Slack"]
}
