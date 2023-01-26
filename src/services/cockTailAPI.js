export const fetchByIngredient = async (searchInput) => {
  try {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`;
    const response = await fetch(URL);

    if (!response.ok) {
      const newError = await response.json();
      throw newError.message;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchByName = async (searchInput) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`;

  const response = await fetch(URL);

  if (!response.ok) {
    const newError = await response.json();
    throw newError.message;
  }

  const data = await response.json();

  return data;
};

export const fetchByFirstLetter = async (searchInput) => {
  try {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInput}`;

    const response = await fetch(URL);

    if (!response.ok) {
      const newError = await response.json();
      throw newError.message;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApiCockTail = async (selected, searchInput) => {
  console.log(searchInput);
  switch (selected) {
  case 'ingredient':
    return fetchByIngredient(searchInput);
    // break;

  case 'name':
    return fetchByName(searchInput);
    // break;

  case 'first-letter':
    if (selected.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
    return fetchByFirstLetter(searchInput);

    // break;

  default:
    break;
  }
};
