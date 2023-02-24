const compose = (...fns) => {
    return (x) => {
      return fns.reduceRight((acc, fn) => {
        return fn(acc);
      }, x);
    };
  }

  module.exports = compose;