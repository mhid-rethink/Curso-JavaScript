const getCharacter = async (id) => {
  try {
    const url = `https://swapi.dev/api/people/${id}`;
    const { name, height, mass, birth_year } = await fetch(url).then(
      (request) => request.json()
    );
    return {
      name,
      height,
      mass,
      birth_year,
    };
  } catch (error) {
    console.log(error);
  }
};

const getCharacters = async (start, end = start) => {
  const characters = [];
  for (let index = start; index <= end; index++) {
    characters.push(await getCharacter(index));
  }
  console.log(characters);
};

getCharacters(80);
