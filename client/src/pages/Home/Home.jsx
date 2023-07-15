import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProduct/FeaturedProducts";
import  Categories from "../../components/Categories/Categories"
import Contact from "../../components/Contact/Contact";


function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <FeaturedProducts type="normal" />
      <Contact />

    </div>
  )
}

export default Home;