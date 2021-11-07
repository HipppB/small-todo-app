import TodoItem from "./TodoItem";
export default function TodoList({
  toDoList,
  handleToggle,
  handleChange,
  handleToggleDelete,
}) {
  return (
    <div>
      {toDoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          handleToggle={handleToggle}
          handleChange={handleChange}
          handleToggleDelete={handleToggleDelete}
        />
      ))}
    </div>
  );
}
