import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
const root=resolve('.');
const types={'.js':'text/javascript','.html':'text/html','.json':'application/json','.webmanifest':'application/manifest+json','.svg':'image/svg+xml'};
const server=createServer(async(req,res)=>{try{let path=resolve(root,'.'+new URL(req.url,'http://localhost').pathname);if(path===root)path=resolve(root,'index.html');if(!path.startsWith(root+'/'))throw Error('Bad path');let data=await readFile(path);res.writeHead(200,{'Content-Type':types[extname(path)]||'application/octet-stream'});res.end(data)}catch{res.writeHead(404);res.end()}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const browser=await chromium.launch({headless:true});
try{
for(const mobile of [false,true]){
 const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1280,height:720},hasTouch:mobile,isMobile:mobile,serviceWorkers:'block'});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/api/interpreter?*',r=>r.abort());
 await page.goto('http://127.0.0.1:'+server.address().port);
 await page.locator('#play').waitFor();await page.waitForFunction(()=>!document.querySelector('#play').disabled,{},{timeout:30000});
 await page.locator('#play').click();
 await page.waitForFunction(()=>document.querySelector('#objective').textContent.includes('Reggia'));
 await page.keyboard.down('d');await page.waitForTimeout(500);await page.keyboard.up('d');
 await page.keyboard.press('f');await page.waitForTimeout(200);
 await page.locator('#pause').click();assert.equal(await page.locator('#pause').textContent(),'▶');
 await page.locator('#pause').click();await page.locator('#mute').click();
 assert.equal(await page.locator('#mute').textContent(),'🔇');
 assert.deepEqual(errors,[]);
 await page.screenshot({path:mobile?'smoke-mobile.png':'smoke-desktop.png'});
 await page.close();
}
console.log('Desktop and mobile smoke tests passed');
}finally{await browser.close();server.close()}
