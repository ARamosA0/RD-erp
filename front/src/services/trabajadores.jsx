import axios from "axios";
import { createContext, useState } from "react";

const TrabajadoresContext = createContext();
const URL = "http://localhost:8000/api/trabajadores/";
// let [Trabajadores, setdataeerores] = useState([]);

const setInitialDate = () => {
  let actualdate = new Date();
  var event = new Date(actualdate);
  return JSON.stringify(event).slice(1, -1);
};

export const initialState = {
  fecha_nacimiento: setInitialDate(),
};

export const getTrabajadores = async (set) => {
  const res = await axios
    .get(`${URL}`)
    .catch((error) => console.log({ error }));
  set(res.data.content);
  return { trabajadores: res.data };
};

export const postTrabajadores = async (data) => {
  try {
    const response = await axios.post(`${URL}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const putTrabajadores = async (data, id) => {
  try {
    const response = await axios.put(`${URL}${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const delTrabajadores = async (id) => {
  try {
    const response = await axios.delete(`${URL}${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const searcher = (fields, list) => {
  //console.log(list);
  let resultData = list;
  resultData = fields.codigo
    ? resultData.filter((item) => {
        return item.codigo
          .toString()
          .toLowerCase()
          .includes(fields.codigo.toString().toLowerCase());
      })
    : resultData;
  resultData = fields.nombre
    ? resultData.filter((item) => {
        return item.persona.nombre
          .toString()
          .toLowerCase()
          .includes(fields.nombre.toString().toLowerCase());
      })
    : resultData;
  resultData = fields.dni
    ? resultData.filter((item) => {
        return item.persona.dni
          .toString()
          .toLowerCase()
          .includes(fields.dni.toString().toLowerCase());
      })
    : resultData;
  resultData = fields.fecha_nacimiento
    ? resultData.filter((item) => {
        return (
          item.fecha_nacimiento.toString() == fields.fecha_nacimiento.toString()
        );
      })
    : resultData;
  return resultData;
};
