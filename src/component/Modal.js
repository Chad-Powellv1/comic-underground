import { useState } from 'react';

const withModal = ModalComponent => WrapperComponent => {
  return function(props) {
      const [isModalOpen, setIsModalOpen] = useState(false);

      return (
          <>
            <WrapperComponent toggleModal={setIsModalOpen} {...props}/>
            {isModalOpen && <ModalComponent toggleModal={setIsModalOpen}/>}
          </>
      )
    }
}
export default withModal;