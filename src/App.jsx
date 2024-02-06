import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import ArticleList from "./components/ArticleList/ArticleList";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticleDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
