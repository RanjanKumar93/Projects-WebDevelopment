import { useState } from "react";

alert("run db.json on 3001");

export default function App({ notes }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cont, setCont] = useState(notes);
  const [search, setSearch] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }
  function handleNumber(event) {
    setNumber(event.target.value);
  }

  const handleAddClick = () => {
    const newObj = {
      name: name,
      number: number,
      id: cont.length + 1,
    };

    setCont(cont.concat(newObj));
    setNumber("");
    setName("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const hSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredContacts = cont.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  let searchOut;

  if (filteredContacts.length === 0) {
    searchOut = <p>Not Found.....</p>;
  } else {
    searchOut = filteredContacts.map((x) => (
      <p style={{ marginBottom: "-14px" }} key={x.id}>
        {x.name} {x.number}
      </p>
    ));
  }

  return (
    <>
      <h1>Phonebook</h1>

      <form onSubmit={handleFormSubmit}>
        <div>
          search contacts:{" "}
          <input value={search} onChange={hSearch} placeholder="Search..." />
        </div>
        <h2>add a new contact</h2>
        <div>
          name:{" "}
          <input
            placeholder="add new name..."
            value={name}
            onChange={handleName}
          />
        </div>
        <div>
          number:{" "}
          <input
            placeholder="number..."
            value={number}
            onChange={handleNumber}
          />
        </div>
        <div>
          <button onClick={handleAddClick}>add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      <div>{searchOut}</div>
    </>
  );
}
