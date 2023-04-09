import React from 'react'

import { Grid, Button, TextField, Autocomplete, Card } from '@mui/material'

const CotizacionMayor = () => {

    //para autocomplete
    const handlerSearcher = (e) => {
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value });
    };
    const top100Films = [
        { label: 'Logistica'},
        { label: 'Marketing'},
        { label: 'Aministración'},
        { label: 'Mantenimiento'},
    ];

    const top101Films = [
        { label: 'No Iniciado'},
        { label: 'Solicitando cotización'},
        { label: 'Aprobado'},
        { label: 'En proceso'},
        { label: 'Denegado'},

    ];

    return (
        <div>
            <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6}>
            <TextField
                fullWidth
                label="Tipo de servicio (Viene al seleccionarlo)"
                required
                size="small"
                color="secondary"
                id="textfields"
                margin="dense"
                name="persona.nombre"
            />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Autocomplete
                fullWidth
                type="text"
                size="small"
                color="secondary"
                margin="dense"
                name="nombre"
                id="textfields"
                disablePortal
                required
                options={top101Films}
                renderInput={(params) => <TextField {...params} label="Estado (Viene al seleccionarlo)" margin="dense" color="secondary" fullWidth />}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Card variant="outlined" sx={{px:2, py:1}}>
                <Grid container spacing={1}>
                    {/* Cotizacion mayor a 500 */}
                    {/* Cotizacion 1 */}
                    <Grid item xs={12} sm={12} md={6} >
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={12} >
                        <span>Cotización 1</span>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                        <Button variant="outlined" component="label" fullWidth size="small">
                            <span>Subir</span>
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        </Grid>
                    </Grid>
                    </Grid>
                    {/* Propuesta economica 1 */}
                    <Grid item xs={12} sm={12} md={6} >
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={12} >
                        <span>Propuesta económica 1</span>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                        <Button variant="outlined" component="label" fullWidth size="small">
                            <span>Subir</span>
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <Card variant="outlined" sx={{px:2, py:1}}>
                <Grid container spacing={1}>
                    {/* Cotizacion 2 */}
                    <Grid item xs={12} sm={12} md={6} >
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={12} >
                        <span>Cotización 2</span>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                        <Button variant="outlined" component="label" fullWidth size="small">
                            <span>Subir</span>
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        </Grid>
                    </Grid>
                    </Grid>
                    {/* Propuesta economica 2 */}
                    <Grid item xs={12} sm={12} md={6} >
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={12} >
                        <span>Propuesta económica 2</span>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                        <Button variant="outlined" component="label" fullWidth size="small">
                            <span>Subir</span>
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <Card variant="outlined" sx={{px:2, py:1}}>
                {/* Cotizacion 3 */}
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6} >
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={12} >
                        <span>Cotización 3</span>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                        <Button variant="outlined" component="label" fullWidth size="small">
                            <span>Subir</span>
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        </Grid>
                    </Grid>
                    </Grid>
                    {/* Propuesta economica 3 */}
                    <Grid item xs={12} sm={12} md={6} >
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={12} >
                        <span>Propuesta económica 3</span>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                        <Button variant="outlined" component="label" fullWidth size="small">
                            <span>Subir</span>
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                </Card>
            </Grid>
            </Grid>
        </div>
    )
}

export default CotizacionMayor