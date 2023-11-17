# Car Registration SOAP API

This is not a real project. Just a quick exercise to show some skills.
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Dependencies](#dependencies)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mtamas5/car-registration-soap-api.git
   ```

2. Navigate to the directory:
    
    ```bash
    cd car-registration-soap-api
    ```
   
3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server

    ```bash
   npm start 
    ```
   
    The server will be accessible at: http://localhost:3000/carRegistration?wsdl

## API Endpoints

To test the api endpoints there is a file called demo-soap.postman_collection.json available here. It can be imported to postman and all endpoints can be tested.


- Get available plates - returns a list of registrattion plates not registered at the moment
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://example.com/car-registration">
    <soapenv:Header/>
    <soapenv:Body>
        <web:getAvailablePlates/>
    </soapenv:Body>
</soapenv:Envelope> 
```
- Get registration details - Return the details of a given registration plate number
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://example.com/car-registration">
    <soapenv:Header/>
    <soapenv:Body>
        <web:getRegistrationDetails>
            <web:plateNumber>ABC123</web:plateNumber>
        </web:getRegistrationDetails>
    </soapenv:Body>
</soapenv:Envelope> 
```

- Renew registration 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://example.com/car-registration">
    <soapenv:Header/>
    <soapenv:Body>
        <web:renewRegistration>
            <web:plateNumber>ABC123</web:plateNumber>
        </web:renewRegistration>
    </soapenv:Body>
</soapenv:Envelope> 
```
