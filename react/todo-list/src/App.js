import logo from "./logo.svg";
// import "./logo.svg
import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";

function App() {
  return (
    <> 
      <Header title="MyTodoList" searchBar={false}/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
