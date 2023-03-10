import React, {useState} from 'react';
import './EmailForm.css';
import { send } from "emailjs-com";

const EmailForm = () => {

    const [toSend, setToSend] = useState({
      from_name: "",
      message: "",
      reply_to: "",
    });

    const onSubmit = (e) => {
      e.preventDefault();
      send("service_h8vql3g", "template_kzqlxqe", toSend, "MAGide4SyPPCw287q")
        .then((response) => {
          window.confirm("Your message has been sent!")
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
        setToSend({ from_name: "", message: "", reply_to: "" });
    };

    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

  return (
    <div className="email_form">
      <form onSubmit={onSubmit}>
        <div className="mb-3 mx-5">
          <input
            type="text"
            name="from_name"
            required
            placeholder="Your name"
            value={toSend.from_name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3 mx-5">
          <textarea
            type="text"
            name="message"
            required
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
            className="form-control"
            style={{height: "200px"}}
          />
        </div>
        <div className="mb-3 mx-5">
          <input
            type="text"
            name="reply_to"
            required
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}

export default EmailForm