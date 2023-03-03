const Category = require("../models/categoryModel");
const Wallpaper = require('../models/wallpaperModel');

exports.create = async (req, res) => {
  try {
    let {category, name, price, color, metaTitle, purchase, model, tag} = req.body;
  let time = new Date();
  let currentTime = time.getFullYear()+"-"+ (time.getMonth()+1)+"-"+time.getDate()+" "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
  console.log({req1: req.files})
  const wallpaper = await Wallpaper.create({
    cat_name: category,
    tag: tag,
    name,
    price,
    color_code: color,
    meta_title: metaTitle,
    paid: purchase,
    model,
    likes: 0,
    time: currentTime,
    ttl_downld: 0,
    file: req.files[0].path,
    size: req.files[0].size,
    thumbnail: req.files[1].path,
  });
    res.status(200).json({
      success: true,
      wallpaper
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}
exports.read = async (req, res) =>{
  try{
    let wallpapers = await Wallpaper.find({});
    res.status(200).json({
      wallpapers
    })
  }
  catch(err){
    res.status(500).json(err)
  }
}

exports.home = async (req, res) =>{
  try{
    let trending = await Wallpaper.find({}).sort({ttl_downld: 'desc'}).limit(10);
    let newlyAdded = await Wallpaper.find({}).sort({createdAt: 'desc'}).limit(10);
    // const science = await Wallpaper.find({cat_name: "Science"}).limit(10);
    // const tech = await Wallpaper.find({cat_name: "Tech"}).limit(10);
    // const nature = await Wallpaper.find({cat_name: "Nature"}).limit(10);
    // const sciFi= await Wallpaper.find({cat_name: "Sci-fi"}).limit(10);
    // const futuristic = await Wallpaper.find({cat_name: "Futuristic"}).limit(10);
    // const animals = await Wallpaper.find({cat_name: "Animal"}).limit(10);
    // const cars = await Wallpaper.find({cat_name: "Car"}).limit(10);
    let superheroes = await Wallpaper.find({cat_name: "Super Hero"}).limit(10);
    res.status(200).json({
      wallpapers: [
      {trending: trending},
    {newly_Added: newlyAdded},
    // {science: science}, 
    // {tech: tech}, 
    // {nature: nature}, 
    // {sciFi: sciFi},
    // {futuristic: futuristic},
    // {animals: animals},
    // {cars: cars},
    {superheroes: superheroes}
      ]
    })
    // let homeListing = await Home.find({});
    // const wallpapers = [];
    // let trending = await Wallpaper.find({}).sort({ttl_downld: 'desc'}).limit(10);
    // trending.unshift({span_count: homeListing[0].span_count})
    // let newlyAdded = await Wallpaper.find({}).sort({createdAt: 'desc'}).limit(10);
    // newlyAdded.unshift({span_count: homeListing[1].span_count});
    // wallpapers.push({trending});
    // wallpapers.push({"Newly Added": newlyAdded});
    // for(let i=2; i<homeListing.length; i++){
    //   const element = await Wallpaper.find({cat_name: homeListing[i].cat_name}).limit(10);
    //   element.unshift({span_count: category.span_count});
    //   let cat_name = homeListing[i].cat_name;
    //   wallpapers.push({cat_name: element});    }
  
  }
  catch(err){
    res.status(500).json({
      err: err.message
    })
  }
}

exports.updateDownload = async (req, res) =>{
  try{
    let {id} = req.params;
    const wallpapers = await Wallpaper.findOneAndUpdate({_id: id}, {$inc: { ttl_downld: 1} });
    res.status(200).json({
      wallpapers
    })
  }
  catch(err){
    res.status(500).json(err)
  }
}
// exports.update = async(req, res) =>{
//   const wallpaper = await Wallpaper.insertMany(
// );
//   res.status(200).json({
//     wallpaper
//   })
// }

exports.readSingle = async (req, res) =>{
    try{
        let {id} = req.params;
        const wallpaper = await Wallpaper.findOne({_id: id});
        res.status(200).json({
            wallpaper
        })
    }
    catch(error){
        res.status(500).json(err)
    }
}
