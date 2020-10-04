import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import bmiChart from './bmiChart.png';
import './App.scss';
import fire from './config';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Myform extends React.Component {
	constructor(props){
		super(props);
    this.state={name:''};
		this.state={value:''};
		this.state={height:''};
		this.state={tot:''};
		this.state = {value: ''};
    this.weightVal = this.weightVal.bind(this);
    this.state = {isShown:false,
      re : /^[0-9\b]+$/
    };
    }
    
    
    componentWillMount(){
        /* Create reference to messages in Firebase Database */
        let messagesRef = fire.database().ref('bmiClass').orderByKey().limitToLast(100);
        // messagesRef.on('child_added', snapshot => {
        //   /* Update React state when message is added at Firebase Database */
        //   let message = { text: snapshot.val(), id: snapshot.key };
        //   this.setState({ messages: [message].concat(this.state.messages) });
        // })
      }

  
	weightVal = (event) => {
		 if (event.target.value === ' ' || this.state.re.test(event.target.value)) {
         this.setState({value: event.target.value})
      }
	}

	heigthVal = (event) => {
    if (event.target.value === ' ' || this.state.re.test(event.target.value)) {
    this.setState({height:event.target.value});
    }
  }
  
  nameFunc = (event) => {
		this.setState({name:event.target.value});
	}

	totalVal = (e) => {
    e.preventDefault();
    
    this.setState({
      isShown : true 
    });
    var db;
	  var a=this.state.value;
	  var b=this.state.height;
	  var calculation =  a/ b / b * 10000 ;
	  var bmiValue=this.setState({tot:  a/ b / b * 10000 });
    this.setState({ bmi : bmiValue });
    let bmiClass = this.getBmi(calculation);
    this.setState({ bmiClass : bmiClass });
    db = {name : this.state.name , bmi : calculation};
    fire.database().ref('bmiClass').push(db);
}

	getBmi(bmiValue) {
    if(bmiValue >= 0 && bmiValue <= 18.99) {
        return <span className='clrBlue level'>"Underweight"</span>;
    }
    else if(bmiValue >= 19 && bmiValue <= 24.99) {
        return <span className='clrGreen level'>"Healthy"</span>;
    }
   else if(bmiValue >= 25 && bmiValue <= 29.99) {
        return <span className='clryellow level'>"Overweight"</span>;
    }
    else if(bmiValue >= 30 && bmiValue <= 39.99) {
        return <span className='clrorange level'>"Obese"</span>;
    }
    else if(bmiValue >= 40) {
        return <span className='clrred level'>"Extremely Obese"</span>;
    }
    else {
    	return 0;
    }
    }
    

	render(){
		return(
          <div> 
          <form>
          <h4 style={{textAlign:"center",margin:"20px 0px 20px 0px"}}>Calculate BMI </h4>

          <div className="form-group">
             <label>Enter your Name  </label>
             <input type="text" onChange={this.nameFunc} value={this.state.name} placeholder="Enter your name" className="form-control" /> 
            </div>

           <div className="form-group">
             <label>Enter your Weight  </label>
             <input type="text" onChange={this.weightVal} value={this.state.value} placeholder="Enter weight in kg" className="form-control inuputnum" /> 
            </div>

           <div className="form-group">
             <label>Enter your Height  </label><input type="text" onChange={this.heigthVal} placeholder="Enter height in cm" className="form-control inuputnum" />
            </div>

           <div className="form-group">
             <Button className="btn-info" color="primary"  onClick={this.totalVal}>SUBMIT</Button>
            </div>
           
            { this.state.isShown ? <div> <h5 className="textCenter mb20"> Your BMI is <span className="bmiValue">{this.state.tot.toFixed(2)}</span> </h5>
             <h5 className="textCenter">You are {this.state.bmiClass} </h5> </div> : "" }
            
            <br /><br />
           </form>
           <img src={bmiChart} alt="BMI" className="imgCenter" /> 
          </div>
			)
	}
}

ReactDOM.render(<Myform />, document.getElementById('root'));
