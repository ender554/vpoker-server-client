const initialState = {
  loggedIn: true
}

export const userReducer = (state = initialState, action) => {
  console.log(initialState);
  return state;
}