import { useState } from 'react';
//data
import data from '../data.js';

const Portfolio = () => {
    let [ portfolio ] = useState(data);
    const [copyPort, setCopyPort] = useState(portfolio);

    const tagsArr = ['ALL',...new Set(portfolio.map((item,i) => item.tags))];
    const tags = new Set(tagsArr.flat());
    const newTags = [...tags];

    function tagsFilter(e,a){
      const target = e.target;
      // const siblings = (el) => [...el.parentElement.parentElement.children].filter(node => node != el);
      e.preventDefault();
      
      target.classList.add('active');
    
      if(a === 'ALL'){
        setCopyPort(portfolio);
      } else {
        setCopyPort(
          portfolio.filter( content => content.tags.includes(a) )
        )
      }
    }
   
    return(
        <>
        <div id='portfolio-page' className='page-container' >
            <div className='page-inner'>
                <h3 className='page-title'  
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="500"
                >Portfolio.</h3>
                
                <ul className='tags-select-box'
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="500"
                >
                  {
                    newTags.map((a,i)=>{
                      return(
                        <li key={i}><button onClick={(e)=>{tagsFilter(e,a)}}>{a}</button></li>
                      )
                    })
                  }
                </ul>

                <div className='portfolio-list-container'
                      data-aos="fade-up"
                      data-aos-delay="800"
                      data-aos-duration="500"
                >
                    <ul className='portfolio-list-wrap'>
                    {
                      copyPort.map((item,i)=>{
                        return(
                        <li key={item.id}>
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
                        </li>
                        )
                      })
                     }
                    </ul>
                </div>

            </div>
        </div>
        </>
    )
}
export default Portfolio;