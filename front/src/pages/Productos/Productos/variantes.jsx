import { forwardRef, useState } from "react";
import {
  List,
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Skeleton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Button,
  AppBar,
  Toolbar,
  Paper,
  TableBody,
  Slide,
} from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";

import CloseIcon from "@mui/icons-material/Close";
import NumbersIcon from "@mui/icons-material/Numbers";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import Detalles from "./detalles";
import "./index.css";

import { alpha } from "@mui/material/styles";

import { delProd } from "../../../services/producto";

import AddVariante from "./addFormVatiantes";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Variante = ({ item, prodid, open, setOpen }) => {
  const [openModalVariante, setOpenModalVariante] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [detalle, setDetalle] = useState();
  const [variante, setVariante] = useState([]);
  

  const URL = 'http://localhost:8000/api/productos/prodvar/'

  // const handleOpenPost = () => {
  //   setOpenModal(true);
  //   setDetalle(item.producto_detalle);
  // };
  const handleClickOpen = () => {
    setOpen(true);
    console.log(item);
    console.log(prodid)
    item !== undefined ? setVariante(item) : variante;
  };

  const handlePutVariante = (row) => {
    setVariante(row);
    setOpenModalVariante(true);
  };

  const handleClose = () => {
    setOpen(false);
    setVariante({});
  };

  const handleDelete = (id) => {
    delProd(`${URL}${id}/`)
    console.log('eliminado')
  }

  return (
    <>
      <Button
        fullWidth
        color="secondary"
        variant="contained"
        size="small"
        id="textfields"
        onClick={handleClickOpen}
      >
        Ver variantes
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{ position: "relative", backgroundColor: alpha("#633256", 0.2) }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Variantes
            </Typography>
            <AddVariante variante={variante} setVariante={setVariante} id={prodid} openModalVariante={openModalVariante} setOpenModalVariante={setOpenModalVariante} />
          </Toolbar>
        </AppBar>
        <DialogContent>
          <TabContext centered>
            <TableContainer component={Paper} sx={{ mt: 0 }} elevation={0}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
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
                      Nombre
                    </TableCell>
                    <TableCell
                      sx={{ color: "#633256", fontFamily: "inherit" }}
                      align="right"
                    >
                      Precio Final
                    </TableCell>
                    <TableCell
                      sx={{ color: "#633256", fontFamily: "inherit" }}
                      align="right"
                    >
                      Color
                    </TableCell>
                    <TableCell
                      sx={{ color: "#633256", fontFamily: "inherit" }}
                      align="right"
                    >
                      Talla
                    </TableCell>
                    <TableCell
                      sx={{ color: "#633256", fontFamily: "inherit" }}
                      align="right"
                    >
                      Detalles
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
                  {item ? (
                    item.map((vari) => (
                      <TableRow key={1}>
                        <TableCell component="th" scope="row">
                          1
                        </TableCell>
                        <TableCell align="right">{vari.id}</TableCell>
                        <TableCell align="right">{vari.nombre}</TableCell>
                        <TableCell align="right">
                          {vari.precio_final}
                        </TableCell>
                        <TableCell align="right">{vari.color}</TableCell>
                        <TableCell align="right">{vari.talla}</TableCell>
                        <TableCell align="right">
                          <Detalles
                            item={vari.producto_detalle[0]}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                          />
                        </TableCell>
                        <TableCell align="right" component="th" scope="row">
                          <IconButton
                            aria-label="delete"
                            size="small"
                            color="success"
                            onClick={()=>handlePutVariante(vari)}
                          >
                            <EditIcon fontSize="inherit" />
                          </IconButton>
                          <IconButton
                            aria-label="delete"
                            size="small"
                            color="error"
                            onClick={()=>handleDelete(vari.id)}
                          >
                            <DeleteIcon fontSize="inherit" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <>Sin Variantes</>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </TabContext>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Variante;