import './Home.scss';
import Hero from '../../components/Home/Hero/Hero';
import Results from '../../components/Home/Results/Results';
import ThirdSection from '../../components/Home/ThirdSection/ThirdSection';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <Results />
      <ThirdSection />
    </div>
  );
};

export default Home;