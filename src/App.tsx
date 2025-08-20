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

  // 💡 Features à implémenter :
  // 1. Corriger toggleTodo pour respecter l'immutabilité
  // 2. Ajouter un formulaire pour insérer une nouvelle tâche
  // 3. Ajouter un filtre (Tous | Actifs | Complétés)
  // 4. Afficher le nombre de tâches restantes
  // 5. (Bonus) Optimiser le rendu avec React.memo
  // 6. (Bonus) Extraire la logique dans un hook useTodos

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>Ma Todo List</h1>

      {/* ➡️ Formulaire d'ajout TODO à coder ici */}

      {/* ➡️ Boutons de filtre à coder ici */}

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

      {/* ➡️ Afficher le nombre de tâches restantes */}
    </div>
  );
}

export default App;
