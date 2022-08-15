const { v4: uuid4 } = require("uuid");
const users =[
    {
        id: uuid4(),
        username: "Sariot Hossain",
        email: "sariothossain@gmail.com"
    },
    {
        id: uuid4(),
        username: "shahadad Hossain",
        email: "shahadadhossain@gmail.com"
    },
    {
        id: uuid4(),
        username: "sakawat Hossain",
        email: "sakawarhossain@gmail.com"
    },
    
];

module.exports = users;