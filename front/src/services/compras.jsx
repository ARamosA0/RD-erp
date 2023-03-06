import axios from "axios";

//Buscador de articulos
export const searcher = (fields, list) => {
    let resultData = list;
    resultData = fields.nombre
        ? resultData.filter((item) =>
            (item.articulo.toString()+item.nombre.toString()).toLowerCase().includes(fields.nombre.toString())
            )
        : resultData;
    resultData = fields.categoria
        ? resultData.filter((item) => 
            item.categoria == fields.categoria
        )
        : resultData;
    resultData = fields.almacen
        ? resultData.filter((item) => 
            item.almacen == fields.almacen
        )
        : resultData;
    return resultData;
};

export const getArticulos = (set, url) => {
    axios
    .get(url)
    .then((res) => {
      if (res.status == 200) set(res.data.content);
    })
    .catch((error) => console.log(error));
}

// Registro de la compra
export const RegistroComnpra =(payload) => {
    axios.post("http://localhost:8000/api/compras/", payload)
         .then(res=>{console.log(res.data)})
         .catch(err=>{console.log(err)})
}

export const BuildCompraPayload =(compra)=>{
    compra.proveedor = compra.proveedor.id
    compra.detalle_compra.forEach(item => {
        delete item.nombre
    })
    return compra
}