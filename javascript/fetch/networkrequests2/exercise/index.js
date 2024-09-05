const url = "https://jsonplaceholder.typicode.com/posts" //end-point
const data = {
    title : "todo title",
    completed : true,
}

async function postData (link, info){
    //enviar informacion
    const postRequest = await fetch(link, {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
            "Content-Type": "application/json",
        }
    })

    const postAnswer = await postRequest.json()
    console.log(postAnswer);
}

postData(url, data)