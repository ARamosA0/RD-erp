import { useState } from "react";

import { Link } from "react-router-dom";

import {
    List, ListItem, ListItemButton,
    ListItemIcon, ListItemText, Collapse
} from '@mui/material'



const CustomListItem = ({ name, url, icons, item, bigOpen }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItem key={name} disablePadding sx={{ display: 'block' }}>
                <Link to={url}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        onClick={handleClick}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {icons}
                        </ListItemIcon>
                        <ListItemText primary={name} style={{ color: '#454545 ' }} sx={{ opacity: bigOpen ? 1 : 0 }} />

                    </ListItemButton>
                </Link>
            </ListItem>
            {item.map((i) => (
                <Collapse in={open} timeout="auto">
                    <Link to={i.url} style={{ textDecoration:'none', color:'#777777 '}}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                {i.icon}
                            </ListItemIcon>
                            <ListItemText primary={i.name} />
                        </ListItemButton>
                    </List></Link>
                </Collapse>
            ))}
        </>
    )
}

export default CustomListItem;