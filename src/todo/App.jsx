import React, {
  useState,
  useEffect
} from 'react';

import {
  TodoForm
} from './TodoForm';

import {
  Todo
} from './Todo';

// ...

const appStyles = {
  width: 'calc(100% / 3)',
  margin: '150px auto auto'
};

// ...

export const App = () => {
  const [
    todos,
    setTodos
  ] = useState(null);

  const [
    status,
    setStatus
  ] = useState('idle');

  useEffect(() => {
    if (status !== 'idle') {
      return
    }

    const fetchTodos = async () => {
      setStatus('loading');

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();

        setTodos(todos.map(({ userId, ...todo }) => todo));
        setStatus('success');
      } catch (error) {
        setStatus('failure');
      }
    };

    fetchTodos();
  }, [status]);

  useEffect(() => {
    document.title = `Todos (${todos
      ? todos.reduce(
        (count, todo) => (!todo.completed ? ++count : count),
        0
      )
      : 'N/A'})`
  });

  const createTodo = title => {
    setTodos([
      {
        id: Date.now(),
        completed: false,

        title
      },
      ...todos
    ]);
  };

  const deleteTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const updateTodo = todoId => {
    setTodos(todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }

      return todo;
    }));
  };

  // ...

  if (status === 'idle') {
    return null;
  }

  if (status === 'loading') {
    return 'Loading todos...';
  }

  if (status === 'failure') {
    return 'An error occurred while fetching todos!';
  }

  return (
    <>
      <button onClick={() => setStatus('idle')}>Refetch</button>
      <div style={appStyles}>
        <TodoForm createTodo={createTodo} />
        {todos?.map(todo => (
          <Todo
            key={todo.id}

            {...todo}

            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </>
  )
}