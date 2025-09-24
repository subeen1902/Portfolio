import SectionTitle from '../components/SectionTitle.tsx';
import Card from '../components/Card.tsx';

const dev = [
  {
    title: 'KB IT’s Your Life 6기',
    sub: '풀스택 교육 수료 & 금융 서비스 구현',
  },
  { title: 'KB 해커톤', sub: 'KB국민은행 주관 금융 서비스 해커톤 우수상 수상' },
  { title: 'DX BOOT CAMP 4기', sub: '디지털 전환 교육 & 건강 관리 앱 기획' },
];
const finance = [
  {
    title: '한국은행 금요강좌',
    sub: '한국은행 주관 금융·경제 관련 정규 강의 수강',
  },
  {
    title: '삼성생명 금융연수 2기',
    sub: '금융 지식·실무 이해를 위한 연수 참여',
  },
  { title: 'DB 대학생 기업경영캠프', sub: '모의투자 프로그램 1등 달성' },
  {
    title: 'KRX 퓨처스타 4기',
    sub: '파생상품 관련 스터디 및 논문 리뷰·토론 활동',
  },
];

export default function Experience() {
  return (
    <section className="section-title-right" id="experience">
      <div className="container">
        <h2>
          <SectionTitle>EXPERIENCE</SectionTitle>
        </h2>

        <h3 className="section-title" style={{ fontSize: '22px' }}>
          Development
        </h3>
        <div className="cards-grid" style={{ textAlign: 'center' }}>
          {dev.map((e, i) => (
            <Card key={i}>
              <h3>{e.title}</h3>
              <p className="meta">{e.sub}</p>
            </Card>
          ))}
        </div>

        <h3
          className="section-title"
          style={{ fontSize: '22px', marginTop: 'var(--g4)' }}
        >
          Finance
        </h3>
        <div className="cards-grid" style={{ textAlign: 'center' }}>
          {finance.map((e, i) => (
            <Card key={i}>
              <h3>{e.title}</h3>
              <p className="meta">{e.sub}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
