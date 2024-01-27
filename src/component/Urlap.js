import { useState } from "react";

export default function Urlap(props) {
  const [obj, setObj] = useState({ name: "", date: 2022 });

  function kuld(event) {
    event.preventDefault();
    props.kuld(obj)
  }

  function adatValt(event) {
    const masolat = { ...obj };
    masolat[event.target.id] = event.target.value;
    setObj(masolat);
  }

  return (
    <>
      <h2>Új adat felvitele</h2>
      <form onSubmit={kuld}>
        <div>
          <label htmlFor=" ">Név:</label>
          <input
            type="text"
            onChange={adatValt}
            name="name"
            id="name"
            placeholder="Vezetéknév Keresztnév"
            value={obj.name}
          />
          <br />
          <label htmlFor="date-ev">Szül. év:</label>
          <input
            type="number"
            onChange={adatValt}
            name="date"
            id="date"
            min="2000"
            max="2024"
            value={obj.date}
          />
        </div>
        <input type="submit" id="submit" value="OK" />
      </form>
    </>
  );
}
