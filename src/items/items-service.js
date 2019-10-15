

const ItemsService = {
  getAllItems(db) {
    return db.from('packrat_items').select('*');
  },
  getById(db, id) {
    return ItemsService.getAllItems(db)
      .where('item.id', id)
      .first();
  }
};

module.exports = ItemsService;