import { Link } from "react-router-dom";

const Panelusario = () => {
  
  return (
    <>

            
              <div>

                <h3>Mi cuenta</h3>
                <ul>
                <Link to="/principalusuario"><li>Órdenes Recientes</li></Link>
                <Link to="/datosregistro"><li>Datos de Registro</li></Link>
                <Link to="/passwordchange"><li>Cambiar Password</li></Link>
                </ul>
              </div>


              <div>
                <h3>Ordenes Recientes</h3>
                <div>Ordenx3...</div>
                <div>Ordenx4...</div>
                <div>Ordenx5...</div>
                <div>Ordenx4...</div>
              </div>


              <div>
                <h3>Ordenar por fecha (más antiguas primero) </h3>
                <div>
                    <ul>
                        <li>OrdenNro.123456</li>
                        <li>Ver Detalle</li>
                    </ul>
                    <ul>
                        <li>OrdenNro.123456</li>
                        <li>Ver Detalle</li>
                    </ul>
                    <ul>
                        <li>OrdenNro.123456</li>
                        <li>Ver Detalle</li>
                    </ul>
                </div>


              </div>

            

            

    
        


            


          
      
      
    
    </>
  );
};

export default Panelusario;
