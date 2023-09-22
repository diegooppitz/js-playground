const express = require('express')
const songsController = require('../controllers/songs')
const router = express.Router()

router.get('/song/play/:id', songsController.playSong)
router.get('/song/:id', songsController.songData)
router.get('/songs', songsController.allSongs)

module.exports = router;