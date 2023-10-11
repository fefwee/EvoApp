import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddTodo, TodoInterface, TodoStateModel } from './models/todo.model';


@State<TodoStateModel>({
    name: 'TodoState',
    defaults: {
        todos: []
    }
})

@Injectable()
export class TodoState {

    @Selector()
    static getTodo(state: TodoStateModel): TodoInterface[] {
        return state.todos;
    };

    @Action(AddTodo)
    TodoInterface(ctx: StateContext<TodoStateModel>, action: AddTodo) {
        const state = ctx.getState();
        ctx.patchState({
            todos: [
                ...state.todos,
                action.payload,
            ]
        })
    };
}