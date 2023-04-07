import React from "react";


class Square extends React.Component {
    render() {
        var squareStyle = {
            height: 150,
            backgroundColor: this.props.color
        };
        
        return(
            <div style={squareStyle}>
        
            </div>
        );
    }
}

class Label extends React.Component {
    render() {
        var labelStyle = {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            padding: 13,
            margin: 0
        };
        
        return (
            <p style={labelStyle}>There is a card componect</p>
        );
    }
}

class Card extends React.Component {
    render() {
        var cardStyle = {
            height: 200,
            width: 150,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };

        return (
            <div style={cardStyle}>
                <Square color={this.props.color}/>
                <Label color={this.props.color}/>
            </div>
        );
    }
}


class AboutUs extends React.Component{
    render(){
        return(
            <div>
                <h1>About Us</h1>
                <p>This is a website for 6150 assignment 8</p>
                <Card color="#FF6663"/>
            </div>
        )
    }
}
export default AboutUs;