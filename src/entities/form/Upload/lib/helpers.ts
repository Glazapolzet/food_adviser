// const checkFilesEqual = (file1: File, file2: File) => {
//   return (
//     file1.name === file2.name &&
//     file1.lastModified === file2.lastModified &&
//     file1.size === file2.size &&
//     file1.type === file2.type
//   );
// };

// export const getUniqueValues = function (arr: Array<File>) {
//   return arr.reduce<Array<File>>((accum, currentValue) => {
//     return accum.some((item) => checkFilesEqual(item, currentValue))
//       ? accum
//       : [...accum, currentValue];
//   }, []);
// };

// in handleMultipleChange():
// const oldFiles = files.map(({ file }) => file);
// const newFiles = getUniqueValues([...oldFiles, ...fileList]);

export const bytesToMB = (bytes: number) => {
  return (bytes * Math.pow(10, -6)).toFixed(2);
};
