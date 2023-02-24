const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        console.log(cache)
      const strX = JSON.stringify(args);
      if (!cache.has(strX)) {
        return cache.set(strX, fn(...args))
      }
      return cache.get(strX);
    };
};

module.exports = memoize;