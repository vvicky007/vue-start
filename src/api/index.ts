import Iarticle from '@/interafces/news-articles'
async function getNews(url: string[]):Promise<Iarticle[]>{
  const responses = await Promise.all(url.map(u=>fetch(u).then((r)=>r.json())));
  console.log("inside get news")
  console.log(responses[0])
  const data = responses.reduce((acc,res)=>{
    return acc.concat(res.articles)
  },[])
  console.log(data)
  return data;
}
export { getNews };
