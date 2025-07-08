import React from "react";

const Contact_page = () => {
  return (
    <div>
      <div className="wrapper bg-black text-white py-5" id="contact">
        <div className="container">
          <div className="row mx-5">
            <div className="col-md-8">
              <h2>
                Have a project idea. Let's <br />
                work together!
              </h2>
              <p>
                Do you fancy saying hi to me or do you want to get started with
                <br />
                your project and you need my help? Feel free to contact me.
              </p>
              <a href="#" className="btn btn-primary text-white">
                Let's Work Togther <i className="ri-arrow-right-line" />
              </a>

              <a
                href=""
                className="btn d-flex border text-white my-3"
                style={{ width: "330px" }}
              >
                <div className="icon pt-3"><i class="ri-message-2-line fs-3"></i></div>
                <div className="chat">
                  <p>CHAT WITH ME</p>
                  <h5>Javeria.noor.com</h5>
                </div>
              </a>
              <a
                href="#"
                className="btn btn-primary d-flex"
                style={{ width: "330px" }}
              >
                <div className="icon"><i class="ri-phone-line fs-3"></i></div>
                <div className="chat">
                  <p>CALL ME</p>
                  <h5>+92-343-625-8092</h5>
                </div>
              </a>
            </div>
            <div className="col-md-4">
             <>
  <div className="maintext mb-4">
    <span className="d-block text-uppercase fw-semibold">
      Ask me questions!
    </span>
    <h2 className="fw-bold">Contact Us</h2>
  </div>
  <form>
    <div className="mb-3">
      <input
        type="text"
        className="form-control label"
        placeholder="Your Name"
      />
    </div>
    <div className="mb-3">
      <input
        type="text"
        className="form-control label"
        placeholder="Phone Number"
      />
    </div>
    <div className="mb-3">
      <input type="email" className="form-control label" placeholder="Email" />
    </div>
    <div className="mb-3">
      <textarea
        className="form-control label msg"
        placeholder="Message"
        defaultValue={""}
      />
    </div>
    <div className="btn-box">
      <a href="#" className="btn btn-outline-light px-4">
        Send
      </a>
    </div>
  </form>
</>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_page;
