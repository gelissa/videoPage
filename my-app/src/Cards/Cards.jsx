import React, {Component} from 'react';
import Card from './CardUI';
import Boards from "../assets/tempDatabase.json";

import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.jpg";

class Cards extends Component{
    constructor(props){
        super(props);
        this.state = {
            boards: Boards,
        }
    }

    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                
                    {this.state.boards.map(board =>

                    <div className="col-lg">
                            <Card 

                            key={board.id}
                            id={board.id}
                            imgsrc={img1} 
                            name={board.name}
                            address={board.address}
                            contact={board.contact}
                            phone={board.phone}
                            email={board.email}
                            website={board.website}
                            
                            />
                            </div>
                        )}
                    

                    {/* <div className="col-md-4">
                    {this.state.boards.map(board =>
                            <Card 

                            key={board.id}
                            id={board.id}
                            imgsrc={img1} title="Laptop"
                            name={board.name}
                            address={board.address}
                            contact={board.contact}
                            phone={board.phone}
                            email={board.email}
                            website={board.website}
                            
                            />
                        )}
                    </div>
                    <div className="col-md-4">
                    {this.state.boards.map(board =>
                            <Card 

                            key={board.id}
                            id={board.id}
                            imgsrc={img1} title="Laptop"
                            name={board.name}
                            address={board.address}
                            contact={board.contact}
                            phone={board.phone}
                            email={board.email}
                            website={board.website}
                            
                            />
                        )}
                    </div>
                    <div className="col-md-4">
                    {this.state.boards.map(board =>
                            <Card 

                            key={board.id}
                            id={board.id}
                            imgsrc={img1} title="Laptop"
                            name={board.name}
                            address={board.address}
                            contact={board.contact}
                            phone={board.phone}
                            email={board.email}
                            website={board.website}
                            
                            />
                        )}
                    </div> */}
                   
                </div>
            </div>
        );
    }
}

export default Cards;