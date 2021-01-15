//Import the ORM to create functions that will interact with the database
const connection = require("../config/connection");
const orm = require("../config/orm");

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne(name, cb) {
        orm.insertOne('burgers', ["burger_name", "devoured"], [name, false], cb);
    },
    updateOne(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
    },
};

//Export the database fucntions for the controller
module.exports = burger;