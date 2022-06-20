import {useState} from "react";

const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstName && email) {
            const person = {id: new Date().getTime().toString(), firstName, email}
            setPeople(() => {
                return [...people, person]
            })
            setFirstName('')
            setEmail('')
        } else {
            console.log('empty value')
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="">name:</label>
                    <input
                        type="text"
                        name="firstName"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">email:</label>
                    <input
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <button>add</button>
            </form>
            {people.map((person) => {
                return (
                    <div key={person.id}>
                        <h1>{person.firstName}</h1>
                        <h1>{person.email}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Form