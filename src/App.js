import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import { Junkie, Landing } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
            <Route path="/junkie" element={<Junkie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
