const product = require('../model/model');
const productController = require('../controllers/controller');

router.get("/", productController.getAllModels);

module.exports = router;