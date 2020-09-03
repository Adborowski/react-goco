import React from 'react';
import wireframe from "../wireframes/feature-skilltracker.png"

class Tracker extends React.Component{

    render(){

        return(
            <div className="comp-tracker">
                <div className="img-box-wireframe">
                    <img alt="wireframe of tracker" src={wireframe} className="img-wireframe"></img>
                </div>
            </div>
            
        )
        
    }

}

export default Tracker;