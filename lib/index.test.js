const restart = require( './index' );


test( 'Send a restart request to rancher using bad options should throw an Error', () => {
    const options = {
        RANCHER_ACCESS_KEY: "your_rancher_access_key",
        RANCHER_SECRET_KEY: "your_rancher_secret_key",
        PROJECT_ID: "your_project_id",
        SERVICE_ID: "your_serviceId",
        RANCHER_URL: "the API URL of you rancher server"
    }
    expect( restart( options ) ).toThrowError;
    /* This is a very BAD test, also known as 'Gambiarra'. 
    please submit a pull request if you have a better one. */
} );
