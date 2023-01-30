import { Link } from "react-router-dom";

const NotFoundpage = () => {
    return(
    <>
    <div className='page-container notfonund-page'>
        <div className='text-wrap'>
            <h4>OOPS!</h4>
            <h5>페이지를 찾을 수 없습니다.</h5>
            <p>올바른 URL을 입력하였는지 확인하세요.<br/>아래 버튼을 눌러 메인 페이지로 돌아가십시요.</p>
        </div>
        <div className='btn-wrap'>
            <Link to='/'>메인으로 돌아가기</Link>
        </div>
    </div>
    </>
    )
}
export default NotFoundpage;