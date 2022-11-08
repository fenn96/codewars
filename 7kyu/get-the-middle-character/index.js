const getMiddle = s => {
    const arr = s.split('');
    return arr.length % 2 === 0 ? arr[(arr.length / 2) - 1] + arr[arr.length / 2] : arr[(arr.length - 1) / 2];
}