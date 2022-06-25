import { useDropzone } from "react-dropzone";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { Button } from "../Helpers/Components";
import classNames from "classnames/bind";

import close from "../Assets/Icons/Common/Close.svg";

interface IFile {
  image: string;
  name: string;
  timestamp: number;
}

interface IFileError {
  code: string;
  message: string;
}

interface IFileReject {
  file: any;
  errors: IFileError[];
}

const AddImage = () => {
  const cn = classNames.bind(styles);
  const [files, setFiles] = useState<IFile[]>([]);

  function getBase64(file: any) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const imageObj = {
        image: reader.result,
        timestamp: file.lastModified,
        name: file.name,
      };
      setFiles((prevFiles: any) => [...prevFiles, imageObj]);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  // grab images
  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    maxFiles: 5,
    maxSize: 2200000,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
    },
    multiple: true,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length + files.length > 5) setFiles([]);
      acceptedFiles.forEach((image) => {
        getBase64(image);
      });
    },
  });

  const handleDeleteImageFromPreciew = (file: IFile) => {
    setFiles((prevs: any) => prevs.filter((item: IFile) => item !== file));
  };

  // show images preview in template
  const images = files.map((file: IFile, index: number) => {
    const fileDate = new Date(file.timestamp);
    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декаября",
    ];
    const year = fileDate.getFullYear();
    const month = months[fileDate.getMonth()];
    const date = fileDate.getDate();
    const renderDate = date + ` ${month} ` + year;

    return (
      <div className={cn("add-image__card")} key={index}>
        <div
          onClick={() => handleDeleteImageFromPreciew(file)}
          className={cn("add-image__delete")}
        >
          <img src={close} alt="delete" />
        </div>
        <img
          className={cn("add-image__image")}
          src={file.image}
          alt="preview"
        />
        <div className={cn("add-image__card-info")}>
          <p className={cn("add-image__image-name")}>{file.name}</p>
          <p className={cn("add-image__image-timestamp")}>{renderDate}</p>
        </div>
      </div>
    );
  });

  const fileRejectionItems = fileRejections.map(
    ({ file, errors }: IFileReject) => {
      console.log(file);
      const fileSize = (file.size / 1024 / 1024).toFixed(2);
      return (
        <div className={cn("add-image__error")} key={file.path}>
          <p>
            {file.path} - {fileSize}мб
          </p>
          {errors.map((e: any) => {
            if (e.code === "file-invalid-type") {
              e.message = "Необходимо изображение формата - JPG/JPEG";
            } else if (e.code === "file-too-large") {
              e.message = "Максимальный размер файла - 2мб";
            } else if (e.code === "too-many-files") {
              e.message = "Максимальное количество изображений - 5";
            } else {
              e.message = "Ошибка. Попробуйте еще раз.";
            }
            return <p key={e.code}>{e.message}</p>;
          })}
        </div>
      );
    }
  );

  return (
    <div className={cn("add-image-wrap")}>
      <h5 className={cn("add-image__title")}>Приложенные фото</h5>
      <div className={cn("add-image__preview")}>{images}</div>
      <div className={cn("add-image")}>
        {fileRejectionItems.length > 0 && (
          <div className={cn("add-image__error-wrap")}>
            {fileRejectionItems}
          </div>
        )}
        <div className={cn("add-image__dropzone")} {...getRootProps()}>
          {images.length === 0 && (
            <div className={cn("add-image__hint")}>
              Чтобы загрузить фото, перетащите их в это окно или нажмите на
              кнопку
            </div>
          )}
          <input {...getInputProps()} />
          <Button text="Добавить изображение" variant="primary" icon="add" />
        </div>
      </div>
    </div>
  );
};

export default AddImage;
