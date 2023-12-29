import React from 'react';
import '../SegmentNameInput/SegmentNameInput.scss';

const SegmentNameInput = (props) => {
    const setInputData = props.setInputData;
    const inputData = props.inputData;
  return (
    <div className='input-box-wrapper'> 
        <label for="name"><span className='label-name'>Enter the Name of the Segment</span></label><br />
        <input type="text" id="name" name="name of the segment" required placeholder='Name of the segment' value={inputData} 
         onChange={(e) => setInputData(e.target.value)} className="input-box"
        />
    </div>
  
  )
}
export default SegmentNameInput;

    //  <form>
    //     <div>              
    //         <input type="text" size="15" />                                 
                        
    //     </div>            
    // </form> 