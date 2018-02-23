import { Store } from 'vuex';

import state from './state';
import mutations from './mutations';
import actions from './actions';

const createStore = () => {
    return new Store({
        state,
        mutations,
        actions,
    });
}

export default createStore;
