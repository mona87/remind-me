import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReminder, clearReminders } from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Item from './Item';
import BottomNav from './BottomNav';
import FlatButton from 'material-ui/FlatButton';



class App extends Component {
	constructor(props){
		super(props)
		this.state ={
			text: '',
			dueDate: '',
		}
	}
	addReminder(){
		this.props.addReminder(this.state.text, this.state.dueDate);
	}
	renderReminders(){
		const { reminders } = this.props;
		return (
				<Item reminders={reminders} />
			)
	}
	render() {
	
		return(

			<div className="app">
				<MuiThemeProvider>
					<AppBar
						title="Remind Me!"
						showMenuIconButton={false}
						style={{
							 textAlign: 'left', 
							 backgroundColor: '#212121', 
			 				 height: 40, 
						}}
					iconElementRight={
	    				<FlatButton
							style={{color:'#fff', lineHeight: '25px', height: '25px', marginTop: '0px'}}
	    					secondary={true} 
	    					label="Clear All"
	    					onClick={() => this.props.clearReminders()}
	    				>
	    				</FlatButton>
	    			}
					/>
					<div className="form-wrapper">
					<form>
					 <TextField
						fullWidth={true}
      					hintText="I have to..."
      					onChange={e => this.setState({text: e.target.value})}
      					underlineFocusStyle={{borderColor: '#000'}}
      					underlineStyle={{borderColor: '#fff'}}
      					onKeyPress={ e => {
	      					if(e.key === 'Enter'){
	      						e.preventDefault();
	      						this.addReminder();
	      					}
	      				}}
    				/>
    				<DatePicker
				          hintText="MM-DD-YYYY"
				          style={{display:'inline-block', marginRight: '20px', borderColor: "#fff"}}
				          onChange={(e,date) => this.setState({dueDate : date})}
				          autoOk={true}
				        />
    				<RaisedButton
    					label="Add Reminder"
    					onClick={() => this.addReminder()}
    				>
    				</RaisedButton>
    				</form>
    				</div>
    				{this.renderReminders()}

    				<BottomNav />
				</MuiThemeProvider>
			</div>
			)
	}
}

MuiThemeProvider.propTypes = {
  children: PropTypes.array
};

function mapStateToProps(state){
	return {
		reminders: state
	}
}


export default connect(mapStateToProps, {addReminder, clearReminders})(App);