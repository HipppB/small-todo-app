import { Switch, Route } from "react-router-dom";

import ToDoApp from "./ToDoApp/TodoApp";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ToDoApp} />
        <Route path="*" component={() => "404 PAGE NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;
