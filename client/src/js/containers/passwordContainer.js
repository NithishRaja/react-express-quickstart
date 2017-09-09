import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Password from "./../components/passwordComponent";
import getPasswords from "./../actions/getPasswords";

const mapStateToProps = (state) => {
  return {
    passwords: state.passwords,
    passwordStatus: state.passwordStatus
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({getPasswords}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Password);
