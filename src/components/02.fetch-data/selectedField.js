// i don't want to use all the data, so i destructured it. Now my data is returning {id, title}

export const selectedField = (data) => {
  const newData = data.map((item) => {
    const {id, title} = item
    return {
      id,
      title,
    }
  })
  return newData
}
