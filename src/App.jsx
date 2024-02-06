import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ArticleList from "./components/ArticleList";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticleDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
