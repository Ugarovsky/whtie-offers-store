import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../App.css';
import '../index.css';

const AboutPage = () => {
  const imageUrl = 'https://www.elpuertodeliverpool.mx/img/valores.png';
  const storeUrl = 'https://static1.squarespace.com/static/529fc0c0e4b088b079c3fb6d/t/583756e637c581b5d588dd6a/1480021738287/';
  return (
    <div>
      <Header />
      <div id="about-content">
        <h2>Perfil</h2>
        <p>Liverpool es la cadena de almacenes departamentales de mayor cobertura a lo largo del país.</p>
        <p>La combinación de una amplia oferta comercial, una experiencia de compra emocionante, infraestructura sólida y enfoque de rentabilidad nos permiten servir al cliente y así contar con su preferencia.</p>
        <h2>Valores</h2>
        <img src={imageUrl} width="50%" id="about-img" />

        <p>La empresa contempla un año récord de aperturas en 2017 con un total de once nuevos almacenes: cuatro Liverpool, ya inaugurados al cierre de septiembre, siete Fábricas de Francia de los cuales cuatro ya se inauguraron y dos almacenes Suburbia de los cuales se ha inaugurado uno de ellos. Asimismo se ha inaugurado el centro comercial Galerías Tlaxcala.</p>
        <p>Al inicio del segundo trimestre del año, se finaliza la adquisición a Walmex de los 122 almacenes pertenecientes a la cadena de almacenes de ropa “Suburbia” así como la propiedad intelectual y demás bienes y derechos relacionados con dicha división</p>
        <p>Se inauguran 9 almacenes: Villahermosa, Guadalajara, San Juan del Río, Veracruz, Playa del Carmen, León, Ciudad Jardín en el Estado de México, Campeche y el Istmo en el estado de Oaxaca, alcanzando un total de 99 en 56 ciudades de la República.</p>
        <p>Tres centros comerciales se sumaron al portafolio: Galerías Acapulco, Zacatecas y Celaya, para terminar el año con 19 unidades.</p>
        <img src={storeUrl} width="100%" />
        <h2>Misión</h2>
        <p>Servimos al CLIENTE, en todo lugar, todos los días, toda la vida.</p>
        <h2>Visión</h2>
        <p>Ser la opción más atractiva en servicio, surtido y valor.</p>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage;


