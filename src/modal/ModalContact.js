import { useDispatch } from "react-redux"
import { changeModalContact } from "../store.js"

const ModalContact = () => {
    const dispatch = useDispatch();
    return(
    <div className='modal-container contact'>
        <div className='contact-container'>
            <div className='contact-wrap'>
                <div className='box'>
                    <div className='top'
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="500"
                    >
                        <h2 className='logo'><img src={ require('../assets/imgs/logo_white.png') }/></h2>
                        <button onClick={()=>{ dispatch(changeModalContact()) }}>close</button>
                    </div>
                    <h4
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="500"
                    >Contact.</h4>
                </div>
                <ul className='info'
                     data-aos="fade-up"
                     data-aos-delay="800"
                     data-aos-duration="500"
                >
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
    )
}
export default ModalContact;