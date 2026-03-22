import { BrowserRouter, Route, Routes } from "react-router";
import HeaderBar from "./components/HeaderBar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderBar />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
