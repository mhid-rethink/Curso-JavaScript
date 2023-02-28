stringFromArray = (myArray) => {
  return myArray
    .reduce((list, item, index) => {
      list.push(item);
      if ((index + 1) % 3 == 0) {
        list.push(".");
      }
      return list;
    }, [])
    .join("");
};

console.log(stringFromArray([1, 2, 3, 4, 5, 6, 7, 8]));
