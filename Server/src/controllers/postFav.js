const { Favorite } = require("../DB_connection");

module.exports = async (request, response) => {
  try {
    // console.log(request.body);
    const {id, name, origin, status, image, species, gender } = request.body;
    if (!id || !name || !origin || !status || !image || !species || !gender)
      return response.status(401).send("Faltan datos");
    await Favorite.findOrCreate({
      where: { name, origin, status, image, species, gender },
    });
    const allFavorites = await Favorite.findAll;
    return response.status(200).json(allFavorites);
  } catch (error) {
    return response.status(401).send(error.message);
  }
};
