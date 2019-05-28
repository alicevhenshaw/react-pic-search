import axios from 'axios'

// creates an instance of the axios client
// with customised properties
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 0f641b0937836abcb38fc21e27b51d8b28a4367e55c3cd3b1ef5b8034cbb74f1'
  }
});