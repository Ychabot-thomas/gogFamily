import {Greet} from "../../components/learn/Props/Greet";
import {Person} from "../../components/learn/Props/Person";
import {PersonList} from "../../components/learn/Props/PersonList";
import {Status} from "../../components/learn/Props/Status";
import {Heading} from "../../components/learn/Props/Heading";
import {Oscar} from "../../components/learn/Props/Oscar";
import {Button} from "../../components/learn/Props/Button";
import {Input} from "../../components/learn/Props/Input";
import {Container} from "../../components/learn/Props/Container";

export const Props = () => {

  const personName = {
    first: "Bruce",
    last: "Wayne"
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne"
    },
    {
      first: "Clark",
      last: "Kent"
    },
    {
      first: "Princess",
      last: "Diana"
    }
  ]

  return (
    <div>
      <h1>Basic Props</h1>

      <Greet name={"Vishwas"} messageCount={40} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>

      <h1>Advanced Props</h1>
      <Status status={"success"} />
      <Heading>Placeholder text!</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name={"Vishwas"} isLoggedIn={false} />

      <h1>Event Props</h1>
      <Button handleClick={(event, id) => console.log("Button clicked", event, id)} />
      <Input value={""} handleChange={(event) => console.log(event)} />

      <h1>Style Props</h1>
      <Container styles={{ border:"1px solid black", padding:"1rem"}}/>
    </div>
  )
}