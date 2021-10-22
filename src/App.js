import { Switch, Route } from "react-router-dom";

import ToDoApp from "./ToDoApp/TodoApp";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrKYdV421sNcSjHoZaN_A1qPQvBnOcQGM",
  authDomain: "littletodoapi.firebaseapp.com",
  projectId: "littletodoapi",
  storageBucket: "littletodoapi.appspot.com",
  messagingSenderId: "836485852837",
  appId: "1:836485852837:web:f12319ffc8c84f4d4ce74c",
  measurementId: "G-53E7ZWG766",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
function App() {
  // async function getCities() {
  //   //const citiesCol = collection();
  //   //const citySnapshot = await getDocs(citiesCol);
  //   //const cityList = citySnapshot.docs.map((doc) => doc.data());
  //   return citiesCol;
  // }
  //getCities();
  console.log(db);

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
