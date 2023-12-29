import React, {useState,useRef} from 'react';
import '../SegmentPopup/SegmentPopup.scss';
import PageHeader from '../PageHeader/PageHeader';
import SegmentNameInput from '../SegmentNameInput/SegmentNameInput';
import Traits from '../Traits/Traits';
import SchemaDropdown from '../SchemaDropdown/SchemaDropdown';
import NewSchemaDropdown from '../NewSchemaDropdown/NewSchemaDropdown';
import PopupFooter from '../PopupFooter/PopupFooter';
import useClickOutside from '../../common/useClickOutside';
const SegmentPopup = (props) => {
    const onClose = props.onClose;
    const openPopup = props.openPopup;
    const setOpenPopup = props.setOpenPopup;
    const [inputData, setInputData]= useState("");
    const [array, setArray] = useState([]);
    const [addSchema, setAddSchema] = useState([]);

    const modalRef = useRef(null);
    useClickOutside(modalRef, onClose);

    const addSchemaObject = () => {
      if(addSchema.length !== 0){
      setArray([...array, addSchema]);
      setAddSchema();
      }
    };
  return (
    <div className={`segment-popup-container ${openPopup ? "" : "popup-hidden"}`}>
      <form className='segment-popup-form-container' ref = {modalRef}>
        <PageHeader text = 'Saving Segment' isOpenPopup = {openPopup} closePopup = {setOpenPopup}/>
        <SegmentNameInput setInputData = {setInputData} inputData = {inputData} />
        <p>To save your segment, you need to add the schemas to build the query </p>
        <Traits />
        <NewSchemaDropdown setArray = {setArray}array = {array}/>
        <SchemaDropdown addSchemaObject={addSchemaObject}  setAddSchema = {setAddSchema} array = {array} />
        <PopupFooter array = {array} inputData = {inputData} setOpenPopup = {setOpenPopup}/>
      </form>
    </div>
  )
}
export default SegmentPopup;
