import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project ? { title: project.title, description: project.intro } : {};
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <main className="wrap case">
      <Link className="back" href="/#work">← All work</Link>

      <div className={`cover c-${p.color}`}>
        <div className="chips">{p.chips.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
        <h1>{p.title}</h1>
        <p>{p.intro}</p>
      </div>

      <div className="facts">
        {p.facts.map(([label, value]) => (
          <div key={label}><span className="label">{label}</span><span>{value}</span></div>
        ))}
      </div>

      <div className="impact">
        {p.impact.map(([value, label]) => (
          <div key={label}><b>{value}</b><span>{label}</span></div>
        ))}
      </div>

      {p.sections.map((s, i) =>
        s.shot ? (
          <div className="shot" key={i}><div><b>{s.shot[0]}</b>{s.shot[1]}</div></div>
        ) : (
          <div className="prose" key={i}>
            <h2>{s.heading}</h2>
            <div>
              {s.paragraphs?.map((t) => <p key={t}>{t}</p>)}
              {s.decisions && (
                <ol>
                  {s.decisions.map(([lead, rest]) => (
                    <li key={lead}><strong>{lead}</strong> {rest}</li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        )
      )}

      <div className="next">
        {prev ? (
          <Link href={`/work/${prev.slug}/`}><span>Previous</span>← {prev.cardTitle}</Link>
        ) : (
          <Link href="/#work"><span>Back</span>← All work</Link>
        )}
        {next ? (
          <Link href={`/work/${next.slug}/`} style={{ textAlign: "right" }}><span>Next case study</span>{next.cardTitle} →</Link>
        ) : (
          <Link href="/#work" style={{ textAlign: "right" }}><span>Back to</span>All work →</Link>
        )}
      </div>
    </main>
  );
}
