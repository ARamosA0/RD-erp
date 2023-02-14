import { useState, useEffect, useContext, useRef } from "react";
import "./index.css";
import "../../fonts/poppins.ttf";

import {
  Paper,
  Grid,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  FormControlLabel,
  Select,
  Button,
  FormLabel,
  RadioGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { alpha } from "@mui/material/styles";

//Componentes
import { Tabla } from "./complements";
import AddForm from "./addform";
import VerProveedor from "./verproveedor";

const Proveedores = () => {
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState({});
  const [putItem, setPutItem] = useState({});
  const [value, setValue] = useState("");
  const [itemView, setItemView] = useState({})

  //Listado de proveedores y provincias
  const [provincias, setProvincias] = useState([]);
  const [proveedores, setProveedores] = useState([]);

  const render = useRef(true);
  const [renderizar, setRenderizar] = useState(true);
  const [fields, setFields] = useState({});

  //Buscador
  const handlerSearcher = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <section>
      <div className="container">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={10} className="paper" sx={{ mt: 4, p: 5 }}>
              Buscar Proveedor <br />
              <TextField
                fullWidth
                label="Código"
                type="number"
                size="small"
                color="secondary"
                margin="dense"
                id="textfields"
                onChange={handlerSearcher}
              />
              <TextField
                fullWidth
                label="RUC/DNI"
                type="number"
                size="small"
                color="secondary"
                margin="dense"
                id="textfields"
                onChange={handlerSearcher}
              />
              <TextField
                fullWidth
                label="Nombre"
                type="text"
                size="small"
                color="secondary"
                margin="dense"
                id="textfields"
                onChange={handlerSearcher}
              />
              <TextField
                fullWidth
                label="Teléfono"
                type="number"
                size="small"
                color="secondary"
                margin="dense"
                id="textfields"
                onChange={handlerSearcher}
              />
              <FormControl
                fullWidth
                margin="dense"
                size="small"
                color="secondary"
              >
                <InputLabel>Provincia</InputLabel>
                <Select
                  label="Provincia"
                  size="small"
                  color="secondary"
                  id="textfields"
                  onChange={handlerSearcher}
                  defaultValue=""
                >
                  {provincias.map((item, i) => (
                    <MenuItem key={i} value={item.id}>
                      {item.nombreprovincia}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Localidad"
                type="text"
                size="small"
                color="secondary"
                margin="dense"
                id="textfields"
                onChange={handlerSearcher}
              />
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  color="secondary"
                >
                  Tipo
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={handlerSearcher}
                >
                  <FormControlLabel
                    disableTypography
                    labelPlacement="start"
                    value=""
                    control={<Radio color="secondary" />}
                    label="all"
                  />
                  <FormControlLabel
                    disableTypography
                    labelPlacement="start"
                    value="persona"
                    control={<Radio color="secondary" />}
                    label="persona"
                  />
                  <FormControlLabel
                    disableTypography
                    labelPlacement="start"
                    value="empresa"
                    control={<Radio color="secondary" />}
                    label="empresa"
                  />
                </RadioGroup>
              </FormControl>
              <br />
              <Grid container spacing={1} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={12} md={6}>
                  <Button
                    fullWidth
                    id="textfields"
                    color="secondary"
                    variant="contained"
                  >
                    Buscar
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Button
                    fullWidth
                    id="textfields"
                    color="primary"
                    variant="contained"
                  >
                    Limpiar
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <VerProveedor itemView={itemView} />
          </Grid>
          <Grid item xs={12} sm={12} md={1} sx={{ mt: 4 }}>
            <AddForm
              render={render}
              renderizar={renderizar}
              setRenderizar={setRenderizar}
              openModal={openModal}
              setOpenModal={setOpenModal}
              item={item}
              setItem={setItem}
              value={value}
              setValue={setValue}
            />
          </Grid>
        </Grid>

        <Tabla
          fields={fields}
          render={render}
          renderizar={renderizar}
          setRenderizar={setRenderizar}
          setOpenModal={setOpenModal}
          value={value}
          setValue={setValue}
          setItem={setItem}
          setItemView={setItemView}
          setPutItem={setPutItem}
        />
      </div>
    </section>
  );
};

export default Proveedores;
