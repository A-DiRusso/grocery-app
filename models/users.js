
const db = require('./conn');  //requre the conn.js file
const bcrypt = require('bcryptjs');
const Store = require('./stores');
const Item = require('./items');
const UserStore = require('./users-stores');

//this will have all the fields as parameters
//static means all instance of the class have this function
class User {
    constructor (id, first_name, last_name, email, password) {
        this.id = id;
        this.firstName = first_name;   //sql is snake case; javascript is camel case...
        this.lastName = last_name;
        this.email = email;
        this.password = password;
    } 
    static getById(id) {
        //db.ANY always returns an array
        // return db.any(`SELECT * FROM users WHERE id=${id}`);  //returns array w/ object
        //instead use db.ONE when you are returning ONE thing
        return db.one(`SELECT * FROM users WHERE id=${id}`)  //returns an object
            .then((userData)=> {
                // console.log(userData);
                        //this NEW calls the CONSTRUCTOR
                const userInstance = new User(userData.id, userData.first_name, userData.last_name, userData.email, userData.password);    
                // console.log(userData.id);
                // console.log(userInstance);
                return userInstance;    
            })
            .catch((error) => {
                return null;  //signal an invalid value
            });
    }

    static getByEmail(email) {
        //db.ANY always returns an array
        // return db.any(`SELECT * FROM users WHERE id=${id}`);  //returns array w/ object
        //instead use db.ONE when you are returning ONE thing
        return db.one(`SELECT * FROM users WHERE email=$1`,[email])  //returns an object
            .then((userData)=> {
                console.log(userData);
                        //this NEW calls the CONSTRUCTOR
                const userInstance = new User(userData.id, userData.first_name, userData.last_name, userData.email, userData.password);    
                // console.log(userData.id);
                // console.log(userInstance);
                return userInstance;    
            })
            .catch((error) => {
                return null;  //signal an invalid value
            });
    }



    //no 'static' since this is an instance method.  it belongs to the instance, not the class
    save() {
        //db.result - gives you the number of rows affected
        return db.result(`UPDATE users SET 
                    first_name = '${this.firstName}',
                    last_name = '${this.lastName}',
                    email ='${this.email}',
                    password = '${this.password}'
                     where id = ${this.id}`);
    }
    static insertUser (firstName, lastName, email, password) {
        return db.result(`insert into users
        (first_name, last_name, email, password)
        values  ($1, $2, $3, $4)`, [firstName, lastName, email, password])
    }
    setPassword(password) {
        this.password = bcrypt.hashSync(password, 10);  //10 is my salt
    }
    static hashPassword(password) {
        return bcrypt.hashSync(password, 10);  //10 is my salt
    }
    checkPassword(password) {
        return bcrypt.compareSync(password,this.password);
    }
    get stores() {
            return db.any(`SELECT * from stores as S
            INNER JOIN user_stores as US 
            ON S.id = US.store_id
            INNER JOIN users as U
            ON US.user_id = U.id
            where user_id = $1`,[this.id])
            //and transform them to review objects
                .then((arrayOfStores) => {
                    //convert each array element into a Review instance
                    const arrayOfStoreInstances = [];
                    //manually mapping
                    arrayOfStores.forEach((data) => {
                        // console.log(data);
                        const StoreInstance = new Store (data.store_id,  data.store_name);
                        arrayOfStoreInstances.push(StoreInstance);
                    })
                    // console.log(arrayOfStoreInstances);
                    return arrayOfStoreInstances;
                })
                //what happens when there are NO results??
    }
};






module.exports = User;
