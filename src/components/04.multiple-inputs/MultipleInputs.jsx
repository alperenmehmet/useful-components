import {useState} from 'react'

const MultipleInputs = () => {
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState({firstName: '', email: '', age: ''})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({...person, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.email && person.age) {
      const newPerson = {...person, id: new Date().getTime().toString()}
      setPeople([...people, newPerson])
      setPerson({firstName: '', email: '', age: ''})
    }
  }

  return (
    <div>
      <form action=''>
        <div className='form-control'>
          <label htmlFor=''>name:</label>
          <input
            type='text'
            name='firstName'
            onChange={handleChange}
            value={person.firstName}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>email:</label>
          <input
            type='text'
            name='email'
            onChange={handleChange}
            value={person.email}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='age'>age:</label>
          <input
            type='text'
            name='age'
            onChange={handleChange}
            value={person.age}
          />
        </div>
        <button onClick={handleSubmit}>add</button>
      </form>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h1>name:{person.firstName}</h1>
            <h1>email:{person.email}</h1>
            <h1>age:{person.age}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default MultipleInputs
