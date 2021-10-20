import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import {Avatar} from '@material-ui/core'
import { useStateValue } from '../utilities/StateProvider';

export default function Header() {
const [{user}, dispatch] = useStateValue();

    return (
        <div className= 'header'> 
            <div className="header__left">
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt='FO'/>
<h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}
