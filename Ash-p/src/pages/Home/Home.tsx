import './Home.scss';
import reading from '/src/assets/home/image 9.png';
import Cards from '../../components/Home/cards/Cards';
import { cardContent } from '../../components/Home/cards/cardContent';
// import { testContent } from '../../components/Home/testimonial/testContent';
import { useEffect, useRef, useState } from 'react';
import Wishs from '../../components/Home/wish/Wishs';
// import Tests from '../../components/Home/testimonial/Tests';
import Lenis from '@studio-freight/lenis';

const Home: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const isScrolling = useRef(false);
  const lastX = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const smoothScroll = (targetScroll: number) => {
    if (!carouselRef.current) return;

    let start: number | null = null;
    const startPos = carouselRef.current.scrollLeft;
    const distance = targetScroll - startPos;
    const duration = 600;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = (timestamp - start) / duration;
      const easedProgress = progress < 1 ? 1 - Math.pow(1 - progress, 1) : 1;
      carouselRef.current!.scrollLeft = startPos + distance * easedProgress;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const moveCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const card = carouselRef.current.querySelector<HTMLElement>(".card-wrapper");
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const newScrollLeft =
      direction === "right"
        ? carouselRef.current.scrollLeft + cardWidth
        : carouselRef.current.scrollLeft - cardWidth;

    smoothScroll(newScrollLeft);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!carouselRef.current) return;
    setIsDragging(true);
    // isScrolling.current = false;
    
    lastX.current = e.clientX;
    lastTime.current = performance.now();
    setStartX(e.clientX);
    setScrollStart(carouselRef.current.scrollLeft);
    
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
      // setStartX(e.clientX);
    // setScrollStart(carouselRef.current.scrollLeft);
    const deltaX = e.clientX - startX;
    carouselRef.current.scrollLeft = scrollStart - deltaX;
    
    // Calculate velocity
    const now = performance.now();
    const elapsed = now - lastTime.current;
    const deltaMove = e.clientX - lastX.current;
    setVelocity(deltaMove / elapsed);
    
    lastX.current = e.clientX;
    lastTime.current = now;
  };

  const handleMouseUp = () => {
  
     
    
    // Start inertia scrolling
    let momentum = velocity * 20; // Scale velocity for more natural feel
    const friction = 0.95;

    const inertiaScroll = () => {
      if (!carouselRef.current) return;
      momentum *= friction;
      carouselRef.current.scrollLeft += momentum;

      if (Math.abs(momentum) > 0.5) {
        requestAnimationFrame(inertiaScroll);
      }
    };

    requestAnimationFrame(inertiaScroll);
    
    setIsDragging(false);
  };

  // const snapToNearest = (ref: React.RefObject<HTMLDivElement>) => {
  //   if (!ref.current) return;
  //   const card = ref.current.querySelector<HTMLElement>(".card-wrapper");
  //   if (!card) return;

  //   const cardWidth = card.offsetWidth + 20; // Include gap
  //   const scrollLeft = ref.current.scrollLeft;
  //   const activeIndex = Math.round(scrollLeft / cardWidth);
    
  //   lenisRef.current?.scrollTo(`#card-${activeIndex}`, {
  //     duration: 0.8,
  //     lock: true,
  //     offset: -50, // Adjust based on your layout
  //   });
  // };


  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); // Clear timeout on cleanup
      }

      // if (carouselRef.current) {
      //   snapToNearest({ current: carouselRef.current });
      // }
    };
  }, [isDragging]);

  return (
    <div className="home-wrapper">
      <div className="home-content-top">
        <div className="left-content">
          <div className="main-heading">
            <p className="heading-text">
              We are a sibling duo with more than<span> </span>
              <span className="strong">two decades</span>
              <span> </span>of freelance<span> </span>
              <span className="color-text">editing experience</span>
              <span> </span>between us.
            </p>
          </div>
          <div className="left-desc">
            We want your message to resonate clearly with your readers, so our flexible rates and payment plans fit all budgets.
          </div>
        </div>
        <div className="right-content">
          <div className="img-container">
            <img src={reading} alt="woman-reading" className="right-img" />
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="services-heading">
          <p>
            Our <span className="color-text">Services</span>
          </p>
        </div>
        <div className="left-btn" onClick={() => moveCarousel("left")}>
          <span className='left-btn-span'></span>
        </div>
        <div
          className={!isDragging ? 'cards-wrapper' : 'cards-wrapper dragging'}
          onMouseDown={handleMouseDown}
          ref={carouselRef}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div className="carousel">
            {cardContent.map((card,) => (
              <Cards
                key={card.id}
                head={card.heading}
                backGround={card.backgroundColor}
                cardImg={card.imgSrc}
                desc={card.description}
                isDragging={isDragging}
                {...card}
              />
            ))}
          </div>
        </div>
        <div className="right-btn" onClick={() => moveCarousel("right")}>
          <span className='right-btn-span'></span>
        </div>
      </div>

      <div className="wish-section">
        <div className="wish-header">
          <p>
            Ash P Reads Editing Services <span className="color-text">Manuscript&nbsp;Wish&nbsp;List</span>
          </p>
        </div>
        <div className="wish-container">
          <Wishs />
        </div>
      </div>

      {/* <div className="test-section">
        <div className="tests-heading">
          <p>
            Client <span className="color-text">Testimonials</span>
          </p>
        </div>
        <div className="tests-wrapper">
          <div
            className={!isDragging ? 'test-carousel' : 'test-carousel dragging'}
            ref={testCarouselRef}
            onMouseDown={(e) => handleMouseDown(e, testCarouselRef)}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {testContent.map((card) => (
              <Tests
                key={card.id}
                head={card.heading}
                desc={card.description}
                {...card}
              />
            ))}
          </div>
          <div className='lft-rgt'>
            <div className="test-left-btn" onClick={() => moveTestCarousel("left")}>
              <span className='test-indicator'></span>
            </div>
            <div className="test-right-btn" onClick={() => moveTestCarousel("right")}>
              <span className='test-indicator'></span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;