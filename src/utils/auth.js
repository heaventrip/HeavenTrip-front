// import decode from 'jwt-decode'
import axios from 'axios'

const REST_ENDPOINT = 'https://heaventrip-dev.herokuapp.com/api/v1'
// const REST_ENDPOINT = 'http://localhost:3000/api/v1'
const AUTH_TOKEN_KEY = 'authToken'

export async function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    try {
      axios
        .post(`${REST_ENDPOINT}/login`, {
          user: {
            email: email,
            password: password
          }
        })
        .then((res) => {
          console.log(res.data)
          setAuthToken(res.data.auth_token)
          resolve()
        })
    } catch (err) {
      console.log(err)
    }
  })
}

export function logoutUser() {
  clearAuthToken()
}

export function setAuthToken(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY)
}

export function clearAuthToken() {
  axios.defaults.headers.common['Authorization'] = ''
  localStorage.removeItem(AUTH_TOKEN_KEY)
}

export function isLoggedIn() {
  let authToken = getAuthToken()
  return !!authToken
}

// export function getUserInfo() {
//   if (isLoggedIn()) {
//     return decode(getAuthToken())
//   }
// }

// function getTokenExpirationDate(encodedToken) {
//   let token = decode(encodedToken)
//   if (!token.exp) {
//     return null
//   }

//   let date = new Date(0)
//   date.setUTCSeconds(token.exp)

//   return date
// }

// function isTokenExpired(token) {
//   let expirationDate = getTokenExpirationDate(token)
//   return expirationDate < new Date()
// }
