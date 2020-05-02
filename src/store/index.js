import { createStore } from 'redux';
import rootReducer from './reducers';

const rootStore = createStore(rootReducer);

export default rootStore;