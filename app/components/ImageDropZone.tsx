"use client";

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ImagePreviewItem from "./ImagePreviewItem";
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
    marginBottom: "20px",
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
      {createProductFormData.images.length != 0 && (
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 pb-10">
          {createProductFormData.images.map((file, index) => (
            <ImagePreviewItem
              setCreateProductFormData={setCreateProductFormData}
              file={file}
              index={index}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ImageDropzone;
