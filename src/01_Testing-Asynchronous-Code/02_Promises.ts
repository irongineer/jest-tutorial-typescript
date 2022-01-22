export function fetchDataResolve(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('peanut butter');
    }, 1000);
  });
}

export function fetchDataReject(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error');
    }, 1000);
  });
}
