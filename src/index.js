import React from 'react';
import ReactDOM from 'react-dom';
import bmiChart from './bmiChart.png';
import './App.css'


class Myform extends React.Component {
	constructor(props){
		super(props);
		this.state={value:''};
		this.state={height:''};
		this.state={tot:''};
        
		this.state = {value: ''};
      this.weightVal = this.weightVal.bind(this)
	}

	weightVal = (event) => {
		const re=/^[0-9\b]+$/;
		 if (event.target.value === '' || re.test(event.target.value)) {
         this.setState({value: event.target.value})
      }
		// this.setState({weight:event.target.value});
	}

	heigthVal = (event) => {

		this.setState({height:event.target.value});
	}

	totalVal = (e) => {
		e.preventDefault();

	  var a=this.state.value;
	  var b=this.state.height;
	  var calculation =  a/ b / b * 10000 ;
	  var bmiValue=this.setState({tot:  a/ b / b * 10000 });
    
    this.setState({ bmi : bmiValue });
    let bmiClass = this.getBmi(calculation);
    this.setState({ bmiClass : bmiClass });
}

	getBmi(bmiValue){
    if(bmiValue >= 0 && bmiValue <= 18) {
        return <span className='clrBlue'>"Underweight"</span>;
    }
    else if(bmiValue >= 19 && bmiValue <= 24) {
        return <span className='clrGreen'>"Healthy"</span>;
    }
   else if(bmiValue >= 25 && bmiValue <= 29) {
        return <span className='clryellow'>"Overweight"</span>;
    }
    else if(bmiValue >= 30 && bmiValue <= 39) {
        return <span className='clrorange'>"Obese"</span>;
    }
    else if(bmiValue >= 30) {
        return <span className='clrred'>"Extremely Obese"</span>;
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
             <label>Enter your Weight  </label><input type="text" onChange={this.weightVal} value={this.state.value} placeholder="Enter weight in kg" /> <br />
            </div>

           <div className="form-group">
             <label>Enter your Height  </label><input type="text" onChange={this.heigthVal} placeholder="Enter height in cm" /><br />
            </div>

           <div className="form-group">
             <button className="btn-info"  onClick={this.totalVal}>Submit</button>
            </div>
           
            <h4>BMI : {this.state.tot} </h4> <br />
            <h4>You are {this.state.bmiClass} </h4> <br />
             
            <br /><br />
           </form>
           <img src={bmiChart} alt="BMI" className="imgCenter" /> 
          </div>
			)
	}
}

ReactDOM.render(<Myform />, document.getElementById('root'));
