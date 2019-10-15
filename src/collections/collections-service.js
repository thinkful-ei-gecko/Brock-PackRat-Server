//const xss = require('xss');
//const Treeize = require('treeize');

const CollectionsService = {
  getAllCollections(db) {
    return db
      .from('packrat_collections')
      .select('*');
  },

  getById(db, id) {
    return CollectionsService.getAllCollections(db)
      .where('collection.id', id)
      .first();
  },
}

module.exports = CollectionsService;
