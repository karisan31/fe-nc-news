import "./UserList.css";
import { useEffect, useState } from "react";
import { getUsers } from "../../utils/api";
import Loading from "../Loading/Loading";
import UserCard from "../UserCard/UserCard";

export default function UserList() {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then(({ data }) => {
      setUsersData(data.users);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">NC Users</h1>
          <hr className="my-4" />
          <p className="lead">
            Not logged in? Login to your account to post comments!
          </p>
        </div>
      </div>
      <section className="user-list">
        {isLoading ? (
          <Loading />
        ) : (
          usersData.map((user, index) => {
            return <UserCard key={index + 1} user={user} />;
          })
        )}
      </section>
    </>
  );
}
