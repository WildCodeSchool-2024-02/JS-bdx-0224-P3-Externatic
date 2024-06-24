import { createContext, useCallback, useContext, useMemo, useState } from "react";

import PropTypes from "prop-types";

export const Modal = createContext();

export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChangeModal = useCallback(() => {
    setIsModalVisible(true);
    if (isModalVisible) {
      setTimeout(() => {
        setIsModalVisible(false);
      }, 500);
    }
    setTimeout(() => {
      setIsModalOpen(!isModalOpen);
    }, 1);
  }, [isModalVisible, isModalOpen]);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const modalOpen = isModalOpen
    ? "absolute opacity-100 delay-75 duration-500 top-0 bg-[var(--primary-background-color)] z-50 pb-16 flex flex-col items-center mt-6 border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow mx-4 md:mx-0"
    : "absolute duration-500 opacity-0 top-0 bg-[var(--primary-background-color)] z-50 pb-16 flex flex-col items-center mt-6 border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow mx-4 md:mx-0";

  const modalVisible = isModalVisible ? "block" : "hidden";

  const contextValue = useMemo(
    () => ({
        
      isModalVisible,
      setIsModalVisible,
      isModalOpen,
      setIsModalOpen,
      modalOpen,
      modalVisible,
      handleChangeModal,
    }),
    [isModalVisible, isModalOpen, modalOpen, modalVisible, handleChangeModal]
  );
  return (
    <Modal.Provider value={contextValue}>
      {children}
    </Modal.Provider>
  );
}
ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useModal = () => useContext(Modal);
