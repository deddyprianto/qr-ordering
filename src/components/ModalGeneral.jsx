import PropTypes from "prop-types";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalGeneral } from "../app/dataSlice";
import { IconCloseTransparent } from "../assets/svgIcon";

export const ModalGeneral = () => {
  const { openModalGeneral, theme } = useSelector((state) => state.dataSlice);
  const dispatch = useDispatch();

  return (
    <Transition appear show={openModalGeneral} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => dispatch(setOpenModalGeneral(false))}
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
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-0">
                <div className="flex justify-between p-4">
                  <div>Get Order Receipt (optional)</div>
                  <button onClick={() => dispatch(setOpenModalGeneral(false))}>
                    <IconCloseTransparent color="black" />
                  </button>
                </div>
                <hr />

                <div className="p-4">
                  <div className="text-black text-sm font-medium leading-5 tracking-wide self-stretch w-full">
                    Email
                  </div>
                  <div className="text-zinc-500 text-sm font-medium leading-5 tracking-wide whitespace-nowrap self-stretch border border-[color:var(--Text-color-Tertiary,#888787)] shadow-sm bg-white w-full justify-center mt-1 pl-4 pr-16 py-3.5 rounded-lg border-solid items-start">
                    Enter your email
                  </div>
                  <div className="text-zinc-500 text-xs font-medium leading-4 tracking-wide whitespace-nowrap mt-1">
                    A receipt will be sent to the provided email address
                  </div>
                </div>

                <hr />
                <div className="grid grid-cols-2 gap-4 p-4">
                  <button
                    className={`text-[${theme.secondary}] text-sm font-medium leading-5 tracking-wide whitespace-nowrap justify-center items-stretch border border-[${theme.secondary}] bg-white py-2 rounded-lg border-solid`}
                  >
                    Skip Order Update
                  </button>
                  <button
                    className={`text-white text-sm font-medium leading-5 tracking-wide whitespace-nowrap justify-center items-stretch bg-[${theme.secondary}] py-2 rounded-lg`}
                  >
                    Continue
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

ModalGeneral.propTypes = {
  children: PropTypes.element,
};
