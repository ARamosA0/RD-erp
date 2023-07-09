import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Surface, TextInputMask, Button } from 'react-native-paper';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { getMan } from "../services/ventas"
import { Dialog, Portal } from 'react-native-paper';
// Libreria SelectDropdonw
// https://github.com/AdelRedaa97/react-native-select-dropdown/tree/d0c6d8acd346ff0b47a9bb32a902b52022644f6d
import SelectDropdown from 'react-native-select-dropdown'

const SearcherProductos = ({fields, setFields}) => {

  const[categorias, setCategorias] = useState([])
  const[almacenes, setAlmacenes] = useState([])

  const handlerSearcher = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  useEffect(() => {
    const URL_C = "http://localhost:8000/api/mantenimientos/categoria_productos/";
    const URL_M = "http://localhost:8000/api/mantenimientos/almacenes/";
    getMan(setCategorias, URL_C)
    getMan(setAlmacenes, URL_M);
  }, []);

  console.log("categorias",categorias);
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);
  
  return (
    <section>
        <Surface style={{padding:30, marginBottom:20,backgroundColor: "white", }} elevation={5}>
                <Text style={styles.textTotal}>Buscar Producto</Text>
                <TextInput
                    label="Nombre"
                    type="text"
                    mode="filled"
                    name="nombre"
                    id="textfields"
                    onChange={handlerSearcher}
                    style={styles.textInput}
                />
                <SelectDropdown
                    data={categorias}
                    defaultButtonText={"Selecciona una categoría"}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                    }}
                    rowTextForSelection={(item, index) =>{
                        return item.nombre
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.nombre
                    }}
                    onChange={handlerSearcher}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    renderDropdownIcon={(isOpened) => {
                        return (
                        <FontAwesome
                            name={isOpened ? "chevron-up" : "chevron-down"}
                            color={"#444"}
                            size={18}
                        />
                        );
                    }}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                    style={styles.select}
                />

                <div item xs={12} sm={4} md={4}>
                <SelectDropdown
                    data={almacenes}
                    defaultButtonText={"Selecciona un almacén"}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                    }}
                    rowTextForSelection={(item, index) =>{
                        return item.nombre
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.nombre
                    }}
                    onChange={handlerSearcher}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    renderDropdownIcon={(isOpened) => {
                        return (
                        <FontAwesome
                            name={isOpened ? "chevron-up" : "chevron-down"}
                            color={"#444"}
                            size={18}
                        />
                        );
                    }}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                    style={styles.select}
                />
                {/* <FormControl
                    fullWidth
                    margin="dense"
                    size="small"
                    color="secondary"
                >
                    <InputLabel>Almacén</InputLabel>
                    <Select
                    label="Almacen"
                    size="small"
                    color="secondary"
                    id="textfields"
                    defaultValue=""
                    name="almacen"
                    onChange={handlerSearcher}
                    >
                    <MenuItem value="">
                    all
                    </MenuItem>
                    {almacenes.map((item, i) => (
                        <MenuItem key={1} value={item.id}>
                        {item.nombre}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>  */}
                </div>
        </Surface>
    </section>
  )
}

export default SearcherProductos;

const styles = StyleSheet.create({
    scrollViewContainer: {
      flexGrow: 1,
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: "10%",
      paddingBottom: "20%",
    },
    dropdown1BtnStyle: {
      width: "100%",
      height: 50,
      backgroundColor: "#EFEFEF",
      marginBottom:5
    },
    dropdown1BtnTxtStyle: { color: "#444", textAlign: "center" },
    dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
    dropdown1RowStyle: {
      backgroundColor: "#EFEFEF",
      borderBottomColor: "#C5C5C5",
    },
    dropdown1RowTxtStyle: { color: "#444", textAlign: "center" },
    textInput:{
      marginBottom:5,
    },
    textTotal:{
        fontSize: '1rem',
        fontWeight: 'bold',
        textAlign:'center',
        marginBottom:25,
      },
  });
  