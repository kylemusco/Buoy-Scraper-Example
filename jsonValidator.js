// Custom JSON schema validator to check for missing or updated data from API
const Validator = require('jsonschema').Validator;

const buoySchema = {
    type: 'array',
    items: {
        properties: {
            lat: { type: 'double' },
            lon: { type: 'double' },
            recovered: { type: 'boolean' },
            timeZone: { type: 'string' },
            buoyInfo: { type: 'string' },
            id: { type: 'string' },
            lake: { type: 'string' },
            longName: { type: 'string' },
            buoyOwners: { type: 'string' },
            contact: { 
                type: 'array',
                items: { type: 'string'} 
            },
            sponsors: {
                type: 'array',
                items: { type: 'string'} 
            },
            sponsorsSrc: {
                type: 'array',
                items: { type: 'string'} 
            },
            webcamSrc: {
                type: 'array',
                items: { type: 'string'} 
            },
            webcamLink: {
                type: 'array',
                items: { type: 'string'} 
            },
            derp: { type: 'string'}
        },
        required: [
            // Add fields you want to be required
        ]
    }
}

class JSONValidator {
    constructor() {
        this.validator = new Validator(); 
        
        this.validator.addSchema(buoySchema, '/Buoys');
    }

    validate(obj) {
        return this.validator.validate(obj, buoySchema)
    }
}

module.exports = new JSONValidator()