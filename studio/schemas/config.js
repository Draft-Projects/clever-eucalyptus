export default {
    "type": "document",
    "name": "config",
    "title": "Site Configuration",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "baseURL",
            "title": "Base URL",
            "description": "Hostname (and path) to the root",
            "hidden": true,
            "validation": null
        },
        {
            "type": "object",
            "name": "params",
            "title": "Params",
            "description": "Site parameters",
            "validation": Rule => Rule.required(),
            "fields": [
                {
                    "type": "string",
                    "name": "domain",
                    "title": "Domain",
                    "description": "The domain of your site, including the protocol, e.g. https://mysite.com/",
                    "validation": null
                },
                {
                    "type": "image",
                    "name": "favicon",
                    "title": "Favicon",
                    "description": "A square icon that represents your website",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "palette",
                    "title": "Color Palette",
                    "description": "The color palette of the theme",
                    "initialValue": "yellow",
                    "validation": Rule => Rule.required(),
                    "options": {
                        "list": [
                            "yellow",
                            "blue",
                            "green",
                            "red"
                        ]
                    }
                },
                {
                    "type": "header",
                    "name": "header",
                    "title": "Header Configuration",
                    "validation": null
                },
                {
                    "type": "footer",
                    "name": "footer",
                    "title": "Footer Configuration",
                    "validation": null
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the configuration file",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config.yaml"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}