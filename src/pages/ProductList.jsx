import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import PopularProductsContainer from '../components/PopularProductsContainer'

const Container = styled.div`
  h1 {
    margin: 3rem 3rem 0;
  }

  .filter {
    display: flex;
  }
  
  .filterContainer {
    display: flex;
    justify-content: space-between;
    
    margin: 3rem;
  }

  select {
    padding: 10px;
    margin: 0 5px;;
  }
`

export default function Productlist() {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <h1>Dresses!</h1>

      <div className="filterContainer">
        <div className="filter">
          <h2>Filter products:</h2>
          <select name="" id="">
            <option disabled selected>Color</option>
            <option value="">white</option>
            <option value="">black</option>
            <option value="">red</option>
            <option value="">blue</option>
            <option value="">yellow</option>
          </select>
          <select name="" id="">
            <option disabled selected>Size</option>
            <option value="">XS</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </select>
        </div>
        <div className="filter">
          <h2>Sort products: </h2>
          <select name="" id="">
            <option selected>Newest</option>
            <option value="">Price (desc)</option>
            <option value="">Price (asc)</option>
          </select>
        </div>
      </div>

      <PopularProductsContainer />

      <Newsletter />
      <Footer />
    </Container>
  )
}