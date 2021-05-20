import Ileaders from "@/interafces/stats";
import fetch from 'node-fetch';
async function getStats(url: string): Promise<Ileaders[]> {
  
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data.stats[0].leaders;
  } catch (e) {
    return [];
  }
}
export { getStats };
