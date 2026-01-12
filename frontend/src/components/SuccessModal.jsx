import ModalWrapper from "./ModalWrapper";
import { Check } from "lucide-react";

import "../styles/SuccessModal.css";

function SuccessModal({
  title,
  message,
  buttonText,
  onClose,
  isWaitlist = false,
}) {
  //TODO: Implement onClick for button to redirect to the created event page or another relevant page

  return (
    <ModalWrapper onClose={onClose} showDivider={false} isWaitlist={isWaitlist}>
      <div className="success-modal">
        <div
          className={`success-modal__icon ${
            isWaitlist ? "success-modal__icon--waitlist" : ""
          }`}
        >
          <Check size={38} />
        </div>
        <h2 className="success-modal__title">{title}</h2>
        <p className="success-modal__message">{message}</p>
        <button
          onClick={onClose}
          className={`success-modal__button ${
            isWaitlist ? "success-modal__button--waitlist" : ""
          }`}
        >
          {buttonText}
        </button>
      </div>
    </ModalWrapper>
  );
}

export default SuccessModal;
