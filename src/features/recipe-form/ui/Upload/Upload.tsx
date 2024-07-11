import {
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type FC,
  forwardRef,
  useId,
  useRef,
  useState,
} from "react";
import { Headline, Paragraph } from "shared/ui";
import styles from "./Upload.module.scss";
import uploadIcon from "assets/icons/ic_round-cloud-upload.svg";
import { useShareRefs } from "shared/lib";
import { Label } from "../Label/Label";
import trashIcon from "assets/icons/clarity_trash-solid.svg";

interface UploadProps extends Omit<ComponentPropsWithoutRef<"input">, "type"> {
  label?: string;
}

export const Upload = forwardRef<HTMLInputElement, UploadProps>(
  ({ label, onChange, ...props }, ref) => {
    const id = useId();
    const innerRef = useRef<HTMLInputElement | null>(null);
    const shareRefs = useShareRefs([ref, innerRef]);

    const [files, setFiles] = useState<Array<File>>([]);

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
      const fileList = evt.target.files;

      const getUniqueValues = function (arr: Array<File>) {
        return arr.reduce<Array<File>>((accum, currentValue) => {
          return accum.some(
            (item) => item.lastModified === currentValue.lastModified,
          )
            ? accum
            : [...accum, currentValue];
        }, []);
      };

      if (fileList?.length) {
        setFiles((prevState) => [
          ...getUniqueValues([...prevState, ...fileList]),
        ]);
      }

      if (onChange) {
        onChange(evt);
      }
    };

    const handleTrashClick = (fileToRemove: File) => {
      console.log({ fileToRemove, files });
      setFiles((files) => files.filter((file) => file !== fileToRemove));
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
              type={"file"}
              ref={shareRefs}
              style={{ display: "none" }}
              onChange={handleChange}
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
              {files.map((file) => (
                <li key={file.lastModified} className={styles.previewItem}>
                  <div className={styles.previewContainer}>
                    <img
                      className={styles.previewImage}
                      src={URL.createObjectURL(file)}
                      alt={"cover preview"}
                    />
                    <Paragraph type={"3"} theme={"light"}>
                      {file.name} {(file.size * Math.pow(10, -6)).toFixed(2)}MB
                    </Paragraph>
                  </div>
                  <button
                    onClick={() => handleTrashClick(file)}
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
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  },
) as FC<UploadProps>;
