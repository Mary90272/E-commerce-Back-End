const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {
        model: Product,
        as: 'products'
      }
    ]
  }).then((categories) => {
    // Do something with the categories and their associated products here...
    res.status(200).json(categories)
  });

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const id = req.params.id
  Category.findByPk(id, {
    include: [
      {
        model: Product,
        as: 'products'
      }
    ]
  }).then((category) => {
    // Do something with the category and its associated products here...
    res.status(200).json(category)
  });

});

router.post('/', (req, res) => {

  // create a new category
  Category.create({
    category_name: req.body.categoryName
  }).then((category) => {
    // Do something with the new category here...
    res.json(category)
  });

});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const newCatName = req.body.newName;
  Category.update({
    category_name: newCatName
  }, {
    where: {
      id: id
    }
  }).then((category) => {
    // The category was updated successfully
    res.status(201).json({ message: "Updated" })
  })
});

router.delete('/:id', (req, res) => {
  const id = req.params.id
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: id
    }
  }).then(() => {
    // The category was deleted successfully
    res.status(201).json({ message: "Deleted" })
  });
});

module.exports = router;
