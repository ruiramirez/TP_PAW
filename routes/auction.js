var express = require('express');
var router = express.Router();

var auctionController = require('../controllers/auctionController');

router.post("/register", auctionController.registerAuction);
router.put("/update", auctionController.updateAuction);
router.delete("/delete", auctionController.deleteAuction);
router.get("/get", auctionController.getAuction);
router.get("/getActive", auctionController.getAuctionActive);
//router.post("/create", auctionController.createBid);
router.post("/bid", auctionController.makeBid);

module.exports = router;