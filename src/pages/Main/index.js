import React from 'react';
import {Switch as SwitchRouter} from 'react-router-dom';
import {RouteWithSubRoutes} from '../../routes';
import BottomNavigation from '../../components/BottomNavigation';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.audioRef = React.createRef();
    }



    render(){
        return(
            <>
                <audio ref = {this.audioRef}/>
                <SwitchRouter>
                    {this.props.routes.map((route, i) => (
                        <RouteWithSubRoutes key = {i} {...route}/>
                    ))}
                </SwitchRouter>
                
            </>
        )
        
    }
}

export default Main;


// function Tacos({ routes }) {
//     return (
//       <div>
//         <h2>Tacos</h2>
//         <ul>
//           <li>
//             <Link to="/tacos/bus">Bus</Link>
//           </li>
//           <li>
//             <Link to="/tacos/cart">Cart</Link>
//           </li>
//         </ul>
  
//         <Switch>
//           {routes.map((route, i) => (
//             <RouteWithSubRoutes key={i} {...route} />
//           ))}
//         </Switch>
//       </div>
//     );
//   }