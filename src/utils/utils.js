export const deepCopy = function (obj) {
  if (typeof obj === 'object') {
    const result = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        result[key] = deepCopy(obj[key])
      }
      result[key] = obj[key]
    }
    return result
  }
  return obj
}
