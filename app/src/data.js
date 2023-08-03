const connectionPool = require("./connection");

const query = (queryString) => {
  return new Promise((res, rej) => {
    connectionPool.getConnection((err, connection) => {
      if (err) rej(err);
      connection.query(queryString, (err, rows, fields) => {
        if (err) rej(err);
        else {
          res(rows);
        }
        connection.release();
      });
    });
  });
};

const insert = (name) => {
  data = { name: name };
  const queryString = `INSERT INTO people SET ?`;
  return new Promise((res, rej) => {
    connectionPool.getConnection((err, connection) => {
      if (err) rej(err);
      connection.query(queryString, data, (err, rows, fields) => {
        if (err) rej(err);
        else {
          res(rows);
        }
        connection.release();
      });
    });
  });
};

module.exports = { query, insert };
