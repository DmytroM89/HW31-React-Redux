export const ACTION_SET_TODOS = '[ToDos] set todos';
export const ACTION_CREATE_TODO = '[ToDos] create todo';
export const ACTION_UPDATE_TODOS = '[ToDos] update todo';
export const ACTION_DELETE_TODO = '[ToDos] delete todo';

export function setTodosAction(todos) {
    return {
        type: ACTION_SET_TODOS,
        payload: todos
    }
}

export function createTodoAction(todo) {
    return {
        type: ACTION_CREATE_TODO,
        payload: todo
    }
}

export function updateTodosAction(todos) {
    return {
        type: ACTION_UPDATE_TODOS,
        payload: todos
    }
}

export function deleteTodoAction(id) {
    return {
        type: ACTION_DELETE_TODO,
        payload: id
    }
}
