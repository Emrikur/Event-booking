import { useEffect } from "react";

import { X } from "lucide-react";

import "../styles/ModalStyles.css";

export default function ModalWrapper({
  title,
  subtitle,
  children,
  onClose,
  showDivider = true,
}) {
  // Prevent scroll if modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <button className="modal__close" onClick={onClose}>
            <X size={20} />
          </button>
          <h2 className="modal__title">{title}</h2>
          {subtitle && <p className="modal__subtitle">{subtitle}</p>}
          {showDivider && <div className="modal__divider"></div>}
        </div>
        {children}
      </div>
    </div>
  );
}
