import {VisitButton} from './styledComponents'

const CountryTourismData = props => {
  const {details, updateTouristData} = props
  const {id, name, imageUrl, isVisited} = details
  const buttonStatus = isVisited ? <p>Visited</p> : 'Visit'
  const type = isVisited ? 'p' : 'button'
  const toBeUpdated = () => {
    updateTouristData(id, name, imageUrl, isVisited)
  }

  return (
    <li>
      <p>{name}</p>
      <VisitButton
        type={type}
        bgColor={isVisited}
        onClick={toBeUpdated}
        as={type}
      >
        {buttonStatus}
      </VisitButton>
    </li>
  )
}
export default CountryTourismData
