const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const filePathDB = path.join(__dirname, '..', 'databasefile//mydb.sqlite');
const db = new sqlite3.Database(filePathDB);

exports.GetVisitorOnEvent = async function (req, res, next) {
  const event_name = req.params.event_name

  try{
  const dataSelectEvent = await new Promise((resolve, reject) => {
    // send data event_name OR event_id 
    db.all(`SELECT * FROM events WHERE event_name = "${event_name}" ORDER BY event_id DESC LIMIT 1`, function(err, rows) {
      if (err) {
        reject(err)
      } else {
        resolve(rows)
      }
    });
  })

  if(dataSelectEvent.length !== 0){
    const dataSelectVisitor = await new Promise((resolve, reject) => {
      // send data event_name OR event_id 
      db.all(`SELECT * FROM event_mapp_visitor
              JOIN event_visitor ON event_mapp_visitor.visitor_id = event_visitor.visitor_id
              WHERE event_mapp_visitor.event_id = ${dataSelectEvent[0].event_id}`, function(err, rows) {
        if (err) {
          console.error(err);
          reject(err)
        } else {
          console.log(rows);
          resolve(rows)
        }
      });
    })
    if(dataSelectVisitor.length !== 0){
      res.send(200,dataSelectVisitor )
    }else{
      res.send(400,{"message": `No one attended the event.`})
    }
    
  }else{
    res.send(400,{"message": `Can't find event`})
  }

  return
  } catch (err) {
    res.send(500,{"message": err })
    return
  }

}