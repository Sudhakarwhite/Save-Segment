import React,{useRef} from 'react';
import useClickOutside from '../../common/useClickOutside';
import {schemas} from '../../common/Schemas';
import '../SchemaOption/SchemaOption.scss';
const SchemaOption = (props) =>  {
    const closeDropdown = props.closeDropdown;
    const setOpenDropdown = props.setOpenDropdown;
    const array = props.array;
    const addObject = props.addObject;
    const dropdownRef = useRef(null);
    useClickOutside(dropdownRef, closeDropdown);
    // const schemaOptionClass = (schema)=>{
    //     for(let i=0; array.length;i++){
    //         if(Object.values(array[0])[0]===Object.values(schema)[0]){
    //             return "dropdown-option-disabled"
    //         }
    //     }
    //     return "dropdown-option-wrapper";
    // }
  return (
    <div className='dropdown-options-container' ref = {dropdownRef}>
        {schemas.map((schema, index) => (
        <div key = {index} 
        // className={`${schemaOptionClass(schema)}`}
        className='dropdown-option-wrapper' 
        onClick={()=>{
            setOpenDropdown(false);
            if(array.length === 0){
                addObject(schema)   
            }
            else{
                for(let i=0; i<array.length;i++){
                    if(Object.values(array[i])[0]===Object.values(schema)[0]){
                        return;
                    }
                }
                addObject(schema);
            }
        }}>
            <span className='dropdown-option-bullet' style={{backgroundColor:`${Object.values(schema)[1]}`}}></span>
            <span className='dropdown-option-text' >{Object.values(schema)[0]}</span>
        </div>))}
    </div>
  )
}
export default SchemaOption;
