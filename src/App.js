import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetails from "./components/BookDetails/BookDetails";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { AppProvider } from "./context";


function App() {
  return (
    <AppProvider>
    <BrowserRouter>
    <div className="App container">
    <Navbar/>
    <Routes>
    <Route path = "/" element = {<Home />}/>
    <Route path = "/book" element = {<Home />}/>
    <Route path = "/books/:id" element = {<BookDetails />} />
    <Route path = "/favorites" element = {<Favorites />} />

    

    </Routes>
    </div>
    </BrowserRouter>
    </AppProvider>
  );
}

export default App;
