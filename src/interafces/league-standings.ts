interface Iteam {
  id: string;
  uid: string;
  location: string;
  name: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  isActive: boolean;
}
interface Istats {
  name: string;
  displayName: string;
  shortDisplayName: string;
  abbreviation: string;
  type: string;
  description: string;
  value: number;
  displayValue: string;
}
interface Inote {
  color: string;
  description: string;
  rank: number;
}
interface IStandings {
  team: Iteam;
  note: Inote;
  stats: Istats[];
}
interface URL {
  PremierLeague: string;
  Laliga: string;
  Ligue1: string;
  Bundesliga: string;
  SerieA: string;
}
export { IStandings, URL };
