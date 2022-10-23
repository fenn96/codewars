const countSheeps = sheep => {
    let present = 0;
    for (let p of sheep)
      p ? present += 1 : present = present;
    return present;
}