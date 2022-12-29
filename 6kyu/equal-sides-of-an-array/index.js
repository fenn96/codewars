function findEvenIndex(arr)
{
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length; i++) {
    let leftArr = arr.slice(0, i);
    let rightArr = arr.slice(i + 1, arr.length);
     if (leftArr.reduce((a,b) => a + b,0) === rightArr.reduce((a,b) => a + b,0)) {
      return i;
    }
  }
  return -1;
}