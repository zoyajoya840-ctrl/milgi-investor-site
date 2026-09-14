import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import "./style.css";

const apps=[
 {id:"passenger",label:"Passenger App",tag:"DEMAND",desc:"Book on-demand rides, regular routes and explore MILGI mobility.",url:"https://milgi-passenger-demo-iu56.vercel.app/",tone:"pink",stats:["On-demand","Regular routes","Village mode"]},
 {id:"partner",label:"Partner App",tag:"SUPPLY",desc:"Bring existing local transport online, receive rides and manage routes and fleet.",url:"https://milgi-partner-demo.vercel.app/",tone:"blue",stats:["Rides","Routes","Fleet"]},
 {id:"admin",label:"Admin Control Center",tag:"NETWORK",desc:"See rides, partners, fleet, routes, institutions and network health.",url:"https://milgi-admin-demo.vercel.app/",tone:"green",stats:["Live rides","Connected fleet","Institutions"]}
];

function App(){
 const [view,setView]=useState(null);
 if(view) return <Detail app={apps.find(a=>a.id===view)} back={()=>setView(null)}/>;
 return <div className="site">
  <nav><div className="logo"><img src="/milgi-logo.png" alt="MILGI"/> <span>MILGI</span></div><div className="navtag">INVESTOR DEMO</div></nav>
  <header><div className="eyebrow">ONE MOBILITY NETWORK</div><h1>Local transport,<br/><i>finally connected.</i></h1><p className="heroText">MILGI connects passengers, existing local transport partners and institutions through one mobility network — without requiring MILGI to own the vehicles.</p><button className="primary" onClick={()=>document.getElementById("ecosystem").scrollIntoView({behavior:"smooth"})}>Explore MILGI ↓</button></header>
  <section id="ecosystem" className="ecosystem"><div className="sectionhead"><div><div className="eyebrow">THE ECOSYSTEM</div><h2>Three connected experiences.</h2></div><p>One product. Three operational surfaces.</p></div>
   <div className="grid">{apps.map(a=><div className={`tile ${a.tone}`} key={a.id}><div className="tiletop"><span>{a.tag}</span><b>↗</b></div><h3>{a.label}</h3><p>{a.desc}</p><div className="stats">{a.stats.map(v=><span key={v}>{v}</span>)}</div><button className="tileopen" onClick={()=>setView(a.id)}>Open {a.label} →</button></div>)}</div>
  </section>
  <section className="flow"><div className="eyebrow">THE MILGI LOOP</div><div className="flowline"><span>Passenger demand</span><b>→</b><span>Local transport</span><b>→</b><span>MILGI network</span><b>→</b><span>Admin visibility</span></div></section>
  <section className="statement"><div className="eyebrow">BUILT FOR MORE THAN A RIDE</div><h2>People. Routes. Goods. Institutions.</h2><p>MILGI is designed to bring fragmented mobility supply and demand into one discoverable, bookable and manageable network.</p></section>
  <footer><b>MILGI</b><span>Interactive product prototype · Investor presentation</span></footer>
 </div>
}

function Detail({app,back}){
 return <div className="site detail">
  <nav>
   <button className="back" onClick={back}>← MILGI Demo</button>
   <div className="navtag">{app.tag}</div>
  </nav>
  <main className="detailmain">
   <div className={`orb ${app.tone}`}>{app.id==="passenger"?"↗":app.id==="partner"?"◇":"▦"}</div>
   <div className="eyebrow">{app.tag} EXPERIENCE</div>
   <h1>{app.label}</h1>
   <p className="heroText">{app.desc}</p>
   <div className="featurebox">
    <b>Ready to open</b>
    <p>{app.id==="passenger"?"Home → People → Destination → Ride → Live Ride → Payment":app.id==="partner"?"Home → Online → New Ride → Accept → Start → Complete → Earnings":"Overview → Rides → Partners → Fleet → Routes → Institutions → Alerts"}</p>
    <button className="primary" onClick={()=>window.open(app.url,"_blank","noopener,noreferrer")}>Open live prototype →</button>
   </div>
   <div className="note">The app opens in a separate browser tab. Keep this MILGI Demo tab open to return here.</div>
  </main>
 </div>
}

createRoot(document.getElementById("root")).render(<App/>);
