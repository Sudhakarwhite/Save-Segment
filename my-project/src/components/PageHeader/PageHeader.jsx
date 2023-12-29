import React from 'react';
import '../PageHeader/PageHeader.scss';

const PageHeader = (props) => {
  const text = props.text;
  const openPopup = props.isOpenPopup;
  const closePopup = props.closePopup;
  const classFunction = () => {
    return text === "View Audience" ? 'page-header-container' : 'popup-header-container';
  }
  return (
    <div className = {`${classFunction()}`}>
        <i class="fa fa-chevron-left" onClick={()=>{
      openPopup && closePopup(false)}}></i>
        <div className='page-header-text'>{text}</div>
    </div>
  )
}
export default PageHeader;
