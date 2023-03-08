//para la tabla
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionIcon from '@mui/icons-material/Description';
import Button from "@mui/material/MenuItem";

import { styled, useTheme, alpha } from "@mui/material/styles";

import { useState, useEffect } from "react";
import {
  get,
  searcherprov,
  post_put,
  del,
} from "../../../services/mantenimiento";
import AddForm from "../Remisiones/addform";

export const Tabla = ({
  fields,
  render,
  renderizar,
  setRenderizar,
  setOpenModal,
  setItem,
  setItemView,
}) => {

  const URL = "http://localhost:8000/api/mantenimientos/provincias/";
  const [provincias, setProvincias] = useState([]);
  useEffect(() => {
    if (render.current) {
      render.current = false;
      get(setProvincias, URL);
    }
  }, [renderizar]);

  let data = searcherprov(fields, provincias);

  const handlePut = (row) => {
    setItem(row);
    setOpenModal(true);
  };

  const handleView = (row) => {
    setItemView(row);
  };

  const handleDelete = async (id) => {
    try {
      let res = await del(id, URL);
      render.current = true;
      setRenderizar(!renderizar);
      return res;
    } catch (error) {
      return error;
    }
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 5 }} elevation={10}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead
          sx={{
            backgroundColor: alpha("#633256", 0.2),
            "&:hover": {
              backgroundColor: alpha("#633256", 0.25),
            },
          }}
        >
          <TableRow>
            <TableCell
              sx={{
                color: "#633256",
                fontFamily: "inherit",
                fontStyle: "italic",
              }}
            >
              Item
            </TableCell>
            <TableCell
              sx={{ color: "#633256", fontFamily: "inherit" }}
              align="right"
            >
              Código
            </TableCell>
            <TableCell
              sx={{ color: "#633256", fontFamily: "inherit" }}
              align="right"
            >
              N° de factura
            </TableCell>
            <TableCell
              sx={{ color: "#633256", fontFamily: "inherit" }}
              align="right"
            >
              Fecha
            </TableCell>
            <TableCell
              sx={{ color: "#633256", fontFamily: "inherit" }}
              align="right"
            >
              Cliente
            </TableCell>
            <TableCell
              sx={{ color: "#633256", fontFamily: "inherit" }}
              align="right"
            >
              N° de productos
            </TableCell>
            <TableCell
              sx={{ color: "#633256", fontFamily: "inherit" }}
              align="right"
            >
              Acciones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.nombreprovincia}</TableCell>
              <TableCell align="right">{row.nombreprovincia}</TableCell>
              <TableCell align="right">{row.nombreprovincia}</TableCell>
              <TableCell align="right">{row.nombreprovincia}</TableCell>
              <TableCell align="right" component="th" scope="row">
                <IconButton
                  aria-label="delete"
                  size="small"
                  color="primary"
                  onClick={() => handleView(row)}
                >
                  <VisibilityIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  onClick={() => handlePut(row)}
                  aria-label="delete"
                  size="small"
                  color="success"
                >
                  <EditIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  onClick={() => handleDelete(row.id)}
                  aria-label="delete"
                  size="small"
                  color="error"
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>

                <AddForm/>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
