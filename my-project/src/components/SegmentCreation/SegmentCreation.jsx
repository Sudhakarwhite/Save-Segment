import React from 'react';
import segment from '../../images/segment.webp';
import '../SegmentCreation/SegmentCreation.scss';

const SegmentCreation = (props) => {
    const setOpenPopup = props.setOpenPopup;
    const handlePopup = () => {
        setOpenPopup(true);
    }
  return (
    <div className='about-segment-creation-section'>
        <div className='left-section'>
            <h3>Build Your Own Data Segments with Ease</h3>
            <p >Use our intuitive segment builder to select and customize data schema options, and create segments that fit your specific needs. Save time and gain insights by building custom data segments that reflect the unique characteristics of your audience.</p>
            <div className='save-btn-container' onClick={handlePopup}> 
                <button className='save-segment-btn'>Save segment</button>
            </div>
        </div>
        <div className='right-section'>
            <img src = {segment} alt="segment" />
        </div>
    </div>
  )
}
export default SegmentCreation;