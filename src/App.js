import './App.css';
import "primereact/resources/themes/tailwind-light/theme.css"
import 'primereact/resources/primereact.min.css'
import "./style/tailwind.css"
import Main from './page/Main/main';


function App() {

  return (
    <div className="App" onScroll={() => console.log("Helo")}>
      <Main />
    </div>
  );
}

export default App;
