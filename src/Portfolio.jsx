import React, { useState, useEffect, useRef, useCallback } from "react";

const skillLayers = [
  {
    id: "interface",
    key: "interface",
    label: "frontend",
    items: ["React.js", "Flutter", "Tailwind CSS", "HTML5", "CSS3"],
    note:
      "Migrated legacy ExtJS modules to React.js — improved component reusability, maintainability & UI responsiveness.",
  },
  {
    id: "service",
    key: "backend",
    label: "backend",
    items: ["Node.js", "Express.js", "SpringBoot", "Flask", "REST API Design"],
    note:
      "Decomposed monolithic endpoints into focused, modular calls — improved application performance by 30%.",
  },
  {
    id: "data",
    key: "database",
    label: "database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firestore", "Prisma (ORM)", "Hibernate"],
    note:
      "Designed schemas & server-side aggregation pipelines powering Financify and QuickSettle.",
  },
];

const platform = ["AWS", "Firebase", "Docker"];
const languages = ["JavaScript (ES6+)", "C++", "Dart", "Java"];

const revisions = [
  {
    hash: "a3f9c21",
    date: "Jun 2025 — Present",
    title: "Full Stack Developer — Trainee",
    org: "Vistaar Systems Pvt Ltd, Mumbai, MH",
    notes: [
      "Built and maintained full-stack features using React.js on the frontend and Node.js/Express on the backend, delivering end-to-end functionality for scalable web applications.",
      "Migrated legacy frontend modules from ExtJS to React.js, improving component reusability, maintainability, and UI responsiveness.",
      "Redesigned API architecture by decomposing monolithic endpoints into focused, modular calls — improving application performance by 30%.",
      "Led upgrade to the latest internal framework version, updating both server-side configurations and client-side rendering logic for improved security and performance.",
      "Implemented robust data validation on both client and server layers, reducing runtime errors and improving overall system reliability.",
    ],
  },
];

const projects = [
  {
    dir: "financify/",
    name: "Financify",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Flask"],
    link: "https://github.com/Raghav-Mundhara/Financify",
    notes: [
      "Architected a full-stack investment suggestion platform using SVM for ML-powered recommendations, with a REST API backend and React frontend.",
      "Built a virtual currency system with backend business logic to track student transactions, reward task completions, and manage coin balances in MongoDB.",
      "Developed an expense tracking module with server-side aggregation and a dynamic React dashboard for real-time financial insights.",
    ],
  },
  {
    dir: "quicksettle/",
    name: "QuickSettle",
    stack: ["Flutter", "Node.js", "Prisma", "PostgreSQL", "AWS EC2"],
    link: "https://github.com/Raghav-Mundhara/Quick-Settle-Frontend",
    notes: [
      "Designed and developed a SaaS fleet management platform for cab operators, featuring driver and vehicle management, trip tracking, expense management, automated financial settlements, and business analytics.",
      "Deployed the application on AWS EC2, serving active users in production, with Shorebird integration for over-the-air updates to the Flutter application.",
    ],
  },
];

const education = [
  {
    school: "Vivekanand Education Society's Institute of Technology",
    loc: "Mumbai, MH",
    degree: "B.E. Information Technology",
    metric: "cgpa: 8.96",
    date: "Dec 2021 — May 2025",
  },
  {
    school: "Royal Junior College",
    loc: "Dombivali, MH",
    degree: "HSC — Science",
    metric: "score: 89.17%",
    date: "Jun 2019 — Mar 2021",
  },
];

const files = [
  { id: "hero", name: "hero.jsx" },
  { id: "about", name: "about.md" },
  { id: "stack", name: "stack.json" },
  { id: "experience", name: "experience.log" },
  { id: "projects", name: "projects/" },
  { id: "education", name: "education.yml" },
  { id: "contact", name: "contact.sh" },
];

function ExternalLink({ href, children, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className ? `elink ${className}` : "elink"}
    >
      {children}
    </a>
  );
}

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [activeFile, setActiveFile] = useState("hero");
  const [activeLayer, setActiveLayer] = useState("interface");
  const sectionRefs = useRef({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const registerRef = useCallback((id) => (el) => {
    sectionRefs.current[id] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveFile(entry.target.getAttribute("data-file"));
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={mounted ? "editor mounted" : "editor"}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

        :root{
          --bg:#12141B;
          --bg-raised:#1A1D27;
          --bg-tab:#20232E;
          --bg-tab-active:#12141B;
          --line:rgba(255,255,255,0.08);
          --line-soft:rgba(255,255,255,0.05);
          --text:#D2D6E2;
          --text-dim:#6E7387;
          --text-faint:#4C5063;
          --blue:#7AA2F7;
          --cyan:#7DCFFF;
          --green:#9ECE6A;
          --amber:#E0AF68;
          --pink:#F7768E;
          --purple:#BB9AF7;
        }

        *{ box-sizing:border-box; }

        .editor{
          background:var(--bg);
          color:var(--text);
          font-family:'Inter',sans-serif;
          min-height:100vh;
          width:100%;
          line-height:1.6;
        }

        .mono{ font-family:'JetBrains Mono',monospace; }

        a.elink{
          color:var(--cyan);
          text-decoration:none;
          border-bottom:1px solid rgba(125,207,255,0.3);
          font-family:'JetBrains Mono',monospace;
          font-size:13px;
          transition:color .15s ease, border-color .15s ease;
        }
        a.elink:hover{ color:var(--green); border-color:var(--green); }

        /* ---------- titlebar ---------- */
        .titlebar{
          position:sticky; top:0; z-index:60;
          background:rgba(18,20,27,0.92);
          backdrop-filter:blur(6px);
          border-bottom:1px solid var(--line);
        }
        .titlebar-top{
          display:flex; align-items:center; gap:14px;
          padding:10px 16px;
          border-bottom:1px solid var(--line-soft);
        }
        .tl-dots{ display:flex; gap:7px; flex-shrink:0; }
        .tl-dots span{ width:11px; height:11px; border-radius:50%; display:block; }
        .tl-dots span:nth-child(1){ background:#F7768E; }
        .tl-dots span:nth-child(2){ background:#E0AF68; }
        .tl-dots span:nth-child(3){ background:#9ECE6A; }
        .tl-path{
          font-family:'JetBrains Mono',monospace; font-size:12px; color:var(--text-dim);
        }
        .tl-path b{ color:var(--text); font-weight:600; }

        .tabbar{ display:flex; overflow-x:auto; scrollbar-width:none; }
        .tabbar::-webkit-scrollbar{ display:none; }
        .tab{
          font-family:'JetBrains Mono',monospace; font-size:12.5px;
          padding:10px 18px; white-space:nowrap;
          background:var(--bg-tab); color:var(--text-dim);
          border:none; border-right:1px solid var(--line);
          cursor:pointer; position:relative;
          transition:color .15s ease, background .15s ease;
        }
        .tab:hover{ color:var(--text); }
        .tab.active{
          background:var(--bg-tab-active); color:var(--text);
        }
        .tab.active::after{
          content:''; position:absolute; left:0; right:0; bottom:0; height:2px;
          background:var(--blue);
        }
        .tab .dim{ color:var(--text-faint); margin-right:5px; }

        /* ---------- layout ---------- */
        .layout{ display:flex; align-items:flex-start; }
        .sidebar{
          width:210px; flex-shrink:0; position:sticky; top:79px;
          padding:24px 10px; align-self:flex-start;
          border-right:1px solid var(--line);
          height:calc(100vh - 79px);
        }
        .sidebar-title{
          font-family:'JetBrains Mono',monospace; font-size:10.5px; letter-spacing:0.1em;
          color:var(--text-faint); text-transform:uppercase; padding:0 10px 12px;
        }
        .tree-item{
          display:flex; align-items:center; gap:8px;
          width:100%; text-align:left; background:none; border:none; cursor:pointer;
          font-family:'JetBrains Mono',monospace; font-size:12.5px; color:var(--text-dim);
          padding:7px 10px; border-radius:4px;
          transition:background .15s ease, color .15s ease;
        }
        .tree-item .branch{ color:var(--text-faint); }
        .tree-item:hover{ color:var(--text); background:var(--bg-raised); }
        .tree-item.active{ color:var(--cyan); background:var(--bg-raised); }
        @media (max-width:900px){ .sidebar{ display:none; } }

        .main{ flex:1; min-width:0; }

        section{ padding:70px 6vw 20px; scroll-margin-top:80px; }
        @media (max-width:900px){ section{ padding:52px 6vw 12px; } }

        .pane{
          display:flex; gap:0; max-width:980px;
          border:1px solid var(--line); background:var(--bg-raised);
          border-radius:6px; overflow:hidden;
        }
        .gutter{
          padding:22px 12px; text-align:right; user-select:none;
          border-right:1px solid var(--line);
          background:rgba(0,0,0,0.15);
        }
        .gutter span{
          display:block; font-family:'JetBrains Mono',monospace; font-size:12px;
          color:var(--text-faint); line-height:1.85; min-height:1.85em;
        }
        .code{ padding:22px 24px; flex:1; min-width:0; overflow-x:auto; }
        .code .l{
          font-family:'JetBrains Mono',monospace; font-size:13.5px; line-height:1.85;
          white-space:pre-wrap; min-height:1.85em;
        }
        .kw{ color:var(--purple); }
        .fn{ color:var(--blue); }
        .str{ color:var(--green); }
        .com{ color:var(--text-dim); font-style:italic; }
        .prop{ color:var(--cyan); }
        .num{ color:var(--amber); }
        .punc{ color:var(--text-faint); }

        .eyebrow{
          font-family:'JetBrains Mono',monospace; font-size:12px; color:var(--text-dim);
          margin-bottom:16px;
        }
        .eyebrow .n{ color:var(--amber); }

        h2.sectitle{
          font-family:'JetBrains Mono',monospace; font-weight:700;
          font-size:clamp(1.3rem,2.4vw,1.7rem); margin:0 0 22px 0; color:var(--text);
        }

        /* ---------- hero ---------- */
        .hero{ padding-top:56px; }
        .hero-wrap{ display:grid; grid-template-columns:1.4fr 1fr; gap:34px; align-items:start; }
        @media (max-width:900px){ .hero-wrap{ grid-template-columns:1fr; } }

        .cursor{
          display:inline-block; width:8px; height:1em; background:var(--green);
          vertical-align:text-bottom; margin-left:2px;
          animation:blink 1.1s step-end infinite;
        }
        @keyframes blink{ 50%{ opacity:0; } }

        .status-line{ display:flex; align-items:center; gap:8px; margin-top:4px; }
        .status-dot{
          width:8px; height:8px; border-radius:50%; background:var(--green);
          box-shadow:0 0 0 3px rgba(158,206,106,0.18);
          animation:pulse 2s ease-in-out infinite;
        }
        @keyframes pulse{ 0%,100%{ opacity:1; } 50%{ opacity:0.45; } }

        .terminal-card{
          border:1px solid var(--line); background:var(--bg-raised); border-radius:6px;
          overflow:hidden;
        }
        .terminal-head{
          display:flex; align-items:center; gap:8px; padding:9px 14px;
          border-bottom:1px solid var(--line); background:rgba(0,0,0,0.15);
        }
        .terminal-head span{ width:9px; height:9px; border-radius:50%; }
        .terminal-head span:nth-child(1){ background:#F7768E; }
        .terminal-head span:nth-child(2){ background:#E0AF68; }
        .terminal-head span:nth-child(3){ background:#9ECE6A; }
        .terminal-head .tt{ margin-left:6px; font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--text-faint); }
        .terminal-body{ padding:16px 18px; display:flex; flex-direction:column; gap:10px; }
        .prompt{ font-family:'JetBrains Mono',monospace; font-size:12.5px; color:var(--text-dim); }
        .prompt .sym{ color:var(--green); margin-right:6px; }

        /* ---------- about ---------- */
        .jsdoc .l{ color:var(--text-dim); }
        .jsdoc .l .tag{ color:var(--purple); }
        .jsdoc .l .body{ color:var(--text); font-style:normal; }

        /* ---------- stack ---------- */
        .stack-list{ display:flex; flex-direction:column; }
        .layer-row{
          border-bottom:1px dashed var(--line);
          padding:16px 0; cursor:pointer;
        }
        .layer-row:last-child{ border-bottom:none; }
        .layer-row .l{ transition:opacity .15s ease; }
        .layer-row:not(.active) .l.dim-inactive{ opacity:0.55; }
        .chip{
          font-family:'JetBrains Mono',monospace; font-size:11.5px;
          padding:3px 9px; border:1px solid var(--line); border-radius:4px;
          color:var(--text-dim); background:rgba(255,255,255,0.02);
          display:inline-block; margin:2px 4px 2px 0;
        }
        .layer-row.active .chip{ border-color:var(--blue); color:var(--cyan); }
        .base-row{ display:flex; flex-wrap:wrap; gap:26px; padding-top:18px; }
        .base-grp .k{ font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--text-faint); display:block; margin-bottom:8px; }

        /* ---------- experience (git log) ---------- */
        .commit{ padding:20px 0; border-bottom:1px dashed var(--line); }
        .commit:last-child{ border-bottom:none; }
        .commit-l1{ font-family:'JetBrains Mono',monospace; font-size:13px; }
        .commit-hash{ color:var(--amber); }
        .commit-ref{ color:var(--purple); }
        .commit-l2, .commit-l3{ font-family:'JetBrains Mono',monospace; font-size:12.5px; color:var(--text-dim); }
        .commit-msg{ margin:12px 0 10px; font-family:'JetBrains Mono',monospace; font-size:14px; color:var(--text); font-weight:600; }
        .diff-line{ font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--text); padding-left:2px; }
        .diff-line .plus{ color:var(--green); margin-right:8px; }

        /* ---------- projects ---------- */
        .proj-grid{ display:grid; grid-template-columns:1fr 1fr; gap:22px; max-width:980px; }
        @media (max-width:820px){ .proj-grid{ grid-template-columns:1fr; } }
        .proj-card{ border:1px solid var(--line); background:var(--bg-raised); border-radius:6px; overflow:hidden; }
        .proj-head{ display:flex; align-items:center; gap:8px; padding:9px 14px; border-bottom:1px solid var(--line); background:rgba(0,0,0,0.15); }
        .proj-head span.dot{ width:9px; height:9px; border-radius:50%; }
        .proj-head span.dot:nth-child(1){ background:#F7768E; }
        .proj-head span.dot:nth-child(2){ background:#E0AF68; }
        .proj-head span.dot:nth-child(3){ background:#9ECE6A; }
        .proj-head .path{ margin-left:6px; font-family:'JetBrains Mono',monospace; font-size:11.5px; color:var(--text-faint); }
        .proj-body{ padding:18px 20px; }
        .proj-name{ font-family:'JetBrains Mono',monospace; font-weight:700; font-size:16px; color:var(--text); margin-bottom:10px; }
        .proj-stack{ margin-bottom:12px; }
        .proj-notes{ margin:0 0 14px; padding-left:0; list-style:none; display:flex; flex-direction:column; gap:7px; }
        .proj-notes li{ font-size:13px; color:var(--text-dim); padding-left:16px; position:relative; }
        .proj-notes li::before{ content:'//'; position:absolute; left:0; color:var(--text-faint); }

        /* ---------- education (yaml) ---------- */
        .yaml-block .l{ }
        .yaml-key{ color:var(--cyan); }
        .yaml-val{ color:var(--text); }
        .yaml-dash{ color:var(--purple); }

        /* ---------- footer / contact ---------- */
        .foot{
          padding:70px 6vw 50px;
        }
        .foot-note{ font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--text-faint); margin-top:26px; }

        @media (prefers-reduced-motion: reduce){
          .cursor, .status-dot{ animation:none; }
        }
      `}</style>

      <div className="titlebar">
        <div className="titlebar-top">
          <div className="tl-dots"><span></span><span></span><span></span></div>
          <div className="tl-path"><b>raghav-mundhara</b> — portfolio — visual studio code</div>
        </div>
        <div className="tabbar">
          {files.map((f, i) => (
            <button
              key={f.id}
              className={activeFile === f.id ? "tab active" : "tab"}
              onClick={() => scrollTo(f.id)}
            >
              <span className="dim">{String(i + 1).padStart(2, "0")}</span>
              {f.name}
            </button>
          ))}
        </div>
      </div>

      <div className="layout">
        <aside className="sidebar">
          <div className="sidebar-title">Explorer</div>
          {files.map((f) => (
            <button
              key={f.id}
              className={activeFile === f.id ? "tree-item active" : "tree-item"}
              onClick={() => scrollTo(f.id)}
            >
              <span className="branch">{f.name.endsWith("/") ? "▾" : "├─"}</span>
              {f.name}
            </button>
          ))}
        </aside>

        <main className="main">
          <section id="hero" data-file="hero" ref={registerRef("hero")} className="hero">
            <div className="hero-wrap">
              <div className="pane">
                <div className="gutter">
                  {Array.from({ length: 12 }).map((_, i) => <span key={i}>{i + 1}</span>)}
                </div>
                <div className="code">
                  <div className="l"><span className="com">// portfolio.config.js</span></div>
                  <div className="l"></div>
                  <div className="l"><span className="kw">const</span> developer <span className="punc">=</span> <span className="punc">{'{'}</span></div>
                  <div className="l">&nbsp;&nbsp;<span className="prop">name</span><span className="punc">:</span> <span className="str">"Raghav Mundhara"</span><span className="punc">,</span></div>
                  <div className="l">&nbsp;&nbsp;<span className="prop">role</span><span className="punc">:</span> <span className="str">"Software Developer | Full Stack Developer"</span><span className="punc">,</span></div>
                  <div className="l">&nbsp;&nbsp;<span className="prop">location</span><span className="punc">:</span> <span className="str">"Mumbai, India"</span><span className="punc">,</span></div>
                  <div className="l">&nbsp;&nbsp;<span className="prop">status</span><span className="punc">:</span> <span className="fn">openToWork</span><span className="punc">()</span><span className="punc">,</span></div>
                  <div className="l"><span className="punc">{'}'}</span><span className="punc">;</span></div>
                  <div className="l"></div>
                  <div className="l"><span className="kw">export default</span> developer<span className="punc">;</span><span className="cursor"></span></div>
                </div>
              </div>

              <div className="terminal-card">
                <div className="terminal-head">
                  <span></span><span></span><span></span>
                  <span className="tt">zsh</span>
                </div>
                <div className="terminal-body">
                  <div className="status-line">
                    <span className="status-dot"></span>
                    <span className="prompt mono">status: open to work</span>
                  </div>
                  <div className="prompt"><span className="sym">$</span>open mailto:mundhararaghav16@gmail.com</div>
                  <ExternalLink href="mailto:mundhararaghav16@gmail.com">mundhararaghav16@gmail.com</ExternalLink>
                  <div className="prompt" style={{marginTop:6}}><span className="sym">$</span>open tel:+919987380617</div>
                  <ExternalLink href="tel:+919987380617">+91 99873 80617</ExternalLink>
                  <div className="prompt" style={{marginTop:6}}><span className="sym">$</span>open --profiles</div>
                  <div style={{display:"flex", flexDirection:"column", gap:6}}>
                    <ExternalLink href="https://www.linkedin.com/in/raghav-mundhara/">linkedin.com/in/raghav-mundhara</ExternalLink>
                    <ExternalLink href="https://github.com/Raghav-Mundhara">github.com/Raghav-Mundhara</ExternalLink>
                    <ExternalLink href="https://leetcode.com/Raghav_Mundhara/">leetcode.com/Raghav_Mundhara</ExternalLink>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" data-file="about" ref={registerRef("about")}>
            <div className="eyebrow"><span className="n">02</span> — about.md</div>
            <h2 className="sectitle">Professional Summary</h2>
            <div className="pane">
              <div className="gutter">
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>{i + 1}</span>)}
              </div>
              <div className="code jsdoc">
                <div className="l"><span className="tag">/**</span></div>
                <div className="l"><span className="tag"> * </span><span className="body">Results-driven Full Stack Developer with experience building end-to-end</span></div>
                <div className="l"><span className="tag"> * </span><span className="body">web applications across the complete stack — from REST API design and</span></div>
                <div className="l"><span className="tag"> * </span><span className="body">database architecture to responsive, component-driven UIs. Proven track</span></div>
                <div className="l"><span className="tag"> * </span><span className="body">record of improving performance, migrating legacy systems, and shipping</span></div>
                <div className="l"><span className="tag"> * </span><span className="body">reliable, scalable features in production environments.</span></div>
                <div className="l"><span className="tag"> */</span></div>
              </div>
            </div>
          </section>

          <section id="stack" data-file="stack" ref={registerRef("stack")}>
            <div className="eyebrow"><span className="n">03</span> — stack.json</div>
            <h2 className="sectitle">System Architecture</h2>
            <div className="pane">
              <div className="code" style={{width:"100%"}}>
                <div className="l"><span className="punc">{'{'}</span></div>
                <div className="stack-list">
                  {skillLayers.map((layer) => (
                    <div
                      key={layer.id}
                      className={activeLayer === layer.id ? "layer-row active" : "layer-row"}
                      onMouseEnter={() => setActiveLayer(layer.id)}
                      onFocus={() => setActiveLayer(layer.id)}
                      tabIndex={0}
                    >
                      <div className="l"><span className={activeLayer===layer.id ? "prop" : "prop dim-inactive"}>&nbsp;&nbsp;"{layer.key}"</span><span className="punc">:</span> <span className="punc">{'{'}</span></div>
                      <div className="l">&nbsp;&nbsp;&nbsp;&nbsp;<span className="prop">modules</span><span className="punc">:</span> [</div>
                      <div className="l" style={{paddingLeft: "6ch"}}>
                        {layer.items.map((it) => <span key={it} className="chip">{it}</span>)}
                      </div>
                      <div className="l">&nbsp;&nbsp;&nbsp;&nbsp;]<span className="punc">,</span></div>
                      <div className="l">&nbsp;&nbsp;&nbsp;&nbsp;<span className="prop">note</span><span className="punc">:</span> <span className="str">"{layer.note}"</span></div>
                      <div className="l">&nbsp;&nbsp;<span className="punc">{'}'}</span><span className="punc">,</span></div>
                    </div>
                  ))}
                </div>
                <div className="l"><span className="punc">{'}'}</span></div>
                <div className="base-row">
                  <div className="base-grp">
                    <span className="k">deploymentPlatform</span>
                    <div>{platform.map((p) => <span key={p} className="chip">{p}</span>)}</div>
                  </div>
                  <div className="base-grp">
                    <span className="k">languages</span>
                    <div>{languages.map((l) => <span key={l} className="chip">{l}</span>)}</div>
                  </div>
                  <div className="base-grp">
                    <span className="k">versionControl</span>
                    <div><span className="chip">Git</span><span className="chip">GitHub</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" data-file="experience" ref={registerRef("experience")}>
            <div className="eyebrow"><span className="n">04</span> — experience.log</div>
            <h2 className="sectitle">Experience</h2>
            <div className="pane">
              <div className="code" style={{width:"100%"}}>
                {revisions.map((r) => (
                  <div className="commit" key={r.hash}>
                    <div className="commit-l1"><span className="commit-hash">commit {r.hash}</span> <span className="commit-ref">(HEAD -&gt; main)</span></div>
                    <div className="commit-l2">Author: Raghav Mundhara</div>
                    <div className="commit-l3">Date:   {r.date}</div>
                    <div className="commit-msg">{r.title} @ {r.org}</div>
                    <div style={{display:"flex", flexDirection:"column", gap:7}}>
                      {r.notes.map((n, i) => (
                        <div className="diff-line" key={i}><span className="plus">+</span>{n}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" data-file="projects" ref={registerRef("projects")}>
            <div className="eyebrow"><span className="n">05</span> — projects/</div>
            <h2 className="sectitle">Projects</h2>
            <div className="proj-grid">
              {projects.map((p) => (
                <div className="proj-card" key={p.dir}>
                  <div className="proj-head">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                    <span className="path">~/projects/{p.dir}README.md</span>
                  </div>
                  <div className="proj-body">
                    <div className="proj-name">{p.name}</div>
                    <div className="proj-stack">
                      {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
                    </div>
                    <ul className="proj-notes">
                      {p.notes.map((n, i) => <li key={i}>{n}</li>)}
                    </ul>
                    <ExternalLink href={p.link}>git clone {p.link.replace("https://github.com/", "")} →</ExternalLink>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="education" data-file="education" ref={registerRef("education")}>
            <div className="eyebrow"><span className="n">06</span> — education.yml</div>
            <h2 className="sectitle">Education</h2>
            <div className="pane">
              <div className="gutter">
                {Array.from({ length: education.length * 5 }).map((_, i) => <span key={i}>{i + 1}</span>)}
              </div>
              <div className="code yaml-block">
                {education.map((e, idx) => (
                  <React.Fragment key={e.school}>
                    <div className="l"><span className="yaml-dash">- </span><span className="yaml-key">school</span><span className="punc">: </span><span className="yaml-val">{e.school}</span></div>
                    <div className="l">&nbsp;&nbsp;<span className="yaml-key">location</span><span className="punc">: </span><span className="yaml-val">{e.loc}</span></div>
                    <div className="l">&nbsp;&nbsp;<span className="yaml-key">degree</span><span className="punc">: </span><span className="yaml-val">{e.degree}</span></div>
                    <div className="l">&nbsp;&nbsp;<span className="yaml-key">score</span><span className="punc">: </span><span className="yaml-val">{e.metric}</span></div>
                    <div className="l">&nbsp;&nbsp;<span className="yaml-key">duration</span><span className="punc">: </span><span className="yaml-val">{e.date}</span></div>
                    {idx < education.length - 1 && <div className="l">&nbsp;</div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          <footer id="contact" data-file="contact" ref={registerRef("contact")} className="foot">
            <div className="eyebrow"><span className="n">07</span> — contact.sh</div>
            <div className="terminal-card" style={{maxWidth:560}}>
              <div className="terminal-head">
                <span></span><span></span><span></span>
                <span className="tt">contact.sh</span>
              </div>
              <div className="terminal-body">
                <div className="prompt"><span className="sym">$</span>whoami</div>
                <div className="prompt mono" style={{color:"var(--text)"}}>raghav-mundhara</div>
                <div className="prompt" style={{marginTop:8}}><span className="sym">$</span>echo "let's build something."</div>
                <div className="prompt mono" style={{color:"var(--green)"}}>let's build something.<span className="cursor"></span></div>
                <div style={{display:"flex", flexDirection:"column", gap:6, marginTop:10}}>
                  <ExternalLink href="mailto:mundhararaghav16@gmail.com">mundhararaghav16@gmail.com</ExternalLink>
                  <ExternalLink href="https://www.linkedin.com/in/raghav-mundhara/">linkedin.com/in/raghav-mundhara ↗</ExternalLink>
                  <ExternalLink href="https://github.com/Raghav-Mundhara">github.com/Raghav-Mundhara ↗</ExternalLink>
                  <ExternalLink href="https://leetcode.com/Raghav_Mundhara/">leetcode.com/Raghav_Mundhara ↗</ExternalLink>
                </div>
              </div>
            </div>
            <div className="foot-note">// raghav mundhara · mumbai, in · build 2026.1 · exit code 0</div>
          </footer>
        </main>
      </div>
    </div>
  );
}