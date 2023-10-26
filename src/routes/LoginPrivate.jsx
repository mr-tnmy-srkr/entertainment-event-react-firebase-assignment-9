
import { Navigate } from "react-router-dom";
import useAuthContext from "../hook/useAuthContext";
import { FidgetSpinner } from "react-loader-spinner";
import PropTypes from 'prop-types';


const LoginPrivate = ({ children }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <div className="h-[90vh] flex justify-center items-center">
        <FidgetSpinner
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  ballColors={['#ff0000', '#00ff00', '#0000ff']}
  backgroundColor="#F4442E"
/>
    </div>;
  }

  if (user) {
    return <Navigate to="/"></Navigate>;
  }
  return children;
};
LoginPrivate.propTypes = {
  children: PropTypes.node,
};
export default LoginPrivate;
