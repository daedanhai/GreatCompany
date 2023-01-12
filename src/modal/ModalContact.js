const ModalContact = () => {
    return(
    <div className='modal-container contact'>
        <div className='contact-container'>
        <div className='contact-wrap'>
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
    )
}
export default ModalContact;