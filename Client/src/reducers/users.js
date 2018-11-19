const initialState = {
  users: [],
  loggedIn: true
}

export default function userReducer(state = initialState, action){
  console.log(initialState);
  return state;
}