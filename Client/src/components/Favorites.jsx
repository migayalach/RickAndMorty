import React from "react";
import { connect } from "react-redux";
import Card from "../components/Card";

const Favorites = ({myFavorites}) => {
  return (
    <div>
    {
      myFavorites?.map((favoritos)=>{
        return(
          <Card
            key={favoritos.id}
            id={favoritos.id}
            name={favoritos.name}
            species={favoritos.species}
            gender={favoritos.gender}
            image={favoritos.image}
            onClose={favoritos.onClose}
         />
        );
      })
    }
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProp, null)(Favorites);
