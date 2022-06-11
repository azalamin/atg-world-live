import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Home from './components/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Blogs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
