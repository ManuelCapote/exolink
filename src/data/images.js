const images = new Proxy(
  {},
  {
    get: (_, name) => `/images/${name}`,
  }
)

export default images
