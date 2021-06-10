export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotle = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  console.log(action);
  console.log(state.basket);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      // logic
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log(index);
      if (index >= 0) {
        // Remove it
        newBasket.splice(index, 1);
        console.log(newBasket);
      } else {
        console.log("WARN.........ing");
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      // total cool
      return state;
  }
};

export default reducer;
