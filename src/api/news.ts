import Iarticle from "@/interafces/news-articles";
import fetch from 'node-fetch';
async function getNews(url: string[]): Promise<Iarticle[]> {
  try{
  const responses = await Promise.all(
    url.map((u) => fetch(u).then((r) => r.json()))
  );
  const data = responses.reduce((acc, res) => {
    return acc.concat(res.articles);
  }, []);
  return data;}
  catch(e){
    return [];
  }
}
export { getNews };
