import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./Root-reducer";
import { persistStore} from "redux-persist";
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}
const store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(...middleware))

  );
  export const persist =persistStore(store)
export default store