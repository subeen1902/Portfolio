import profile from '@/assets/img/profile.png';

export default function Home() {
  return (
    <section className="section">
      <div
        className="container"
        style={{
          display: 'grid',
          gap: 'var(--g4)',
          gridTemplateColumns: '1.2fr 1fr',
          alignItems: 'center',
        }}
      >
        <img
          src={profile}
          alt="profile"
          style={{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div>
          <h1
            style={{
              fontSize: 'var(--h1)',
              fontWeight: 900,
              lineHeight: 1.1,
              textAlign: 'right',
              marginBottom: 'var(--g5)',
            }}
          >
            도전하는 개발자 <br />
            <b>주수빈</b>입니다.
          </h1>
          <p
            style={{
              marginTop: 'var(--g3)',
              fontSize: '18px',
              color: 'var(--muted)',
              textAlign: 'right',
            }}
          >
            저는 밝고 긍정적인 에너지로 팀에 <b>활력</b>을 불어넣고, <br />한 번
            시작한 일은 끝까지 <b>책임</b>지고 <br />
            <b>최선</b>을 다하는 <b>끈기</b>를 가진 개발자입니다. <br />
            <br />
            몰입과 도전을 즐기며, 반드시 <b>결과</b>를 만들어내는 힘으로
            <br /> <b>성장</b>해 나가고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
