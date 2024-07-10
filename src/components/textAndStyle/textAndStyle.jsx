import React from "react"
import "./textStyle.css"

class TextAndStyle extends React.Component {
    render() {
       const textStyle = {
        color: "orange"
       };
       return (
        <div className="text">
            <p style={textStyle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis repellendus, hic similique natus voluptates dolorem, sapiente et totam recusandae aliquam nam deserunt officia! Ullam perspiciatis laboriosam rerum culpa, voluptates omnis!</p>
        </div>
       ) 

    }
}

export default TextAndStyle