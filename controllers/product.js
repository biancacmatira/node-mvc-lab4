const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add a product',
    });
}

exports.getProducts = (req, res, next) => {
    const fetchedProducts = Product.fetchAll();
    res.render('shop', {
        pageTitle: 'Shop Page',
        products: fetchedProducts
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.name, addZeroes(req.body.price));
    product.save();
    res.redirect('/');
};


function addZeroes(num){
    const dec = num.split('.')[1];
    const len = dec && dec.length > 2 ? dec.length : 2
    return Number(num).toFixed(len);
}