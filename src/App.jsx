import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import ClassComponent from "./components/ClassComponent";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClassComponent content="Ciao a tutti!" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <MyComponent numero1="1" numero2="2" numero3="3" numero4="4" />
        <ButtonComponent bgColor="blue" textSize="40" buttonText="Button" />
        <ImageComponent width="500px" height="300px" url="https://amerlin.keantex.com/wp-content/uploads/2021/03/react_routes.png" alt="React_logo"/>
        <ButtonComponent bgColor="green" textSize="40" buttonText="Clicca sulla capra" />
        <ImageComponent width="500px" height="300px" url="https://www.petz.com.br/blog/wp-content/uploads/2022/01/cabra-de-estimacao-3.jpg" alt="Capra"/>
      </header>
    </div>
  );
}

export default App;
