import Delete from "../images/delete.png";
import Checkbox from "../images/checkbox.png";
import CheckboxChecked from "../images/checkboxChecked.png";
export default function TodoItem({
  item,
  handleToggle,
  handleChange,
  handleToggleDelete,
}) {
  //Don't display deleted Items
  if (!item.deleted) {
    return (
      <div className={"toDoItem"}>
        <img
          src={item.complete ? CheckboxChecked : Checkbox}
          className={"Icon"}
          alt="checkbox"
          onClick={() => handleToggle(item.id)}
        />

        <input
          value={item.task}
          onChange={(e) => handleChange(item.id, e.target.value)}
        />
        <img
          src={Delete}
          alt="deleteIcon"
          className={"Icon"}
          onClick={() => handleToggleDelete(item.id)}
        />
        <br />
      </div>
    );
  }
  return <></>;
}
