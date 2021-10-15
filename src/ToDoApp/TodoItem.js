export default function TodoItem({
  item,
  handleToggle,
  handleChange,
  handleToggleDelete,
}) {
  //Don't display deleted Items
  if (!item.deleted) {
    return (
      <div>
        <input
          type="checkbox"
          checked={item.complete}
          onChange={() => handleToggle(item.id)}
        />

        <input
          value={item.task}
          onChange={(e) => handleChange(item.id, e.target.value)}
        />
        <button onClick={() => handleToggleDelete(item.id)}>Supprimer</button>
        <br />
      </div>
    );
  }
  return <></>;
}
