import {LoggedIn} from "../../components/learn/State/LoggedIn";
import {User, UserNoLogout} from "../../components/learn/State/User";
import {Counter} from "../../components/learn/State/Counter";
import {ThemeContextProvider} from "../../components/learn/State/Context/ThemeContext";
import {Box} from "../../components/learn/State/Context/Box";
import {UserContextProvider} from "../../components/learn/State/Context/UserContext";
import {UserStateContext} from "../../components/learn/State/Context/User";

const State = () => {
  return (
    <div>
      <h1>useState</h1>
      <LoggedIn/>
      <User/>
      <UserNoLogout/>

      <h1>useReducer</h1>
      <Counter/>

      <h1>useContext</h1>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <UserStateContext/>
      </UserContextProvider>
    </div>
  )
}

export default State