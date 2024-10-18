import { useTranslation } from "react-i18next";

export interface IModalProps {
  setIsOpen: (isOpen: boolean) => void;
  headerText: string;
  descriptionText?: string;
  isConfirmation?: boolean;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Modal: React.FC<IModalProps> = ({
  setIsOpen,
  headerText,
  descriptionText,
  isConfirmation = false,
  onConfirm,
  confirmText,
  cancelText,
  onCancel
}) => {
  const { t } = useTranslation();
  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center h-screen w-screen z-50"
      onClick={() => {
        setIsOpen(false);
        onCancel ? onCancel() : "";
      }}
    >
      <div
        className="bg-white p-6 rounded shadow-lg w-[600px] flex flex-col gap-5 z-50"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-row justify-between">
          <p className="font-bold text-xl">{headerText}</p>
          <button
            className="self-end w-1 pr-5 text-slate-950 hover:text-slate-600 hover:scale-105 ease-in-out duration-300"
            onClick={e => {
              e.preventDefault();
              setIsOpen(false);
              onCancel ? onCancel() : "";
            }}
          >
            ❌
          </button>
        </div>
        <p>{descriptionText}</p>

        {isConfirmation && onConfirm && (
          <div className="flex justify-center space-x-10">
            <button
              onClick={() => {
                onConfirm();
                setIsOpen(false);
              }}
              className="mt-4 bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded"
            >
              {confirmText ? confirmText : t("confirm")}
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onCancel ? onCancel() : "";
              }}
              className="mt-4 bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
            >
              {cancelText ? cancelText : t("cancel")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
