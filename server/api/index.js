const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
// router.use('/likes', require('./likes'))
// router.use('/comments', require('./comments'))
// router.use('/photos', require('./photos'))
router.use("/posts", require("./posts"));
// router.use('/messages', require('./messages'))

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
