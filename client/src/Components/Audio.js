import axios from 'axios'

const Audio = () => {
  const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/track/461537152',
    headers: {
      'X-RapidAPI-Key': '7d3489c981mshd8b003a4a76fc64p1d5f38jsn5939fc8db612',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  }

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.error(error)
    })

  return <div></div>
}

export default Audio
