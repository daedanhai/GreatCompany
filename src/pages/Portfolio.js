import { useEffect, useState } from 'react';
//data
import data from '../data.js';

const Portfolio = () => {
    const [ list, setList ] = useState(data);
    const [ filterArr, setFilterArr ] = useState([]);
    const [tagsArr] = useState(['WEB','RESPONSIVE','REACT','VUE','DESIGN','APP','HYBRID APP']);
  
    const tagsNodes = document.querySelectorAll('.tags-select-box li > button');

    const tagsFilter = (a) => {
      setFilterArr((x) => {
        const _filterArr = a === 'ALL' ? [] : (x.includes(a) ? x.filter( y => y!=a ) :  [...x,a]);
        return _filterArr; 
      });
    }

    useEffect(() => {
      // const test = (data, filterArr) => {
      //   let filteredResult = [];
      //   for(let _data of data){
      //     for(let _filterArr of filterArr){
      //       if(data.includes(_filterArr)){
      //         filteredResult.push(_data)
      //       }
      //     }
      //   }
      //   return filteredResult
      // }
      // console.log(test(data,filterArr))
      // data를 필터링 해 filterArr를 갖고 data.tags 필터링을 해
      // 찾고 setList로 state 변경

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
                      list.map((item,i)=>{
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