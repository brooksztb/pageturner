export default function({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create()

  // Set baseURL to something different
  api.setBaseURL('https://www.googleapis.com/books/v1')

  // Inject to context as $gbooks
  inject('gbooks', api)
}
