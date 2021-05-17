interface Iteam {
  id: string;
  uid: string;
  location: string;
  name: string;
  abbrevation: string;
  displayName: string;
  shortDisplayName: string;
  isActive: boolean;
}
interface Istats {
  name: string;
  dislayName: string;
  shortDisplayName: string;
  abbrevation: string;
  type: string;
  value: number;
  displayValue: string;
}
interface Inote {
  color: string;
  description: string;
  rank: number;
}
export default interface IStandings {
  team: Iteam;
  note: Inote;
  stats: Istats[];
}
