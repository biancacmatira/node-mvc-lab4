const path = require('path');
const fs = require('fs');

const rootDirectory = require('../util/path');
const dataPath = path.join(rootDirectory, 'data', 'Products.json');

module.exports = class Product{
    constructor(name, price){
        this.id = Math.random();
        this.name = name;
        this.price = price;
    }

    save(){
        fs.readFile(dataPath, (err, data) => {
            let tempProducts = [];
            if(!err){
                tempProducts = JSON.parse(data);
            }
            tempProducts.push(this);
            fs.writeFile(dataPath, JSON.stringify(tempProducts,null,2), err => {
                if(err) throw err;
            })
        })
    }

    static fetchAll(){
        // fs.readFile(dataPath, (err, data) => {
        //     if(err){
        //         return [];
        //     }
        //     return JSON.parse(data);
        // })

        return JSON.parse(fs.readFileSync(dataPath));
    }

}