import useGithubUser from "./useGithubUser";


function GitHubUser({username}){
    const {data, isLoading, error, refreshUsers} = useGithubUser(username);
    
    return (
    <div>
        {data ? <div>
            <h2>{data.name}</h2>
            <img src={data.avatar_url} alt="avatar" />
        </div> : <p>No user</p>}
        {error && <p>{`Error ${error}`}</p>}
        {isLoading && <p>Loading...</p>}
        <button onClick={refreshUsers}>Refresh</button>
    </div>
    )
}

export default GitHubUser;