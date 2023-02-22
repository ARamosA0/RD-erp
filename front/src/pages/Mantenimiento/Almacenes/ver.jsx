import { useEffect, useState } from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
//icons
import NumbersIcon from "@mui/icons-material/Numbers";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Swal from "sweetalert2";

const VerCategoria = (itemView) => {
  const [itemsPer, setItemsPer] = useState([
    { icon: <NumbersIcon />, primary: "Código", secondary: "" },
    { icon: <DriveFileRenameOutlineIcon />, primary: "Nombre", secondary: "" },
    { icon: <DriveFileRenameOutlineIcon />, primary: "Abreviacion", secondary: "" },
    { icon: <DriveFileRenameOutlineIcon />, primary: "Ubicacion", secondary: "" },
    { icon: <DriveFileRenameOutlineIcon />, primary: "Descripcion", secondary: "" }
  ]);

  const seti = () => {
    const newItem = itemsPer.map((i) => {
      if (!itemView.itemView.id) {
        return {
          ...i,
        };
      } else {
        if (i.primary === "Código") {
          return {
            ...i,
            secondary: itemView.itemView.id,
          };
        } else if (i.primary === "Nombre") {
          return {
            ...i,
            secondary: itemView.itemView.nombre,
          };
        } else if (i.primary === "Abreviacion") {
          return {
            ...i,
            secondary: itemView.itemView.abreviacion,
          };
        } else if (i.primary === "Ubicacion") {
          return {
            ...i,
            secondary: itemView.itemView.ubicacion,
          };
        } else if (i.primary === "Descripcion") {
          return {
            ...i,
            secondary: itemView.itemView.descripcion,
          };
        } 
      }
    });
    setItemsPer(newItem);
  };

  useEffect(()=>{
    seti()
  },[itemView])

  return (
    <section>
      <Paper
        elevation={10}
        className="paper"
        sx={{
          mt: 4,
          p: 0,
          backgroundColor: alpha("#8D4C32", 0.2),
          "&:hover": {
            backgroundColor: alpha("#8D4C32", 0.25),
          },
        }}
      >
        <Accordion sx={{ p:5 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Almacen seleccionado
          </AccordionSummary>
          <AccordionDetails>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <Grid container spacing={0}>
                {itemsPer.map((i) => (
                    <Grid key={i.primary} item xs={12} sm={6} md={6} lg={6}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>{i.icon}</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={i.primary}
                          secondary={i.secondary}
                        />
                      </ListItem>
                    </Grid>
                ))}
              </Grid>
            </List>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </section>
  );
};

export default VerCategoria;