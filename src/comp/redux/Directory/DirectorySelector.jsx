import { createSelector } from "reselect";

const selectDirectory=state=>state.directory

export const selecDrirecorySection=createSelector(
   [selectDirectory],
   directory=>directory.sections
)