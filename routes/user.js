const express = require('express');
const router = express.Router();

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const cachedUser = await req.cache.get(id);
    
    if (cachedUser) {
      console.log('Cache hit');
      return res.json(JSON.parse(cachedUser));
    } else {
      console.log('Cache miss');
      return res.send(`${id} not found`);
    }
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const key = req.body.id;
    const value = JSON.stringify(req.body);
    const result = await req.cache.set(key, value, 'EX', 30);
    return res.json(result);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;
