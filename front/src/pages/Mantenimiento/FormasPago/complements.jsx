//para la tabla
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MenuItem from '@mui/material/MenuItem';

import { searcherProvincias, getProvincias, deleteProvincia } from '../../../services/mantenimiento';
import { useRef, useState,useEffect } from 'react';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { alpha } from "@mui/material/styles";

export const Tabla = ({fields,render,renderizar,setRenderizar,setOpenModal, setItem}) => {

    const [provincias, setProvincias] = useState([]);
    useEffect(()=>{
        if (render.current){
        render.current = false
        getProvincias(setProvincias);
        }
    },[renderizar])

    let data = searcherProvincias(fields, provincias)

    const handlePut = (row) =>{
        setItem(row)
        setOpenModal(true)
    }

    const handleDelete = async (id) =>{
        try{
            let res = await deleteProvincia(id)
            render.current = true
            setRenderizar(!renderizar)
            return res
        }catch(error){
            return error
        }
        
    }

    return(
        <TableContainer component={Paper} sx={{ mt: 5 }} elevation={10}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead sx={{
                    backgroundColor: alpha("#633256", 0.2),
                    "&:hover": {
                    backgroundColor: alpha("#633256", 0.25),
                    },
                }}
                >
                <TableRow>
                    <TableCell sx={{ color: "#633256" , fontFamily:'inherit' , fontStyle: "italic"}}>Item</TableCell>
                    <TableCell sx={{ color: "#633256" , fontFamily:'inherit'}} align="right">Código</TableCell>
                    <TableCell sx={{ color: "#633256" , fontFamily:'inherit'}} align="right">Nombre</TableCell>
                    <TableCell sx={{ color: "#633256" , fontFamily:'inherit'}} align="right">Acciones</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {data.map((row,i) => (
                    <TableRow key={i}>
                    <TableCell component="th" scope="row">
                        {i+1}
                    </TableCell>
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">{row.nombreprovincia}</TableCell>
                    <TableCell align="right" component="th" scope="row">
                        <IconButton aria-label="delete" size="small" color="primary">
                            <VisibilityIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton onClick={() => handlePut(row)} aria-label="delete" size="small" color="success">
                            <EditIcon fontSize="inherit"/>
                        </IconButton>
                        <IconButton onClick={() => handleDelete(row.id)} aria-label="delete" size="small" color="error">
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}