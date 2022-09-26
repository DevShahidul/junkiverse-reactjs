import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import { Landing } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
