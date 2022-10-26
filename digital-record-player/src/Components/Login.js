import React from 'react'

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=6d2f061ed38a4f9180c39d898e51c827&response_type=code&redirect_uri=http://localhost:3000/songs&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

const Login = () => {
  return (
    <div>
      <a href={AUTH_URL}>
        <button>Login with Spotify</button>
      </a>
    </div>
  )
}

export default Login
