const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");
const ERROR_STATUS = 404;
const SUCCESS_STATUS = 200;
const getCharById = async (request, response) => {
  try {
    const { id } = request.params;
    const { data } = await axios(`${URL}/${id}`);
    if (!data.name) throw new Error(`ID: ${id} Not found`);
    const character = {
      id: data.id,
      name: data.name,
      status: data.status,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
    };
    return response.status(SUCCESS_STATUS).json(character);
    // return response.status(ERROR_STATUS).send("Not found");
  } catch (error) {
    // console.log(error.response.data.error);
    return error.message.includes("ID")
      ? response.status(ERROR_STATUS).send(error.message)
      : response.status(500).send(error.response.data.error);
  }
};

module.exports = {
  getCharById,
};