import React from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { AddProductFormData } from "../types/types";

type ImagePreviewItemProps = {
  file: File;
  setCreateProductFormData: React.Dispatch<
    React.SetStateAction<AddProductFormData>
  >;
  index: number;
};

const ImagePreviewItem: React.FC<ImagePreviewItemProps> = ({
  file,
  setCreateProductFormData,
  index,
}) => {
  const removeFile = (indexToRemove: number) => {
    setCreateProductFormData((prevState) => {
      return {
        ...prevState,
        images: prevState.images.filter(
          (file, index) => index != indexToRemove
        ),
      };
    });
  };

  return (
    <li className="relative h-32 rounded-md shadow-lg">
      <Image
        src={URL.createObjectURL(file)}
        alt={file.name}
        width={150}
        height={100}
        onLoad={() => {
          URL.revokeObjectURL(URL.createObjectURL(file));
        }}
        className="h-full w-full object-contain rounded-md"
      />
      <button
        type="button"
        className="w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-red-600 transition-colors"
        onClick={() => removeFile(index)}
      >
        <XMarkIcon className="w-5 h-5 hover:fill-white transition-colors" />
      </button>
      <p className="mt-2 text-neutral-500 text-[12px] font-medium">
        {file.name}
      </p>
    </li>
  );
};

export default ImagePreviewItem;
