import React from "react";
import PropTypes from "prop-types";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

export const LoginView = props => {
  const { onChange, onSubmit, message } = props;
  return (
    <MDBContainer className="w-75  pt-5 mt-3 mb-5">
      <MDBRow className="flex flex-center">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={onSubmit}>
                <p className="h4 text-center mb-4">Login</p>
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="black-text"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  onChange={onChange}
                  required
                />
                <br />
                <br />
                <label
                  htmlFor="defaultFormRegisterConfirmEx"
                  className="black-text"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="defaultFormRegisterConfirmEx"
                  className="form-control"
                  onChange={onChange}
                  required
                />
                <br />
                <p className="red-text">{message}</p>
                <div className="text-center mt-4">
                  <MDBBtn color="brown" type="submit">
                    Login
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

LoginView.propTypes = {
  message: PropTypes.shape({}),
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

LoginView.defaultProps = {
  message: {}
}


export default LoginView;
