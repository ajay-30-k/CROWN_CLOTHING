import { Useractiontypes } from "./User.action.types";

const INITIAL_STATE = {
  currentUser: null,
  isAdmin: false,
};
const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Useractiontypes.SET_CURRENT_USER:
        return{
            ...state,
            currentUser:action.payload
        }
        case Useractiontypes.SET_ADMIN_STATUS:
          return {
            ...state,
            isAdmin: action.payload
          };

    default:
     return state
     
  }
};
export default UserReducer