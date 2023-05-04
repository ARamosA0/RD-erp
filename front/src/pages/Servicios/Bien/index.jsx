import "./index.css";
import "../../../fonts/poppins.ttf";
import { alpha } from "@mui/material/styles";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import NumbersIcon from "@mui/icons-material/Numbers";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Paper,
  Grid,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box, Autocomplete, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio
} from "@mui/material";

//Componentes
import { useState, useEffect, useContext } from "react";

import { useRef } from "react";
import Notificaciones from "./notificaciones";
import VerMayor500 from "./vermayor500";
import VerMenor500 from "./vermenor500";

const Bien = () => {
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState({});
  const [itemView, setItemView] = useState({});

  const render = useRef(true);
  const [renderizar, setRenderizar] = useState(true);
  const [fields, setFields] = useState({});
  const handlerSearcher = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };
  const handleClean = () => {
    searchform.reset();
  };

  const top101Films = [
    { label: 'No Iniciado'},
    { label: 'Aprobado'},
    { label: 'En proceso'},
    { label: 'Denegado'},

  ];

  return (
    <section>
      <div className="container" style={{ marginTop: '30px'}}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <Notificaciones
              render={render}
              renderizar={renderizar}
              setRenderizar={setRenderizar}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper
              elevation={10}
              className="paper"
              sx={{
                p: 0,
                backgroundColor: alpha("#8D4C32", 0.2),
                "&:hover": {
                  backgroundColor: alpha("#8D4C32", 0.25),
                },
              }}
            >
              <Accordion sx={{ p: 5 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  Buscar órden de bien
                </AccordionSummary>
                <AccordionDetails>
                  <form id="searchform">
                   
                    
                    <Autocomplete
                      fullWidth

                      type="text"
                      size="small"
                      color="secondary"
                      margin="dense"
                      name="nombre"
                      id="textfields"
                      onChange={handlerSearcher}
                      disablePortal
                      options={top101Films}
                      renderInput={(params) => <TextField {...params} variant="filled" label="Estado" margin="dense" color="secondary" fullWidth />}

                    />
                   
                    
                    <Grid container spacing={1} sx={{ mt: 2 }}>
                      <Grid item xs={12} sm={12} md={12}>
                        <Button
                          fullWidth
                          id="textfields"
                          color="secondary"
                          variant="contained"
                          type="reset"
                          value="limpiar"
                          onClick={handleClean}
                        >
                          Limpiar
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={4}>

          </Grid>
        </Grid>
      
        <Grid container spacing={1} sx={{ mt: 0 }}>
          <Grid item xs={12} sm={12} md={6}>
            <VerMayor500/>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <VerMenor500
              fields={fields}
              render={render}
              renderizar={renderizar}
              setRenderizar={setRenderizar}
            />
          </Grid>
        </Grid>
        
      </div>
    </section>
  );
};
export default Bien;
