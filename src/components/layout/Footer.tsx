export default function Footer() {
  return (
    <footer className="footer_area">
      <div className="footer_content footer_top">
        <p className="service_number">고객센터 1644-0560</p>
        <div className="service_hours">
          운영시간 : 평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00 제외)
        </div>
      </div>

      <div className="footer_content footer_bottom">
        <div className="btn_box">
          <a href="#none" className="btn">
            FAQ
          </a>
          <a href="#none" className="btn">
            1:1 문의
          </a>
        </div>

        <div className="sns_box">
          {/* 아이콘은 실제 프로젝트에선 컴포넌트 또는 SVG 모듈로 분리 가능 */}
          {['instagram', 'youtube', 'blog'].map((sns, index) => (
            <div className="sns_icon" key={index}>
              <span className="sr-only">{sns}</span>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="15" fill="#000" />
                <path
                  fill="#E4E4E4"
                  d="M15 9.5c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5-5.5-2.462-5.5-5.5 2.462-5.5 5.5-5.5z"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
