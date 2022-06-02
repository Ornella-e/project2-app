const Product = require("../models/Product.model");
const mongoose = require ("mongoose");
require ("../db");

const data = [
    {name: `Harry Potter and the Philosopher's Stone`,
    imageUrl: '/images/Book1.png',
    location: {
        city:"Cologne",
        country: "Germany"
    },
    condition:"Used",
    category: `Books and Music`,
    description: `Hi there!! I'm giving this beautiful book for free. 
    I really enjoyed reading this book and I hope you will enjoy it too!
    Please don't hesitate to contact me if you are interested.
    Regards, Tom.`
},
{
    name:`Keyboard Hohner` ,
    imageUrl: '/images/organ-piano-bass.png',
    location: {
        city: "Berlin",
        country: "Germany"
    },
    condition:'Used',
    category: 'Books and Music',
    description: `Hello! I give for free my old piano. 
    I have had this piano for 30 years and it works perfectly. 
    An amplifier and speakers are not integrated. 
    Feel free to contact me. Best regards, John.`
},
{
    name:`Trompete from FMB` ,
    imageUrl: '/images/Trompete.png',
    location: {
        city: "Madrid",
        country: "Spain"
    },
    condition:'Used',
    category: 'Books and Music',
    description: `FMB Bb Trompete Ztr 2000. Wind instrument.`
},
{
    name:`PONS English Leader's dictionary` ,
    imageUrl: '/images/Book2.png',
    location: {
        city: "Lisbon",
        country: "Portugal"
    },
    condition:'New',
    category: 'Books and Music',
    description: `Hi everyone! I got this dictionary for my trip to London. 
    It is almost new. Contact me if you are interested. Bye! Maria.`
},
{
    name:`Novels by John Irving` ,
    imageUrl: "/images/Book3.png",
    location: {
        city: "London",
        country: "England"
    },
    condition:'Used',
    category: 'Books and Music',
    description: `7 books in good condition 
    (one is even new and unread), 
    all by John Irving:
    Trying to Save Piggy Sneed
    The imaginary girlfriend
    A prayer for Owen Meany
    The water-method man
    Setting free the bears
    The Hotel New Hampshire
    Last night in Twisted River.
    I will gladly answer questions.
    Regards, Martha.`
},
{
    name:`Sunglasses Rayban` ,
    imageUrl: '/images/Sunglasses.png',
    location: {
        city: "Barcelona",
        country: "Spain"
    },
    condition:'New',
    category: 'Clothes',
    description: `Rarely used. Best regards, Amalia.`
},
{
    name:`UGG Shoes` ,
    imageUrl: '/images/Shoes.png',
    location: {
        city: "Milano",
        country: "Italy"
    },
    condition:'New',
    category: 'Clothes',
    description:`Never worn UGG women's shoes with fabric lining.Regards, Anna.`
},
{
    name: "Handbag Eternal ",
    imageUrl: '/images/handbag.png',
    location: {
        city: "Paris",
        country: "France"
    },
    condition:'New',
    category: 'Clothes',
    description:`I give for free this ladies handbag in dark blue 
    with a large outer compartment with zipper.
    It also inludes an extra long shoulder strap.
    Dimension: With 30cm / Height 22cm.
    This bag is new and has not been used.
    Regards, Eloise.`
},
{
    name:`Superdry Vest` ,
    imageUrl: '/images/Vest.png',
    location: {
        city: "Rome",
        country: "Italy"
    },
    condition:'Used',
    category: 'Clothes',
    description:`I'm giving my Superdry Vest for free.
    It is a size S but also fits a M.
    Best regards, Giulia. `
},
{
    name:`German Dress` ,
    imageUrl: '/images/Dress.png',
    location: {
        city: "Munich",
        country: "Germany"
    },
    condition:'Used',
    category: 'Clothes',
    description:`Typical dress for traditional German parties. `
},

{
    name: "Disney vhs collection",
    imageUrl: "/images/disney-collection.jpg",
    location: {
        city: "London",
        country: "UK"
    },
    condition: 'Used',
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
    condition: 'Used',
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
    condition: 'Used',
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
    condition: 'Used',
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
    condition: 'Used',
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
    condition: 'Used',
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
    condition: 'Used',
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
    condition: 'Used',
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
    condition: 'Used',
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
    condition: 'Used',
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