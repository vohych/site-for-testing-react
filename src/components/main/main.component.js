import {Navigate, NavLink, useNavigate} from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <p>MAIN PAGEs</p>
      <NavLink to={'/thx'}>thx</NavLink>
      <br/>
      <button onClick={emulateSentMail}>emulate sent mail</button>
    </div>
  );

  function emulateSentMail(e) {
    e.preventDefault();
    console.info('emulateSentMail init')

    navigate("/thx")
  }

}

