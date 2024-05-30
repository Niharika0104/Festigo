
interface TimePickerProps{
    hours?:string;
    minutes?:string;
    mode?:string;
    handleChange:(value:string)=>void;

}
const TimePicker=({hours,minutes,mode,handleChange}:TimePickerProps)=>{
    const handleInputChange=(e:any)=>{
      handleChange(e.target.value)
    }
    return(
        
            <div>
              <div className="flex">
                <input 
                  type="text" 
                  id="time" 
             className=     "shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="HH:MM" 
                  onChange={handleInputChange}
                />
               
              </div>
            </div>
          )
        };
        export default  TimePicker
  