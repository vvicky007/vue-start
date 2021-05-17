import Ileaders from "@/interafces/stats";
async function getStats(url: string): Promise<Ileaders[]> {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("Inside get Stats");
    return data.stats[0].leaders;
  } catch (e) {
    return [];
  }
}
export default getStats;
