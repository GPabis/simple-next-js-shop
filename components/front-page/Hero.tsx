import { useRef } from 'react';
import classes from './Hero.module.scss';


const Hero = () =>{
  const ref = useRef<HTMLDivElement>(null);

  const scroolToHandler = () =>{
    const heroHeight = ref.current?.clientHeight || 0;
    window.scrollTo({
      top: heroHeight,
      behavior: "smooth",
    });
  }


  return <section ref={ref} className={classes.hero}>
    <h1 className={classes.hero__title}>The best <strong>RTV shop</strong> on the market</h1>
    <p className={classes.hero__text}>We offer only <strong>high quality products!</strong></p>
    <button className={classes.hero__link} onClick={scroolToHandler}>
      <span className={classes.hero__linkText}>See our products!</span>
      <span className={classes.hero__linkArrow}></span>
    </button>
  </section>
}

export default Hero;