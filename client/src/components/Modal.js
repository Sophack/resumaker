import React from 'react';

export default function ModalLogin() {
  return (
    <div>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)+setShowSignup(false)+setShowLogin(false)}
        aria-labelledby='signup-modal'
      >
        <Box className='modal-box'>
            {showLogin && <LoginForm handleModalClose={() => setShowModal(false)} />}
            {showSignup && <SignUpForm handleModalClose={() => setShowModal(false)} />}
        </Box>
      </Modal>
    </div>
  )
}
