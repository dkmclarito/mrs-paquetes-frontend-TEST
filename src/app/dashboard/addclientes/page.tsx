
"use client";

import * as React from 'react';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import dayjs from 'dayjs';

import { config } from '@/config';
import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
import { CustomersTable } from '@/components/dashboard/customer/customers-table';
import type { Customer } from '@/components/dashboard/customer/customers-table';


const initialFormData = {
  nombre: '',
  apellido: '',
  nombre_comercial: '',
  email: '',
  dui: '',
  telefono: '',
  id_tipo_persona: '1',
  es_contribuyente: '1',
  fecha_registro: dayjs().format('YYYY-MM-DD'),
  id_genero: '1',
  id_estado: '1',
  id_departamento: '1',
  id_municipio: '1',
};

const departamento = [
  { value: '1', label: 'San Miguel' },
  { value: '2', label: 'San Salvador' },
  { value: '3', label: 'Santa Ana' },
  { value: '4', label: 'La Unión' },
] as const;

const municipio = [
  { value: '1', label: 'San Miguel' },
  { value: '2', label: 'El Tránsito' },
  { value: '3', label: 'Otros' },
] as const;

const tipoPersona = [
  { value: '1', label: 'Natural' },
  { value: '2', label: 'Jurídica' },
] as const;

const generoPersona = [
  { value: '1', label: 'Masculino' },
  { value: '2', label: 'Femenino' },
] as const;

const es_contribuyente = [
  { value: '1', label: 'Si' },
  { value: '2', label: 'No' },
] as const;

const estadoPersona = [
  { value: '1', label: 'Activo' },
  { value: '2', label: 'Inactivo' },
] as const;

export default function Page(): React.JSX.Element {
  const [formData, setFormData] = React.useState(initialFormData);

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name as string]: value
    }));
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >

      <Card>
        <CardHeader subheader="La información se puede editar." title="Agregar Clientes" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Primer Nombre</InputLabel>
                <OutlinedInput placeholder="Jaime" label="Primer Nombre" name="nombre" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Primer Apellido</InputLabel>
                <OutlinedInput placeholder="Guevara" label="Primer Apellido" name="apellido" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Nombre comercial</InputLabel>
                <OutlinedInput placeholder="Cronoss" label="Nombre Comercial" name="nombreComercial" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Correo</InputLabel>
                <OutlinedInput placeholder="jaimeg@univo.edu.sv" label="Correo" name="email" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>DUI</InputLabel>
                <OutlinedInput placeholder="00000000-0" label="Dui" name="dui" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Teléfono</InputLabel>
                <OutlinedInput placeholder="7777-6666" label="Teléfono" name="phone" type="tel" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="tipoPersona-label">Tipo de persona</InputLabel>
                <Select
                  defaultValue="1"
                  id="tipoPersona"
                  labelId="tipoPersona-label"
                  label="Tipo de persona"
                  name="tipoPersona"
                  variant="outlined"
                >
                  {tipoPersona.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="contribuyente-label">Es contribuyente</InputLabel>
                <Select
                  labelId="contribuyente-label"
                  defaultValue="1"
                  label="Es contribuyente"
                  name="contribuyente"
                  variant="outlined"
                >
                  {es_contribuyente.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid md={4} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="genero-label">Género</InputLabel>
                <Select
                  labelId="genero-label"
                  defaultValue="1"
                  label="genero"
                  name="genero"
                  variant="outlined"
                >
                  {generoPersona.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid md={4} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="estado-label">Estado</InputLabel>
                <Select
                  labelId="estado-label"
                  defaultValue="1"
                  label="estado"
                  name="estado"
                  variant="outlined"
                >
                  {estadoPersona.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid md={4} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="fechaR-label">Fecha de Registro</InputLabel>
                <OutlinedInput
                  defaultValue={dayjs().format('YYYY-MM-DD')}
                  id="fechaR"
                  aria-labelledby="fechaR-label"
                  label="Fecha de Registro"
                  name="fechaR"
                  type="date"
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="departamento-label">Departamento</InputLabel>
                <Select
                  labelId="departamento-label"
                  defaultValue="1"
                  label="Departamento"
                  name="departamento"
                  variant="outlined">
                  {departamento.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="municipio-label">Municipio</InputLabel>
                <Select
                  labelId="municipio-label"
                  defaultValue="1"
                  label="Municipio"
                  name="municipio"
                  variant="outlined">
                  {municipio.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">Registrar</Button>
        </CardActions>
      </Card>
    </form>
  );
}
