originalArray = [7, 9, 0, -2];
newArray = (myArray, sliceEnd = 1) =>
  sliceEnd > 0 ? myArray.slice(0, sliceEnd) : myArray.slice(0, 0);
console.log(newArray(originalArray, -3));
