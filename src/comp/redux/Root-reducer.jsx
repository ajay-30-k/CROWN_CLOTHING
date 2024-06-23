import { combineReducers } from "redux";
import UserReducer from "./user/User.reducer";
import cartreducer from "./cart/Cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./Directory/DirectoryRdeucer";
import ShopReducer from "./shop/ShopReducer";
const persistConfig={
    key:'root',
    storage,
    whiteList:['cart']
}
const rootReducer= combineReducers({
    user: UserReducer,
    cart:cartreducer,
    directory:directoryReducer,
    shop:ShopReducer
})
// export default combineReducers({
//     user: UserReducer,
//     cart:cartreducer
// })

export default persistReducer(persistConfig,rootReducer)