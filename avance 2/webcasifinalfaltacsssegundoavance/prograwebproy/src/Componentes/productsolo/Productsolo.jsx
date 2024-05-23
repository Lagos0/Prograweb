import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductoSolo.css";


const Productsolo = ({ 
  quantity, 
  allProductsData, 
  handleAddToCart, 
  handleIncrement , 
  handleDecrement,
}) => {
  
  let {id } = useParams();

  return (
    <>
      {allProductsData.map((product, index) => {
        if (product.id == id) {
          return (
            <div key={index}>
              <section>
                <div id="nombre">
                  <div id="nombre1">{product.name}</div>
                  <di>{product.serie}</di>
                </div>
                <hr />
                
                <div className="principal" >
                  <div id="principal1">
                    <div>
                      <img id="img" src={product.img} alt={product.name} />
                      
                    </div>
                  </div>
              
                  <div className="principal2">
                    <h3 id="disp">DISPONIBLE</h3>
                    <h2 id="precio">S/{product.price}</h2>
                    <button id="carrito" onClick={() => handleAddToCart(product)}>AÑADIR AL CARRITO</button>
                    <br></br>
                    <h4 id="cantidad">Cantidad:</h4>
                    <br></br>
                    <div className="botones">
                      <button onClick={handleDecrement}>-</button>
                      <span>{quantity}</span>
                      <button onClick={handleIncrement}>+</button>
                    </div>
                    <strong id="envio"><u><a href="">Ver métodos de envio disponibles</a></u></strong>
                  </div>
                  
                </div>

          
                
                <div className="descrip">
                  <h3>Descripción</h3>
                  {product.desc}
                </div>

                <div id="caracteristicas">
                    <h5 id="titulo">
                        <strong>Caracterisiticas del Producto: </strong>
                    </h5>
                    <ul>
                        <li>Mide 18 centimetros</li>
                        <li>Hecho de PVC</li>
                        <li>De la serie voltron</li>
                        <li>Arituculado</li>
                        <li>15 piezas distintas</li>
                        <li>Combinable con otras figuras</li>
                    </ul>
                </div>
              </section>
            </div>
          );
        }
      })}
    </>
  );
};

export default Productsolo;
