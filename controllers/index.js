const { Playlist } = require('../models')
const { Song } = require('../models')

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
    const genre = await Song.find({ genre: id })
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
    const playlist = await Playlist.findById(id).populate('songs')
    return res.status(200).json(playlist)
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

const addSongToPlaylist = async (req, res) => {
  try {
    const { playlistId } = req.params
    const playlist = await Playlist.findById(playlistId)
    const song = req.body
    console.log(req.body)
    playlist.numOfSongs += 1
    playlist.length += song.length
    playlist.songs.push(song.id)
    playlist.save()
    if (playlist) {
      return res.status(200).send(playlist)
    }
    throw new Error('playlist not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const removeSongFromPlaylist = async (req, res) => {
  try {
    const { playlistId } = req.params
    const playlist = await Playlist.findById(playlistId)
    const song = req.body

    playlist.numOfSongs -= 1
    playlist.length -= song.length
    playlist.songs.splice(song.index, 1)
    playlist.save()
    if (playlist) {
      return res.status(200).send(playlist)
    }
    throw new Error('playlist not found')
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
  addSongToPlaylist,
  removeSongFromPlaylist
}
