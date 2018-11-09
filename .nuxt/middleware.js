
const files = require.context('@/middleware', false, /^\.\/(?!-)[^.]+\.(ts|tsx|js|mjs)$/)
const filenames = files.keys()

function getModule(filename) {
  const file = files(filename)
  return file.default || file
}
const middleware = {}

// Generate the middleware
for (const filename of filenames) {
  const name = filename.replace(/^\.\//, '').replace(/\.(ts|tsx|js|mjs)$/, '')
  middleware[name] = getModule(filename)
}

export default middleware
