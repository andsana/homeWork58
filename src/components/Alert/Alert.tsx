import React, {PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
  clickDismissable?: boolean;
}

const Alert: React.FC<Props> = ({
  type,
  onDismiss,
  clickDismissable,
  children
}) => {

  const onAlertClick = () => {
    if (clickDismissable && onDismiss) {
      onDismiss();
    }
  };

  return (
    <div
      className={`alert alert-${type}  alert-dismissible fade show`}
      role="alert"
      onClick={onAlertClick}
      style={{cursor: clickDismissable ? 'pointer' : 'auto'}}
    >
      {children}
      {!clickDismissable && onDismiss && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onDismiss}
        >
        </button>
      )}
    </div>
  );
};

export default Alert;