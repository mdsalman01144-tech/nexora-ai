'use client';
import {useState} from 'react';
import './globals.css';

const tools=[
['🤖','AI Chat','Ask questions, write, explain and brainstorm.'],
['🔎','AI Search','Search the web and get AI summaries.'],
['🖼️','AI Image','Create images from simple prompts.'],
['🎬','AI Video','Generate video from text or images.'],
['🎙️','AI Voice','Create natural voiceovers.'],
['✍️','AI Writer','Scripts, captions, posts and articles.'],
['🖼️','Thumbnail','Make thumbnails for YouTube and social media.'],
['✂️','Studio','Bring your AI creations together.']
];

export default function App(){
 const [page,setPage]=useState('home');
 const [tool,setTool]=useState('AI Chat');
 const [prompt,setPrompt]=useState('');
 const [message,setMessage]=useState('');
 const openTool=(name)=>{setTool(name);setPage('dashboard');setMessage('')};
 return <div className="shell">
  <nav className="nav"><div className="brand">Nexora <span>AI</span></div><div className="navlinks"><button className="btn" onClick={()=>setPage('dashboard')}>Dashboard</button><button className="btn primary" onClick={()=>setPage('dashboard')}>Start Creating</button></div></nav>
  {page==='home'?<Home prompt={prompt} setPrompt={setPrompt} onCreate={()=>{setTool('AI Chat');setPage('dashboard')}} openTool={openTool}/>:<Dashboard tool={tool} setTool={setTool} prompt={prompt} setPrompt={setPrompt} message={message} setMessage={setMessage}/>}
  <footer className="footer">© 2026 Nexora AI · One AI. Infinite Possibilities.</footer>
 </div>
}

function Home({prompt,setPrompt,onCreate,openTool}){
 return <><section className="hero"><div className="badge">ALL-IN-ONE AI CREATOR PLATFORM</div><h1>One AI.<br/><span>Infinite Possibilities.</span></h1><p>Chat, search, create images, generate videos, make voiceovers and build content from one workspace.</p><div className="prompt"><input value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="What do you want to create?"/><button className="btn primary" onClick={onCreate}>Create</button></div></section>
 <section className="grid"><h2>Everything in one place</h2><div className="cards">{tools.map(t=><div className="card" key={t[1]} onClick={()=>openTool(t[1])}><div className="icon">{t[0]}</div><h3>{t[1]}</h3><p>{t[2]}</p></div>)}</div></section></>
}

function Dashboard({tool,setTool,prompt,setPrompt,message,setMessage}){
 const run=()=>setMessage(`Request received for ${tool}. The real AI API will be connected in the next integration step.`);
 return <section className="dash"><div className="dashgrid"><aside className="side">{tools.map(t=><button className={tool===t[1]?'active':''} key={t[1]} onClick={()=>{setTool(t[1]);setMessage('')}}>{t[0]} {t[1]}</button>)}</aside><main className="workspace"><div style={{display:'flex',justifyContent:'space-between',gap:10,flexWrap:'wrap'}}><div><h1 className="tooltitle">{tool}</h1><div className="muted">Create with Nexora AI</div></div><span className="credit">Credits: 500</span></div><div className="box"><textarea value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder={placeholder(tool)}></textarea><div className="row"><button className="btn primary" onClick={run}>Generate</button><button className="btn" onClick={()=>setPrompt('')}>Clear</button></div>{message&&<div className="notice">✓ {message}</div>}</div><div className="box"><b>Coming next</b><p className="muted">Secure AI provider routing, real web search, image/video generation, voice, projects, credits and payments.</p></div></main></div></section>
}
function placeholder(tool){
 const p={ 'AI Chat':'Ask Nexora anything…','AI Search':'What should Nexora search on the web?','AI Image':'Describe the image you want…','AI Video':'Describe the video you want to create…','AI Voice':'Enter the text for your voiceover…','AI Writer':'What should Nexora write?','Thumbnail':'Describe your thumbnail…','Studio':'Describe the project you want to assemble…'};
 return p[tool]||'What do you want to create?';
}
