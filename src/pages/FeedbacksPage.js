
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ProductList from '../components/productList';
import '../App.css';
import '../index.css';
import comments from '../data/jsonComments';

export default class FeedbacksPage extends React.Component {

    getCommentsTemplate = (e) => {
        const commentsList = comments.map(function(item){
            return <div key={item.id} className="some-comment">
            <img src={item.userPhoto} width="10%"/>
            <p>{item.name}</p>
            <p>{item.date}</p>
            <p>{item.comment}</p>
            </div>
        })
        return commentsList;
    }


    render() {
        return (
            <div>
            <Header />
            <div id="feedbacks">
                <div className="feedbacksTemplate">
            {this.getCommentsTemplate()}
            </div>
            <div className="feedbacksRoles">
                <h1>La importancia de las reseñas en las compras online</h1>
                <p>Los compradores online más espabilados son cautelosos (ENG) con los timos online. Pero todos hemos escuchado la historia de algún amigo al que le engañaron: un envío que nunca llegó, productos que no se correspondieron con lo pedido, pésimo servicio de atención al cliente…</p>
                <p>Por ello, tienes esforzarte al máximo para que tus clientes confíen en tu marca. Ofrecer reseñas de productos es una manera estupenda de aumentar esta confianza. Veamos por qué.</p>
                <h1>Las reseñas te ayudan a otorgar confianza a tus productos</h1>
                <p>Si acabas de crear tu tienda online, tu mayor reto es demostrar que tus productos merecen la pena. ¿Pero cómo podemos abrirnos paso entre todas las tiendas ya existentes, especialmente cuando estas ya tienen el respaldo de sus clientes?</p>
                <p>Lo primero que tenemos que asumir es que incluso tener fotos de producto y descripciones maravillosas (ENG) no es suficiente. Los consumidores de hoy en día son lo suficientemente inteligentes como para saber que cualquier cosa puede falsificarse.</p>
                <p>Muchas empresas incluso invierten dinero en comprar reseñas. Esta artimaña les ayuda a ganarse la confianza de nuevos clientes.</p>
                <h1>Las reseñas son una gran oportunidad para expresar tu marca</h1>
                <p>Como decíamos antes, las opiniones negativas no son siempre algo malo. Si la mayoría de tus reseñas son positivas, las negativas te ayudarán más a construir una mayor confianza que a destruirla (ENG). La gente podrá ver que no tratas de cubrir el feedback negativo y que no llenas tu página con reseñas de pago. Siempre y cuando la causa de esa opinión negativa no sea demasiado alarmante, debería actuar en tu favor a largo plazo.</p>
            </div>
            </div>
 <Footer />
 </div>
        );
    }
}