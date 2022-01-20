import type { NavData } from "setup/navItem";

export const NAV_ITEMS: NavData[] = [
    {
        "name": "setup-home",
        "label": "Setup Home",
        "disabled": false,
        "expanded": false,
        "pageReference": {
            "type": "home",
            "attributes": {},
            "state": {}
        }
    },
    {
        "name": "service-setup-assistant",
        "label": "Service Setup Assistant",
        "disabled": false,
        "expanded": false,
        "pageReference": {
            "type": "namedPage",
            "attributes": {
                "pageName": "serviceSetupAssistant"
            },
            "state": {}
        }
    },
    {
        "name": "mfa-assistant",
        "label": "Mutli-Factor Authentication Assistant",
        "disabled": false,
        "expanded": false,
        "pageReference": {
            "type": "namedPage",
            "attributes": {
                "pageName": "mfaAssistant"
            },
            "state": {}
        }
    },
    {
        "name": "release-updates",
        "label": "Release Updates",
        "disabled": false,
        "expanded": false,
        "pageReference": {
            "type": "namedPage",
            "attributes": {
                "pageName": "releaseUpdates"
            },
            "state": {}
        }
    },
    {
        "name": "lex-transition-assistant",
        "label": "Lightning Experience Transition Assistant",
        "disabled": false,
        "expanded": false,
        "pageReference": {
            "type": "namedPage",
            "attributes": {
                "pageName": "lexTransitionAssistant"
            },
            "state": {}
        }
    },
    {
        "name": "mobile-quickstart",
        "label": "New Salesforce Mobile App Quickstart",
        "disabled": false,
        "expanded": false,
        "pageReference": {
            "type": "namedPage",
            "attributes": {
                "pageName": "mobileQuickstart"
            },
            "state": {}
        }
    },
    {
        "name": "lightning-usage",
        "label": "Lightning Usage",
        "disabled": false,
        "expanded": false,
        "pageReference": {
            "type": "namedPage",
            "attributes": {
                "pageName": "lightningUsage"
            },
            "state": {}
        }
    },
    {
        "name": "optimizer",
        "label": "Optimizer",
        "disabled": false,
        "expanded": false,
        "pageReference": {
            "type": "namedPage",
            "attributes": {
                "pageName": "optimizer"
            },
            "state": {}
        }
    }
];