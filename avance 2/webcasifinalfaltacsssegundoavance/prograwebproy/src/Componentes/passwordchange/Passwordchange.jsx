import { Link } from "react-router-dom";

const Passwordchange = () => {
  
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
                    <h3><strong>Cambiar Password</strong></h3>

                    <form >
                        <label >
                            
                        <input placeholder="Actual"  />
                        </label>
                        <label >
                            
                        <input placeholder="Nuevo"  />
                        </label>
                        <label >
                           
                        <input placeholder="Repetir"  />
                        </label>
                        
                
                        
                    </form>

                    <Link to="/passwordchange"><button>Continuar</button></Link>
                </div>

 
      
      
    
    </>
  );
};

export default Passwordchange;