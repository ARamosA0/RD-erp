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
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import InfoIcon from '@mui/icons-material/Info';

const VerRemision = ({ itemView }) => {
  const [itemsPer, setItemsPer] = useState([
    { icon: <NumbersIcon />, primary: "Código", secondary: "" },
    { icon: <InfoIcon />, primary: "Estado", secondary: "" },
    { icon: <DescriptionIcon />, primary: "Factura", secondary: "" },
    { icon: <PersonIcon />, primary: "Cliente", secondary: "" },
    { icon: <CalendarMonthIcon />, primary: "Fecha", secondary: "" }
  ]);

  const seti = () => {
    const newItem = itemsPer.map((i) => {
      if (!itemView.id) {
        return {
          ...i,
        };
      } else {
        if (i.primary === "Código") {
          return {
            ...i,
            secondary: itemView.id,
          };
        } else if (i.primary === "Nombre") {
          return {
            ...i,
            secondary: itemView.nombreprovincia,
          };
        }
      }
    });
    setItemsPer(newItem);
  };

  useEffect(() => {
    seti();
  }, [itemView]);

  return (
    <section>
      <Paper
        elevation={10}
        className="paper"
        sx={{mt: 4,p: 0}}
      >
        <Accordion sx={{ p:5 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Remisión seleccionada (Ventas)
          </AccordionSummary>
          <AccordionDetails>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <Grid container spacing={0}>
                {itemsPer.map((i) => (
                    <Grid key={i.primary} item xs={12} sm={6} md={6}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{
                                backgroundColor: alpha('#633256', 0.20),
                                '&:hover': {
                                    backgroundColor: alpha('#633256', 0.25),
                                }, color:'#633256'
                                }}>{i.icon}</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={<span>{i.primary}</span>}
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

export default VerRemision;