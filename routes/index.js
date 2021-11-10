const express = require('express');
const router = express.Router();
const { getAllUser, store, getById, update, destroy, login } = require('../controller/user-controller');
const { getAllCategories, saveCategories, getCategoriesById, updateCategoriesById, destroyCategories } = require('../controller/categories-controller');
const { getAllSongs, saveSong, getSongsById, updateSongsById, destroySong } = require('../controller/songs-controller');
const songsValidator = require('../validator/songs-validator')
const loginValidator = require('../validator/login-validator')
const userValidator = require('../validator/user-validator.js')
const categoriesValidator = require('../validator/categories-validator')
const catchValidationError = require('../handler/validator-error-handler')
const verifyToken = require('../middleware/auth')



//// user

//login
router.post('/login', loginValidator, catchValidationError(login))

//get all users, request method : get 
router.get('/users', verifyToken, getAllUser)


// create a user , request method : post
router.post('/users', userValidator, catchValidationError(store))

//get user by id , request method :Get
router.get('/users/:id', verifyToken, getById)


//update user by id , request method: put
router.put('/users/:id', userValidator, catchValidationError(update))


//delete user by id , request method: delete
router.delete('/users/:id', destroy)



// // categories
//getAllCategories
router.get('/categories', verifyToken, getAllCategories)

//createCategories
router.post('/categories', categoriesValidator, catchValidationError(saveCategories))

//getCategoriesbyId
router.get('/categories/:id', verifyToken, getCategoriesById)

//updateCategoriesById
router.put('/categories/:id', categoriesValidator, catchValidationError(updateCategoriesById))

//destroyCategories
router.delete('/categories/:id', destroyCategories)


////songs

//getAllSongs
router.get('/songs', verifyToken, getAllSongs)

//createCategories
router.post('/songs', songsValidator, catchValidationError(saveSong))

//getCategoriesbyId
router.get('/songs/:id', verifyToken, getSongsById)

//updateCategoriesById
router.put('/songs/:id', songsValidator, updateSongsById)

//destroyCategories
router.delete('/songs/:id', destroySong)




module.exports = router;