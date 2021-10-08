import React, {useEffect} from 'react';
import './SidebarOption.css';

import { useStateValue } from '../utilities/StateProvider';

export default function SidebarOption({title, Icon}) {
    const [{token}, dispatch ] = useStateValue()
   
  

   
    return (
        <div className = 'sidebarOption'>
            {Icon && <Icon className = 'sidebarOption__icon'/>}
                {Icon? <h4>{title}</h4> : <p>{title}</p> }
              
          
            
        </div>
    )
}
