const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/allSongs', controllers.getAllSongs)
router.get('/song/:id', controllers.getSongDetails)
router.post('/playlists', controllers.createPlaylist)
router.get('/playlists', controllers.getAllPlaylists)
router.get('/playlists/:id', controllers.getOnePlaylist)
router.delete('/playlist/:id', controllers.deletePlaylist)
router.put('/addSong/:playlistId', controllers.addSongToPlaylist)
router.put('/removeSong/:playlistId', controllers.removeSongFromPlaylist)

module.exports = router
