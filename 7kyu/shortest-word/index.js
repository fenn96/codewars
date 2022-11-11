const findShort = s => {
    const arr = s.split(' ').map(s => s.length).sort((a,b) => a - b);
    return arr[0];
}