interface Iathlete{
    id:string,
    uid:string,
    displayName:string,
    shortName:string
}
export default interface Ileader{
    value:number,
    athlete:Iathlete
}