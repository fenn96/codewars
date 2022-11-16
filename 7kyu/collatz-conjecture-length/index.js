const collatz = n => {
    let arr = [n];
    let temp = n;
    while (temp !== 1) {
      temp % 2 === 0 ? temp = temp / 2 : temp = temp * 3 + 1;
      arr.push(temp);
    }
    return arr.length;
}