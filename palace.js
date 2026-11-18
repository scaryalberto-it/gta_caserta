import * as T from 'https://esm.sh/three@0.170.0';
// Procedural architectural landmark: recognizable rhythm of the Royal Palace's facade.
export function buildPalace(scene){
 const root=new T.Group();root.position.set(0,0,-194);scene.add(root);
 const material=(c,r=1)=>new T.MeshStandardMaterial({color:c,roughness:r});
 const ochre=material(0xd5a783),stone=material(0xf2ddba),shadow=material(0x9a725f),glass=material(0x405b69,.35),roof=material(0x8d7770),iron=material(0x343f45),gold=material(0xbda06a);
 const cube=(x,y,z,w,h,d,m)=>{const a=new T.Mesh(new T.BoxGeometry(w,h,d),m);a.position.set(x,y,z);a.castShadow=true;a.receiveShadow=true;root.add(a);return a};
 // Main facade and shallow projecting central / corner pavilions
 cube(0,14,0,146,28,22,ochre);cube(0,29,0,149,2,23,stone);
 for(const x of [-67,0,67]){cube(x,15,0, x===0?23:15,30,24,stone);cube(x,31,0,x===0?25:17,2,25,roof)}
 // String courses, cornice and pilasters
 for(const y of [9.7,19.6,27.2])cube(0,y,11.5,147,.65,1,stone);
 for(let x=-71;x<=71;x+=7.5){
   cube(x,14,11.3,.75,27,1.3,stone);
   // Ground-floor rustication, recessed portals, arched effect with lintel
   cube(x,4.9,12.05,3.5,7.3,.25,shadow);
   cube(x,4.7,12.25,2.8,6.4,.15,glass);
   cube(x,8.1,12.4,3.7,.5,.55,stone);
   // Two upper rows of windows with stone frames and balconies
   for(const [y,h] of [[14.5,5.6],[23.3,4.3]]){
     cube(x,y,12.12,3.9,h+.7,.48,stone);
     cube(x,y,12.44,3.1,h,.24,glass);
     cube(x,y+h/2+.5,12.5,4.4,.5,.7,stone);
     cube(x,y,12.61,.12,h,.15,iron);
     cube(x,y,12.63,3.2,.1,.12,iron);
     if(y<20){cube(x,y-h/2-.5,13.15,4.8,.45,2.2,stone);for(let r=-2;r<=2;r++)cube(x+r*.9,y-h/2+.25,14.1,.12,1.4,.12,iron)}
   }
 }
 // Three principal arches and prominent main entrance
 for(const x of [-7,0,7]){cube(x,5.4,12.6,5.6,9,.4,shadow);cube(x,5.1,12.88,4.7,8.2,.25,glass);cube(x,9.6,13.1,6.2,1.2,1,stone)}
 cube(0,33.2,0,20,2,25,roof);cube(0,36,0,9,4,12,stone);
 // Clock / coat-of-arms-inspired central circular feature
 const dial=new T.Mesh(new T.CylinderGeometry(2.1,2.1,.3,32),stone);dial.rotation.x=Math.PI/2;dial.position.set(0,33.3,13);root.add(dial);
 const hand=cube(0,33.4,13.25,.15,1.6,.15,iron);hand.rotation.z=.4;
 // Entrance plaza and formal forecourt, two symmetric planted gardens
 cube(0,.04,46,180,.12,60,material(0xcbbba4));
 for(const x of [-1,1]){cube(x*56,.11,44,38,.13,36,material(0x7c9d65));for(let z=27;z<=61;z+=9){const hedge=cube(x*56,.8,z,35,1.5,1.8,material(0x447d4d));hedge.castShadow=true}}
 for(const x of [-70,70])for(let z=20;z<75;z+=13){cube(x,2,z,.7,4,.7,material(0x66513b));const leaf=new T.Mesh(new T.IcosahedronGeometry(3,1),material(0x4b8950));leaf.position.set(x,6,z);leaf.castShadow=true;root.add(leaf)}
 return root;
}
