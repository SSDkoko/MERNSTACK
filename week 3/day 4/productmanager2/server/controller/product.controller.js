const Products = require("../models/product.model")

module.exports = {
    createProduct: (req,res)=>{
        console.log(req.params)
        Products.create(req.body)
            .then((newProducts) => res.json(newProducts))
            .catch((err) => console.log(err))
    },
    getAllProducts: (req,res) =>{
        Products.find({})
            .then((allProducts)=>{
                console.log(allProducts);
                res.json(allProducts)
            })
            .catch((err)=>console.log(err))
    },
    getOneProduct: (req,res) =>{
        Products.find ({_id: req.params.id})
            .then((oneProduct)=>{
                console.log(oneProduct);
                res.json(oneProduct)
            })
            .catch((err)=> console.log(err))
    },
    updateProduct: (req,res)=>{
        Products.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new:true, runValidators: true} 
        )
        .then((updatedProduct)=>{
            console.log(updatedProduct);
            res.json(updatedProduct)
        })
        .catch((err)=> console.log(err) )
    },

    deleteProduct: (req,res)=>{
        Products.deleteOne({_id: req.params.id})
        .then((deletedProduct)=>{
            console.log(deletedProduct);
            res.json(deletedProduct)
        })
        .catch((err)=>console.log(err))
    }
    }