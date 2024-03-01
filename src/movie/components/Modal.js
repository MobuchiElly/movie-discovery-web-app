import React from 'react';

const MessageModal = ({ content, handleModal }) => {
    

  return (
    <div className="modal fade show " style={{ display: "block", backgroundColor:'rgba(128, 128, 128, 0.4)'}} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/*header*/}
          <div className="modal-header">
            <h3 className="modal-title font-semibold w-100 text-center text-primary">Success</h3>
            
          </div>
          {/*body*/}
          <div className="modal-body p-4 pt-1 text-dark">{content}</div>
          {/*footer*/}
          <div className="modal-footer">
            <button
              className="btn btn-danger"
              type="button"
              onClick={handleModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;