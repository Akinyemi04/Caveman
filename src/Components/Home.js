import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from 'react-router-dom';
import image1 from './images/galleryc1.jpg'
import image2 from './images/gallery2.jpg'
import image3 from './images/gallery3.jpg'
import image4 from './images/gallery4.jpg'
import image5 from './images/busyman.jpg'
import image6 from './images/light.webp'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Home = () => {
  return (
    <>
        <div className="App">
            <header id='top'>
                <MenuBookIcon className='book'/>
                <div className='head'>
                    <a href='#gallery'> Gallery</a>
                    <a href='#about'> About</a>
                    <a href='#contactus'> Contact-us</a>
                </div>
            </header>
        <section>
            <h1>
                Get familiar with your journal it is the <span>best idea
                in this field</span>
            </h1>
        </section>
        
        <main>
            <NavLink className='navigate' to='/login'><span className='span'>Log-in</span></NavLink>
            <p className='pin'>Don't have an account yet?</p>
            <NavLink className='navigate' to='/signup' ><span className='signup'>Sign-up</span></NavLink>
        </main>
        </div>
        <AnimationOnScroll animateIn='visible'>
            <aside id='gallery'>
                <h3>
                    Gallery
                </h3>
                <main>
                    <img src={image1} alt="picture" />
                    <img src={image2} alt="picture" />
                    <img src={image3} alt="picture" />
                    <img src={image4} alt="picture" />
                    <img src={image5} alt="picture" />
                    <img src={image6} alt="picture" />
                </main>
            </aside>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='next' animateOnce='true'>
            <div id='about'>
                <h3>
                    About
                </h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ab non minima harum perspiciatis, beatae qui suscipit aliquam ullam error odio reprehenderit eveniet. Recusandae vel accusantium, ullam ipsa praesentium cum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ab non minima harum perspiciatis, beatae qui suscipit aliquam ullam error odio reprehenderit eveniet. Recusandae vel accusantium, ullam ipsa praesentium cum.

                </p>
            </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='lastlist'>
            <footer className='footer' id='contactus'>
                <a className='linking' href="#top">
                    Back To Top <ExpandLessIcon className='arrow'/>
                </a>
                <div className='feet'>
                    <a  href='#123'><FacebookOutlinedIcon/></a>
                    <a href='#123'><TwitterIcon/></a>
                    <a className='red' href='#1'><InstagramIcon/></a>
                    <a href='#'><LinkedInIcon/></a>
                </div>
            </footer>
        </AnimationOnScroll>
    </>
  )
}

export default Home