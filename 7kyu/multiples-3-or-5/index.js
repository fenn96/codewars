const solution = number => {
    let ans = 0;
    for (let i = 0; i < number; i++)
      if (i % 3 === 0 || i % 5 === 0)
        ans += i;
    return number < 0 ? 0 : ans;
}