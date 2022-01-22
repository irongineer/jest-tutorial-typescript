export function fetchData(callback: (data: string) => void) {
  setTimeout(callback, 1000, 'peanut butter');
}
