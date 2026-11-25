import {mkdir,writeFile} from 'node:fs/promises';
const box='41.065,14.319,41.082,14.345';
const query='[out:json][timeout:90];(way["highway"]('+box+');way["building"]('+box+');way["leisure"~"park|garden"]('+box+');node["name"~"Reggia|Piazza|Stazione|Duomo"]('+box+'););out geom;';
let data;
for(const url of ['https://overpass-api.de/api/interpreter','https://overpass.kumi.systems/api/interpreter']){
 try{const res=await fetch(url+'?data='+encodeURIComponent(query),{signal:AbortSignal.timeout(120000)});if(!res.ok)throw Error('HTTP '+res.status);const candidate=await res.json();const ways=candidate.elements.filter(e=>e.type==='way');if(ways.filter(e=>e.tags?.highway).length<20||ways.filter(e=>e.tags?.building).length<10)throw Error('Incomplete map');data=candidate;break}catch(e){console.error(url,e.message)}
}
if(!data)throw Error('No valid map obtained; existing snapshot was not modified');
await mkdir('data',{recursive:true});await writeFile('data/caserta.osm.json',JSON.stringify(data));console.log('Saved',data.elements.length,'OSM elements. © OpenStreetMap contributors, ODbL.');
