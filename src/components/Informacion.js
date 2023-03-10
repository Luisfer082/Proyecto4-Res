import React from 'react'
import Button from 'react-bootstrap/Button';

function Informacion() {
  return (
    <div className='info-principal'>
      <div className='info-text'>
        <h3>Somos productores</h3>
        <h4>Cosechamos el café en fincas ubicadas en Huatusco, Veracruz. Lugar que por su altura y riqueza natural provee de todas las características necesarias para tener un sabor único, gran cuerpo, rico aroma y la acidez perfecta. Nos comprometemos con el comercio justo y la sostenibilidad del medio ambiente.</h4>
        <Button className='info-buttom' variant="success" size="lg" active>    
        Nuestro menu
       </Button>
        <div className='info-img1'></div>
        <p>Encuentra lo que mas te gusta en bebidas</p>
        <div className='info-img2'></div>
       
      </div>

       
    </div>
  )
}

export default Informacion