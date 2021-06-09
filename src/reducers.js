export const initialState = {
  basket: ["ram", "jam"],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic
      return { ...state, basket: [...state.basket, action.item] };
      break;
    case "REMOVE_FROM_BASE":
      // Cool
      return { state };
      break;
    default:
      // toatl cool
      return state;
  }
};

export default reducer;
