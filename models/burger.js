//Import the ORM to create functions that will interact with the database
const orm = require("../config/orm");

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    create(cols, vals, cb) {
        orm.insertOne()
    },
    update(objColVals, condition, cb) {
        orm.updateOne();
    },
};

//Export the database fucntions for the controller
module.exports = burger;