export default function deepclone(obj: any): any {
  const { item } = JSON.parse(JSON.stringify({ item: obj }));
  return item;
}
