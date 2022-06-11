const { request } = require('express')
const express = require('express')
const {body, check } = require('express-validator')

const authController = require('../controllers/auth')

const router = express.Router()

router.get('/login', authController.getLogin) 

router.get('/signup', authController.getSignup) 

router.get('/reset', authController.getReset) 

router.get('/reset/:token', authController.getNewPassword)

router.post('/reset', authController.postReset) 

router.post('/login',
[
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email address.')
    .normalizeEmail(),
  body('password', 'Password has to be valid.')
    .isLength({ min: 5 })
    .isAlphanumeric()
    .trim()
], 
authController.postLogin)

router.post('/logout', authController.postLogout)

router.post('/signup',
[
check('email')
.isEmail()
.withMessage('Please enter a valid email')
.normalizeEmail(),
body('password', 'Invalid inputs. The password must be 5 characters long and alphanumeric')
.isLength({min: 5})
.isAlphanumeric()
.trim(),
body('confirmPassword').trim().custom((value, {req}) => {
    if(value !== req.body.password) {
        throw new Error('Passwords have to match')
    }
    return true
})
], 
authController.postSignup)

router.post('/new-password', authController.postNewPassword)

module.exports = router