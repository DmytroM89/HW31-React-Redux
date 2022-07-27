import {ACTION_CREATE_TODO, ACTION_DELETE_TODO, ACTION_SET_TODOS, ACTION_UPDATE_TODOS} from '../actions';

const initialState = {
    todos: []
}

export default function rootReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ACTION_SET_TODOS:
            return {...state, todos: payload};
        case ACTION_CREATE_TODO:
            return {...state, todos: [...state.todos, payload]};
        case ACTION_UPDATE_TODOS:
            return {...state, todos: payload};
        case ACTION_DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== payload)};
        default:
            return state;
    }
}
