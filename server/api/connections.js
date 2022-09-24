const router = require('express').Router()
module.exports = router
const { isLoggedIn } = require('../middleware')
const { models: {Connection}} = require('../db')

router.get('/', isLoggedIn, async (req, res, next) => {
  try {
    res.send(await req.user.getConnections());
  } catch (err) {
    next(err)
  }
});

router.post('/', isLoggedIn, async(req, res, next) => {
  try{
    res.send(await req.user.addConnection(req.body));
  } catch(err){
    next(err)
  }
});
router.delete('/:id', isLoggedIn, async(req, res, next) => {
  try{
    await req.user.deleteConnection(req.params.id*1);
    res.sendStatus(204);
  } catch (ex) {
    next(ex)
  }
});