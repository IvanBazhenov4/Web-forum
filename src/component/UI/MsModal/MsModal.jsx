import React from 'react';
import cl from './MsModal.module.css';

const MsModal = ({children, visible, setVisible}) => {
    const rootClasses = [cl.MsModal]
    if (visible) {
        rootClasses.push(cl.active)
    }
    return (
        <div className={[rootClasses].join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.MsModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MsModal;