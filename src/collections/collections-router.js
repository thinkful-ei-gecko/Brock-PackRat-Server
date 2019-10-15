const express = require('express');
const CollectionsService = require('./collections-service');
const { requireAuth } = require('../middleware/jwt-auth')

const collectionsRouter = express.Router();

collectionsRouter
  .route('/')
  .get((req, res, next) => {
    CollectionsService.getAllCollections(req.app.get('db'))
      .then(collections => {
        res.json(collections);
      })
      .catch(next);
  });

collectionsRouter
  .route('/:collection_id')
  .all(requireAuth)
  .all(checkCollectionExists)
  .get((req, res) => {
    res.json(res.Collection)
  })

collectionsRouter.route('/:collection_id/items')
  .all(checkCollectionExists)
  .all(requireAuth)
  .get((req, res, next) => {
    CollectionsService.getItemsForCollection(
      req.app.get('db'),
      req.params.collection_id
    )
      .then(items => {
        res.json(items)
      })
      .catch(next)
  })

/* async/await syntax for promises */
async function checkCollectionExists(req, res, next) {
  try {
    const collection = await CollectionsService.getById(
      req.app.get('db'),
      req.params.collection_id
    )

    if (!collection)
      return res.status(404).json({
        error: `Collection doesn't exist`
      })

    res.collection = collection
    next()
  } catch (error) {
    next(error)
  }
}
module.exports = collectionsRouter;