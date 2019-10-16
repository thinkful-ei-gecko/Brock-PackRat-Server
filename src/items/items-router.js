const express = require('express');
const xss = require('xss');
const ItemsService = require('./items-service');
const { requireAuth } = require('../middleware/jwt-auth');

const itemsRouter = express.Router();

const serializeItem = item => ({
    id: item.id,
    title: xss(item.title),
    info: item.info,
    collection_id: item.collection_id
  });

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
  .all((req, res, next) => {
      console.log('items router /:item_id')
    ItemsService.getById(
      req.app.get('db'),
      req.params.item_id
    )
      .then(item => {
        if (!item) {
          return res.status(404).json({
            error: { message: 'item not found' }
          });
        }
        res.item = item;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.json(serializeItem(res.item));
  })

itemsRouter
  .route('/item/:item_id')
  .all(checkItemExists)
  //.all(requireAuth)
  .all((req, res, next) => {
    //console.log('items router /item/:item_id')
    console.log(req.params.item_id)
    ItemsService.getById(
      req.app.get('db'),
      req.params.item_id
    )
      .then(item_id => {
        res.json(item_id)
      })
      .catch(next)
  })
  .get((req, res, next) => {
      res.json(serializeItem(res.item));
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