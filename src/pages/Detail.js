
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import default_Img from "../assets/imgs/portfolio/default_Img.jpg"

const Detail = (props) => {
    const {id} = useParams();
    const findItem = props.data.find( x => x.id == id );
    const findItemLast = ( props.data.length - 1 );
    const onErrorImg = (e) => {
        console.log('에러남')
        // e.target.src = default_Img
    }
    return (
        <>
        <div className='page-container detail-page'>
            {
                findItem.id > 1 ?  <Link to={'/detail/'+ (findItem.id - 1)} className='port-go prev'>이전으로</Link> : null
            }
            {
                findItem.id <= findItemLast ?  <Link to={'/detail/'+ (findItem.id + 1)} className='port-go next'>다음으로</Link> : null
            }
            <div className='cover-wrap'
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="0" 
            >
                <img src={ require(`../assets/imgs/portfolio/port_id${findItem.id}_cover.jpg`) } alt={findItem.title}/>
            </div>
            <div className='desc'>
                <div className='text-wrap'
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="0" 
                >
                    <h2>{findItem.title}</h2>
                    <p>{findItem.contentTxt}</p>
                </div>
                <ul className='tags-wrap'
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="0" 
                >
                    {
                        findItem.tags.map((x,i)=>{
                            return(
                                <li className='tag' key={i}>{x}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='content-wrap'>
                {
                    findItem.contentImg.length > 0 ?

                    findItem.contentImg.map((x,i) => {
                        return(
                            <div className='content-img'
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                key={i}
                            >
                                <img src={ require(`../assets/imgs/portfolio/port_id_${findItem.id}_${x}.jpg`) }/>
                            </div>
                        )
                        
                    })
                    :(
                    <div className='content-img'
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <img src={ require(`../assets/imgs/portfolio/default_Img.jpg`) }/>
                    </div>
                    )
                    
                }
            </div>
        </div>
        </>
    )
}
export default Detail;