import { Link } from "react-router-dom";

const Datosregistro = () => {
  
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
                    <h3><strong>Datos de Registro</strong></h3>

                    <form >
                        <label >
                            
                        <input placeholder="name"  />
                        </label>
                        <label >
                            
                        <input placeholder="Apellido"  />
                        </label>
                        <label >
                           
                        <input placeholder="Correo"  />
                        </label>
                        
                
                        
                    </form>

                    <Link to="/datosregistro"><button>Actualizar</button></Link>
                </div>

 
      
      
    
    </>
  );
};

export default Datosregistro;
