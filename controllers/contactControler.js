const asyncHandler = require("express-async-handler");

//@desc Get all contact
//@route GET /api/contacts
//@access Public

const getContacts = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"get all contacts"});
});

//@desc create New contact
//@route POST /api/contacts
//@access Public

const createContact = asyncHandler(async (req,res)=>{
    console.log("The request body is ",req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        // return res.status(400).json({message:"Please provide name,email and phone"});
        res.status(400);
        throw new Error("Please provide name,email and phone");
    }
    res.status(201).json({message:"create contacts"}); 
});

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access Public

const getContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`get contacts for ${req.params.id}`});
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public

const updateContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`update contacts for ${req.params.id}`});
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Public

const deleteContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`delete contacts for ${req.params.id}`});
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};