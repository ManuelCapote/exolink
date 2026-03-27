const images = {}

function importAll(r) {
  r.keys().forEach((key) => {
    const filename = key.replace('./', '')
    images[filename] = r(key)
  })
}

importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/))

export default images
