const express = require('express');
const ItemsService = require('./items-service');
const { requireAuth } = require('../middleware/jwt-auth');

const itemsRouter = express.Router();

itemsRouter
  .route('/')
  .get((req, res, next) => {
    ItemsService.getAllItems(req.app.get('db'))
      .then(items => {
        res.json(items);
      })
      .catch(next);
  });

itemsRouter
  .route('/:item_id')
  .all(requireAuth)
  .all(checkItemExists)
  .get((req, res) => {
    res.json(res.Item)
  })

  async function checkItemExists(req, res, next) {
    try {
      const item = await ItemsService.getById(
        req.app.get('db'),
        req.params.item_id
      )
  
      if (!item)
        return res.status(404).json({
          error: `Item doesn't exist`
        })
  
      res.item = item
      next()
    } catch (error) {
      next(error)
    }
  }
module.exports = itemsRouter;