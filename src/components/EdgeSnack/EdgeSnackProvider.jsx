import { createPortal } from "react-dom";
import { EdgeSnackContext } from "./EdgeSnackContext";
import { EdgeSnack } from "./EdgeSnack";
import { useMemo, useState } from "react";
import PropTypes from "prop-types";

// Create a random ID
function generateUEID() {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = ("000" + first.toString(36)).slice(-3);
  second = ("000" + second.toString(36)).slice(-3);

  return first + second;
}

export const EdgeSnackProvider = ({children}) => {
  const [toasts, setToasts] = useState([]);

  const open = (content, type) =>
    setToasts((currentToasts) => [
      ...currentToasts,
      { id: generateUEID(), content, type },
    ]);

  const close = (id) =>
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id),
    );

  const contextValue = useMemo(() => ({ open }), []);

  const styleWrapper = {
    position: 'fixed',
    padding: '4px',
    top: '1em',
    left: '0',
    width: '100%'
  }

  return (
    <EdgeSnackContext.Provider value={contextValue}>
      {children}
      {createPortal(
        <div style={styleWrapper}>
          {toasts.map((toast) => (
            <EdgeSnack
              key={toast.id}
              close={() => close(toast.id)}
              className='gap-3 px-3 py-3 rounded-lg flex mt-1'
              type = {toast.type}
              content = {toast.content}
            />
          ))}
        </div>,
        document.body,
      )}
    </EdgeSnackContext.Provider>
  );
};

EdgeSnackProvider.propTypes = {
  children : PropTypes.node.isRequired
}