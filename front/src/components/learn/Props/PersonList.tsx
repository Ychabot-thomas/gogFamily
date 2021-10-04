import { Name } from "./Person.type";

type PersonsListProps = {
  names: Name[]
}

export const PersonList = (props: PersonsListProps) => {
  return (
    <div>
      {props.names.map((name, i) => {
        return <h2 key={i}>{name.first} {name.last}</h2>
      })}
    </div>
  )
}