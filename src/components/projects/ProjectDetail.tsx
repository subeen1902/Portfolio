import * as React from 'react';
import type { ProjectDetailData } from '../../types/project';
import { FaGithub, FaLink } from 'react-icons/fa';
import { SiNotion, SiDiscord } from 'react-icons/si';

/** 현재 테마 감지 (html[data-theme]) */
function useTheme(): 'light' | 'dark' {
  const get = () =>
    document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'dark'
      : 'light';
  const [theme, setTheme] = React.useState<'light' | 'dark'>(get());
  React.useEffect(() => {
    const target = document.documentElement;
    const obs = new MutationObserver(() => setTheme(get()));
    obs.observe(target, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);
  return theme;
}

/** 사용 기술 → 배지 맵핑 */
const BADGE_MAP: Record<string, { logo: string; color: string }> = {
  React: { logo: 'react', color: '61DAFB' },
  TypeScript: { logo: 'typescript', color: '3178C6' },
  JavaScript: { logo: 'javascript', color: 'F7DF1E' },
  'Next.js': { logo: 'nextdotjs', color: '000000' },
  Vue: { logo: 'vuedotjs', color: '4FC08D' },
  Vite: { logo: 'vite', color: '646CFF' },
  'React Query': { logo: 'reactquery', color: 'FF4154' },
  'React-Hook-Form': { logo: 'reacthookform', color: 'EC5990' },
  Sass: { logo: 'sass', color: 'CC6699' },
  CSS: { logo: 'css3', color: '1572B6' },
  'Chart.js': { logo: 'chartdotjs', color: 'FF6384' },
  Axios: { logo: 'axios', color: '5A29E4' },
  Java: { logo: 'openjdk', color: '007396' },
  'Spring Boot': { logo: 'springboot', color: '6DB33F' },
  Spring: { logo: 'spring', color: '6DB33F' },
  'Spring Legacy': { logo: 'spring', color: '6DB33F' },
  MyBatis: { logo: 'apachemaven', color: 'C71A36' },
  MySQL: { logo: 'mysql', color: '4479A1' },
  'Node.js': { logo: 'nodedotjs', color: '339933' },
  Figma: { logo: 'figma', color: 'F24E1E' },
  Notion: { logo: 'notion', color: '000000' },
  Discord: { logo: 'discord', color: '5865F2' },
  Git: { logo: 'git', color: 'F05032' },
  'Git / GitHub': { logo: 'github', color: '181717' },
  GitHub: { logo: 'github', color: '181717' },
  Vercel: { logo: 'vercel', color: '000000' },
  'OpenAI API': { logo: 'openai', color: '412991' },
  'FCM Token': { logo: 'firebase', color: 'FFCA28' },
  LocalStorage: { logo: 'googlechrome', color: '4285F4' },
  JWT: { logo: 'jsonwebtokens', color: '000000' },
  'KAKAO API': { logo: 'kakaotalk', color: 'FFCD00' },
  ZEP: { logo: 'zepeto', color: '9B59B6' },
};

/** shields.io 뱃지 URL */
function badgeUrl(label: string) {
  const meta = BADGE_MAP[label] ?? { logo: 'circle', color: '555555' };
  const encoded = encodeURIComponent(label);
  return `https://img.shields.io/badge/${encoded}-${meta.color}?style=for-the-badge&logo=${meta.logo}&logoColor=white`;
}

function TechBadges({ items }: { items: string[] }) {
  if (!items?.length) return null;
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center',
      }}
    >
      {items.map((t) => (
        <img
          key={t}
          src={badgeUrl(t)}
          alt={t}
          height={26}
          style={{ borderRadius: 8 }}
        />
      ))}
    </div>
  );
}

/** 링크 브랜드 맵핑 */
const LINK_BRANDS: Record<
  'github' | 'notion' | 'zep' | 'discord' | 'default',
  { color: string; Icon: React.ComponentType<{ size?: number }> }
> = {
  github: { color: '#24292E', Icon: FaGithub },
  notion: { color: '#000000', Icon: SiNotion },
  zep: { color: '#FDBF00', Icon: FaLink },
  discord: { color: '#5865F2', Icon: SiDiscord },
  default: { color: '#64748B', Icon: FaLink },
};

function getLinkBrand(text: string, href: string): keyof typeof LINK_BRANDS {
  const label = (text || '').toLowerCase();
  const host = (() => {
    try {
      return new URL(href).hostname.toLowerCase();
    } catch {
      return '';
    }
  })();
  if (label.includes('github') || host.includes('github.com')) return 'github';
  if (label.includes('notion') || host.includes('notion.so')) return 'notion';
  if (label.includes('zep') || host.includes('zep.us')) return 'zep';
  if (label.includes('discord') || host.includes('discord.com'))
    return 'discord';
  return 'default';
}

/** people에서 태그 폴백 유추 */
function deriveTag(people?: string): string | null {
  const p = (people || '').trim();
  if (!p) return null;
  if (/개인/.test(p)) return '개인';
  const m = p.match(/(\d+)\s*인/);
  if (m) return `${m[1]}인 팀`;
  return p;
}

export default function ProjectDetail({
  data,
  cardTag,
}: {
  data: ProjectDetailData;
  /** Projects 카드에서 온 태그 */
  cardTag?: string | string[];
}) {
  const theme = useTheme();
  const coverSrc =
    theme === 'dark' && data.coverDark ? data.coverDark : data.cover;

  // 카드 태그 우선 → 없으면 people에서 유추
  const tagList: string[] = React.useMemo(() => {
    if (Array.isArray(cardTag)) return cardTag;
    if (typeof cardTag === 'string' && cardTag.trim()) return [cardTag];
    const fb = deriveTag(data.people);
    return fb ? [fb] : [];
  }, [cardTag, data.people]);

  return (
    <div>
      <h3 className="pd-title">{data.title}</h3>

      {/* 제목 아래 태그(Projectså 사용) */}
      {tagList.length > 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 6,
            marginBottom: 18,
          }}
        >
          <div className="project-tags">
            {tagList.map((t, i) => (
              <span key={i} className="project-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      <img
        src={coverSrc}
        alt={`${data.title} cover`}
        className="ss-img"
        style={{
          maxHeight: 420,
          width: '100%',
          objectFit: 'cover',
          borderRadius: 16,
        }}
      />

      {/* 본문 */}
      <div className="modal-body" style={{ textAlign: 'center' }}>
        {data.oneLiner && <p className="pd-sub">{data.oneLiner}</p>}

        <h4 className="pd-h">개발</h4>

        <div className="kv" style={{ justifyContent: 'center' }}>
          {data.people && (
            <div>
              <b>인원</b> {data.people}
            </div>
          )}
          {data.period && (
            <div>
              <b>기간</b> {data.period}
            </div>
          )}
        </div>

        {data.features?.length ? (
          <>
            <h4 className="pd-h">주요 기능 및 특징</h4>
            <ul
              className="ul"
              style={{ display: 'inline-block', textAlign: 'left' }}
            >
              {data.features.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </>
        ) : null}

        {data.contrib?.length ? (
          <>
            <h4 className="pd-h">작업 기여도</h4>
            <ul
              className="ul"
              style={{ display: 'inline-block', textAlign: 'left' }}
            >
              {data.contrib.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </>
        ) : null}

        {/* 기술 스택 */}
        {data.techChips?.length ? (
          <>
            <h4 className="pd-h">사용 기술 및 언어</h4>
            <TechBadges items={data.techChips} />
          </>
        ) : data.tech ? (
          <>
            <h4 className="pd-h">사용 기술 및 언어</h4>
            <p>{data.tech}</p>
          </>
        ) : null}

        {/* 링크: 브랜드 칩 */}
        {data.links?.length ? (
          <>
            <h4 className="pd-h">링크</h4>
            <div className="links" style={{ justifyContent: 'center' }}>
              {data.links.map((l) => {
                const brand = getLinkBrand(l.text, l.href);
                const { color, Icon } = LINK_BRANDS[brand];
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-chip"
                    style={{
                      backgroundColor: color,
                      borderColor: color,
                      color: '#fff',
                    }}
                    aria-label={l.text}
                    title={l.text}
                  >
                    <Icon size={18} />
                    <span>{l.text}</span>
                  </a>
                );
              })}
            </div>
          </>
        ) : null}

        {/* 스크린샷 */}
        {data.screenshots?.length ? (
          <>
            <h4 className="pd-h">이미지</h4>
            <div
              className={
                data.screenshotLayout === 'stack' ? 'ss-stack' : 'ss-grid'
              }
            >
              {(data.screenshots ?? [])
                .map((s) => (typeof s === 'string' ? { src: s } : s))
                .map((s) => (
                  <img
                    key={s.src}
                    className="ss-img"
                    src={s.src}
                    alt="screenshot"
                    style={{
                      width: s.width ?? '100%',
                      height: s.height ?? 'auto',
                    }}
                  />
                ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
