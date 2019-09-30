
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
                <h1>Dima Volsky</h1>
                <p>Dima Volsky Dima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima VolskyDima Volsky</p>
            </div>
            </div>
 <Footer />
 </div>
        );
    }
}