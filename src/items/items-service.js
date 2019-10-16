

const ItemsService = {
  getAllItems(db) {
    return db.from('packrat_items').select('*');
  },
  getById(db, id) {
    //console.log('get by id', id)
    return ItemsService.getAllItems(db)
      .where('id', id)
      .first();
  }
};

module.exports = ItemsService;