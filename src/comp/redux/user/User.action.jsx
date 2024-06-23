import { Useractiontypes } from "./User.action.types"



export const SetCurrentUser=user=>({
    type: Useractiontypes.SET_CURRENT_USER,
    payload:user
})

export const setAdminStatus = isAdmin => ({
    type: Useractiontypes.SET_ADMIN_STATUS,
    payload: isAdmin
  });