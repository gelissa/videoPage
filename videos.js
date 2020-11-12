'use strict';

const e = React.createElement;

function Card(props) {
    return (

      <div className="card">
        
        <div className="img-container">
        
        <img
            src={props.image}
            alt={props.alt}
            clicked={props.clicked}
            // onClick={() => props.handleClick(props.)}
           
            onClick={() => props.handleClick(props.grammar, props.id)}
          />
          
        </div>
        <p className="cardTitle">{props.name}</p>
        
      </div>

    );
  }

const domContainer = document.querySelector('#card_container');
ReactDOM.render(e(Card), domContainer);


// export default Card;
