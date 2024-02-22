import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import '../App.css';

function AddTaskForm() {
    const [title, setTitle] = useState('');
    const { addTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addTask(title);
            setTitle('');
        }
    };

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <input className="add-task-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button className="add-task-button" type="submit">˚ʚ♡ɞ˚Add</button>
        </form>
    );
}

export default AddTaskForm;
