import React from "react";
import Image from "next/image";

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative max-w-3xl max-h-[80vh]">
        <button
          className="absolute top-2 right-2 p-2 text-white rounded-full"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="relative max-w-full max-h-full">
          <Image
            src={imageUrl}
            alt="Project Preview"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
