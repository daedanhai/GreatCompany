import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { changeModalContact } from "../store.js"
//modal
import ModalContact from '../modal/ModalContact';



const Header = () => {
    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장 
    const [ScrollActive, setScrollActive] = useState(false);
    const dispatch = useDispatch();
    let modalContact = useSelector((state) => { return state });


    function handleScroll() { 
        if(ScrollY > 60) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
        }
    }
    useEffect(() => {
        function scrollListener() {  window.addEventListener("scroll", handleScroll); } //  window 에서 스크롤을 감시 시작
        scrollListener(); // window 에서 스크롤을 감시
        return () => { 
          window.removeEventListener("scroll", handleScroll);
        }; //  window 에서 스크롤을 감시를 종료
      },[]);
    return(
    <>
        <header id='header'>
            <h1 className='logo'><Link to='/'><img src={require('../assets/imgs/logo.png')} alt='대단한컴퍼니'/></Link></h1>
            <ul className='h-menus'>
            <li><Link to='/portfolio'>Portfolio.</Link></li>
            <li onClick={()=>{ dispatch(changeModalContact()) }}><a className='contact'>Contact.</a></li>
            </ul>
        </header>
        <div className={ScrollActive ? "header-area fixed" : 'header-area' }></div>
        { modalContact.modalContact === true ? <ModalContact /> : null }
    </>
    )
    
}

export default Header;