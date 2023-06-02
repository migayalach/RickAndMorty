const { Favorite } = require("../DB_connection");

module.exports = async (request, response) => {
  try {
    const { id } = request.params;
    await Favorite.destroy({ where: { id } });
    const allFavorites = await Favorite.findAll();
    return response.status(200).json(allFavorites);
  } catch (error) {
    return response.status(500).send(error.message);
  }
};
