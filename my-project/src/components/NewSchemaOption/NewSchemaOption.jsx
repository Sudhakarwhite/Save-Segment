import React from 'react';
import {schemas} from '../../common/Schemas'

const NewSchemaOption = (props) => {
    const element = props.element;
    const editNewSchema = props.editNewSchema;
    const setOpenIndex = props.setOpenIndex;
  return (
    <div className='dropdown-options-container' style={{zIndex:'1007' }}>
        {schemas.filter((schema, index) => Object.values(schema)[0]!==Object.values(element)[0]).map((ele)=>(
        <div  className='dropdown-option-wrapper' onClick={()=>{
            setOpenIndex(null);
            editNewSchema(ele, element)
        }}>
         {/* onClick={()=>{
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
        }} */}
            <span className='dropdown-option-bullet' style={{backgroundColor:`${Object.values(ele)[1]}`}}></span>
            <span className='dropdown-option-text' >{Object.values(ele)[0]}</span>
        </div>))}
    </div>
  )
}
export default NewSchemaOption;
