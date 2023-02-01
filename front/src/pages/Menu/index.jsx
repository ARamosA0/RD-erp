import React from 'react';
import "./index.css";
import HomeIcon from '@mui/icons-material/Home';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CategoryIcon from '@mui/icons-material/Category';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ResponsiveAppBar from '../Navbar';

const Menu = () =>{
    return(
        <section>
            <ResponsiveAppBar></ResponsiveAppBar>
            <ul>
            <li><a href="#home"><HomeIcon></HomeIcon><div class="nav">Inicio</div></a></li>
            <li><a href="#news"><HandshakeIcon></HandshakeIcon><div class="nav">Inter. Comerciales</div></a></li>
            <li><a href="#contact"><Inventory2Icon></Inventory2Icon><div class="nav">Productos</div></a></li>
            <li><a href="#about"><AttachMoneyIcon></AttachMoneyIcon><div class="nav">Ventas</div></a></li>
            <li><a href="#about"><ReceiptIcon></ReceiptIcon><div class="nav">Compras</div></a></li>
            <li><a href="#about"><CategoryIcon></CategoryIcon><div class="nav">Producción</div></a></li>
            <li><a href="#about"><AutoStoriesIcon></AutoStoriesIcon><div class="nav">Tesorería</div></a></li>
            <li><a href="#about"><DragIndicatorIcon></DragIndicatorIcon><div class="nav">Mantenimiento</div></a></li>
            <li><a href="#about"><PrecisionManufacturingIcon></PrecisionManufacturingIcon><div class="nav">Servicios</div></a></li>
            </ul>
        </section>
    )
}

export default Menu;