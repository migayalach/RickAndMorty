import { ADD_FAV, REMOVE_FAV } from "./action-types";
const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      return { ...state, myFavorites: payload, allCharacters: payload };

    case "REMOVE_FAV":
      return { ...state, myFavorites: payload };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;

// const array = [1, 2, 3, 4, 5, 6, 7];
// const numero = 1;
// console.log([...array, numero]);

// console.log(

// );
// const newArray = array.filter((elementos) => {
//   return elementos !== numero;
// });

// console.log(newArray);

// const array1 = ["a", "b", "c"];
// array1.forEach((element) => console.log(element));

// for (let i = 0; i < array1.length; i++) {
//   console.log(array1[i]);
// }
