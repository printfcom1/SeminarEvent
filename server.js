const cors = require("cors");
const express = require("express");
const logger = require('morgan')
const server = express();

server.use(cors())
server.use(logger('dev'));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());



server.listen(3000, () => {
    console.log(`--- Semina Event Service ---`)
    console.log(`Connecting to Semina Event repository...`)
    console.log(`Open Service By Port 3000 Success`);

    
    require('./routes')(server)

});


// Graceful shutdown
process.on('SIGTERM', () => {

    console.log(`Closing ${config.name} Service.`)
    server.close((err) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }

        console.log('Server closed.')

       
    })
})

module.exports = server