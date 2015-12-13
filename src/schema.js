export default {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "id": {
            "type": "string"
        },
        "name": {
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
        "id",
        "name",
        "sensors"
    ],
    "definitions": {
        "sensor": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string"
                },
                "type": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "virtual": {
                    "type": "boolean"
                },
                "formula": {
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
                "id",
                "type"
            ]
        }
    }
};
