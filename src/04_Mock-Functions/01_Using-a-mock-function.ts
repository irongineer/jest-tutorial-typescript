export function forEach(items: number[], callback: (item: number) => void) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
