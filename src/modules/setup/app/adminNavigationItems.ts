import type { NavData } from 'setup/navItem';

export const ADMIN_NAV: NavData[] = [
    {
        name: 'users',
        label: 'Users',
        disabled: false,
        expanded: false,
        items: [
            {
                name: 'perm-set-groups',
                label: 'Permission Set Groups',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'permissionSetGroups',
                    },
                    state: {},
                },
            },
            {
                name: 'perm-sets',
                label: 'Permission Sets',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'permissionSets',
                    },
                    state: {},
                },
            },
            {
                name: 'profiles',
                label: 'Profiles',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'profiles',
                    },
                    state: {},
                },
            },
            {
                name: 'public-groups',
                label: 'Public Groups',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'publicGroups',
                    },
                    state: {},
                },
            },
            {
                name: 'queues',
                label: 'Queues',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'queues',
                    },
                    state: {},
                },
            },
            {
                name: 'roles',
                label: 'Roles',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'roles',
                    },
                    state: {},
                },
            },
            {
                name: 'user-management-settings',
                label: 'User Management Settings',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'userManagementSettings',
                    },
                    state: {},
                },
            },
            {
                name: 'users',
                label: 'Users',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'users',
                    },
                    state: {},
                },
            },
        ],
    },
    {
        name: 'data',
        label: 'Data',
        disabled: false,
        expanded: false,
        items: [
            {
                name: 'big-objects',
                label: 'Big Objects',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'bigObjects',
                    },
                    state: {},
                },
            },
            {
                name: 'data-export',
                label: 'Data Export',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'dataExport',
                    },
                    state: {},
                },
            },
            {
                name: 'data-integration-metrics',
                label: 'Data Integration Metrics',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'dataIntegrationMetrics',
                    },
                    state: {},
                },
            },
            {
                name: 'data-integration-rules',
                label: 'Data Integration Rules',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'dataIntegrationRules',
                    },
                    state: {},
                },
            },
            {
                name: 'duplicate-management',
                label: 'Duplicate Management',
                disabled: false,
                expanded: false,
                items: [
                    {
                        name: 'duplicate-error-logs',
                        label: 'Duplicate Error Logs',
                        disabled: false,
                        expanded: false,
                        pageReference: {
                            type: 'namedPage',
                            attributes: {
                                pageName: 'duplicateErrorLogs',
                            },
                            state: {},
                        },
                    },
                    {
                        name: 'duplicate-rules',
                        label: 'Duplicate Rules',
                        disabled: false,
                        expanded: false,
                        pageReference: {
                            type: 'namedPage',
                            attributes: {
                                pageName: 'duplicateRules',
                            },
                            state: {},
                        },
                    },
                    {
                        name: 'matching-rules',
                        label: 'Matching Rules',
                        disabled: false,
                        expanded: false,
                        pageReference: {
                            type: 'namedPage',
                            attributes: {
                                pageName: 'matchingRules',
                            },
                            state: {},
                        },
                    },
                ],
            },
            {
                name: 'mass-delete-records',
                label: 'Mass Delete Records',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'massDeleteRecords',
                    },
                    state: {},
                },
            },
            {
                name: 'mass-transfer-approval-requests',
                label: 'Mass Transfer Approval Requests',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'massTransferApprovalRequests',
                    },
                    state: {},
                },
            },
            {
                name: 'mass-transfer-records',
                label: 'Mass Transfer Records',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'massTransferRecords',
                    },
                    state: {},
                },
            },
            {
                name: 'mass-update-addresses',
                label: 'Mass Update Addresses',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'massUpdateAddresses',
                    },
                    state: {},
                },
            },
            {
                name: 'picklist-settings',
                label: 'Picklist Settings',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'picklistSettings',
                    },
                    state: {},
                },
            },
            {
                name: 'schema-settings',
                label: 'Schema Settings',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'schemaSettings',
                    },
                    state: {},
                },
            },
            {
                name: 'state-country-picklists',
                label: 'State and Country/Territory Picklists',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'stateCountryPicklists',
                    },
                    state: {},
                },
            },
            {
                name: 'storage-usage',
                label: 'Storage Usage',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'storageUsage',
                    },
                    state: {},
                },
            },
        ],
    },
    {
        name: 'email',
        label: 'Email',
        disabled: false,
        expanded: false,
        items: [
            {
                name: 'apex-exception-email',
                label: 'Apex Exception Email',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'apexExceptionEmail',
                    },
                    state: {},
                },
            },
            {
                name: 'classic-email-templates',
                label: 'Classic Email Templates',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'classicEmailTemplates',
                    },
                    state: {},
                },
            },
            {
                name: 'classic-letterheads',
                label: 'Classic Letterheads',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'classicLetterheads',
                    },
                    state: {},
                },
            },
            {
                name: 'compliance-bcc-email',
                label: 'Compliance BCC Email',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'complianceBccEmail',
                    },
                    state: {},
                },
            },
            {
                name: 'dkim-keys',
                label: 'DKIM Keys',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'dkimKeys',
                    },
                    state: {},
                },
            },
            {
                name: 'deliverability',
                label: 'Deliverability',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'deliverability',
                    },
                    state: {},
                },
            },
            {
                name: 'email-address-internationalization',
                label: 'Email Address Internationalization',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'emailAddressInternationlization',
                    },
                    state: {},
                },
            },
            {
                name: 'email-attachments',
                label: 'Email Attachments',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'emailAttachments',
                    },
                    state: {},
                },
            },
            {
                name: 'email-delivery-settings',
                label: 'Email Delivery Settings',
                disabled: false,
                expanded: false,
                items: [
                    {
                        name: 'email-domain-filters',
                        label: 'Email Domain Filters',
                        disabled: false,
                        expanded: false,
                        pageReference: {
                            type: 'namedPage',
                            attributes: {
                                pageName: 'emailDomainFilters',
                            },
                            state: {},
                        },
                    },
                    {
                        name: 'email-relays',
                        label: 'Email Relays',
                        disabled: false,
                        expanded: false,
                        pageReference: {
                            type: 'namedPage',
                            attributes: {
                                pageName: 'emailRelays',
                            },
                            state: {},
                        },
                    },
                ],
            },
            {
                name: 'email-footers',
                label: 'Email Footers',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'emailFooters',
                    },
                    state: {},
                },
            },
            {
                name: 'email-to-saleforce',
                label: 'Email to Salesforce',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'emailToSalesforce',
                    },
                    state: {},
                },
            },
            {
                name: 'enhanced-email',
                label: 'Enhanced Email',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'enhancedEmail',
                    },
                    state: {},
                },
            },
            {
                name: 'filter-email-tracking',
                label: 'Filter Email Tracking',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'filterEmailTracking',
                    },
                    state: {},
                },
            },
            {
                name: 'gmail-integration',
                label: 'Gmail Integration and Sync',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'gmailIntegrationSync',
                    },
                    state: {},
                },
            },
            {
                name: 'lightning-email-templates',
                label: 'Lightning Email Templates',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'lightningEmailTemplates',
                    },
                    state: {},
                },
            },
            {
                name: 'mail-merge-templates',
                label: 'Mail Merge Templates',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'mailMergeTemplates',
                    },
                    state: {},
                },
            },
            {
                name: 'org-wide-addresses',
                label: 'Organization-Wide Addresses',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'organizationWideAddresses',
                    },
                    state: {},
                },
            },
            {
                name: 'outlook-integration',
                label: 'Outlook Integration and Sync',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'outlookIntegrationSync',
                    },
                    state: {},
                },
            },
            {
                name: 'send-through-external-mail',
                label: 'Send through External Email Services',
                disabled: false,
                expanded: false,
                pageReference: {
                    type: 'namedPage',
                    attributes: {
                        pageName: 'sendThroughExternalEmailServices',
                    },
                    state: {},
                },
            },
        ],
    },
];
