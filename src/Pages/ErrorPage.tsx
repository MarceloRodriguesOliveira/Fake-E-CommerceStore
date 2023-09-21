import '../App.css'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Footer from '../components/Footer'
import Header from '../components/Header'
import PageNotFound from '../components/PageNotFound'

function ErrorPage() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }, [navigate])

  return (
    <div className="App">
      <Header />
      <PageNotFound />
      <Footer />
    </div>
  )
}
export default ErrorPage
