import './Home.scss';
import Hero from '../../components/Home/Hero/Hero';
import Results from '../../components/Home/Results/Results';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <Results />
    </div>
  );
};

export default Home;