"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { AddProductFormData } from "../types/types";

type ImageDropzoneProps = {
  createProductFormData: AddProductFormData;
  setCreateProductFormData: React.Dispatch<
    React.SetStateAction<AddProductFormData>
  >;
};

const ImageDropzone: React.FC<ImageDropzoneProps> = ({
  createProductFormData,
  setCreateProductFormData,
}) => {
  const dropzoneStyles: React.CSSProperties = {
    border: "2px dashed #cccccc",
    borderRadius: "4px",
    padding: "20px",
    paddingBottom: "40px",
    textAlign: "center",
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length) {
      setCreateProductFormData((previousState) => {
        return {
          ...previousState!,
          images: [...previousState.images, ...acceptedFiles],
        };
      });
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
  });

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
    <>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>

      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
        {createProductFormData.images.map((file, index) => (
          <li
            key={file.name}
            className="relative h-32 rounded-md shadow-lg"
          >
            <Image
              src={URL.createObjectURL(file)}
              alt={file.name}
              width={100}
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
        ))}
      </ul>
    </>
  );
};

export default ImageDropzone;
