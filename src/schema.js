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
        "pods": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/pod"
            }
        },
        "otherSensors": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/sensor"
            }
        }
    },
    "required": [
        "id",
        "name",
        "pods",
        "otherSensors"
    ],
    "definitions": {
        "pod": {
            "type": "object",
            "properties": {
                "id": {
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
                "id"
            ]
        },
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
