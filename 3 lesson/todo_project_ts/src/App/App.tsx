// App - компонент
import React, { Component } from "react"
import { TodoList, Header, SearchInput, AddInput } from "../components"
import { ITodo } from "../types"

// JSX - компоненты
// JSX - элементы
// const App = () => {


//     return (
//         <div>
//             <Header title="Todo App" />
//             <TodoList />
//         </div>
//     )
// }

// export default App;

// Property drill

interface IAppState {
    todos: ITodo[]
    searchText: string
}

export default class App extends Component<{}, IAppState> {

    state = {
        todos: [
            { id: 1, text: 'Learn React', done: true, important: true },
            { id: 2, text: 'Drink Water', done: false, important: false },
            { id: 3, text: 'Drink Soda', done: false, important: false },
        ],
        searchText: ''
    }

    onSearch = (value: string) => {
        this.setState({ searchText: value })
    }

    onChangeStateTodos = (id: number, field: string) => {
        this.setState((state) => {
            // 1. нашли индекс элемента на который кликнули
            const todoIdx = state.todos.findIndex(item => item.id === id)
            // 2. создали копию с противоположным значением
            const newTodo = {
                ...state.todos[todoIdx],
                // @ts-ignore
                [field]: !state.todos[todoIdx][field]
            }

            // 3. создали новый массив с обновленной таской
            const before = state.todos.slice(0, todoIdx);
            const after = state.todos.slice(todoIdx + 1)

            return {
                todos: [...before, newTodo, ...after]
            }
        })
    }


    handleDelete = (id: number) => {
        this.setState((state) => {
            // const alternativeResult = state.todos.filter(item => item.id !== id);
            const todoIdx = state.todos.findIndex(item => item.id === id);

            const before = state.todos.slice(0, todoIdx)
            const after = state.todos.slice(todoIdx + 1)
            return {
                todos: [...before, ...after]
            }
        })
    }


    onAddTask = (text: string) => {
        this.setState((state) => {
            const newTodo: ITodo = {
                id: Math.random(),
                text,
                done: false,
                important: false
            }
            return {
                todos: [...state.todos, newTodo]
            }
        })
    }

    render() {
        const { searchText, todos } = this.state;
        const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchText.toLowerCase()))
        
        return (
            <div>
                <Header title="Todo App" />
                <AddInput onAdd={this.onAddTask} />
                <SearchInput
                    search={this.state.searchText}
                    onSearch={this.onSearch}
                />
                <TodoList
                    todos={filteredTodos}
                    onDone={(id) => this.onChangeStateTodos(id, 'done')}
                    onImportant={(id) => this.onChangeStateTodos(id, 'important')}
                    onDelete={this.handleDelete}
                />
            </div>
        )
    }
}