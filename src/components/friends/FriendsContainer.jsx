import Friends from './Friends';
import { connect } from "react-redux";
import { onSetUserData, onSetEditMode, onSetActive } from '../../redux/friends-reducer';

const mapStateToProps = (state) => {
    return {
        columns: state.friends.columns,
        users: state.friends.users,
    }
};

const FriendsContainer = connect(mapStateToProps, { onSetUserData, onSetEditMode, onSetActive })(Friends);

export default FriendsContainer;

