const squareDigits = num => {
    let ans = '';
    for (let d of num.toString().split(''))
      ans += (parseInt(d) * parseInt(d)).toString();
    return parseInt(ans);
}