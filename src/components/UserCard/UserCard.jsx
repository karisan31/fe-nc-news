import "./UserCard.css";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function UserCard(props) {
  const { user } = props;
  const { setLoggedInUser } = useContext(UserContext);
  return (
    <section className="user-card">
      <h2 className="username">{user.username}</h2>
      <img
        className="avatar"
        src={user.avatar_url}
        alt={`avatar for ${user.author}`}
      />
    </section>
  );
}
