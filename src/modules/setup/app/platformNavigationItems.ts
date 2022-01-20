import type { NavData } from "setup/navItem";

export const PLATFORM_NAV: NavData[] = [
    {
        "name": "apps",
        "label": "Apps",
        "disabled": false,
        "expanded": false,
        "items": [
            {
                "name": "app-manager",
                "label": "App Manager",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "appexchange-marketplace",
                "label": "AppExchange Marketplace",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "connected-apps",
                "label": "Connected Apps",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "connected-apps-oauth-usage",
                        "label": "Connected Apps OAuth Usage",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "manage-connected-apps",
                        "label": "Manage Connected Apps",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
            {
                "name": "lightning-bolt",
                "label": "Lightning Bolt",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "flow-category",
                        "label": "Flow Category",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "lightning-bolt-solutions",
                        "label": "Lightning Bolt Solutions",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
            {
                "name": "mobile-apps",
                "label": "Mobile Apps",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "salesforce",
                        "label": "Salesforce",
                        "disabled": false,
                        "expanded": false,
                        "items": [
                            {
                                "name": "salesforce-branding",
                                "label": "Salesforce Branding",
                                "disabled": false,
                                "expanded": false,
                                "pageReference": {
                                    "type": "namedPage",
                                    "attributes": {
                                        "pageName": ""
                                    },
                                    "state": {}
                                }
                            },
                            {
                                "name": "salesforce-navigation",
                                "label": "Salesforce Navigation",
                                "disabled": false,
                                "expanded": false,
                                "pageReference": {
                                    "type": "namedPage",
                                    "attributes": {
                                        "pageName": ""
                                    },
                                    "state": {}
                                }
                            },
                            {
                                "name": "salesforce-notifications",
                                "label": "Salesforce Notifications",
                                "disabled": false,
                                "expanded": false,
                                "pageReference": {
                                    "type": "namedPage",
                                    "attributes": {
                                        "pageName": ""
                                    },
                                    "state": {}
                                }
                            },
                            {
                                "name": "salesforce-offline",
                                "label": "Salesforce Offline",
                                "disabled": false,
                                "expanded": false,
                                "pageReference": {
                                    "type": "namedPage",
                                    "attributes": {
                                        "pageName": ""
                                    },
                                    "state": {}
                                }
                            },
                            {
                                "name": "salesforce-settings",
                                "label": "Salesforce Settings",
                                "disabled": false,
                                "expanded": false,
                                "pageReference": {
                                    "type": "namedPage",
                                    "attributes": {
                                        "pageName": ""
                                    },
                                    "state": {}
                                }
                            },
                        ]
                    }
                ]
            },
            {
                "name": "packaging",
                "label": "Packaging",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "installed-packages",
                        "label": "Installed Packages",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "package-manager",
                        "label": "Package Manager",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "package-usage",
                        "label": "Package Usage",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
        ]
    },
    {
        "name": "feature-settings",
        "label": "Feature Settings",
        "disabled": false,
        "expanded": false,
        "items": [
            {
                "name": "analytics",
                "label": "Analytics",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "analytics",
                        "label": "Analytics",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "reports-dashboards",
                        "label": "Reports & Dashboards",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    }
                ]
            },
            {
                "name": "chatter",
                "label": "Chatter",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "chatter-settings",
                        "label": "Chatter Settings",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "email-settings",
                        "label": "Email Settings",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "feed-item",
                        "label": "Feed Item",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "feed-tracking",
                        "label": "Feed Tracking",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "groups",
                        "label": "Groups",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "influence",
                        "label": "Influence",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "triggers",
                        "label": "Triggers",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
            {
                "name": "data-com",
                "label": "Data.com",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "field-mapping",
                        "label": "Field Mapping",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "licenses-limits",
                        "label": "Licenses & Limits",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "prospector-preferences",
                        "label": "Prospector Preferences",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "prospector-users",
                        "label": "Prospector Users",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    }
                ]
            },
            {
                "name": "digital-experiences",
                "label": "Digital Experiences",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "settings",
                        "label": "Settings",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    }
                ]
            },
            {
                "name": "functions",
                "label": "Functions",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "home",
                "label": "Home",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "marketing",
                "label": "Marketing",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "accounts-as-campaign-members",
                        "label": "Accounts as Campaign Members",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "campaign-influence",
                        "label": "Campaign Influence",
                        "disabled": false,
                        "expanded": false,
                        "items": [
                            {
                                "name": "auto-association-settings",
                                "label": "Auto-Association Settings",
                                "disabled": false,
                                "expanded": false,
                                "pageReference": {
                                    "type": "namedPage",
                                    "attributes": {
                                        "pageName": ""
                                    },
                                    "state": {}
                                }
                            },
                            {
                                "name": "campaign-influence-settings",
                                "label": "Campaign Influcence Settings",
                                "disabled": false,
                                "expanded": false,
                                "pageReference": {
                                    "type": "namedPage",
                                    "attributes": {
                                        "pageName": ""
                                    },
                                    "state": {}
                                }
                            }
                        ]
                    },
                    {
                        "name": "lead-assigment-rules",
                        "label": "Lead Assignment Rules",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "lead-auto-reponse-rules",
                        "label": "Lead Auto-Response Rules",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "lead-processes",
                        "label": "Lead Processes",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "lead-settings",
                        "label": "Lead Settings",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "linkedin-lead-gen",
                        "label": "LinkedIn Lead Gen",
                        "disabled": false,
                        "expanded": false,
                        "items": [
                            {
                                "name": "lead-gen-fields",
                                "label": "Lead Gen Fields",
                                "disabled": false,
                                "expanded": false,
                                "pageReference": {
                                    "type": "namedPage",
                                    "attributes": {
                                        "pageName": ""
                                    },
                                    "state": {}
                                }
                            },
                            {
                                "name": "linkedin-accounts",
                                "label": "LinkedIn Accounts",
                                "disabled": false,
                                "expanded": false,
                                "pageReference": {
                                    "type": "namedPage",
                                    "attributes": {
                                        "pageName": ""
                                    },
                                    "state": {}
                                }
                            },
                        ]
                    },
                    {
                        "name": "web-to-lead",
                        "label": "Web-to-Lead",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
            {
                "name": "omnichannel-inventory",
                "label": "Omnichannel Inventory",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "quip",
                "label": "Quip (Salesforce Anywhere)",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "sales",
                "label": "Sales",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "account-settings",
                        "label": "Account Settings",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "account-teams",
                        "label": "Account Teams",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "activity-settings",
                        "label": "Activity Settings",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "contact-roles-on-contracts",
                        "label": "Contact Roles on Contracts",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
            {
                "name": "salesforce-files",
                "label": "Salesforce Files",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "asset-files",
                        "label": "Asset Files",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "content-deliveries-public-links",
                        "label": "Content Deliveries and Public Links",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "files-connect",
                        "label": "Files Connect",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "general-settings",
                        "label": "General Settings",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "regenerate-previews",
                        "label": "Regenerate Previews",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "salesforce-crm-content",
                        "label": "Salesforce CRM Content",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
            {
                "name": "salesforce-scheduler",
                "label": "Salesforce Scheduler",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "assignment-policies",
                        "label": "Assignment Policies",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "salesforce-scheduler-settings",
                        "label": "Salesforce Scheduler Settings",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "scheduling-policies",
                        "label": "Scheduling Policies",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "skills",
                        "label": "Skills",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
            {
                "name": "service",
                "label": "Service",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "call-center",
                        "label": "Call Center",
                        "disabled": false,
                        "expanded": false,
                        "items": [
                            {
                                "name": "call-centers",
                                "label": "Call Centers",
                                "disabled": false,
                                "expanded": false,
                                "pageReference": {
                                    "type": "namedPage",
                                    "attributes": {
                                        "pageName": ""
                                    },
                                    "state": {}
                                }
                            }
                        ]
                    },
                    {
                        "name": "case-assignment-rules",
                        "label": "Case Assignment Rules",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "case-auto-reponse-rules",
                        "label": "Case Auto-Response Rules",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "case-comment-triggers",
                        "label": "Case Comment Triggers",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "case-merge",
                        "label": "Case Merge",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
            {
                "name": "survey",
                "label": "Survey",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "survey-settings",
                        "label": "Survey Settings",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    }
                ]
            },
            {
                "name": "topics",
                "label": "Topics",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "topic-assignment-triggers",
                        "label": "Topic Assignment Triggers",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "topic-triggers",
                        "label": "Topic Triggers",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "topics-for-objects",
                        "label": "Topics for Objects",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
        ]
    },
    {
        "name": "einstein",
        "label": "Einstein",
        "disabled": false,
        "expanded": false,
        "items": [
            {
                "name": "einstein-platform",
                "label": "Einstein Platform",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "einstein-intent-sets",
                        "label": "Einstein Intent Sets",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "einstein-prediction-builder",
                        "label": "Einstein Prediction Builder",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "einstein-ai",
                        "label": "Einstein.ai",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
            {
                "name": "einstein-sales",
                "label": "Einstein Sales",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "data-policies",
                        "label": "Data Policies",
                        "disabled": false,
                        "expanded": false,
                        "items": [
                            {
                                "name": "delete-email-events",
                                "label": "Delete Email and Events",
                                "disabled": false,
                                "expanded": false,
                                "pageReference": {
                                    "type": "namedPage",
                                    "attributes": {
                                        "pageName": ""
                                    },
                                    "state": {}
                                }
                            },
                            {
                                "name": "exclude-from-machine-learning",
                                "label": "Exclude from Machine Learning",
                                "disabled": false,
                                "expanded": false,
                                "pageReference": {
                                    "type": "namedPage",
                                    "attributes": {
                                        "pageName": ""
                                    },
                                    "state": {}
                                }
                            },
                        ]
                    },
                    {
                        "name": "einstein-activity-capture",
                        "label": "Einstein Activity Capture",
                        "disabled": false,
                        "expanded": false,
                        "items": [
                            {
                                "name": "einstein-email-insights",
                                "label": "Einstein Email Insights",
                                "disabled": false,
                                "expanded": false,
                                "pageReference": {
                                    "type": "namedPage",
                                    "attributes": {
                                        "pageName": ""
                                    },
                                    "state": {}
                                }
                            },
                            {
                                "name": "microsoft-exchange-connections",
                                "label": "Microsoft Exchange Connections",
                                "disabled": false,
                                "expanded": false,
                                "pageReference": {
                                    "type": "namedPage",
                                    "attributes": {
                                        "pageName": ""
                                    },
                                    "state": {}
                                }
                            },
                            {
                                "name": "settings",
                                "label": "Settings",
                                "disabled": false,
                                "expanded": false,
                                "pageReference": {
                                    "type": "namedPage",
                                    "attributes": {
                                        "pageName": ""
                                    },
                                    "state": {}
                                }
                            },
                            {
                                "name": "user-status",
                                "label": "User Status",
                                "disabled": false,
                                "expanded": false,
                                "pageReference": {
                                    "type": "namedPage",
                                    "attributes": {
                                        "pageName": ""
                                    },
                                    "state": {}
                                }
                            },
                        ]
                    }
                ]
            },
            {
                "name": "einstein-search",
                "label": "Einstein Search",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "promoted-search-terms",
                        "label": "Promoted Search Terms",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "search-layouts",
                        "label": "Search Layouts",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "search-results-objects",
                        "label": "Search Results Objects (Beta)",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "settings",
                        "label": "Settings",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "synonyms",
                        "label": "Synonyms",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
            {
                "name": "readiness-assessor",
                "label": "Readiness Assessor",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "sales-cloud-einstein",
                        "label": "Sales Cloud Einstein",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    }
                ]
            },
        ]
    },
    {
        "name": "objects-fields",
        "label": "Objects and Fields",
        "disabled": false,
        "expanded": false,
        "items": [
            {
                "name": "object-manager",
                "label": "Object Manager",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "picklist-value-sets",
                "label": "Picklist Value Sets",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "schema-builder",
                "label": "Schema Builder",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
        ]
    },
    {
        "name": "events",
        "label": "Events",
        "disabled": false,
        "expanded": false,
        "items": [
            {
                "name": "event-manager",
                "label": "Event Manager",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            }
        ]
    },
    {
        "name": "process-automation",
        "label": "Process Automation",
        "disabled": false,
        "expanded": false,
        "items": [
            {
                "name": "approval-processes",
                "label": "Approval Processes",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "automation-home",
                "label": "Automation Home (Beta)",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "flows",
                "label": "Flows",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "next-best-action",
                "label": "Next Best Action",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "paused-failed-flow-interviews",
                "label": "Paused and Failed Flow Interviews",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "post-templates",
                "label": "Post Templates",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "process-automation-settings",
                "label": "Process Automation Settings",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "process-builder",
                "label": "Process Builder",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "workflow-actions",
                "label": "Workflow Actions",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "email-alerts",
                        "label": "Email Alerts",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "field-updates",
                        "label": "Field Updates",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "knowledge-action",
                        "label": "Knowledge Action",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "outbound-messages",
                        "label": "Outbound Messages",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "send-actions",
                        "label": "Send Actions",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "tasks",
                        "label": "Tasks",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
            {
                "name": "workflow-rules",
                "label": "Workflow Rules",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
        ]
    },
    {
        "name": "user-interface",
        "label": "User Interface",
        "disabled": false,
        "expanded": false,
        "items": [
            {
                "name": "action-link-templates",
                "label": "Action Link Templates",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "actions-recommendations",
                "label": "Actions & Recommendations",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "app-menu",
                "label": "App Menu",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "custom-labels",
                "label": "Custom Labels",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "density-settings",
                "label": "Density Settings",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "global-actions",
                "label": "Global Actions",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "global-actions",
                        "label": "Global Actions",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "publisher-layouts",
                        "label": "Publisher Layouts",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
            {
                "name": "lightning-app-builder",
                "label": "Lightning App Builder",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "lightning-extension",
                "label": "Lightning Extension",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "path-settings",
                "label": "Path Settings",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "quick-text-settings",
                "label": "Quick Text Settings",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "record-page-settings",
                "label": "Record Page Settings",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "rename-tabs-labels",
                "label": "Rename Tabs and Labels",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "sites-domains",
                "label": "Sites and Domains",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "custom-urls",
                        "label": "Custom URLs",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "domains",
                        "label": "Domains",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "sites",
                        "label": "Sites",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
            {
                "name": "tabs",
                "label": "Tabs",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "themes-branding",
                "label": "Themes and Branding",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "translation-workbench",
                "label": "Translation Workbench",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "export",
                        "label": "Export",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "import",
                        "label": "Import",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "override",
                        "label": "Override",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "translate",
                        "label": "Translate",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "translation-language-settings",
                        "label": "Translation Language Settings",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
            {
                "name": "user-interface",
                "label": "User Interface",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
        ]
    },
    {
        "name": "custom-code",
        "label": "Custom Code",
        "disabled": false,
        "expanded": false,
        "items": [
            {
                "name": "apex-classes",
                "label": "Apex Classes",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "apex-hammer-test-results",
                "label": "Apex Hammer Test Results",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "apex-settings",
                "label": "Apex Settings",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "apex-test-execution",
                "label": "Apex Test Execution",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "apex-test-history",
                "label": "Apex Test History",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "apex-triggers",
                "label": "Apex Triggers",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "canvas-app-previewer",
                "label": "Canvas App Previewer",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "custom-metadata-types",
                "label": "Custom Metadata Types",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "custom-permissions",
                "label": "Custom Permissions",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "custom-settings",
                "label": "Custom Settings",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "email-services",
                "label": "Email Services",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "lightning-components",
                "label": "Lightning Components",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "debug-mode",
                        "label": "Debug Mode",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "lightning-components",
                        "label": "Lightning Components",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    }
                ]
            },
            {
                "name": "platform-cache",
                "label": "Platform Cache",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "remote-access",
                "label": "Remote Access",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "static-resources",
                "label": "Static Resources",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "tools",
                "label": "Tools",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "visualforce-components",
                "label": "Visualforce Components",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "visualforce-pages",
                "label": "Visualforce Pages",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
        ]
    },
    {
        "name": "development",
        "label": "Development",
        "disabled": false,
        "expanded": false,
        "items": [
            {
                "name": "dev-hub",
                "label": "Dev Hub",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "org-shape",
                "label": "Org Shape",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            }
        ]
    },
    {
        "name": "environments",
        "label": "Environments",
        "disabled": false,
        "expanded": false,
        "items": [
            {
                "name": "deploy",
                "label": "Deploy",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "deployment-settings",
                        "label": "Deployment Settings",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "deployment-status",
                        "label": "Deployment Status",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    }
                ]
            },
            {
                "name": "jobs",
                "label": "Jobs",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "apex-flex-queue",
                        "label": "Apex Flex Queue",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "apex-jobs",
                        "label": "Apex Jobs",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "background-jobs",
                        "label": "Background Jobs",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "bulk-data-load-jobs",
                        "label": "Bulk Data Load Jobs",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "scheduled-jobs",
                        "label": "Scheduled Jobs",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
            {
                "name": "logs",
                "label": "Logs",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "debug-logs",
                        "label": "Debug Logs",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "email-log-files",
                        "label": "Email Log files",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    }
                ]
            },
            {
                "name": "monitoring",
                "label": "Monitoring",
                "disabled": false,
                "expanded": false,
                "items": [
                    {
                        "name": "api-usage-notifications",
                        "label": "API Usage Notifications",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "case-escalations",
                        "label": "Case Escalations",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "email-snapshots",
                        "label": "Email Snapshots",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "outbound-messages",
                        "label": "Outbound Messages",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                    {
                        "name": "time-based-workflow",
                        "label": "Time-Based Workflow",
                        "disabled": false,
                        "expanded": false,
                        "pageReference": {
                            "type": "namedPage",
                            "attributes": {
                                "pageName": ""
                            },
                            "state": {}
                        }
                    },
                ]
            },
            {
                "name": "system-overview",
                "label": "System Overview",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
        ]
    },
    {
        "name": "user-engagement",
        "label": "User Engagement",
        "disabled": false,
        "expanded": false,
        "items": [
            {
                "name": "adoption-assistance",
                "label": "Adoption Assistance",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "help-menu",
                "label": "Help Menu",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "in-app-guidance",
                "label": "In-App Guidance",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "learning-paths",
                "label": "Learning Paths",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
        ]
    },
    {
        "name": "integrations",
        "label": "Integrations",
        "disabled": false,
        "expanded": false,
        "items": [
            {
                "name": "api",
                "label": "API",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "change-data-capture",
                "label": "Change Data Capture",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "data-import-wizard",
                "label": "Data Import Wizard",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "data-loader",
                "label": "Data Loader",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "dataloader-io",
                "label": "Dataloader.io",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "external-data-sources",
                "label": "External Data Sources",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "external-objects",
                "label": "External Objects",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "external-services",
                "label": "External Services",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "platform-events",
                "label": "Platform Events",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "teams-integration",
                "label": "Teams Integration",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
        ]
    },
    {
        "name": "notifications-builder",
        "label": "Notifications Builder",
        "disabled": false,
        "expanded": false,
        "items": [
            {
                "name": "custom-notifications",
                "label": "Custom Notifications",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            },
            {
                "name": "notification-delivery-settings",
                "label": "Notification Delivery Settings",
                "disabled": false,
                "expanded": false,
                "pageReference": {
                    "type": "namedPage",
                    "attributes": {
                        "pageName": ""
                    },
                    "state": {}
                }
            }
        ]
    },
];