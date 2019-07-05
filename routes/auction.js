var express =require('express');
var router=express.Router();

var auctionController =require('../controllers/auctionController');

router.post("/register",auctionController.registerAuction);
router.put("/list", auctionController.updateAuction);
router.get("/get",auctionController.getAuction);


module.exports =router;