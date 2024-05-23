import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


const Agregarserie= () => {
  
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

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
            <h3><strong>Agregar serie</strong></h3>
            <div>
                <input type="text" />
            </div>

            <div>
                <input type="text" placeholder='Nombre'/>
                <input type="text" placeholder='Descripción'/>
                
            </div>
            <div>

                <div>
                    <h4>Productos en la serie</h4>
                    <button onClick={openModal}>+</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal de Página"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <h2><strong>Agregar Producto</strong></h2>
        <div>
        <input type="text" />
        <button>Buscar</button>
        </div>

        <div>
                    <ul>
                        <li>ID</li>
                        <li>Descripción</li>
                        <li>Acción</li>
                    </ul>
                    <ul>
                        <li>ID</li>
                        <li>Manga dragon ball</li>
                        <li><a href="">Agregar</a></li>
                    </ul>
                    
        </div>

        <button onClick={closeModal}>Cerrar</button>
        
      </Modal>
                </div>

                <div>
                    <ul>
                        <li>ID</li>
                        <li>Descripción</li>
                        <li>Acción</li>
                    </ul>
                    <ul>
                        <li>ID</li>
                        <li>Manga dragon ball</li>
                        <li><a href="">Remover</a></li>
                    </ul>
                    <ul>
                        <li>ID</li>
                        <li>Manga dragon ball</li>
                        <li><a href="">Remover</a></li>
                    </ul>
                    
                </div>
                

            </div>

            

            <button>Guardar</button>

        </div>
    </div>

      
    </>
  );
};

export default Agregarserie;

