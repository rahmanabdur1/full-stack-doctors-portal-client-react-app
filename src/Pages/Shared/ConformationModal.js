import React from 'react';

const ConformationModal = ({ title, message, closeModal, successAction, modalData, successActionButton }) => {
    return (
        <div>
            <input type="checkbox" id="conformation-btn" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)}
                            htmlFor="conformation-btn" className="btn">
                            {successActionButton}
                        </label>
                        <button onClick={closeModal} className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConformationModal;