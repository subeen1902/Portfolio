import * as React from 'react';

/** 뱃지 URL 생성기 */
function badgeUrl(label: string, logo: string, color: string) {
  const encoded = encodeURIComponent(label);
  return `https://img.shields.io/badge/${encoded}-${color}?style=for-the-badge&logo=${logo}&logoColor=white`;
}

type Badge = { label: string; logo: string; color: string };

/* ====== SKILL CATEGORIES ====== */
const FRONTEND: Badge[] = [
  { label: 'React', logo: 'react', color: '61DAFB' },
  { label: 'TypeScript', logo: 'typescript', color: '3178C6' },
  { label: 'Vite', logo: 'vite', color: '646CFF' },
  { label: 'Vue.js', logo: 'vuedotjs', color: '4FC08D' },
  { label: 'Chart.js', logo: 'chartdotjs', color: 'FF6384' },
  { label: 'CSS3', logo: 'css3', color: '1572B6' },
];

const BACKEND: Badge[] = [
  { label: 'Java', logo: 'coffeescript', color: '6E4A7E' },
  { label: 'Spring (Legacy/Boot)', logo: 'spring', color: '6DB33F' },
  { label: 'MyBatis', logo: 'apachemaven', color: 'C71A36' },
  { label: 'JWT', logo: 'jwt', color: '000000' },
];

const DATABASE: Badge[] = [{ label: 'MySQL', logo: 'mysql', color: '4479A1' }];

const INFRA: Badge[] = [
  { label: 'GitHub Actions', logo: 'githubactions', color: '2088FF' },
  { label: 'Vercel', logo: 'vercel', color: '000000' },
];

const EXTERNAL: Badge[] = [
  { label: 'OpenAI API', logo: 'openai', color: '412991' },
  { label: 'Postman', logo: 'postman', color: 'FF6C37' },
];

const DESIGN: Badge[] = [
  { label: 'Figma', logo: 'figma', color: 'F24E1E' },
  { label: 'Lucide', logo: 'lucide', color: '000000' },
];

const COMMUNICATION: Badge[] = [
  { label: 'Git / GitHub', logo: 'github', color: '181717' },
  { label: 'Notion', logo: 'notion', color: '000000' },
  { label: 'ZEP', logo: 'zep', color: '6E56CF' },
  { label: 'Discord', logo: 'discord', color: '5865F2' },
  { label: 'IntelliJ', logo: 'intellijidea', color: '000000' },
  { label: 'VS Code', logo: 'visualstudiocode', color: '007ACC' },
];

/* ====== PRESENTATION ====== */
function BadgeRow({ items }: { items: Badge[] }) {
  return (
    <div
      className="chip-row"
      style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}
    >
      {items.map((b) => (
        <img
          key={b.label}
          src={badgeUrl(b.label, b.logo, b.color)}
          alt={b.label}
          height={28}
          style={{ borderRadius: 8 }}
        />
      ))}
    </div>
  );
}

/* Email 복사 + 토스트 */
function EmailCopy() {
  const [copied, setCopied] = React.useState(false);
  const email = 'sju081902@gmail.com';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={handleCopy}
        title={email}
        style={{
          background: 'none',
          border: 0,
          cursor: 'pointer',
          color: 'inherit',
          font: 'inherit',
          padding: 0,
        }}
      >
        Email
      </button>

      {copied && (
        <span
          className="toast-below"
          aria-live="polite"
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: 13,
            color: 'var(--text)',
            padding: '4px 8px',
            borderRadius: 8,
            background: 'var(--card)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow)',
            whiteSpace: 'nowrap',
          }}
        >
          이메일이 복사되었습니다!
        </span>
      )}
    </div>
  );
}

export default function AboutMe() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title-right">ABOUT ME</h2>

        <div className="skills-card">
          <h3 className="skills-title">SKILL</h3>

          <div className="skill-row">
            <div className="skill-label">FRONT-END</div>
            <BadgeRow items={FRONTEND} />
          </div>

          <div className="skill-row">
            <div className="skill-label">BACK-END</div>
            <BadgeRow items={BACKEND} />
          </div>

          <div className="skill-row">
            <div className="skill-label">DATABASE</div>
            <BadgeRow items={DATABASE} />
          </div>

          <div className="skill-row">
            <div className="skill-label">INFRA & DEVOPS</div>
            <BadgeRow items={INFRA} />
          </div>

          <div className="skill-row">
            <div className="skill-label">EXTERNAL</div>
            <BadgeRow items={EXTERNAL} />
          </div>

          <div className="skill-row">
            <div className="skill-label">DESIGN</div>
            <BadgeRow items={DESIGN} />
          </div>

          <div className="skill-row">
            <div className="skill-label">COMMUNICATION</div>
            <BadgeRow items={COMMUNICATION} />
          </div>
        </div>

        {/* 링크 바 */}
        <div className="links-bar">
          <EmailCopy />
          <span className="bar">|</span>
          <a
            href="https://github.com/subeen1902"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span className="bar">|</span>
          <a
            href="https://lemon-trilby-db5.notion.site/Subeen-1d90bf15a6198025bfbcc41c84be8516?source=copy_link"
            target="_blank"
            rel="noreferrer"
          >
            Notion
          </a>
          <span className="bar">|</span>
          <a
            href="https://blog.naver.com/rlfhr237"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
        </div>
      </div>
    </section>
  );
}
