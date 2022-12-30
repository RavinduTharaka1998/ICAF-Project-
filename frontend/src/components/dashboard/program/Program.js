import React, {Component} from 'react';



class Program extends Component {
    constructor(props) {
        super(props);
     
    }
  
    render() {
        return (
            <div className="divcenter"><h4 className="PageTitles">{this.props.obj.ename}</h4>
                <hr class="hr-12"></hr>
                <h5 className="PageTitles2">{this.props.obj.edue}</h5>
                <p>{this.props.obj.edes}</p>
                <p> {this.props.obj.link}</p>
            </div>

        );
    }
}

export default Program;