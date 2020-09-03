import React from 'react';
import wireframe from "../wireframes/feature-trainings.png"

class Training extends React.Component{

    render(){

        return(
            <div className="comp-training">
                <div className="img-box-wireframe">
                    <img alt="wireframe of trainings" src={wireframe} className="img-wireframe"></img>
                </div>
            </div>
            
        )
        
    }

}

export default Training;