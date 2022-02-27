import React, { Component } from 'react';

export default class BotaoEstado extends Component {
    static defaultProps = {
      courseContent : [
        'JSX', 'React Props', 'React State',
        'React Lifecycle Methods', 'React Event Handlers',
        'React Router', 'React Hooks', 'Redux',
        'React Context'        
      ]
    }
     
    constructor(props){
      super(props)
       
      // Set initial state
      this.state = {isModalOpen: false, msg : 'Awari React Course', content:''}
       
      // Binding this keyword
      this.handleClick = this.handleClick.bind(this)
    }
   
    renderContent(){
      return (
        <div>
            <button onClick={this.revertState()}>
                x
            </button>
            <ul>
                {this.props.courseContent.map(content => (
                    <li>{content}</li>
                ))}
            </ul>
        </div>
      )
    }
   
    handleClick(){
     
        // Changing state
        this.setState({
            isModalOpen: true,   
            msg : 'Awari React Course Content',
            content : this.renderContent()
        })
    }

    revertState(){
        this.setState({
            isModalOpen: false,
            msg : 'Awari React Course',
            content : this.render(this.state)
        })
    }
     
    render(){
      return (
        <div>
            <h2>Message :</h2>
           
   
            <div>{this.state.msg}</div>
        
        
                
        
            <div>{this.state.content}</div>
   
   
           
            {/* Set click handler */}
            <button onClick={() => this.handleClick()}>
                Click here to know contents!
            </button>
        </div>
      )
    }
  }