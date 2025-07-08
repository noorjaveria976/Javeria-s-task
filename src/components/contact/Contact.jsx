import React from "react";

const Contact = () => {
  return (
    <div>
      <section class="bg-light">
        <div class="container pt-5 pb-3 px-3">
          <div class="row">
            <div class="col-md-6">
              <h2
                class=" ps-2 fs-2 fw-bold text-uppercase lh-sm pt-4 mb-3"
                data-aos="fade-up"
              >
                Contact US
              </h2>
              <form class="px-2 mb-3" data-aos="fade-up">
                <div class="mb-3 ">
                  <input
                    type="text"
                    class="form-control rounded-0 py-3 border-0  shadow-none"
                    placeholder="Your Name"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control rounded-0 py-3 border-0  shadow-none"
                    placeholder="Phone Number"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control rounded-0 py-3 border-0  shadow-none"
                    placeholder="Email"
                  />
                </div>
                <div class="mb-3">
                  <textarea
                    class="form-control rounded-0 py-3 border-0 shadow-none"
                    placeholder="Message " style={{height: "150px"}}
                  ></textarea>
                </div>
                <button type="submit" class="btn2">
                  Send
                </button>
              </form>
            </div>
            <div class="col-md-6">
              <iframe
                class="w-100 h-100 mb-3"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.775281722194!2d71.5295182738037!3d29.66829463629776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b0d5e81bfc16f%3A0x6335ebeec830dd35!2sAGS%20Amina%20Girls%20Higher%20Secondary%20school!5e0!3m2!1sen!2s!4v1738283748633!5m2!1sen!2s"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                data-aos="fade-up"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
