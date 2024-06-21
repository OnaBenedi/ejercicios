import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShowGithubUser() {
  const { username } = useParams();
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    const data = await fetch(`https://api.github.com/users/${username}`);
    const retreivedData = await data.json();

    setUserData(retreivedData);
  };

  useEffect(() => {
    fetchData();
  }, [username]);
  return (
    <div>
      {userData ? (
        <div>
          <img src={userData.avatar_url} alt="avatar-img" />
          <h1>{userData.login}</h1>
        </div>
      ) : null}
    </div>
  );
}

export default ShowGithubUser;
