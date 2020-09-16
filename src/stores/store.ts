import { createStore } from 'easy-peasy';
import storeModel from 'stores/model';

import HttpRequester from 'services/http/Http';
import axios from 'axios';
import Todo from 'services/http/Todo';

const httpRequesterService = new HttpRequester({
    requesterLibrary: axios
});

const todoService = new Todo(httpRequesterService);

export interface Injections {
    // httpRequesterService: typeof HttpRequester;
    todoService: Todo
}

const store = createStore(storeModel, {
    injections: {
        httpRequesterService,
        todoService
    }
});

export default store