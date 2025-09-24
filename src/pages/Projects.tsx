import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import Modal from '@/components/Modal';
import ProjectDetail from '@/components/projects/ProjectDetail';
import type {
  ProjectCard,
  ProjectDetailData,
  ProjectId,
} from '@/types/project';

/* 커버 */
import berryCover from '@/assets/img/berrypick/berrypick_cover.png';
import bunnyCover from '@/assets/img/bunny/bunny_cover.png';
import ggujunCover from '@/assets/img/ggujun/ggujun_cover.png';
import nbtripCover from '@/assets/img/nbbangtrip/nbbang_cover.png';
import portfolioLight from '@/assets/img/portfolio_light.png';
import portfolioDark from '@/assets/img/portfolio_dark.png';

import nbbang1 from '@/assets/img/nbbangtrip/nbbang1.png';
import nbbang2 from '@/assets/img/nbbangtrip/nbbang2.png';
import nbbang3 from '@/assets/img/nbbangtrip/nbbang3.png';
import nbbang4 from '@/assets/img/nbbangtrip/nbbang4.png';
import nbbang5 from '@/assets/img/nbbangtrip/nbbang5.png';
import nbbang6 from '@/assets/img/nbbangtrip/nbbang6.png';

import berrypick1 from '@/assets/img/berrypick/berrypick1.png';
import berrypick2 from '@/assets/img/berrypick/berrypick2.png';
import berrypick3 from '@/assets/img/berrypick/berrypick3.png';
import berrypick4 from '@/assets/img/berrypick/berrypick4.png';
import berrypick5 from '@/assets/img/berrypick/berrypick5.png';
import berrypick6 from '@/assets/img/berrypick/berrypick6.png';

import bunny1 from '@/assets/img/bunny/bunny1.png';
import bunny2 from '@/assets/img/bunny/bunny2.png';
import bunny3 from '@/assets/img/bunny/bunny3.png';

import g1 from '@/assets/img/ggujun/ggujun1.png';
import g2 from '@/assets/img/ggujun/ggujun2.png';
import g3 from '@/assets/img/ggujun/ggujun3.png';

function useTheme(): 'light' | 'dark' {
  const get = () =>
    (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') ||
    'light';
  const [theme, setTheme] = React.useState<'light' | 'dark'>(get());
  React.useEffect(() => {
    const m = new MutationObserver(() => setTheme(get()));
    m.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => m.disconnect();
  }, []);
  return theme;
}

/* 상세 데이터 (타입 안전) */
const PD: Record<ProjectId, ProjectDetailData> = {
  nbtrip: {
    id: 'nbtrip',
    title: 'N빵트립',
    cover: nbtripCover,
    oneLiner: '복잡한 여행 경비 정산을 원클릭으로 해결해주는 웹앱 서비스',
    people: '9인 (팀 프로젝트)',
    period: '2025.07.09 ~ 2025.08.21 (7주)',
    features: [
      '여행별 정산 그룹 생성 및 참여',
      'QR 결제 및 지출 내역 수동 등록 지원',
      '상계 계산 기반 원클릭 정산',
      'JWT 로그인/회원 관리, FCM 알림',
    ],
    contrib: [
      '백엔드 JWT 기반 인증·인가, MyBatis 연동',
      '회원/계좌 관리, 마이페이지 UI 구현',
      '팀 내 협업 문서화 담당',
    ],
    techChips: [
      'Vue',
      'Chart.js',
      'Axios',
      'Spring Legacy',
      'MyBatis',
      'MySQL',
      'OpenAI API',
      'FCM Token',
      'Notion',
      'Discord',
      'Git / GitHub',
    ],
    links: [
      { href: 'https://github.com/subeen1902/Team---nbtrip', text: 'GitHub' },
    ],
    screenshots: [nbbang1, nbbang2, nbbang3, nbbang4, nbbang5, nbbang6],
  },
  budget: {
    id: 'budget',
    title: '잔액을 지켜토',
    cover: bunnyCover,
    oneLiner: '직관적이고 간편한 가계부 웹 사이트',
    people: '6인 (팀 프로젝트)',
    period: '2025.04.07 ~ 2025.04.11 (5일)',
    features: [
      '월별 수입·지출 시각화',
      '카테고리별 지출 분석 차트',
      '거래내역 조회/추가/수정, 프로필 수정',
      '한도 초과 시 시각적 경고',
    ],
    contrib: [
      'chart.js 기반 수입/지출 차트 계산',
      '거래 내역 조회/등록 UI 및 상태 관리',
      '프론트엔드 전체 구조 통합',
    ],
    techChips: [
      'Vue',
      'JavaScript',
      'CSS',
      'Vite',
      'Axios',
      'Chart.js',
      'Notion',
      'Git / GitHub',
      'Figma',
    ],
    links: [
      {
        href: 'https://github.com/subeen1902/Team---BudgetBook',
        text: 'GitHub',
      },
    ],
    screenshots: [bunny1, bunny2, bunny3],
    screenshotLayout: 'stack',
  },
  ggujun: {
    id: 'ggujun',
    title: '꾸준',
    cover: ggujunCover,
    oneLiner: '할 일과 습관을 간단히 기록·관리하는 개인 웹앱',
    people: '개인 프로젝트',
    period: '2025.04.01 ~ 2025.04.23 (4주)',
    features: [
      'ToDo 리스트 작성·완료 체크',
      '습관 달성 현황 관리',
      '태그 기반 할 일 분류',
      'LocalStorage 저장',
    ],
    contrib: ['기획·UI 설계·프론트엔드 개발 100%'],
    techChips: [
      'Vue',
      'JavaScript',
      'CSS',
      'Vite',
      'LocalStorage',
      'Axios',
      'Chart.js',
      'Figma',
      'Git / GitHub',
    ],
    links: [
      { href: 'https://github.com/subeen1902/ggujun-todo', text: 'GitHub' },
    ],
    screenshots: [g1, g2, g3],
    screenshotLayout: 'stack',
  },
  berry: {
    id: 'berry',
    title: '베리셀렉트',
    cover: berryCover,
    oneLiner: '카드/멤버십/기프티콘 통합 관리 및 혜택 제공',
    people: '4인 (팀 프로젝트)',
    period: '2025.08.25 ~ 2025.09.12 (19일)',
    features: [
      '보유 카드/멤버십/기프티콘 CRUD',
      '가로 캐러셀 카드 목록 → 상세(바코드) 화면',
      'REST API 기반 서비스 구조',
    ],
    contrib: [
      '카드/멤버십 UI, 캐러셀→상세 라우팅',
      'Wallet API/DB 스키마 일부',
      'API 명세 및 협업 문서화',
    ],
    techChips: [
      'React',
      'TypeScript',
      'Vite',
      'Axios',
      'Spring Boot',
      'MySQL',
      'Chart.js',
      'CSS',
      'JWT',
      'Java',
      'Figma',
      'KAKAO API',
      'OpenAI API',
      'Notion',
      'ZEP',
      'Git / GitHub',
    ],
    links: [{ href: 'https://github.com/BerryPing', text: 'GitHub' }],
    screenshots: [
      berrypick1,
      berrypick2,
      berrypick3,
      berrypick4,
      berrypick5,
      berrypick6,
    ],
  },
  portfolio: {
    id: 'portfolio',
    title: '포트폴리오 웹사이트',
    cover: portfolioLight,
    coverDark: portfolioDark,
    oneLiner: '자기소개·프로젝트·기술 스택을 담은 개인 포트폴리오',
    people: '개인 프로젝트',
    period: '2025.09.23 (1일)',
    features: [
      '반응형 레이아웃',
      '다크/라이트 모드 지원',
      'GitHub/Notion/Blog 연동',
    ],
    contrib: ['기획·UI 설계·프론트엔드 개발 100%', 'Vercel 배포'],
    techChips: [
      'React',
      'TypeScript',
      'Vite',
      'CSS',
      'Vercel',
      'Figma',
      'Git / GitHub',
    ],
    links: [
      { href: 'https://github.com/subeen1902/portfolio', text: 'GitHub' },
    ],
    screenshots: [],
  },
};

/* 카드 데이터 (팀/개인 구분) */
const cards: ProjectCard[] = [
  {
    id: 'nbtrip',
    title: 'N빵트립',
    img: nbtripCover,
    one: '여행 공동경비 자동 정산',
    tag: ['9인', '팀 프로젝트', '웹앱'],
    category: 'team',
  },
  {
    id: 'budget',
    title: '잔액을 지켜토',
    img: bunnyCover,
    one: '결제수단·예산 한도 관리',
    tag: ['6인', '팀 프로젝트', '반응형'],
    category: 'team',
  },
  {
    id: 'berry',
    title: '베리셀렉트',
    img: berryCover,
    one: '전자지갑(카드/멤버십/기프티콘)',
    tag: ['4인', '팀 프로젝트', '웹앱'],
    category: 'team',
  },
  {
    id: 'ggujun',
    title: '꾸준',
    img: ggujunCover,
    one: 'ToDo & Habit Tracker',
    tag: '개인 프로젝트',
    category: 'personal',
  },
  {
    id: 'portfolio',
    title: '포트폴리오',
    img: portfolioLight,
    one: '자기소개 & 기록',
    tag: ['개인 프로젝트', '반응형', '다크 모드'],
    category: 'personal',
  },
];

export default function Projects() {
  const [open, setOpen] = React.useState<ProjectId | null>(null);
  const theme = useTheme();

  const renderCards = (list: ProjectCard[]) => (
    <div className="cards-grid">
      {list.map((c) => {
        const imgSrc =
          c.id === 'portfolio'
            ? theme === 'dark'
              ? portfolioDark
              : portfolioLight
            : c.img;

        return (
          <Card
            key={c.id}
            onClick={() => setOpen(c.id)}
            className="project-card"
          >
            <div className="project-thumb">
              <img src={imgSrc} alt={`${c.title} cover`} className="ss-img" />
              <div className="project-overlay">
                <div className="project-title">{c.title}</div>
                {Array.isArray(c.tag) ? (
                  <div className="project-tags">
                    {c.tag.map((t, i) => (
                      <span key={i} className="project-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : (
                  c.tag && <div className="project-tag">{c.tag}</div>
                )}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );

  const currentCardTag = open
    ? cards.find((c) => c.id === open)?.tag
    : undefined;

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title-right">
          <SectionTitle>PROJECTS</SectionTitle>
        </h2>

        <div className="section-title-right">
          <h3 className="sub-title">팀 프로젝트</h3>
        </div>
        {renderCards(cards.filter((c) => c.category === 'team'))}

        <div className="section-title-right">
          <h3 className="sub-title" style={{ marginTop: 'var(--g4)' }}>
            개인 프로젝트
          </h3>
        </div>
        {renderCards(cards.filter((c) => c.category === 'personal'))}

        <Modal open={open !== null} onClose={() => setOpen(null)}>
          {open && <ProjectDetail data={PD[open]} cardTag={currentCardTag} />}
        </Modal>
      </div>
    </section>
  );
}
