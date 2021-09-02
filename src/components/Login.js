import "../css/Login.css";
import logo from "../logo.svg";

function Login() {
  function handleSubmit(eve) {
    eve.preventDefault();
  }

  return (
    <section className="page card">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Would you Rather?</h2>
      </header>

      <form onSubmit={handleSubmit} className="form-group">
        <p className="">Select user</p>
        <select className="font">
          <option default="" disabled="" value="">
            Select User
          </option>
          <option value="">Paritosh Sahni</option>
          <option>Tyler Mcginnis</option>
          <option>John Doe</option>
          <option>Popoye</option>
        </select>
        <button className="login-btn">Login</button>
      </form>
    </section>
  );
}

export default Login;
