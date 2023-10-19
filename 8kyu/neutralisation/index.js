const neutralise = (s1, s2) => {
    let ans = '';
    for (let i = 0; i < s1.length; i++) {
      (s1[i] === '+' && s2[i] === '+') ? ans += '+' : (s1[i] === '-' && s2[i] === '-')
        ? ans += '-' : ans += '0';
    }
    return ans;
  }