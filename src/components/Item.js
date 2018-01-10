import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Card, CardText} from 'material-ui/Card';
import { deleteReminder } from '../actions';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment';

class Item extends Component {

deleteReminder(id){
		this.props.deleteReminder(id);
}
render(){
	const { reminders } = this.props;
	return (
			<div className="list-wrapper" style={{margin: '0 40px 0 40px'}}>
				
					{reminders.map(reminder => {
						return(
							<Card  key={reminder.id} 
							style={{
								margin: '0 auto 20px auto', 
								maxWidth: '500px',
							 }}
							containerStyle={{
								addingBottom: 0,
								 display: 'flex',
    							justifyContent: 'space-between',
    							alignItems: 'center',
    						}}>
								<CardText style={{display: 'inline-block'}} >
								<div>{reminder.text} </div>
								<div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>					
								</CardText>
								<FlatButton 
								label="Delete" secondary={true} 
								style={{marginRight: '10px'}}
								onClick={() => this.deleteReminder(reminder.id)}/>
							</Card>
						)
					})}
			
				</div>
			)
	}


}

function mapStateToProps(state){
	return {
		reminders: state
	}
}


export default connect(mapStateToProps, {deleteReminder})(Item);