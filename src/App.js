import { useEffect, useState, useRef } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/css/reset.css';
import './assets/css/style.css';
import './assets/css/animation.css';
import './assets/css/responsive.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
//inc
import Header from './inc/Header';
//data
import data from './data.js';
import Portfolio from './pages/Portfolio';

const App = () => {
  let [portfolio] = useState(data);
  let pofolcopy = portfolio.slice(0,9);

  useEffect(() => {
    AOS.init();
    return () => {}
  },[]);  

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <div id='main-page' className='page-container' >
              <div className='section section01' 
             >
                <div className='section-inner'>
                  <div className='text-wrap'>
                    <h3 
                      className='main-text'
                      data-aos="fade-up"
                      data-aos-duration="500"
                    >
                    MAKE YOUR<br/>DREAMS<br/>COME TRUE.</h3>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="500"
                    >
                    대단한컴퍼니는 고객의 꿈을 현실로 만듭니다.<br/>
                    효율적인 시스템을 통해 기획부터 디자인, 개발까지<br/>
                    당신의 멋진 꿈을 펼쳐보세요.
                    </p>
                  </div>
                  <div className='main-visual'  
                    data-aos="fade-left"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                  >
                  </div>
                  <span className='scroll-line'>SCROLL</span>
                </div>
              </div>

              <div className='section section02'>
                <div className='section-inner'>
                  <div className='section-title-wrap'>
                    <h3
                      id='section-title01'
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    >Portfolio.</h3>
                  </div>
                  
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={'auto'}
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    // onSlideChange={() => console.log('slide change')}
                    className='pofol-swiper'
                  >
                    {
                      pofolcopy.map((item,i)=>{
                        return(
                        <SwiperSlide key={item.id}>
                          <div className='thumb'>
                            <img src={ item.coverImgUrl }/>
                            <div className='title-wrap'>
                              <h6 className='title'>{ item.title }</h6>
                              <div className='tags'>
                                {
                                  item.tags.map((a,i)=>{
                                    return(
                                      <span key={i}>{ a }</span>
                                    )
                                  })
                                }
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        )
                      })
                     }
                  </Swiper>

                  <div className='btn-wrap'>
                    <Link to='/portfolio' className='btn-more'>More</Link>
                  </div>
                
              
                </div>
              </div>
              
              <div className='section section03'
                 data-aos="fade-up"
                 data-aos-duration="1000"
              >
                <div className='section-inner'>
                  <Marquee 
                  className='skill-list-wrap' 
                  gradientWidth={0}
                >
                  <p>REACT / VUE / JAVASCRIPT / REACT_NATIVE / WEB /  APP / DESIGN / RESPONSIVE / SEO /</p>
                </Marquee>
            
                <div className='section-title-wrap'>
                  <h3>Contact.</h3>
                </div>
                <div className='contact-container'>
                 
                  <div className='contact-wrap'>
                    <div className='sticker'>
                      <img src={require('./assets/imgs/sticker_gc.png')}/>
                    </div>
                    <ul>
                      <li>
                        <h6>Email_</h6>
                        <p><a href="mailto:jason@greatcompany.kr">jason@greatcompany.kr</a></p>
                        <p><a href="mailto:daedan@greatcompany.kr">daedan@greatcompany.kr</a></p>
                      </li>
                      <li>
                        <h6>Phone_</h6>
                        <p><a href="tel:010-2227-0570">+82) 010.2227.0570</a></p>
                        <p><a href="tel:010-7160-3896">+82) 010.7160.3896</a></p>
                      </li>
                    </ul>
                  </div>
                </div>
                </div>
              </div>

              <p className='main-bottom-thankyou'
                data-aos="fade-up"
                data-aos-duration="1000"
              >Thank you.</p>
            </div>
          </>
        }/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>

      <footer id='footer'>
        <ul className='company'>
          <li>01405 서울특별시 도봉구 노해로 341 신원리베르텔 530호 대단한컴퍼니</li>
          <li>E-mail <a href='mailto:daedan@greatcompany.kr'>daedan@greatcompany.kr</a> <a href='tel:02-000-0000'></a>Tel. 02-000-0000.</li>
        </ul>
        <h5 className='f-logo'><img src={require('./assets/imgs/f-logo.png')} alt='(주)대단한컴퍼니'/></h5>
      </footer>

    </div> 
  );
}

export default App;
