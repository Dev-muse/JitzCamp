
//this file will seed our database with new jitz camp data ~50 records before clearing the db

const mongoose = require('mongoose');
const Campground = require('../models/campground');
  const cities = require('./cities')
  const {places,descriptors} = require('./seedHelpers')



mongoose.connect('mongodb://localhost:27017/jitz-camp')

// check
const db = mongoose.connection;
db.on('error',console.error.bind(console,"connection error:"))
db.once("open",()=>{
  console.log("DB connected!")
})


// clear db evertime you seed/populate db cos of changes to model
const sample = array=>array[Math.floor(Math.random()*array.length)]


const seedDb= async ()=>{
  await Campground.deleteMany({})
  for(let i=0;i<50;i++){
    const random1000 = Math.floor(Math.random()*1000);
    const price = Math.floor(Math.random()*60)+20;
   const newGround= new Campground({
      title:`${sample(descriptors)} ${sample(places)}`,
      location:`${cities[random1000].city}, ${cities[random1000].state}`,
      image: `https://picsum.photos/400?random=${Math.random()}`,
      description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias natus quos distinctio accusamus vitae reiciendis ab ipsum ullam modi obcaecati.',
      price
    })
    await newGround.save()
  }
}

seedDb().then(()=>{
  mongoose.connection.close()
})