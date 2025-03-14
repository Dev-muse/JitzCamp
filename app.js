const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("./models/campground");
const methodOverride = require('method-override')
const ejsMate =require('ejs-mate')

const app = express();


//  create temp db
mongoose.connect("mongodb://localhost:27017/jitz-camp");

// check

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("DB connected!");
});
app.engine('ejs',ejsMate)
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

// to parse post req on forms body
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'))

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/campgrounds", async (req, res) => {
  // get from mongodb
  const campgrounds = await Campground.find({});

  // pass off to ejs template
  res.render("campgrounds/index", { campgrounds });
});

// form
//========================================================
app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
});

app.post("/campgrounds", async (req, res) => {
  const newCamp = new Campground(req.body.campground);
  await newCamp.save();
  res.redirect(`/campgrounds/${newCamp._id}`);
});
//=======================================================

// dynamic routes
app.get("/campgrounds/:id", async (req, res) => {
  const camp = await Campground.findById(req.params.id);
  res.render("campgrounds/show", { camp });
});

app.get("/campgrounds/:id/edit", async (req, res) => {
  const camp = await Campground.findById(req.params.id);
  res.render("campgrounds/edit", { camp });
});

app.put('/campgrounds/:id',async (req,res) => {
 const {id}= req.params;
 const camp = await Campground.findByIdAndUpdate(id,{...req.body.campground})
 res.redirect(`/campgrounds/${camp._id}`);
})

app.delete('/campgrounds/:id',async (req,res) => {
      const {id} = req.params;
      const deletedCamp =await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds')
})


app.listen(3000, () => {
  console.log("Listening ");
});
