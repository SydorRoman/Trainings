const curry = (fn) => {
    return  (...args) => {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return (...nextArgs) => {
          return curried.apply(this, args.concat(nextArgs));
        };
      }
    };
  }