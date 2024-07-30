export const isObjectEmpty = (object: object) => {
  return (
    object && Object.keys(object).length === 0 && object.constructor === Object
  );
};

export const toBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};
