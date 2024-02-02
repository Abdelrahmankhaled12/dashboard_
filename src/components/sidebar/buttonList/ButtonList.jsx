/* eslint-disable react/prop-types */
import './style.scss'
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

export default function ButtonList({ buttonNameText, list, openButton ,  children }) {
    const [open, setOpen] = React.useState(openButton);

    const handleClick = () => {
        setOpen(!open);
    };

    const navigate = useNavigate();

    return (
        <div className='buttonIist'>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    {children}
                </ListItemIcon>
                <ListItemText primary={buttonNameText} className='buttonName' />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding className='list'>
                    {list?.map((ele) => (
                        <ListItemButton sx={{ pl: 4 }} onClick={() => {navigate(ele.router) , setOpen(true) }} key={ele.link}>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary={ele.link} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </div>

    );
}
