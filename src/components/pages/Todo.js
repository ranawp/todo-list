import React, { useState, useRef } from 'react';

const Todo = () => {
    const [inputValue, setInputValue] = useState();
    // const [todos, setTodos]=useState([]); 
    const todo = useRef(null);

    const onButtonClick = (e) => {
        const todoInput = todo.current.value;
        setInputValue(todoInput);
        // setTodos(value:[...todos,{text:inputValue,done:flase}])
    }
    return (
        <div className='flex mt-3 mb-3 justify-center items-center'>
            <div>
                <h1 className=' mt-10 mb-5'>Make your day with todo</h1>
                <div class="form-control" >
                    <label class="input-group">
                        <input ref={todo} type="text" />
                        <button onClick={onButtonClick}>Focus the input</button>
                    </label>
                </div>
                {inputValue}

            </div>
        </div>
    );
};

export default Todo;