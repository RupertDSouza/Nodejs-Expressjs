//@desc Get all contact
//@route GET /api/contacts
//@access Public

const getContacts = (req,res)=>{
    res.status(200).json({message:"get all contacts"});
};

//@desc create New contact
//@route POST /api/contacts
//@access Public

const createContact = (req,res)=>{
    res.status(201).json({message:"create contacts"});
};

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access Public

const getContact = (req,res)=>{
    res.status(200).json({message:`get contacts for ${req.params.id}`});
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public

const updateContact = (req,res)=>{
    res.status(200).json({message:`update contacts for ${req.params.id}`});
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Public

const deleteContact = (req,res)=>{
    res.status(200).json({message:`delete contacts for ${req.params.id}`});
};



module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};