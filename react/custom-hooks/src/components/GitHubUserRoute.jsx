import { useEffect } from "react";
import useGithubUser from "./useGithubUser";
import { useParams } from "react-router-dom";

function GitHubUserRoute(){
    const {username} = useParams()
    const {data, load, error, fetchUserData} = useGithubUser(username);
    useEffect(()=>{
        fetchUserData()
    }, [username])
    return (
    <div >
        {username?username: null}
        {data ? <div>
            <h2>{data.name}</h2>
            <img src={data.avatar_url} alt="avatar" />
        </div> : <p>No user</p>}
        {error && <p>{`Error ${error.status} ${error.message}`}</p>}
        {load && <p>Loading...</p>}
    </div>
    )
}

export default GitHubUserRoute;