import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import ArticleList from "./components/ArticleList/ArticleList";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import Home from "./components/Home/Home";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import UserList from "./components/UserList/UserList";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "tickle122",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });
  return (
    <>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<ArticleDetails />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
