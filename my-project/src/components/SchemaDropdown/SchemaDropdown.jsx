import React,{useState} from 'react';
import '../SchemaDropdown/SchemaDropdown.scss';
import SchemaOption from '../SchemaOption/SchemaOption';

const SchemaDropdown = (props) => {
    const [openDropdown, setOpenDropdown ] = useState(false);
    const array = props.array;
    const setAddSchema = props.setAddSchema;
    const addSchemaObject = props.addSchemaObject;
    
    const popupOpen = ()=>{
        setOpenDropdown(!openDropdown);
    }
    const addObject = (object) => {
        setAddSchema(object);
      };
      function closeDropdown(){
        setOpenDropdown(false)
      }
  return (
<>
    <div className='schema-dropdown-container'>
        <span className='add-schema-bullet'></span>
        <div className='add-schema-container' >
            <div className='add-schema-segment-flex' onClick={popupOpen}>
                <span className='add-schema-text'>Add schema to segment {openDropdown ? 
                <i class="fa fa-chevron-up" ></i>:
                <i class="fa fa-chevron-down" ></i>}</span>
            </div>
            {openDropdown && <SchemaOption  closeDropdown = {closeDropdown} array= {array} addObject = {addObject}  setOpenDropdown ={setOpenDropdown} />}
        </div>
        
        <div className='dash-icon'><i class="fa fa-minus" ></i></div>
    </div>
    
    
    <span className='add-new-schema' onClick={() =>{
        addSchemaObject();
    }}>+ 
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#">Add new schema</a></span>
</> 
  )
}
export default SchemaDropdown;


