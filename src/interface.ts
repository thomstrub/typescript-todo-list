import React from "react";

// Todo interface
export interface TodoInterface {
    id: string;
    name: string;
    isCompleted: boolean;
}

// For Todo form interface
export interface TodoFormInterface {
    todos: TodoInterface[];
    handleTodoCreate: (todo: TodoInterface) => void; //return type is void
}

// For Todo list interface
eport interface TodoListInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTodoRemove: (id: string) => void;
    handleTodoComplete: (id: string) => void;
    todos: TodoInterface[]
}

// For Todo item interface
export interface TodoItemInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTodoRemove: (id: string) => void;
    handleTodoComplete: (id: string) => void;
    todo: TodoInterface;
}