import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

const useGetBusinesses = () => {
  const [restaurants, setRestaurants] = useState([])
  const [errorMessage, setErrorMessage] = useState(false)

  const searchApi = async (searchTerm, city = 'atlanta') => {
    console.log("city", city)
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: city
        }
      })
      console.log("responseData",response.data)
      setRestaurants(response.data.businesses)
    } catch (err) {
      console.log('err', err)
      setErrorMessage('An error occurred, please try again.')
      setTimeout(() => {
        setErrorMessage(false)
      }, 5000)
    }
  }

  useEffect(() => {
    searchApi('pizza', 'atlanta')

    return () => {
      console.log('useGetBusinesses return ran')
    }
  }, [])

  return [searchApi, restaurants, errorMessage]
}

export default useGetBusinesses
