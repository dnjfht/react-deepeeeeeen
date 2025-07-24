import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Toodos() {
  const inputRef = useRef(null);

  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos");
    return saveTodos ? JSON.parse(saveTodos) : [];
  });
  const [text, setText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setText("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          나의 투두리스트 📝
        </h1>

        <form onSubmit={addTodo} className="flex gap-3 mb-6">
          <input
            type="text"
            ref={inputRef} // useRef로 참조 연결
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="새로운 투두를 추가하세요..."
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700"
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-5 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            추가
          </button>
        </form>

        {todos.length === 0 ? (
          <p className="text-gray-500 text-center text-lg py-8">
            아직 투두가 없어요! ✨
          </p>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                remove={removeTodo}
                toggle={toggleCompleted}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
