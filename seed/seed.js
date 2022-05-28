const Product = require("../models/Product.model");
const mongoose = require ("mongoose");
require ("../db");

const data = [
{
    name: "Disney vhs collection",
    imageUrl: "/images/disney-collection.jpg",
    location: {
        city: "London",
        country: "UK"
    },
    condition: "used",
    category: "Electronics",
    description: "Great collection of Disney bus including special edition of lion king."
},
{
    name: "Vintage Polaroid Camera",
    imageUrl: "/images/camera.jpg",
    location: {
        city: "Bloomdale",
        country: "United States",
    },
    condition: "used",
    category: "Electronics",
    description: "Vintage Polaroid SX-70 One Step White Rainbow Stripe Instant Land Camera. Pre-owned, outward appearance looks in Excellent Condition. Please NOTE: *Untested*. Please feel free to message me about additional details"
},
{
    name: "Coffee Maker",
    imageUrl: "/images/coffee.jpg",
    location: {
        city: "Berlin",
        country: "Germany",
    },
    condition: "used",
    category: "Electronics",
    description: "Russell Hobbs 21991-56 Coffee Maker Digital Timer Black Floral Filter."
},
{
    name: "Stereo Hedphones",
    imageUrl: "/images/headphones.jpg",
    location: {
        city: "Tokio",
        country: "Japan",
    },
    condition: "used",
    category: "Electronics",
    description: "Used condition but in good shape for its age."
},
{
    name: "Very Old Boombox",
    imageUrl: "/images/boombox.jpg",
    location: {
        city: "Guadalajara",
        country: "Mexico",
    },
    condition: "used",
    category: "Electronics",
    description: "Really old stereo boombox. Needs fixing."
},
{
    name: "Blue Velvet Wingback Chair",
    imageUrl: "/images/chair.jpg",
    location: {
        city: "Copenhagen",
        country: "Denmark",
    },
    condition: "used",
    category: "Furniture",
    description: "Blue velvet wingback armchair with natural stain on pecan wood. No makers mark that I could find, this chair has been in my family for a couple generations. Upholstered in the last couple of years, light pilling on the arms (from a cat).CONDITION NOTES: Light pilling on the top of the 'wings'. Minor scuffs around legs consistent with age."
},
{
    name: "Bar Stools",
    imageUrl: "/images/bar-stools.jpg",
    location: {
        city: "Dublin",
        country: "Ireland",
    },
    condition: "used",
    category: "Furniture",
    description: "Lovely pair of bar stools."
},
{
    name: "Sofa",
    imageUrl: "/images/sofa.jpg",
    location: {
        city: "Madrid",
        country: "Spain",
    },
    condition: "used",
    category: "Furniture",
    description: "Very good condition for a piece of its age. Used occasionally over the years as a spare bed for guests."
},
{
    name: "Wood Dresser",
    imageUrl: "/images/dresser.jpg",
    location: {
        city: "Brisbane",
        country: "Australia",
    },
    condition: "used",
    category: "Furniture",
    description: "In good condition. Smoke free home."
},
{
    name: "Wall Mirror",
    imageUrl: "/images/mirror.jpg",
    location: {
        city: "Vancouver",
        country: "Canada",
    },
    condition: "used",
    category: "Furniture",
    description: "Used mirror with some chips to repair. Wood is one inch thick. Two strap style hangers on the back for secure and safe hanging."
}
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