import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Detailsuserregister = () => {
  

  return (
    <>
      <div>
        <h3>Admin</h3>
        <ul>
          <Link to="/paneladmin"><li>Dashboard</li></Link>
          <Link to="/usuariosregister"><li>Usuarios registrados</li></Link>
          <Link to="/productosadmin"><li>Productos</li></Link>
          <Link to="/orders"><li>Ordenes</li></Link>
          <Link to="/productsell"><li>Productos más vendidos</li></Link>
          <Link to="/series"><li>Series</li></Link>
        </ul>
      </div>

      <div>
        <div>
            <h3><strong>Detalle de usuario registrado</strong></h3>
            <div>
                <ul>
                    <li>ID</li>
                    <li>Nombre</li>
                    <li>Apellido</li>
                    <li>Correo</li>
                    <li>Fecha de registro</li>
                    <li>Estado</li>
                    <li>Acciones</li>
                </ul>
            </div>
        </div>

        <div>
            <h3><strong>Ordenes recientes (máximo 10)</strong></h3>
            <div>
                <ul>
                    <li>ID</li>
                    <li>Nombre</li>
                    <li>Apellido</li>
                    <li>Correo</li>
                    <li>Fecha de registro</li>
                    <li>Estado</li>
                    <li>Acciones</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>ID</li>
                    <li>Nombre</li>
                    <li>Apellido</li>
                    <li>Correo</li>
                    <li>Fecha de registro</li>
                    <li>Estado</li>
                    <li>Acciones</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>ID</li>
                    <li>Nombre</li>
                    <li>Apellido</li>
                    <li>Correo</li>
                    <li>Fecha de registro</li>
                    <li>Estado</li>
                    <li>Acciones</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>ID</li>
                    <li>Nombre</li>
                    <li>Apellido</li>
                    <li>Correo</li>
                    <li>Fecha de registro</li>
                    <li>Estado</li>
                    <li>Acciones</li>
                </ul>   

            </div>
          
        </div>

      </div>

      
    </>
  );
};

export default Detailsuserregister;

