const soap = require('soap');
const express = require('express');
const app = express();

// Example data for available plates
const availablePlates = ['COOL1', 'BEST555', 'BUYTH15'];

// Example data for registration details
const registrationDetails = {
    'ABC123': { owner: 'John Doe', expires: '2024-01-01' },
    'XYZ789': { owner: 'Jane Smith', expires: '2023-12-01' },
    '123ABC': { owner: 'Bob Johnson', expires: '2024-06-15' },
};

// SOAP service definition
const carRegistrationService = {
    CarRegistrationService: {
        CarRegistrationPort: {
            getAvailablePlates: function (args, callback) {
                callback(null, { plateNumbers: availablePlates });
            },
            getRegistrationDetails: function (args, callback) {
                const plateNumber = args.plateNumber;
                const details = registrationDetails[plateNumber];
                if (details) {
                    callback(null, details);
                } else {
                    callback({ message: 'Plate not found' });
                }
            },
            renewRegistration: function (args, callback) {
                const plateNumber = args.plateNumber;
                const details = registrationDetails[plateNumber];
                if (details) {
                    // Example: Extend registration by 1 year
                    details.expires = '2025-01-01';
                    callback(null, { success: true, newExpiration: details.expires });
                } else {
                    callback({ message: 'Plate not found' });
                }
            },
        },
    },
};

// Create SOAP server
const xml = require('fs').readFileSync('carRegistration.wsdl', 'utf8');
soap.listen(app, '/carRegistration', carRegistrationService, xml);

// Start the server
const port = 3000;
app.listen(port, function () {
    console.log(`SOAP server listening on http://localhost:${port}/carRegistration?wsdl`);
});
