const Stores = require("../models/Store.model");

module.exports = {
    createStore: (req, res) => {
        console.log(req.params);
        Stores.create(req.body)
            .then((newStore) => res.json(newStore))
            .catch((err) => console.log(err));
    },
    getAllStores: (req, res) => {
        Stores.find()
            .then((allStores) => {
                console.log(allStores);
                res.json(allStores);
            })
            .catch((err) => console.log(err));
    },
    getOneStore: (req, res) => {
        Stores.find({ _id: req.params.id })
            .then((oneStore) => {
                console.log(oneStore);
                res.json(oneStore);
            })
            .catch((err) => console.log(err));
    },
    deleteStore: (req, res) => { 
        Stores.deleteOne({ _id: req.params.id }) 
            .then((deletedStore) => {
                console.log(deletedStore);
                res.json(deletedStore);
            })
            .catch((err) => console.log(err));
    },
    updateStore: (req,res)=>{
        Stores.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new:true, runValidators: true} 
        )
        .then((updatedStore)=>{
            console.log(updatedStore);
            res.json(updatedStore)
        })
        .catch((err)=> console.log(err) )
    },
    
    
};
