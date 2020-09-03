import React from 'react';
import wireframe from "../wireframes/feature-challenges.png"

class Challenge extends React.Component{

    render(){

        return(
            <div className="comp-challenge">
                <div className="img-box-wireframe">
                    <img alt="wireframe of challenges" src={wireframe} className="img-wireframe"></img>
                </div>
            </div>
            
        )
        
    }

}

export default Challenge;