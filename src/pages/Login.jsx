import { getError } from '../utils/Errors';
import { useForm } from 'react-hook-form';
const Login = () => {
  

    //     // try {
          
          
            
    //     //   });
    //       console.log("res",result);
    //       if (result.error) {
    //         toast.error(result.error);
    //       }
    //     } catch (err) {
    //       toast.error(getError(err));
    //     }
    //   };
  return (
    <>
      <div className="auth-page-wrapper pt-5">
        {/* auth page bg */}
        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
          <div className="bg-overlay" />
          <div className="shape">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1440 120"
            >
              <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z" />
            </svg>
          </div>
        </div>
        {/* auth page content */}
        <div className="auth-page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <a href="index.html" className="d-inline-block auth-logo">
                      <img
                        className="logoo"
                        src="assets/images/logowhite.png"
                        alt="MyMachineStore"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card mt-4">
                  <div className="card-body p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Welcome Back !</h5>
                      <p className="text-muted">
                        Sign in to continue to MyMachineStore.
                      </p>
                    </div>
                    <div className="p-2 mt-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="useremail" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            autoFocus
                            id="useremail"
                            {...register("email", {
                              required: "Please enter email",

                              pattern: {
                                value:
                                  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                                message: "Please enter valid email",
                              },
                            })}
                          />
                          {errors.email && (
                            <div className="text-danger">
                              {errors.email.message}
                            </div>
                          )}
                        </div>
                        <div className="mb-3">
                          <div className="float-end">
                            <a
                              href="auth-pass-reset-basic.html"
                              className="text-muted"
                            >
                              Forgot password?
                            </a>
                          </div>
                          <label
                            className="form-label"
                            htmlFor="password-input"
                          >
                            Password
                          </label>
                          <div className="position-relative auth-pass-inputgroup mb-3">
                            <input
                              type="password"
                              className="form-control pe-5 password-input"
                              {...register("password", {
                                required: "Please enter password",
                                pattern: {
                                  // value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i,
                                  message: "Please enter valid password",
                                },
                              })}
                              id="password-input"
                            />
                            <button
                              className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                              type="button"
                              id="password-addon"
                            >
                              <i className="ri-eye-fill align-middle" />
                            </button>
                            {errors.password && (
                              <div className="text-danger">
                                {errors.password.message}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="auth-remember-check"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="auth-remember-check"
                          >
                            Remember me
                          </label>
                        </div>
                        <div className="mt-4">
                          <button className="btn btn-info w-100" type="submit">
                            Sign In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* end card body */}
                </div>
                {/* end card */}
                {/* <div className="mt-4 text-center">
                  <p className="mb-0">Don't have an account ? <Link href={`/RegisterForm?redirect=${redirect || '/'}`} className="fw-semibold text-primary text-decoration-underline"> Signup </Link> </p>
                </div> */}
              </div>
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end auth page content */}
      </div>
    </>
  );
};

export default Login;
