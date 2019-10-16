const express = require('express');
const xss = require('xss');
const CollectionsService = require('./collections-service');
const { requireAuth } = require('../middleware/jwt-auth')

const collectionsRouter = express.Router();

const serializeCollection = collection => ({
  id: collection.id,
  title: xss(collection.title),
});

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
.all((req, res, next) => {
  //console.log(req.params.collection_id)
  CollectionsService.getById(
    req.app.get('db'),
    req.params.collection_id
  )
    .then(collection => {
      if (!collection) {
        return res.status(404).json({
          error: { message: 'collection not found' }
        });
      }
      res.collection = collection;
      next();
    })
    .catch(next);
})
.get((req, res, next) => {
  res.json(serializeCollection(res.collection));
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