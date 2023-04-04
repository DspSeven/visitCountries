import {Component} from 'react'

// transferring country data
import CountryTourismData from '../CountryTourismData/ctd'

// displaying tourism countries
import DisplayTourismCountries from '../DisplayTourismCountries/dtc'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class Countries extends Component {
  state = {
    tourist: initialCountriesList,
    visitedData: [
      {
        id: '25841996-fbfd-4554-add4-4c94082c8ccd',
        name: 'India',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
        isVisited: true,
      },
      {
        id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
        name: 'United Kingdom',
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
        isVisited: true,
      },
    ],
  }

  updateTouristData = (id, name, imageUrl, isVisited) => {
    const {tourist} = this.state
    const details = {id, name, imageUrl, isVisited}
    const updatedData = tourist.map(data => {
      if (data.id === id) {
        return {...data, isVisited: !isVisited}
      }
      return data
    })
    this.setState(prevState => ({
      visitedData: [...prevState.visitedData, details],
      tourist: updatedData,
    }))
  }

  // remove tourist data
  removingTouristData = id => {
    const {tourist, visitedData} = this.state
    const updatedData = tourist.map(data => {
      if (data.id === id) {
        return {...data, isVisited: !data.isVisited}
      }
      return data
    })
    console.log('hi')
    console.log(updatedData)
    const filterData = visitedData.filter(data => data.id !== id)
    this.setState({tourist: updatedData, visitedData: filterData})
  }

  render() {
    const {tourist, visitedData} = this.state
    const length = visitedData.length > 0
    console.log(visitedData)
    return (
      <div>
        <h1>Countries</h1>
        <ul>
          {tourist.map(countryData => (
            <CountryTourismData
              keys={countryData.id}
              details={countryData}
              updateTouristData={this.updateTouristData}
            />
          ))}
        </ul>
        <h1>Visited Countries</h1>
        <ul>
          {length ? (
            visitedData.map(data => (
              <DisplayTourismCountries
                keys={data.id}
                details={data}
                removingTouristData={this.removingTouristData}
              />
            ))
          ) : (
            <p>No Countries Visited Yet!</p>
          )}
        </ul>
      </div>
    )
  }
}
export default Countries
