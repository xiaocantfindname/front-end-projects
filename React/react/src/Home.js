import React from "react";


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'Red'
        }
        //this.toContact = this.toContact.bind(this);
    }
   
    toContact = () => {
        this.props.history.push("/ContactUs");
    }

    render(){
        return(
            <div>
                <h2>Home Page</h2>
                <p>There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.A critical connection is a connection that, if removed, will make some servers unable to reach some other server.Return all critical connections in the network in any order.</p>
                <br></br>
            </div>
        )
    }
}
export default Home; 