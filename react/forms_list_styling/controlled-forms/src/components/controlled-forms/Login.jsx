import { useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    remember: false,
  };
}

function Login() {
  const [data, setData] = useState(createData());

  function updateData(event) {
    const name = event.target.name;
    const type = event.target.type;
    const value = event.target.value;
    const checked = event.target.checked;
    setData((d) => {
      const update = {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };

      return update;
    });
  }

  function handleLogin(event) {
    event.preventDefault(); //this prevents the default behavior of the form element
    console.log(
      `Controlled form: username: ${data.username} password: ${data.password} remember: ${data.remember}`
    );
  }

  function resetForm(event) {
    event.preventDefault();
    setData(createData());
  }
  return (
    <>
      <form onSubmit={handleLogin}>
        <h1>Controlled form!</h1>
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          type="text"
          id="username"
          value={data.username}
          onChange={updateData}
        />
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          id="password"
          value={data.password}
          onChange={updateData}
        />
        <label htmlFor="remember">Remember:</label>
        <input
          name="remember"
          type="checkbox"
          id="remember"
          checked={data.remember}
          onChange={updateData}
        />
        <button
          disabled={!data.username || !data.password}
          onClick={handleLogin}
        >
          Login
        </button>
        <button type="button" onClick={resetForm}>
          Reset form
        </button>
      </form>
    </>
  );
}

export default Login;
