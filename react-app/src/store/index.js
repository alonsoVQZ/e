import { configureStore } from '@reduxjs/toolkit';
import testReducer from './test'
import sessionReducer from './session';

const store = configureStore({
    reducer: {
        session: sessionReducer
    }
});

export default store;