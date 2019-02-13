"use strict";
module.exports = function restart ( options ) {
    if ( options ) {
        const request = require( 'request-promise' );
        const URI = `${options.RANCHER_URL}/${options.PROJECT_ID}/services/${options.SERVICE_ID}?action=restart`;

        const requestOptions = {
            method: 'POST',
            uri: URI,
            auth: {
                user: options.RANCHER_ACCESS_KEY,
                pass: options.RANCHER_SECRET_KEY
            },
            body: {
                "rollingRestartStrategy": {
                    "batchSize": 1,
                    "intervalMillis": 2000
                }
            },
            json: true
        };
        request( requestOptions )
            .then( function ( parsedBody ) {
                console.log( `OK! Service ${parsedBody.name} is ${parsedBody.state}` );
            } )
            .catch( function ( err ) {
                console.log( `Could not restart the service.\n${err.message}` );
            } );
    } else {
        throw new Error( '[ restart-rancher ]  ERROR: No options supplied' );
    }
}


// Options sample:

// const options = {
//     RANCHER_ACCESS_KEY: "",
//     RANCHER_SECRET_KEY: "",
//     PROJECT_ID: "",
//     SERVICE_ID: "",
//     RANCHER_URL: ""
// }
