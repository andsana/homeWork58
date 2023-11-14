import React, {PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({type, onDismiss, children}) => {

  return (
    <div className={`alert alert-${type}  alert-dismissible fade show`} role="alert">
      {children}
      {onDismiss && (
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