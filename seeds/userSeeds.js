const { User }= require('../models');

const userData = [
    { 
        userName: "eagleEye97",
        email: "eagleEye97@gmail.com",
        password: "Password"
    },
    { 
        userName: "techBabe99",
        email: "techBabe99@gmail.com",
        password: "password"
    }
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers;