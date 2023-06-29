import axios from "../api/axios";

const cajaURL = "api/cajadiaria/";
const lastCajaURL = cajaURL + "ultimacaja/";
const ingresosOtrosURL = cajaURL + "ingresosotros/";
const egresosOtrosURL = cajaURL + "egresosotros/";

export const searcherRegistros = (fields, list) => {
  let resultData = list;
  resultData =
    fields.hora && fields.hora != ""
      ? resultData.filter((item) => 
      item.hora.slice(0, 5).toString().toLowerCase().includes(fields.hora.toString().toLowerCase()))
      : resultData;
  resultData =
    fields.monto && fields.monto != ""
      ? resultData.filter((item) => 
        item.monto.toFixed(2).toString().toLowerCase().includes(fields.monto.toString().toLowerCase())
        )
      : resultData;
  resultData =
    fields.tipo && fields.tipo != ""
      ? resultData.filter((item) => item.tipo == fields.tipo)
      : resultData;
  return resultData;
};

export const getCaja = async () => {
  try {
    const response = await axios.get(cajaURL);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const postCaja = async (data) => {
  try {
    const response = await axios.post(cajaURL, data);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getLastCaja = async (set, tipo) => {
  try {
    const responseLast = await axios.get(lastCajaURL + tipo + "/");

    if (responseLast.data.status !== false) {
      set(responseLast.data.content);
    }

    return responseLast.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const patchCaja = async (id, data) => {
  try {
    const responsePatch = await axios.patch(cajaURL + `${id}/`, data);
    return responsePatch.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

//registros de caja
export const postIngresoCaja = async (data) => {
  try {
    const res = await axios.post(ingresosOtrosURL, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const postEgresoCaja = async (data) => {
  try {
    const res = await axios.post(egresosOtrosURL, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const initialRegister = {
  tipo: "Otros ingresos",
  monto: 0.0,
  tipo_pago: "Soles",
  descripcion: "-",
};

export function transformToFormData(values) {
  const formData = new FormData();
  for (let key in values) {
    if (values.hasOwnProperty(key)) {
      const value = values[key];
      if (value instanceof File) {
        formData.append(key, value, value.name);
      } else {
        formData.append(key, value);
      }
    }
  }
  return formData;
}

//api sunat - cambio dolar
export const getCambio = async (set) => {
  axios
    .get("http://localhost:8000/api/cajadiaria/cambio-dolar")
    .then((res) => {
      if (res.status == 200) set(res.data.tipo_cambio);
    })
    .catch((error) => console.log(error));
};

export function formateoFecha(date) {
  const fecha = new Date(date);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour12: false,
    timeZone: "America/Lima",
  };
  const fechaFormateada = fecha.toLocaleString("es-ES", options);
  return fechaFormateada;
}

export function formatearFechaTabla(fecha) {
  var partes = fecha.split("-");
  var fechaFormateada = partes[2] + "/" + partes[1] + "/" + partes[0];
  return fechaFormateada;
}
