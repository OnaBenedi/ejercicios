import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function GitHubUsers() {
  const [fetchAnswer, setFetchAnswer] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(false);

  useEffect(() => {
    setFetchLoading(true);
    fetch("https://api.github.com/users")
      .then((resp) => resp.json())
      .then((respJson) => setFetchAnswer(respJson))
      .catch((err) => setFetchError(err))
      .finally(setFetchLoading(false));
  });

  return (
    <div>
      {fetchAnswer?
      <ul>
        {fetchAnswer.map((user, index)=>{
          return <li key={index}>
            <Link to={`/users/${user.login}`}>{user.login}</Link></li>
        })}
      </ul>: fetchError ? console.log(fetchError) : null}
      <Outlet/>
    </div>
  );
}

export default GitHubUsers;
