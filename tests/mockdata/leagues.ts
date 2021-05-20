import { IStandings } from "@/interafces/league-standings";
const mockData: IStandings[] = [
  {
    team: {
      id: "382",
      uid: "s:600~t:382",
      location: "Manchester City",
      name: "Manchester City",
      abbreviation: "MNC",
      displayName: "Manchester City",
      shortDisplayName: "Man City",
      isActive: true,
    },
    note: {
      color: "#81D6AC",
      description: "Champions League",
      rank: 1,
    },
    stats: [
      {
        name: "wins",
        displayName: "Wins",
        shortDisplayName: "W",
        description: "Losses",
        abbreviation: "W",
        type: "wins",
        value: 26.0,
        displayValue: "26",
      },
      {
        name: "losses",
        displayName: "Losses",
        shortDisplayName: "L",
        description: "Losses",
        abbreviation: "L",
        type: "losses",
        value: 6.0,
        displayValue: "6",
      },
      {
        name: "ties",
        displayName: "Draws",
        shortDisplayName: "D",
        description: "Draws",
        abbreviation: "D",
        type: "ties",
        value: 5.0,
        displayValue: "5",
      },
      {
        name: "gamesPlayed",
        displayName: "Games Played",
        shortDisplayName: "GP",
        description: "Games Played",
        abbreviation: "GP",
        type: "gamesplayed",
        value: 37.0,
        displayValue: "37",
      },
      {
        name: "pointsFor",
        displayName: "Goals For",
        shortDisplayName: "F",
        description: "Goals For",
        abbreviation: "F",
        type: "pointsfor",
        value: 78.0,
        displayValue: "78",
      },
      {
        name: "pointsAgainst",
        displayName: "Goals Against",
        shortDisplayName: "A",
        description: "Goals Against",
        abbreviation: "A",
        type: "pointsagainst",
        value: 32.0,
        displayValue: "32",
      },
      {
        name: "points",
        displayName: "Points",
        shortDisplayName: "P",
        description: "Points",
        abbreviation: "P",
        type: "points",
        value: 83.0,
        displayValue: "83",
      },
      {
        name: "rankChange",
        displayName: "Rank Change",
        shortDisplayName: "Rank Change",
        description: "Rank Change",
        abbreviation: "RC",
        type: "rankchange",
        value: 0.0,
        displayValue: "0",
      },
      {
        name: "rank",
        displayName: "Rank",
        shortDisplayName: "Rank",
        description: "Rank",
        abbreviation: "R",
        type: "rank",
        value: 1.0,
        displayValue: "1",
      },
      {
        name: "pointDifferential",
        displayName: "Goal Difference",
        shortDisplayName: "GD",
        description: "Goal Difference",
        abbreviation: "GD",
        type: "pointdifferential",
        value: 46.0,
        displayValue: "+46",
      },
      {
        name: "deductions",
        displayName: "Point Deductions",
        shortDisplayName: "Deductions",
        description: "Point Deductions",
        abbreviation: "PD",
        type: "deductions",
        value: 0.0,
        displayValue: "",
      },
      {
        name: "ppg",
        displayName: "Points Per Game",
        shortDisplayName: "PPG",
        description: "Points Per Game",
        abbreviation: "PPG",
        type: "ppg",
        value: 0.0,
        displayValue: "0",
      },
    ],
  },
];
export default mockData;