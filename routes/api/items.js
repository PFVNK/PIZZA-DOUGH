const express = require('express')
const router = express.Router()

// Item Model
const Item = require('../../models/Item')

//@route   GET api/items
//@desc    Get All Items
//@access  Public
router.get('/', (req, res) => {
	Item.find()
		.sort({ total: -1 })
		.then(items => res.json(items))
})

//@route   POST api/items
//@desc    Create An item
//@access  Public
router.post('/', (req, res) => {
	const newItem = new Item({
		name: req.body.name,
		total: req.body.total
	})

	newItem.save().then(item => res.json(item))
})

//@route   DELETE api/items/:id
//@desc    Delete An item
//@access  Public
router.delete('/:id', (req, res) => {
	// Item.findById(req.params.id)
	// 	.then(item => item.remove().then(() => res.json({success: true})))
	// 	.catch(err => res.status(404).json({success: false}))
	Item.findByIdAndDelete(req.params.id, err => {
		if(!err) {
			console.log('deleted!')
		}
	})
})

//@route   UPDATE api/items/:id
//@desc    Update An item
//@access  Public
router.put ('/:id', (req, res) => {
	Item.findByIdAndUpdate(req.params.id, { total: req.body.total }, (err, res) => {
		console.log(err)
	})
		
})

module.exports = router