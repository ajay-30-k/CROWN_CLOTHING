import { createSelector } from "reselect";
const selectUser=state=>state.user
const selectcart=state=>state.cart
export const selectCurrentUser =createSelector(
    [selectUser,],
    (user)=>user.currentUser
)

export const selectIsAdmin = createSelector(
    [selectUser],
    user => user.isAdmin
  );