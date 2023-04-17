import { Container } from '@mui/material'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const {login} = useParams()

  const BASE_URL = `https://api.github.com/users/${login}`

  const getDetailedData = async () => {
    try {
      const {data} = await axios(BASE_URL)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDetailedData()
  }, [])
  

  return (
    <Container>
      Details
    </Container>
  )
}

export default Details