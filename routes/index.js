
const events = require('../controllers/Functions.js');

module.exports = (server) => {
    server.get("/events/GetVisitorOnEvent/:event_name",events.GetVisitorOnEvent)
} 