export default async function getData(url) {

    const res = await fetch(url);

    if(!res.ok) throw new Error('failed to fetch data');

    return res.json()
}
 
