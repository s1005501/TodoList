import { useState } from "react";

function AddInput({todos,setTodos}) {
    const [inputValue, setInputValue] = useState("");

    const creatTodo = (newTodo) => {
        return (newTodo = {
            id: Number(new Date()),
            text: inputValue,
            completed: false,
            editing: false,
        });
    };

    // 添加
    const addTodo = (todo, todos) => {
        return [todo, ...todos];
    };
    return (
        <>
            <input
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
            />
        </>
    );
}

export default AddInput;
