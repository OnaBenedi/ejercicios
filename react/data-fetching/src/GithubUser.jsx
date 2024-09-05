import { useEffect, useState } from "react";

function GithubUser({username}) {
    const [userData, setUserData] = useState({})

    async function fetchUser (user){
        const getInfo = await fetch(`https://api.github.com/users/${user}`);
        const data = await getInfo.json();

        setUserData(data)
    }
    useEffect( ()=>{fetchUser(username)})

  return (
    <div>GithubUser: {userData.login}
    <img src={userData.avatar_url} alt="userImg" />
    Name: {userData.name}</div>
  )
}

export default GithubUser

//https://github.com/OnaBenedi
//