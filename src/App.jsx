import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
