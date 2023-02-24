const stringFromConcatenatedArray = (array) =>
  array.reduce((finalString, curr) =>
    finalString.toString().concat(", ", curr)
  );
console.log(stringFromConcatenatedArray([1, 2, 3]));
