import { useEffect } from "react";
import useGithubUser from "./useGithubUser";

function GitHubUser({username}){
    const {data, load, error, fetchUserData} = useGithubUser(username);
    useEffect(()=>{
        fetchUserData()
    }, [username])
    return (
    <div>
        {data ? <div>
            <h2>{data.name}</h2>
            <img src={data.avatar_url} alt="avatar" />
        </div> : <p>No user</p>}
        {error && <p>{`Error ${error.status} ${error.message}`}</p>}
        {load && <p>Loading...</p>}
    </div>
    )
}

export default GitHubUser;