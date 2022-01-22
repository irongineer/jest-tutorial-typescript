export const fetchDataResolve = async (): Promise<string> =>
  await new Promise((resolve, reject) =>
    setTimeout(() => resolve('peanut butter'), 1000)
  );

export const fetchDataReject = async (): Promise<string> =>
  await new Promise((resolve, reject) =>
    setTimeout(() => reject('error'), 1000)
  );
