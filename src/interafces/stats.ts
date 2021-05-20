interface Iathlete {
  id: string;
  uid: string;
  displayName: string;
  shortName: string;
  guid: string;
}
export default interface Ileader {
  value: number;
  athlete: Iathlete;
}
