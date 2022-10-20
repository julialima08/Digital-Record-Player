const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/allSongs', controllers.getAllSongs)
router.get('/song/:id', controller.getSongDetails)
router.get('/genres/:id', controllers.getGenres)
router.get('/playlists', controllers.getAllPlaylists)
router.get('/playlists/:id', controllers.getOnePlaylist)
router.put('playlists/:id', controllers.updatePlaylist)
router.delete('/playlist/:id', controllers.deletePlaylist)
router.delete('/playlists/:id/song/:id', controllers.deleteSongInPlaylist)
router.post('/addSong', controllers.addSongs)

module.exports = router
