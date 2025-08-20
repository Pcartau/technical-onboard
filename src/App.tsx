import { useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Apprendre React", completed: false },
    { id: 2, title: "Coder un test technique", completed: true },
    { id: 3, title: "Réviser TypeScript", completed: false },
  ]);

  const toggleTodo = (id: number) => {
    const updated = todos;
    const todo = updated.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      setTodos(updated);
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>Ma Todo List</h1>

      {/* ➡️ TODO add form to code here */}

      {/* ➡️ Filter buttons to code here */}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.title}
            </label>
          </li>
        ))}
      </ul>

      {/* ➡️ Display the number of remaining tasks */}
    </div>
  );
}

export default App;
