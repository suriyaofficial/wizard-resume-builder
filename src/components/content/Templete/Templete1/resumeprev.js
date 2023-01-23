import React from 'react';
import {fieldCd} from './typeCodes'
function ResumePrev(props){
    // console.log('Resume Preview');
    const rpData=(key, valToAppend)=>{
        if(props.dataSection){
          return props.dataSection[key]?props.dataSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }
     return (
            <div className={props.skinCd + " resume-preview "}>
                <div className={'name-section'}>
                    <p className={'center contact-name text-upper' }> {rpData(fieldCd.FirstName,' ')  + rpData(fieldCd.LastName)}  </p>
                    <p className={'center address'}>{rpData(fieldCd.City,', ') + rpData(fieldCd.State,', ') +  rpData(fieldCd.Country,', ') + rpData(fieldCd.ZipCode,', ')}</p>
                    <p className={'center'}>{rpData(fieldCd.Email ) }</p>
                    <p className={'center'}>{rpData(fieldCd.Phone) } </p>
                </div>
                 </div>
        )
    }
export default ResumePrev;