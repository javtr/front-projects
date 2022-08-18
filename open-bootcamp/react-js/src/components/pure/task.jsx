import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import '../../styles/task.scss'

function TaskComponent({ task }) {

    useEffect(() => {
        console.log('tarea creada');
        return () => {
            console.log(`la tarea ${task.name} fue desmontada`);
        };
    }, [task]);


  return (
    <div>
        <h2 className='task-name'>
            Nombre: {task.name}
        </h2>
        <h2>
            Descripcion: {task.description}
        </h2>
        <h2>
            Nivel: {task.level}
        </h2>
        <h2>
            Esta tarea esta: {task.completed? 'Completada':'Pendiente'}
        </h2>
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent
