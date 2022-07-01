import React from 'react';

const AllTodo = ({ alltodo }) => {
    // console.log(alltodo)
    const { name } = alltodo
    return (
        <div >
            <div className='border my-3 flex justify-between  '>
                <div><input type="checkbox" /> {name}</div>
                <i class="fa-solid fa-pen-to-square"></i>

            </div>






        </div>
    );
};

export default AllTodo;