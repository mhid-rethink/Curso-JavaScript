let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// 1
let languageInput = "Java";
objectWithNewLanguage = (newLanguage) =>
  programming.languages.push(newLanguage);
objectWithNewLanguage(languageInput);

// 2
difficultyInput = 9;
objectWithNewDifficulty = (difficulty) => (programming.difficulty = difficulty);
objectWithNewDifficulty(difficultyInput);

// 3
keyToDelete = "jokes";
objectWithRemovedKey = (key) => delete programming[key];
objectWithRemovedKey(keyToDelete);

// 4
keyToAdd = "isFun";
valueToAdd = true;
objectWithAddedKey = (key, value) => (programming[key] = value);
objectWithAddedKey(keyToAdd, valueToAdd);

// 5
allLanguages = () => console.log(programming.languages);
allLanguages();

// 6
objectKeys = (object = {}) => console.log(Object.keys(object));
objectKeys(programming);

// 7
objectValues = (object = {}) => console.log(Object.values(object));
objectValues(programming);
console.log(programming);
