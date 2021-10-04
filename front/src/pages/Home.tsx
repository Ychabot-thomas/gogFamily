import React, {useState} from "react";

const Home = () => {
  const [valueId, setValueId] = useState<string>()
  const [valuePassword, setValuePassword] = useState<string>()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "id") setValueId(event.target.value)
    if (event.target.id === "password") setValuePassword(event.target.value)
  }

  const handleSubmit = () => {
    console.log("submit")
  }

  return (
    <div>
      <h1>
        Welcome to GOG Pronostic
      </h1>
      <div>
        <input id={"id"} type={"text"} value={valueId} onChange={handleChange} required placeholder={"Identifiant"}/>
        <input id={"password"} type={"password"} value={valuePassword} onChange={handleChange} placeholder={"Mot de Passe"} required/>
        <button onClick={handleSubmit}>Connexion</button>
      </div>
    </div>
  )
}

export default Home