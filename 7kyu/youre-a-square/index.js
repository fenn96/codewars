const isSquare = (n) => {
    if (n < 0) {
      return false;
    }
    for (var i = 0; i * i <= n; i++) {
      if (i * i === n) {
        return true;
      }
    }
    return false;
}