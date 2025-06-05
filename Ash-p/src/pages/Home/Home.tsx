import './Home.scss';
import Hero from '../../components/Home/Hero/Hero';
import Results from '../../components/Home/Results/Results';
import ThirdSection from '../../components/Home/ThirdSection/ThirdSection';
import Wishlist from '../../components/Home/Wishlist/Wishlist';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <Results />
      <ThirdSection />
      <Wishlist />
    </div>
  );
};

export default Home;