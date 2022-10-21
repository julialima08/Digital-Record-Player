const Playlist = require('../models/Playlist')
const Song = requre('../models/Song')

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find()
    return res.status(200).json({ songs })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getSongDetails = async (req, res) => {
  try {
    const { id } = req.params
    const song = await Song.findById(id)
    return res.status(200).json({ song })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addSongs = async (req, res) => {
  try {
    const song = await new Song(req.body)
    await song.save()
    return res.status(200).json({ song })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getGenres = async (req, res) => {
  try {
    const { id } = req.params
    const genre = await Song.genre.findById(id)
    return res.status(200).json({ genre })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createPlaylist = async (req, res) => {
  try {
    const playlist = await new Playlist(req.body)
    await playlist.save()
    return res.status(200).json({ playlist })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find()
    return res.status(200).json({ playlists })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getOnePlaylist = async (req, res) => {
  try {
    const { id } = req.params
    const playlist = await Playlist.findById(id)
    return res.status(200).json({ playlist })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatePlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.status(200).json({ playlist })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePlaylist = async (req, res) => {
  try {
    const { id } = req.params
    const playlist = await Playlist.findByIdAndDelete(id)
    if (playlist) {
      return res.status(200).send('playlist deleted!')
    }
    throw new Error('playlist not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteSongInPlaylist = async (req, res) => {
  try {
    const { id } = req.params
    const playlist = await Playlist.songs.findByIndexAndDelete(id)
    return res.status(200).json({ playlist })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllSongs,
  getSongDetails,
  addSongs,
  getGenres,
  createPlaylist,
  getAllPlaylists,
  getOnePlaylist,
  updatePlaylist,
  deletePlaylist,
  deleteSongInPlaylist
}
