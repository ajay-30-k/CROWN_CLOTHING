import { createSelector } from "reselect";
const Collection_Id_Map={
  hats:1,
  sneakers:2,
  jackets:3,
  womens:4,
  mens:5
}
const selectShop = (state) => state.shop;
export const selectCollections = createSelector(
  [selectShop],
  shop =>{console.log('selectCollections:', shop.collections);
    return shop.collections}
);
export const selectCollection=collectionUrlParam=>createSelector(
  [selectCollections],
  collections => {
    console.log('selectCollection:', collections);
    return collections ? collections.find(collection => collection.id === Collection_Id_Map[collectionUrlParam]) : null;
  })