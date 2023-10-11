const openOrSenior = (data) => {
    let arr = [];
    for (let senior of data) 
      senior[0] >= 55 && senior[1] > 7 ? arr.push('Senior') : arr.push('Open');
    return arr;
}