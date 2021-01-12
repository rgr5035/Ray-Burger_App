//Import the ORM to create functions that will interact with the database
const connection = require("../config/connection");
const orm = require("../config/orm");

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    create(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
    update(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
    },
};

//Export the database fucntions for the controller
module.exports = burger;