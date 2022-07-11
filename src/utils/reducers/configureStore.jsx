import withRedux from 'next-redux-wrapper'
import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import { persistStore } from 'redux-persist';

//스토어생성
export const store = createStore(rootReducer);

//생성한 스토어를 persistStore로 감싸줌
export const persistor = persistStore(store);

export default { store, persistor };