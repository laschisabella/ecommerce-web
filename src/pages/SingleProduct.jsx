import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import SingleProductContainer from '../components/SingleProductContainer'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function SingleProduct() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <SingleProductContainer />
      <Newsletter />
      <Footer />
    </div>
  )
}