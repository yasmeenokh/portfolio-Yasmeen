'use strict';

// To run the server we use npm start
// Whenever we change something in the js we should ctrl+c


// To use the express library
const express = require( 'express' );

// To be able to use the express properties
const server = express();
const PORT = process.env.PORT || 3000;
// to access the files in the public folders
server.use( express.static( './public' ) );

// Our Routs

// To test that the everything is working, the console will appear in the terminal
// localhost:3000/test
server.get( '/test', ( request, response )=>{
  response.send( 'The server is working' );
} );
// localhost:3000/data
server.get( '/data', ( request, response )=>{
  let info = [{myName: 'Yasmeen'}, {myFamily: 'Al-Khateeb'}];
  response.json( info );
  // we can also use .send as well
} );
// To make the server start listening
server.listen( PORT, ()=>{
  console.log( `listening on port ${PORT}` );
} );
