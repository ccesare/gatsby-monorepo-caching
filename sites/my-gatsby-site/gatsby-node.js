exports.onPreBuild = async function ({ cache }) {
  const cacheKey = "test-key"
  let obj = await cache.get(cacheKey)

  if (!obj) {
    console.log(`No cache object found with key "${cacheKey}." Caching key "${cacheKey}" now.`)
    obj = { created: Date.now() }
    await cache.set(cacheKey, obj)
  } else {
    console.log(`Found cache object with key ${cacheKey} and created value ${obj.created}!`)
  }
}
