# LWR Standalone Prototype

- builds as a static site when running on Heroku


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
