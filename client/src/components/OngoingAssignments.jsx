import react from 'react';
import location from "../assets/location.png";

function OngoingAssignments(props) {
  return (
    <div className='w-[100%] h-[30%] bg-[#ffffff]/5 p-3 text-white pl-4.5 pr-4.5 rounded-[8px] flex justify-between items-center hover:scale-105 shadow-[0px_0px_9px_rgba(0,0,0,0.3)] hover:shadow-l  hover:shadow-[#ffffff]/5 transition-all duration-300 ease-in-out  '>
        <div className='h-100% w-60% mb-1'>
        <p className='text-[14px]'>{props.device.name}</p>
        <h3 className='text-xs'>Order ID : {props.request.id}</h3>
        </div>
        <img src = {location} className='w-5 h-6'></img>
    </div>
  );
}

export default OngoingAssignments;