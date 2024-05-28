import React from "react";

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative max-w-3xl max-h-[80vh]">
        <button
          className="absolute top-2 right-2 p-2 text-white  rounded-full"
          onClick={onClose}
        >
          ✖
        </button>
        <img src={imageUrl} alt="Project Preview" className="max-w-full max-h-full object-contain" />
      </div>
    </div>
  );
};

export default ImageModal;
