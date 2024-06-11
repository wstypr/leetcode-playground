function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  arr1.sort((a, b) => {
    const indexA = arr2.indexOf(a);
    const indexB = arr2.indexOf(b);

    if (indexA === -1 && indexB === -1) {
      return a - b;
    } else if (indexA === -1) {
      return 1;
    } else if (indexB === -1) {
      return -1;
    } else {
      return indexA - indexB;
    }
  });

  return arr1;
}

// test1
// const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
// const arr2 = [2, 1, 4, 3, 9, 6];

// test2
const arr1 = [28, 6, 22, 8, 44, 17];
const arr2 = [22, 28, 8, 6];

const ans = relativeSortArray(arr1, arr2);
console.log(ans);
