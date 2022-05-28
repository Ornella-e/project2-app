const Product = require("../models/Product.model");
const mongoose = require ("mongoose");
require ("../db");

const data = [
    {},
{},
{},
{},
{},
{},
{}
];

const dataSeed = async () => {
try {
    await Product.deleteMany();
    const createProducts = await Product.create(data);
    console.log(`products created:${createProducts.length}`);
    await mongoose.connection.close();
}catch(error){
    console.log(error);
}
}
dataSeed();