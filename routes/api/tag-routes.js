const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
        as: 'products',
        through: {
          attributes: []
        }
      }
    ]
  }).then((tags) => {
    // Do something with the tags and their associated products here...
    res.status(200).json(tags)
  });

});

router.get('/:id', (req, res) => {
  const id = req.params.id
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(id, {
    include: [
      {
        model: Product,
        as: 'products',
        through: {
          attributes: []
        }
      }
    ]
  }).then((tag) => {
    // Do something with the tag and its associated products here...
    res.status(200).json(tag)
  });

});

router.post('/', (req, res) => {
  const tagName = req.body.tag;
  // create a new tag
  Tag.create({
    tag_name: tagName
  }).then((tag) => {
    res.status(201).json({ messsage: "Tag Created" })
  });

});

router.put('/:id', (req, res) => {
  const id = req.params.id
  const tagName = req.body.tag
  Tag.update({
    tag_name: tagName
  }, {
    where: {
      id: id
    }
  }).then(() => {
    // The tag was updated successfully
    res.status(201).json({ message: "Tag updated Successfully" })
  });

});

router.delete('/:id', (req, res) => {
  const id = req.params.id
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: id
    }
  }).then(() => {
    // The tag was deleted successfully
    res.status(201).json({ message: "Deleted Successfully" })
  });

});

module.exports = router;
