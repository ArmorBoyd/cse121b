// api.js
export async function getPokemonData(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  