import { useState, useEffect } from "react";
import "../TodoApp.css";
import { upload } from "@testing-library/user-event/dist/upload";
import AddInput from "./AddInput";
import TodoItem from "./TodoItem";
import TypeButton from "./TypeButton";

function TodoApp() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "買牛奶",
            completed: false,
            editing: false,
        },
        {
            id: 2,
            text: "學react",
            completed: true,
            editing: false,
        },
    ]);

    // 看一下有沒有改到
    useEffect(() => {
        console.log(todos);
    }, [todos]);

    // 添加
    // const [inputValue, setInputValue] = useState("");

    // const creatTodo = (newTodo) => {
    //     return (newTodo = {
    //         id: Number(new Date()),
    //         text: inputValue,
    //         completed: false,
    //         editing: false,
    //     });
    // };

    // const addTodo = (todo, todos) => {
    //     return [todo, ...todos];
    // };

    // // 打勾變顏色
    // const toggleCompleted = (arr, id) => {
    //     return arr.map((v, i) => {
    //         if (v.id === id) return { ...v, completed: !v.completed };
    //         else return { ...v };
    //     });
    // };

    // 刪除
    // const deletItem = (arr, id) => {
    //     return arr.filter((v, i) => {
    //         return v.id !== id;
    //     });
    // };

    // 編輯
    // const [inputValueEdit, setInputValueEdit] = useState("");
    // const toggleEdit = (arr, id) => {
    //     return arr.map((v, i) => {
    //         if (v.id === id) return { ...v, editing: !v.editing };
    //         else return { ...v, editing: false };
    //     });
    // };
    // const editTodo = (arr, id, newText) => {
    //     return arr.map((v, i) => {
    //         if (v.id === id) return { ...v, text: newText, editing: false };
    //         else return { ...v };
    //     });
    // };

    // 過濾
    // const filterOptions = ["所有", "進行中", "已完成"];
    const [myFilter, setMyFilter] = useState("所有");
    // const filterTodo = (arr, page) => {
    //     if (page === "進行中") return arr.filter((v, i) => !v.completed);
    //     if (page === "已完成") return arr.filter((v, i) => v.completed);
    //     return arr;
    // };

    return (
        <>
            <h1>待辨事項</h1>
            <AddInput todos={todos} setTodos={setTodos} />
            {/* <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        setTodos(addTodo(creatTodo(inputValue), todos));
                        setInputValue("");
                    }
                }}
            /> */}
            <hr />

            <ul>
                <TodoItem
                    todos={todos}
                    setTodos={setTodos}
                    myFilter={myFilter}
                />
                {/* {filterTodo(todos, myFilter).map((v, i) => {
                    return (
                        
                        <li key={v.id} className={v.completed ? "active" : ""}>
                            <input
                                type="checkbox"
                                checked={v.completed}
                                onChange={() => {
                                    setTodos(toggleCompleted(todos, v.id));
                                }}
                            />
                            {v.editing ? (
                                <>
                                    <input
                                        type="text"
                                        value={inputValueEdit}
                                        onChange={(e) => {
                                            setInputValueEdit(e.target.value);
                                        }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setTodos(
                                                editTodo(
                                                    todos,
                                                    v.id,
                                                    inputValueEdit
                                                )
                                            );
                                        }}
                                    >
                                        儲存
                                    </button>
                                </>
                            ) : (
                                <>
                                    {v.text}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setTodos(deletItem(todos, v.id));
                                        }}
                                    >
                                        X
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setTodos(toggleEdit(todos, v.id));
                                        }}
                                    >
                                        編輯
                                    </button>
                                </>
                            )}
                        </li>
                    );
                })} */}
            </ul>
            <hr />
            <TypeButton myFilter={myFilter} setMyFilter={setMyFilter} />
            {/* {filterOptions.map((v, i) => {
                return (
                    <button
                        key={i}
                        type="button"
                        className={
                            v === myFilter
                                ? "filter-button-active"
                                : "filter-button-normal"
                        }
                        onClick={() => {
                            setMyFilter(v);
                        }}
                    >
                        {v}
                    </button>
                );
            })} */}
        </>
    );
}

export default TodoApp;
