import axios from "axios";
import { createContext, useState } from "react";

const TrabajadoresContext = createContext();
const URL = "http://localhost:8000/api/trabajadores/";
// let [Trabajadores, setdataeerores] = useState([]);

export const getTrabajadores = async (set) => {
  const res = await axios
    .get(`${URL}`)
    .catch((error) => console.log({ error }));
  set(res.data.content)
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
  console.log(list);
  let resultData = list;
  /*
  resultData = fields.codigo
    ? resultData.filter(
        (item) => item.codigo.toString() === fields.codigo.toString()
      )
    : resultData;

    
  resultData = fields.nombre
    ? resultData.filter((item) => {
        if (item.persona)
          return item.persona.nombre === fields.nombre.toString()
        else
          return item.empresa.nombre === fields.nombre.toString()
      })
    : resultData;
  resultData = fields.telefono
    ? resultData.filter((item) => {
        if (item.persona)
          return item.persona.telefono.toString() === fields.telefono.toString()
        else
          return item.empresa.telefono.toString() === fields.telefono.toString()
      })
    : resultData;
*/
    //console.log(resultData)
  return resultData;
};