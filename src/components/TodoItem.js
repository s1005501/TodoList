import { useState } from "react";

function TodoItem({ todos, setTodos, myFilter }) {
    const [inputValueEdit, setInputValueEdit] = useState("");

    const toggleEdit = (arr, id) => {
        return arr.map((v, i) => {
            if (v.id === id) return { ...v, editing: !v.editing };
            else return { ...v, editing: false };
        });
    };

    const editTodo = (arr, id, newText) => {
        return arr.map((v, i) => {
            if (v.id === id) return { ...v, text: newText, editing: false };
            else return { ...v };
        });
    };

    const deletItem = (arr, id) => {
        return arr.filter((v, i) => {
            return v.id !== id;
        });
    };

    // 打勾變顏色
    const toggleCompleted = (arr, id) => {
        return arr.map((v, i) => {
            if (v.id === id) return { ...v, completed: !v.completed };
            else return { ...v };
        });
    };

    const filterTodo = (arr, page) => {
        if (page === "進行中") return arr.filter((v, i) => !v.completed);
        if (page === "已完成") return arr.filter((v, i) => v.completed);
        return arr;
    };

    return (
        <>
            {filterTodo(todos, myFilter).map((v, i) => {
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
            })}
        </>
    );
}

export default TodoItem;
