import Calendar from './Calendar';
import { connect } from "react-redux";
import { addEvent, updEvent } from '../../redux/calendar-reducer'

const mapStateToProps = (state) => {
    return {
        events: state.calendar.events,
    }
};

const CalendarContainer = connect(mapStateToProps, { addEvent, updEvent })(Calendar);

export default CalendarContainer;

