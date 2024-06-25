import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import PropTypes from "prop-types";

export const Modal = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeModal = useCallback(() => {
    setIsVisible(true);
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 1);
  }, [isVisible, isOpen]);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const isModalOpen = isOpen
    ? "absolute opacity-100 delay-75 duration-500 top-0 bg-[var(--primary-background-color)] z-50 pb-16 flex flex-col items-center mt-6 border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow mx-4 md:mx-0"
    : "absolute duration-500 opacity-0 top-0 bg-[var(--primary-background-color)] z-50 pb-16 flex flex-col items-center mt-6 border border-[var(--primary-color)] rounded-md shadow-lg custom-shadow mx-4 md:mx-0";

  const isModalVisible = isVisible ? "block" : "hidden";

  const contextValue = useMemo(
    () => ({
      isVisible,
      setIsVisible,
      isOpen,
      setIsOpen,
      isModalOpen,
      isModalVisible,
      handleChangeModal,
    }),
    [isVisible, isOpen, isModalOpen, isModalVisible, handleChangeModal]
  );
  return <Modal.Provider value={contextValue}>{children}</Modal.Provider>;
}
ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useModal = () => useContext(Modal);
