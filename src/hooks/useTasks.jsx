import { useState } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learning JavaScript', date: '03/01/2024'},
    { id: 2, text: 'Reading', date: '04/05/2024'}
  ]);
  const [task, setTask] = useState('');
  const [animatingTasks, setAnimatingTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: task,
        date: new Date().toLocaleDateString()
      };
      setTasks([...tasks, newTask]);
      setTask('');
      setAnimatingTasks([...animatingTasks, newTask.id]);
    }
  };
  

  const deleteTask = (id) => {
    debugger
    const filteredTasks = tasks?.filter(task => task?.id !== id);
    setTasks(filteredTasks);
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  return {
    tasks,
    task,
    addTask,
    deleteTask,
    handleInputChange,
    animatingTasks
  };
};

export default useTasks;