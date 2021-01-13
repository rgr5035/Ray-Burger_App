const connection = require("./connection");

const printQuestionMarks = (num) => {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push('?');
    }
  
    return arr.toString();
  };
  
  // Helper function to convert object key/value pairs to SQL syntax
  const objToSql = (ob) => {
    const arr = [];
  
    // Loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
      let value = ob[key];
      // Check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = `'${value}'`;
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(`${key}=${value}`);
      }
    }
  
    // Translate array of strings to a single comma-separated string
    return arr.toString();
  };


const orm = {

    selectAll(tableInput, cb) {
      const query = `SELECT * FROM ${tableInput}`;
      connection.query(query, (err, res) => {
        if (err) {
          throw err;
        } 
        
        cb(res);
      })
    },

    insertOne(table, cols, vals, cb) {
      let query = `INSERT INTO ${table}`;

      query += ' (';
      query += cols.toString();
      query += ') ';
      query += 'VALUES (';
      query += printQuestionMarks(vals.length);
      query += ') ';

      console.log(query);

      connection.query(query, (err, result) => {
        if (err) {
          throw (err)
        } 
        
        cb(result);
      })
    },

    updateOne(table, objColVals, conition, cb) {
      let query = `UPDATE ${table}`;

      query += ' SET ';
      query += objToSql(objColVals);
      query += ' WHERE ';
      query += condition;

      console.log(query);

      connection.query(query, (err, result) => {
        if (err) {
          throw (err)
        }

        cb(result);
      })
    }
};

module.exports = orm;

