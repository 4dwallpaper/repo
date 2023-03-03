const mongoose = require('mongoose');
const validator = require("validator");

const WallpaperSchema = new mongoose.Schema({
  cat_name: {
    type: String,
    // required: true,
  },
  name:{
    type: String,
    // required: true,
  },
  price:{
    type:String,
    // required: true,
  },
  color_code:{
    type: String,
    // required: true,
  },
  meta_title:{
    type: String,
    // required: true,
  },
  file: 
    {
      type: String,
    },
  paid:{
      type: String,
  },
  model:{
      type: String
  },
  thumbnail: {
      type: String,
  },
  likes:{
      type: Number
  },
  ttl_downld:{
    type: Number
  },
  tag:[String],
  time:{
    type: String
  },
  hide: {
    type: String,
    default: "NO"
  },
  opacity:{
    type: String,
    default: "NO"
  },
  size: {
    type: String
  }
}, {timestamps: true});

const Wallpaper = mongoose.model("Wallpaper", WallpaperSchema);

module.exports = Wallpaper;