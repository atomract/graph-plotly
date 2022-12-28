import { useState } from "react";

const ButtonGrp = ({buttons, afterClick}) => {

    const [clickedId, setClickedId] = useState(0);

    const handleClick = (event, id) => {
        setClickedId(id);
        afterClick(event);
    };
    return (
        <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
            {buttons.map((buttonLabel, i) => (
                <div>
                        <button type="button" 
                        // defaultChecked={'All'} defaultValue={'All'}
                        name={buttonLabel} value={buttonLabel} onClick={(event) => handleClick(event, i)} className={`rounded-r inline-block px-6 py-2.5  font-medium text-xs leading-tight uppercase focus:outline-none focus:ring-0 ${i === clickedId ? 'bg-voilet-700 text-black hover:bg-violet-600' : 'bg-violet-300 hover:bg-violet-600 text-white'} transition duration-150 ease-in-out`}>{buttonLabel}</button>   
                </div>
                
                ))}
        </div>
    )
}

export default ButtonGrp;