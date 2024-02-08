import "./UserCard.css";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function UserCard(props) {
  const { user } = props;
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <section className="user-card">
      <h2 className="username">{user.username}</h2>
      <img
        className="avatar"
        src={user.avatar_url}
        alt={`avatar for ${user.author}`}
      />
      <br />
      {user.username !== loggedInUser.username ? (
        <button
          className="login-button"
          onClick={() => {
            setLoggedInUser(user);
          }}
        >
          Login
        </button>
      ) : null}
    </section>
  );
}
