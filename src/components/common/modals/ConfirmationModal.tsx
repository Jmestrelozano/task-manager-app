import { Dispatch, FC, SetStateAction } from "react";
import { FaQuestion } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import { ModalWrapper } from "./ModalWrapper";
import { ButtonIcon } from "../buttons/ButtonIcon";

interface IConfirmatioDialog {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  onClick: () => void;
}

export const ConfirmationModal: FC<IConfirmatioDialog> = ({
  isOpen,
  setIsOpen,
  title,
  onClick,
}) => {
  const closeModal = () => setIsOpen(false);

  return (
    <ModalWrapper open={isOpen} setOpen={closeModal}>
      <div className="py-4 w-full flex flex-col gap-4 items-center justify-center">
        <Dialog.Title as="h3">
          <p className="p-3 rounded-full text-red-600 bg-red-200">
            <FaQuestion size={60} />
          </p>
        </Dialog.Title>

        <p className="text-center text-gray-500">{title}</p>

        <div className="flex flex-row-reverse gap-2">
          <ButtonIcon
            type="button"
            className="px-8 text-sm font-semibold text-white sm:w-auto rounded-md bg-red-600 hover:bg-red-500"
            onClick={onClick}
            label="Delete"
          />

          <ButtonIcon
            type="button"
            className="bg-white px-8 text-sm font-semibold text-gray-900 sm:w-auto border rounded-md"
            onClick={closeModal}
            label="Cancel"
          />
        </div>
      </div>
    </ModalWrapper>
  );
};
