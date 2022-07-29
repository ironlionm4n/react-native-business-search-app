import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

const useGetBusinesses = () => {
  const [restaurants, setRestaurants] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'boston'
        }
      })
      setRestaurants(response.data.businesses)
    } catch (err) {
      setErrorMessage('An error occurred, please try again.')
    }
  }

  useEffect(() => {
    searchApi('pizza')

    return () => {
      console.log('useGetBusinesses return ran')
    }
  }, [])

  return [searchApi, restaurants, errorMessage]
}

export default useGetBusinesses
