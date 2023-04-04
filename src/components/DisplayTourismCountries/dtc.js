const DisplayTourismCountries = props => {
  const {details, removingTouristData} = props
  const {id, imageUrl, name} = details
  const removeData = () => {
    removingTouristData(id)
  }
  return (
    <li>
      <p>{name}</p>
      <img src={imageUrl} alt="thumbnail" height={100} width={100} />
      <button type="button" onClick={removeData}>
        Remove
      </button>
    </li>
  )
}
export default DisplayTourismCountries
