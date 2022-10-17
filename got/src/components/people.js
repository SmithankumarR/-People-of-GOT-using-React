function People(props) {
  return (
    <>
      <ul className="cards flex jcb">
        {props.everyOne.map((person) => {
          return (
            <li key={person.name}>
              <img src={person.image} alt={person.name} />
              <h2>{person.name}</h2>
              <p>{person.description}</p>
              <button className="know">Know More!</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default People;
