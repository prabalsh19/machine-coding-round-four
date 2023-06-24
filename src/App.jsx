import { Feed } from "./components/Feed/Feed";
import "./App.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Sort } from "./components/Sort/Sort";

function App() {
  return (
    <div className="main">
      <Sidebar />
      <Feed />
      <Sort />
    </div>
  );
}

export default App;
