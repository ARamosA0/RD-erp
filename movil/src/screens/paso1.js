import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";

// Libreria estilos 
//  https://react-native-material.com/docs/layout/box
import {
  Button,
  TextInput,
} from "@react-native-material/core";

//Componentes
// Libreria Datepicker
// https://github.com/henninghall/react-native-date-picker
import DatePicker from "react-native-date-picker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import AddIcon from "@mui/icons-material/Add";
// import SearchIcon from "@mui/icons-material/Search";

// import { ACTION_TYPES, ACTION_PUNTO_VENTA_TYPES } from "./reducer";
// import { getClientes } from "../../../services/clientes";

const Paso1 = ({ state, dispatch }) => {
  const render = useRef(true);
  const [dataClientes, setDataClientes] = useState([]);
  const [pickerDate, setPickerDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleChange = (e, value, ac) => {
    let action = {
      type: ac,
    };

    switch (ac) {
      case ACTION_TYPES.SET_FECHA:
        var event = new Date(e.$d);
        let date = JSON.stringify(event);
        date = date.slice(1, -1);
        action.payload = date;
        dispatch(action);
        break;

      case ACTION_TYPES.SET_CLIENTE:
        if (value.id) {
          action.payload = value;
          dispatch(action);
        }
        break;
      default:
        console.log("Acción no definida");
    }
    console.log(action);
  };

  useEffect(() => {
    if (render.current) {
      render.current = false;
      setDataClientes;
    }
    console.log(dataClientes);
  }, []);

  return (
    <View>
      <Text>Hola</Text>
      <div>
        <div container spacing={1}>
          <div item xs={12} sm={12} md={12}>
            <div container spacing={1}>
              <div item xs={12} sm={8} md={9}>
                <TextInput
                  label="Nombre Cliente"
                  variant="filled"
                  onChange={(e, value) => {
                    handleChange(e, value, ACTION_TYPES.SET_CLIENTE);
                  }}
                />
              </div>
              <div item xs={12} sm={4} md={3}>
                <Button
                  variant="outlined"
                  fullWidth
                  color="primary"
                  sx={{ height: "100%" }}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
          <div item xs={12} sm={12} md={6}>
            <DatePicker
              modal
              open={open}
              date={pickerDate}
              onConfirm={(date) => {
                setOpen(false);
                setPickerDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
              onChange={(value) => {
                handleChange(value, null, ACTION_TYPES.SET_FECHA);
              }}
            />
          </div>
          <div item xs={12} sm={12} md={3}>
            <TextInput
              fullWidth
              label="Código Cliente"
              // focused
              // type="text"
              // size="small"
              // color="action"
              // margin="dense"
              id="textfields"
              // disable="true"
              variant="filled"
              value={state.venta.cliente.codigo}
            />
          </div>
          <div item xs={12} sm={12} md={3}>
            <TextInput
              fullWidth
              label="Identificación"
              type="number"
              // size="small"
              // focused
              // color="action"
              // margin="dense"
              id="textfields"
              // disable="true"
              variant="filled"
              value={
                state.venta.cliente.persona
                  ? state.venta.cliente.persona.dni
                  : state.venta.cliente.empresa.ruc
              }
            />
          </div>
        </div>
      </div>
    </View>

    // <section>
    //   <div className="container">
    //     <Paper sx={{ p: 5 }} elevation={20}>
    //       <Grid container spacing={1}>
    //         <Grid item xs={12} sm={12} md={12}>
    //           <Grid container spacing={1}>
    //             <Grid item xs={12} sm={8} md={9}>
    //               <Autocomplete
    //                 disableClearable
    //                 options={dataClientes}
    //                 getOptionLabel={(option) => {
    //                   // console.log(option)
    //                   if (option.persona) return option.persona.nombre;
    //                   return option.empresa.nombre;
    //                 }}
    //                 onChange={(e, value) => {
    //                   handleChange(
    //                     e,
    //                     value,
    //                     !sesionIniciada
    //                       ? ACTION_TYPES.SET_CLIENTE
    //                       : ACTION_PUNTO_VENTA_TYPES.SET_CLIENTE
    //                   );
    //                 }}
    //                 value={
    //                   !sesionIniciada
    //                     ? state.venta.cliente
    //                     : statePuntoVenta.punto_venta.cliente
    //                 }
    //                 renderInput={(params) => (
    //                   <TextField
    //                     {...params}
    //                     focused
    //                     fullWidth
    //                     type="text"
    //                     label="Nombre del cliente"
    //                     size="small"
    //                     color="secondary"
    //                     margin="none"
    //                     name="proveedor"
    //                     id="textfields"
    //                   />
    //                 )}
    //               />
    //             </Grid>
    //             <Grid item xs={12} sm={4} md={3}>
    //               <Button
    //                 variant="outlined"
    //                 fullWidth
    //                 color="primary"
    //                 sx={{ height: "100%" }}
    //               >
    //                 <AddIcon />
    //               </Button>
    //             </Grid>
    //           </Grid>
    //         </Grid>
    //         <Grid item xs={12} sm={12} md={6}>
    //           <LocalizationProvider dateAdapter={AdapterDayjs}>
    //             <DesktopDatePicker
    //               label="Fecha"
    //               name="fecha"
    //               inputFormat="DD/MM/YYYY"
    //               value={
    //                 !sesionIniciada
    //                   ? state.venta.fecha
    //                   : statePuntoVenta.punto_venta.fecha
    //               }
    //               onChange={(value) => {
    //                 handleChange(value, null, ACTION_TYPES.SET_FECHA);
    //               }}
    //               renderInput={(params) => (
    //                 <TextField
    //                   {...params}
    //                   fullWidth
    //                   size="small"
    //                   color="secondary"
    //                   id="textfields"
    //                   margin="dense"
    //                   variant="filled"
    //                 />
    //               )}
    //             />
    //           </LocalizationProvider>
    //         </Grid>
    //         <Grid item xs={12} sm={12} md={3}>
    //           <TextField
    //             fullWidth
    //             label={"Código Cliente"}
    //             focused
    //             type="text"
    //             size="small"
    //             color="action"
    //             margin="dense"
    //             id="textfields"
    //             disable="true"
    //             variant="filled"
    //             value={
    //               !sesionIniciada
    //                 ? state.venta.cliente.codigo
    //                 : statePuntoVenta.punto_venta.cliente.codigo
    //             }
    //           />
    //         </Grid>
    //         <Grid item xs={12} sm={12} md={3}>
    //           <TextField
    //             fullWidth
    //             label={"Identificación"}
    //             type="number"
    //             size="small"
    //             focused
    //             color="action"
    //             margin="dense"
    //             id="textfields"
    //             disable="true"
    //             variant="filled"
    //             value={
    //               !sesionIniciada
    //                 ? state.venta.cliente.persona
    //                   ? state.venta.cliente.persona.dni
    //                   : state.venta.cliente.empresa.ruc
    //                 : statePuntoVenta.punto_venta.cliente.persona
    //                   ? statePuntoVenta.punto_venta.cliente.persona.dni
    //                   : statePuntoVenta.punto_venta.cliente.empresa.ruc
    //             }
    //           />
    //         </Grid>
    //       </Grid>
    //     </Paper>
    //   </div>
    // </section>
  );
};
export default Paso1;
