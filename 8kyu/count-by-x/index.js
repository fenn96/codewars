const countBy = (x, n) => {
    let z = [];
    value = x;
    for (let i = 0; i < n; i++) {
      z.push(value);
      value += x;
    }
    return z
  }