import { ACTION_ADD, ACTION_REMOVE, ACTION_UPDATE } from '../actions/appActions'

export interface appReducerState{
    todos: {txt: string,id: string}[]
}

const initalState: appReducerState = {
    todos: [{txt: 'hello',id: 'rvej32'},{txt: 'helvdfflo',id: 'rvevdfj32'},{txt: 'hellyuo',id: 'rvtrhej32'}]
}

export function reducer(state = initalState, action): appReducerState{
    switch(action.type){
        case ACTION_ADD:
        return {
            ...state,
            todos: [...state.todos, action.payload]
        }
        case ACTION_REMOVE:
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
        }
        case ACTION_UPDATE:
        let idx = state.todos.findIndex(todo => todo.id === action.payload.id)
        state.todos[idx] = action.payload
        return {
            ...state
        }
    }
    return state
}