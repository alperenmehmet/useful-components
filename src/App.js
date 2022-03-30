import { useState } from 'react';
import { data } from './data';

export default function App() {
  const [people, setPeople] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');

  console.log(people);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  console.log(searchTerm);

  return (
    <div className='App'>
      <h1>React Search Example</h1>
      <input type='text' onSubmit={handleSubmit} onChange={handleChange} />
      {people
        .filter((person) => {
          if (searchTerm === '') {
            return person;
          } else if (
            person.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return person;
          }
        })
        .map((person, index) => {
          return <div key={index}>{person.first_name}</div>;
        })}
    </div>
  );
}
