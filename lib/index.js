const request = require( 'request-promise' );
const PROJECT_ID = process.env.PROJECT_ID;
const SERVICE_ID = process.env.ID;
const RANCHER_SECRET_KEY = process.env.RANCHER_SECRET_KEY;
const RANCHER_ACCESS_KEY = process.env.RANCHER_ACCESS_KEY;
const RANCHER_URL = process.env.URL;
const URI = `${RANCHER_URL}/${PROJECT_ID}/services/${SERVICE_ID}?action=restart`;


const options = {
    method: 'POST',
    uri: URI,
    auth: {
        user: RANCHER_ACCESS_KEY,
        pass: RANCHER_SECRET_KEY
    },
    body: {
        "rollingRestartStrategy": {
            "batchSize": 1,
            "intervalMillis": 2000
        }
    },
    json: true
};


request( options )
    .then( function ( parsedBody ) {
        console.log( `OK! Service ${parsedBody.name} is ${parsedBody.state}` );
    } )
    .catch( function ( err ) {
        console.log( `Could not restart the service.\n${err.message}` );
    } );
