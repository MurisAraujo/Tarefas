import { createStore, combineReducers } from 'redux';
import userAuthReducer from './userAuth/userAuthReducer';
import taskStatesReducer from './taskStates/taskStatesReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  permissions: userAuthReducer,
  taskStates: taskStatesReducer
})

const persistConfig = {
  key: 'primary',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);


