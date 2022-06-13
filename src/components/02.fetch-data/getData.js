import {selectedField} from './selectedField'

//custom hook for fetching

export const getData = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => selectedField(data))
  return result
}
