const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middleware/authenticator');
const wallpaperController = require('../controllers/wallpaperController');
const {authenticatePakage} = require('../middleware/pakageAuth')
const authAdmin = require("../middleware/authAdmin");
const multer  = require('multer');
const {upload} = require('../helper/fileUpload');

router.post('/',upload.array('files'), wallpaperController.create);
router.get('/', authenticatePakage ,wallpaperController.read)
router.get('/home', authenticatePakage, wallpaperController.home)
router.post('/updateDownload/:id', authenticatePakage, wallpaperController.updateDownload)
router.get('/:id', wallpaperController.readSingle)
// router.get('/update', wallpaperController.update);

module.exports = router;