import PropTypes from "prop-types";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RenderMainAuth } from "./Main";

export const ModalLoginAndRegister = ({ isOpenModal, setIsOpenModal, setIsOpenModalOtp, changeOpenModalAuth, authScreen }) => {
  return (
    <Transition appear show={isOpenModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpenModal(true)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
           <div className="flex  items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transhtmlForm overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all h-full">
                <RenderMainAuth
                  setIsOpenModal={setIsOpenModal}
                  setIsOpenModalOtp={setIsOpenModalOtp}
                  changeOpenModalAuth={changeOpenModalAuth}
                  authScreen={authScreen}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div> 
        </div>
      </Dialog>
    </Transition>
  );
};

ModalLoginAndRegister.propTypes = {
  isOpenModal: PropTypes.bool,
  setIsOpenModal: PropTypes.func,
  setIsOpenModalOtp: PropTypes.func,
  changeOpenModalAuth: PropTypes.func,
  authScreen: PropTypes.string
};