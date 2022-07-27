import React, {useEffect} from 'react';
import { Container } from "@mui/material";

import './ToDo.scss';
import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoList from "./ToDoList/ToDoList";
import {createTodoApi, deleteTodoApi, getTodos, updateTodoApi} from "./todoApi";
import {useDispatch, useSelector} from "react-redux";
import {createTodoAction, deleteTodoAction, setTodosAction, updateTodosAction} from "../../store/actions";

function ToDo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        async function initTodos() {
            const todos = await getTodos();
            dispatch(setTodosAction(todos));
        }

        initTodos();
    }, [])

    async function changeStatus(id) {
        try {
            const allTodos = [...todos];
            const todo = allTodos.find((item) => item.id === id);
            todo.done = !todo.done;

            await updateTodoApi(id, todo);
            dispatch(updateTodosAction(allTodos));
        } catch (e) {
            console.warn(e);
        }
    }

    async function deleteTodo(id) {
        try {
            await deleteTodoApi(id);
            dispatch(deleteTodoAction(id));
        } catch (e) {
            console.warn(e);
        }
    }

    async function addTodo(todo) {
        try {
            const newTodo = await createTodoApi(todo);
            dispatch(createTodoAction(newTodo));
        } catch(e) {
            console.warn(e);
        }
    }

    return (
        <Container maxWidth="sm">
            <ToDoForm onAddTodo={addTodo}></ToDoForm>
            <ToDoList todos={todos} onChangeStatus={changeStatus} onDelete={deleteTodo}></ToDoList>
        </Container>
    );
}

export default ToDo;
