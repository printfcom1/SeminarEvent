const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const filePathDB = path.join(__dirname, '.', 'databasefile//mydb.sqlite');
const db = new sqlite3.Database(filePathDB);


// const fs = require('fs');
// const filePathMock = path.join(__dirname, '.', 'dataMock//MOCK_DATA.json');
// const dataJson = fs.readFileSync(filePathMock);
// const jsonData = JSON.parse(dataJson);

// Promise.all(jsonData.map((data,i)=>{

// // Define the data to be inserted
//     data.host_id = 1
  
//   // Prepare the INSERT statement
//   const stmt = db.prepare(`INSERT INTO event_visitor (visitor_id, firstname, lastname, email, gender, image, country, host_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);
  
//   // Bind the values to the statement and run it
//   stmt.run(data.id, data.first_name, data.last_name, data.email, data.gender, data.image, data.country, data.host_id, function(err) {
//     if (err) {
//       console.error(err.message);
//     } else {
//       console.log('Data inserted successfully');
//     }
//   });
  
//   // Finalize the statement and close the database connection
//   stmt.finalize();

// }))