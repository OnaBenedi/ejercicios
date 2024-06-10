function UncontrolledLogin() {
    function handleFormSubmit(event){
        event.preventDefault()

        // const username = event.target.elements.namedItem("username").value;
        // const password = event.target.elements.namedItem("password").value;
        // const remember = event.target.elements.namedItem("remember").checked;

        const formData = new FormData(event.target)

        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            remember: formData.get('session') === "on" ? true : false,
        }
        console.log(`Uncontrolled form login info: `, data);
    }
  return (
    <form onSubmit={handleFormSubmit}>
        <h1>Uncontrolled form!</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username2" />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password"/>

        <label htmlFor="remember">Remember user:</label>
        <input type="checkbox" name="remember" />
        <button>Login</button>
        <button type="reset">Reset</button>
    </form>
  )
}

export default UncontrolledLogin