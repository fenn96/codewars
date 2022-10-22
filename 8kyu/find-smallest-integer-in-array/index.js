class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallest = args[0];
      for (let num of args)
        smallest > num ? smallest = num : smallest = smallest;
      return smallest;
    }
}