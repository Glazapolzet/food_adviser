import {
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  forwardRef,
  useId,
  useRef,
  useState,
} from "react";
import { Headline, Paragraph, Label } from "shared/ui";
import { useShareRefs } from "shared/lib";
import styles from "./Upload.module.scss";
import uploadIcon from "assets/icons/ic_round-cloud-upload.svg";
import trashIcon from "assets/icons/clarity_trash-solid.svg";
import { bytesToMB, getUniqueValues } from "../lib/helpers";

interface UploadProps
  extends Omit<ComponentPropsWithoutRef<"input">, "type" | "className"> {
  label?: string;
}

export const Upload = forwardRef<HTMLInputElement, UploadProps>(
  ({ label, onChange: onSideChange, multiple = false, ...props }, ref) => {
    const id = useId();
    const innerRef = useRef<HTMLInputElement | null>(null);
    const refs = useShareRefs([ref, innerRef]);

    const [files, setFiles] = useState<
      Array<{ file: File; filePreview: string }>
    >([]);

    const handleChange = (
      evt: ChangeEvent<HTMLInputElement>,
      onSideChange?: (event: ChangeEvent<HTMLInputElement>) => void,
      onFilesChange?: (fileList: FileList) => void,
    ) => {
      const fileList = evt.target.files;

      if (fileList?.length && onFilesChange) {
        onFilesChange(fileList);
      }

      if (onSideChange) {
        onSideChange(evt);
      }
    };

    const handleSingleChange = (evt: ChangeEvent<HTMLInputElement>) =>
      handleChange(evt, onSideChange, (fileList) => {
        const newFiles = [...fileList];

        setFiles(
          newFiles.map((file: File) => ({
            file: file,
            filePreview: URL.createObjectURL(file),
          })),
        );
      });

    const handleMultipleChange = (evt: ChangeEvent<HTMLInputElement>) =>
      handleChange(evt, onSideChange, (fileList) => {
        const newFiles = [...fileList].map((file: File) => ({
          file: file,
          filePreview: URL.createObjectURL(file),
        }));

        setFiles((oldFiles) => [...oldFiles, ...newFiles]);
      });

    const handleFileRemove = (fileToRemove: File) => {
      setFiles((files) =>
        files.filter(({ file, filePreview }) => {
          if (file === fileToRemove) {
            URL.revokeObjectURL(filePreview);
            return false;
          }

          return true;
        }),
      );
    };

    return (
      <div className={styles.wrapper}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <div className={styles.uploadContainer}>
          <button
            type={"button"}
            className={styles.uploadButton}
            onClick={() => innerRef.current!.click()}
          >
            <input
              id={id}
              multiple={multiple}
              type={"file"}
              ref={refs}
              style={{ display: "none" }}
              onChange={multiple ? handleMultipleChange : handleSingleChange}
              {...props}
            />
            <img
              className={styles.uploadIcon}
              src={uploadIcon}
              alt={"upload icon"}
            />
            <Headline type={"3"} theme={"light"}>
              Browse files
            </Headline>
            <Paragraph type={"3"} theme={"light"}>
              Drop files here
            </Paragraph>
          </button>
          {files.length !== 0 && (
            <ul className={styles.previewList}>
              {files.map(({ file, filePreview }) => {
                return (
                  <li key={filePreview} className={styles.previewItem}>
                    <div className={styles.previewContainer}>
                      <img
                        className={styles.previewImage}
                        src={filePreview}
                        alt={"cover preview"}
                      />
                      <Paragraph type={"3"} theme={"light"}>
                        {file.name} {bytesToMB(file.size)}MB
                      </Paragraph>
                    </div>
                    <button
                      onClick={() => handleFileRemove(file)}
                      type={"button"}
                      className={styles.trashButton}
                    >
                      <img
                        className={styles.trashIcon}
                        src={trashIcon}
                        alt={"trash"}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    );
  },
);
