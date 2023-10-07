 export const getEvents = async ()=>{
   const res = fetch('/events.json')
    .then()
    .catch(error=>console.error(error))
    return res;
}