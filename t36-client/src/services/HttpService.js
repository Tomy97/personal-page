import axios from "axios"
const token = localStorage.getItem("token")

const reqConfig = {
  headers: {
    Authorization: `Bearer ${token}`
  }
}

export function Get(url) {
  return new Promise((resolve, reject) => {
    try {
      axios.get(url, !token ? {} : reqConfig)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    } catch (error) {
      reject(error)
    }
  })
}

export function Post(url, postData) {
  return new Promise((resolve, reject) => {
    try {
      axios.post(url, postData, !token ? {} : reqConfig)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    } catch (error) {
      reject(error)
    }
  })
}

export function Put(url, postData) {
  return new Promise((resolve, reject) => {
    try {
      axios.put(url, postData, !token ? {} : reqConfig)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    } catch (error) {
      reject(error)
    }
  })
}

export function Patch(url, postData) {
  return new Promise((resolve, reject) => {
    try {
      axios.patch(url, postData, !token ? {} : reqConfig)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    } catch (error) {
      reject(error)
    }
  })
}

export function Delete(url) {
  return new Promise((resolve, reject) => {
    try {
      axios.delete(url, !token ? {} : reqConfig)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    } catch (error) {
      reject(error)
    }
  })
}
