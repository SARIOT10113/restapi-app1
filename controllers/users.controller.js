let users = require("../modules/users.modules")
const { v4: uuid4 } = require("uuid");

// get users
const getAllUser = (req,res)=>{
    res.status(200).json({users});
};
// create users
const createUser = (req,res)=>{
    const newUser ={
        id:uuid4(),
        username : req.body.username,
        email : req.body.email,
    }
    users.push(newUser)
    res.status(200).json(users);
};

// create users
const updateUser = (req,res)=>{
    const userId = req.params.id;
    const {username,email}=req.body;
    users.filter((user)=> user.id === userId ).map( (selecteduser) => {
        selecteduser.username = username;
        selecteduser.email = email;
    });

    res.status(201).json({users});
};

// delete users
const deleteUser = (req,res)=>{
    const userId = req.params.id;
    users = users.filter((user) => user.id !== userid )

    res.status(201).json({users});
};

module.exports ={ getAllUser ,createUser ,updateUser, deleteUser};
