export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "siteId": {
            "type": "string"
        },
        "name": {
            "type": "string"
        },
        "location": {
            "type": "string"
        },
        "sensors": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/sensor"
            }
        }
    },
    "required": [
        "siteId",
        "name",
        "location",
        "sensors"
    ],
    "definitions": {
        "sensor": {
            "type": "object",
            "properties": {
                "sensorId": {
                    "type": "string"
                },
                "type": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "children": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/sensor"
                    }
                }
            },
            "required": [
                "sensorId",
                "type"
            ]
        }
    }
};
