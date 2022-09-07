import React from "react";
import s from "./Modal.css";

const Modal = (props) => {
  return (
    <div
      className={`modal ${props.show ? "show" : ""}`}
      onClick={props.onClose}
    >
      <div
        className="modalContent"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modalHeader">
          <h2 className={s.modalTitle}>Hire Me</h2>
        </div>
        <div className="modalBody">
          <h4
            onClick={() =>
              navigator.clipboard.writeText("valentinlugovov@gmail.com")
            }
          >
            E-mail: valentinlugovov@gmail.com
          </h4>

          <h4 onClick={() => navigator.clipboard.writeText("79219215241")}>
            Phone Number: +7 921 921 52 41
          </h4>
          <h6>*click on e-mail or number to copy</h6>
        </div>
        <div className="modalFooter">
          <button className="btn" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
