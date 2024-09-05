import useSWR, { mutate } from "swr"

const fetcher = (url)=>fetch(url).then(resp => resp.json()).catch(err =>err)
function useGithubUser( username ) {
  const { data, error, isLoading, mutate} = useSWR(username? `https://api.github.com/users/${username}`: null, fetcher)

  function refreshUsers(){
    mutate()
  }

  return {
    data,
    error,
    isLoading,
    refreshUsers
  };
}

export default useGithubUser;
