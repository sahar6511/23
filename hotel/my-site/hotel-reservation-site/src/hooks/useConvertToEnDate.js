
import {convertToEn } from "react-calendar-datetime-picker";


const useConvertToEnDate = (date) => {

    
    const newDate= convertToEn(date);
    
   return [newDate]
}


export default useConvertToEnDate
