import Link from "next/link";
import CardArt from "../components/CardArt";
import { profile, highlights, projects, experience, skills } from "../data/content";

export default function Home() {
  return (
    <main className="wrap">
      <section className="hero" aria-labelledby="hero-title">
        <p className="hello">Hi, I&apos;m Gautami. {profile.title}, India.</p>
        <h1 id="hero-title">I design <em>AI products</em> and online stores that make complex things feel simple.</h1>
        <p className="lede">
          8+ years across SaaS, e-commerce, hospitality tech and games. Right now I&apos;m the sole designer at Apycue,
          building an AI-agent platform that helps hotels win direct bookings and rely less on OTAs.
        </p>
        <div className="avail"><span className="dot" aria-hidden="true" />{profile.availability}</div>
        <div className="cta">
          <Link className="btn" href="/work/apycue/">See the Apycue case study</Link>
          <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
        <div className="proof" aria-label="Highlights">
          {highlights.map((h) => (
            <div key={h.label}><b>{h.value}</b><span>{h.label}</span></div>
          ))}
        </div>
      </section>

      <section className="block" id="work" aria-labelledby="work-title">
        <div className="head">
          <h2 id="work-title">Selected work</h2>
          <p>Three projects that show how I think: the problem, the decisions, and what changed.</p>
        </div>
        <div className="work">
          {projects.map((p) => (
            <Link key={p.slug} className={`card c-${p.color}${p.wide ? " wide" : ""}`} href={`/work/${p.slug}/`}>
              <div className="meta">
                <div className="chips"><span className="chip">{p.period}</span><span className="chip">{p.tags}</span></div>
                <h3>{p.cardTitle}</h3>
                <p>{p.cardText}</p>
                <span className="go">Read case study →</span>
              </div>
              <div className="art" aria-hidden="true"><CardArt type={p.art} /></div>
            </Link>
          ))}
        </div>
        <div className="earlier">
          <div className="ico" aria-hidden="true">2D</div>
          <div>
            <h3>Earlier: game UI and mobile apps</h3>
            <p>Game UI, 2D assets and interaction flows for casual games at 3WP Infosystem, and client mobile apps at Aspirebit Technolab.</p>
          </div>
          <span className="label">2018 – 2020</span>
        </div>
      </section>

      <section className="block" id="experience" aria-labelledby="xp-title">
        <div className="head"><h2 id="xp-title">Experience</h2><p>Five roles over 8+ years, all hands-on design.</p></div>
        <div className="xp">
          {experience.map((x) => (
            <div className="row" key={x.when}>
              <span className="when">{x.when}</span>
              <div>
                <h3>{x.role}{x.current && <span className="now">Current</span>}</h3>
                <p>{x.text}</p>
              </div>
              <span className="co">{x.company}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="block" id="about" aria-labelledby="about-title">
        <div className="head"><h2 id="about-title">About</h2></div>
        <div className="about">
          <div><p className="quote">{profile.quote}</p></div>
          <div>
            <p>I work best with teams building complex products who want them to feel simple. I take work from discovery and user flows through to polished UI, and I stay close to developers until it ships: clear specs, build reviews, and catching UX issues before release.</p>
            <p>I use Claude and the Figma MCP to explore ideas and generate starting screens, then make the design decisions myself. I also mentor junior designers and help set team design standards.</p>
            <div className="lists">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group}>
                  <span className="label">{group}</span>
                  <ul>{items.map((s) => <li key={s}>{s}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
