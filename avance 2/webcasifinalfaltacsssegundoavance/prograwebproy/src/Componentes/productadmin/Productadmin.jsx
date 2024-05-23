import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Productadmin = () => {
  

  return  (
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
                <input type="text" />
            </div>
            <button>Agregar imagen</button>

            <div>
                <input type="text" placeholder='Nombre'/>
                <input type="text" placeholder='Descripción'/>
                <input type="text" placeholder='Caracteristicas'/>
            </div>
            <div>
                <input type="text" placeholder='Marca'/>
                <input type="text" placeholder='Serie'/>
                <p>S/</p>
                <input type="text" placeholder='Precio' />

            </div>

            <div>
                <input type="text" placeholder='Tipo' />
                <input type="text" placeholder='Stock'/>
            </div>

            <button>Guardar</button>

        </div>
    </div>

      
    </>
  );
};

export default Productadmin;

