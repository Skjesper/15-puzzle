import styles from './Modal.module.css';
import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      dialog.showModal();
      
      const closeButton = dialog.querySelector('[aria-label="Close dialog"]') as HTMLElement;
      closeButton?.focus();
      
      document.body.style.overflow = 'hidden';
    } else {
      dialog.close();
      document.body.style.overflow = 'unset';
      previousFocusRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      onClose();
    };

    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );

    if (!isInDialog) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <dialog 
      ref={dialogRef}
      className={styles.dialog}
      onClick={handleBackdropClick}
      aria-labelledby="modal-title"
      aria-describedby="modal-content"
    >
      <div className={styles.modalContainer}>
        <header className={styles.header}>
          <h1 id="modal-title" className={styles.title}>{title}</h1>
          <button 
            className={styles.closeButton} 
            onClick={onClose}
            aria-label="Close dialog"
            type="button"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </header>
        
        <main id="modal-content" className={styles.content}>
          {children}
        </main>
      </div>
    </dialog>
  );
};

export default Modal;