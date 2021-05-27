import { IStandings } from "@/interafces/league-standings";
import fetch from "node-fetch";
async function getStandings(url: string): Promise<IStandings[]> {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data.children[0].standings.entries;
  } catch (e) {
    return [];
  }
}

export { getStandings };
