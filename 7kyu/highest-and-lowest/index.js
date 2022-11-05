const highAndLow = numbers => {
    const arr = numbers.split(' ').map(d => Number(d)).sort((a, b) => a - b);
    return arr[arr.length - 1].toString() + " " + arr[0].toString();
}