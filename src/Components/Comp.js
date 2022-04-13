 import React,{useState} from "react";
import Calculator from "./Calculator";

 class Comp extends React.Component {  
    constructor(){
       super()
          this.state={Bio:false}
          this.Display=this.Display.bind(this)
    }
    Display(){
         this.setState({Bio:!this.state.Bio})
    }
    render(){
      return(
        <div>
          <h1>Welcome  {this.props.name}!</h1>
          {
            this.state.Bio?(
              <div>
                <p>welcome to the page here we can see the content about our site by clicking one burron.HERE WE GO...!</p>
               <button onClick={this.Display}>Readmore</button>
             </div>
            ):(
              <div>
                <p>
                <button onClick={this.Display}>Showless</button>
                </p>
            
             </div>
            )
          }
          
        </div>
      )
    }
}  
export default Comp