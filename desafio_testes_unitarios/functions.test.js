const fn = require("./functions");

describe("doubleANumber", () => {
  it("should return a number that divided by the input results in 2", () => {
    const input = 3;
    const result = fn.doubleANumber(input) / input;
    expect(result).toBe(2);
  });

  it("should return a number divisible by 2", () => {
    const input = 3;
    const result = fn.doubleANumber(input) % 2;
    expect(result).toBe(0);
  });
});

describe("createFullName", () => {
  it("should contain the first name", () => {
    const result = fn.createFullName("Matheus", "Dias");
    expect(result).toContain("Matheus");
  });

  it("should contain the last name", () => {
    const result = fn.createFullName("Matheus", "Dias");
    expect(result).toContain("Dias");
  });
});

describe("calculateTheLenghtOfAString2", () => {
  it("should return the length of the string", () => {
    const input = "teste unitário";
    const result = fn.calculateTheLenghtOfAString2(input);
    expect(result).toBe(input.length);
  });

  it("should return a number", () => {
    const input = "teste unitário";
    const result = fn.calculateTheLenghtOfAString2(input);
    expect(typeof result).toBe("number");
  });
});

describe("numbersArrayIntoString", () => {
  it("should return all elements of the array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = fn.numbersArrayIntoString(array);
    array.forEach((element) => expect(result).toContain(`${element}`));
  });

  it("should return a string", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = fn.numbersArrayIntoString(array);
    expect(typeof result).toBe("string");
  });

  it("should return a string with . after every 3 numbers", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = fn.numbersArrayIntoString(array);
    const totalDotsShouldBe = Math.floor(array.length / 3);
    const totalDots = result.split("").reduce((acc, element) => {
      element === "." ? (acc += 1) : acc;
      return acc;
    }, 0);
    expect(totalDots).toBe(totalDotsShouldBe);
  });
});

describe("addNewLanguage", () => {
  it("should return the object with an array containing the input", () => {
    const programming = {
      languages: ["JavaScript", "Python", "Ruby"],
      isChallenging: true,
      isRewarding: true,
      difficulty: 8,
      jokes:
        "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
    };
    const result = fn.addNewLanguage(programming, "Kotlin");
    expect(result.languages).toEqual(expect.arrayContaining(["Kotlin"]));
  });

  it("should return the object an array with one more element than the input", () => {
    const programming = {
      languages: ["JavaScript", "Python", "Ruby"],
      isChallenging: true,
      isRewarding: true,
      difficulty: 8,
      jokes:
        "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
    };
    const oldLength = programming.languages.length + 1;
    const result = fn.addNewLanguage(programming, "Kotlin");
    const newLength = result.languages.length;
    expect(newLength).toBe(oldLength);
  });
});

describe("votersResult", () => {
  it("should return an object with numbers as values", () => {
    const desiredObject = {
      numYoungVotes: expect.any(Number),
      numYoungPeople: expect.any(Number),
      numMidVotesPeople: expect.any(Number),
      numMidsPeople: expect.any(Number),
      numOldVotesPeople: expect.any(Number),
      numOldsPeople: expect.any(Number),
    };

    const voters = [
      { name: "Bob", age: 30, voted: true },
      { name: "Jake", age: 32, voted: true },
      { name: "Kate", age: 25, voted: false },
      { name: "Sam", age: 20, voted: false },
      { name: "Phil", age: 21, voted: true },
      { name: "Ed", age: 55, voted: true },
      { name: "Tami", age: 54, voted: true },
      { name: "Mary", age: 31, voted: false },
      { name: "Becky", age: 43, voted: false },
      { name: "Joey", age: 41, voted: true },
      { name: "Jeff", age: 30, voted: true },
      { name: "Zack", age: 19, voted: false },
    ];

    const result = fn.votersResult(voters);
    expect(result).toMatchObject(desiredObject);
  });

  it("should return an object with predetermined keys", () => {
    const desiredObjectKeys = [
      "numYoungVotes",
      "numYoungPeople",
      "numMidVotesPeople",
      "numMidsPeople",
      "numOldVotesPeople",
      "numOldsPeople",
    ];

    const voters = [
      { name: "Bob", age: 30, voted: true },
      { name: "Jake", age: 32, voted: true },
      { name: "Kate", age: 25, voted: false },
      { name: "Sam", age: 20, voted: false },
      { name: "Phil", age: 21, voted: true },
      { name: "Ed", age: 55, voted: true },
      { name: "Tami", age: 54, voted: true },
      { name: "Mary", age: 31, voted: false },
      { name: "Becky", age: 43, voted: false },
      { name: "Joey", age: 41, voted: true },
      { name: "Jeff", age: 30, voted: true },
      { name: "Zack", age: 19, voted: false },
    ];

    const result = fn.votersResult(voters);
    expect(Object.keys(result)).toEqual(
      expect.arrayContaining(desiredObjectKeys)
    );
  });
});
