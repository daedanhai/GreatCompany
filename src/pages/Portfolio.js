import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = ({data}) => {
    let [ list, setList ] = useState(data);
    let listCopy = [...list.reverse()];
    const [ filterArr, setFilterArr ] = useState([]);
    const [ tagsArr ] = useState(['WEB','RESPONSIVE','VUE','APP','HYBRID APP','SOLUTION']);
    const tagsFilter = (a) => {
      setFilterArr((x) => {
        const _filterArr = a === 'ALL' ? [] : (x.includes(a) ? x.filter( y => y!=a ) :  [...x,a]);
        return _filterArr; 
      });
    }
    useEffect(() => {
      const _list = filterArr.length === 0 ? data : data.filter( x => x.tags.filter(it => filterArr.includes(it)).length != 0);
      setList(
        _list
      )
    },[filterArr]);
 
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
                  <li><button onClick={()=>{tagsFilter('ALL')}} className={filterArr.length === 0 ? 'active' : ''}>ALL</button></li>
                  {
                    tagsArr.map((a,i)=>{
                      return(
                        <li key={i}><button onClick={()=>{tagsFilter(a)}} className={filterArr.includes(a) ? 'active' : ''}>{a}</button></li>
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
                      listCopy.reverse().map((item)=>{
                        return(
                        <li key={item.id}>
                          <Link to={'/detail/'+ item.id}>
                          <div className='thumb'>
                            <img src={ require(`../assets/imgs/portfolio/port_id${item.id}_cover.jpg`) }/>
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
                          </Link>
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