import clsx from "clsx";

export default function TodoItem({ todo, remove, toggle }) {
  return (
    <li
      className={clsx(
        "flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm transition duration-200 ease-in-out",
        todo.completed
          ? "opacity-60 line-through text-gray-500"
          : "text-gray-800"
      )}
    >
      <span className="flex-grow cursor-pointer text-lg">{todo.text}</span>

      <div className="flex items-center space-x-2">
        <button
          // onClick={() => onToggle(todo.id)}
          className={`p-2 rounded-full transition duration-300 ease-in-out
            ${
              todo.completed
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-300 hover:bg-gray-400"
            }
            text-white focus:outline-none focus:ring-2 focus:ring-opacity-75
            ${todo.completed ? "focus:ring-green-400" : "focus:ring-gray-400"}`}
          aria-label={todo.completed ? "미완료로 표시" : "완료로 표시"}
          onClick={() => toggle(todo.id)}
        >
          {todo.completed ? "체크 완료" : "체크 하기"}
        </button>
        <button
          onClick={() => remove(todo.id)}
          className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
          aria-label="삭제"
        >
          X
        </button>
      </div>
    </li>
  );
}
