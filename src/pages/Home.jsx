import Announcement from '../components/Announcement';
import Categories from '../components/CategoryContainer';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import PopularProductsContainer from '../components/PopularProductsContainer';
import Slider from '../components/Slider';
import { GlobalStyle } from '../globalstyle';

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <PopularProductsContainer />
      <Newsletter />
      <Footer />

    </div>
  )
}