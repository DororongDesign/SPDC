# SPDC 2025 - Seoul Product Designer Conference

서울 제품 디자이너 컨퍼런스 2025의 반응형 랜딩 페이지입니다.

## 🎯 프로젝트 개요

SPDC 2025는 대한민국을 포함한 아시아 전역의 제품 디자이너들을 위한 연례 컨퍼런스입니다. 이 웹사이트는 컨퍼런스 정보, 연사 소개, 프로그램 일정, 티켓 구매 등의 기능을 제공하는 반응형 랜딩 페이지입니다.

## ✨ 주요 기능

### 📱 반응형 디자인
- **데스크톱 (1200px+)**: 전체 레이아웃 표시
- **태블릿 (768px-1199px)**: 적응형 그리드 레이아웃
- **모바일 (480px-767px)**: 단일 컬럼 레이아웃
- **소형 모바일 (480px 미만)**: 최적화된 모바일 경험

### 🎨 디자인 특징
- **모던한 UI/UX**: 깔끔하고 직관적인 인터페이스
- **부드러운 애니메이션**: 스크롤 기반 애니메이션과 호버 효과
- **접근성 고려**: 키보드 네비게이션 및 스크린 리더 지원
- **성능 최적화**: 이미지 지연 로딩 및 스크롤 이벤트 최적화

### 🔧 기술적 기능
- **FAQ 아코디언**: 클릭으로 펼치기/접기 가능
- **부드러운 스크롤**: 네비게이션 링크 클릭 시 부드러운 이동
- **모바일 메뉴**: 햄버거 메뉴로 모바일 네비게이션
- **스크롤 애니메이션**: 요소들이 화면에 나타날 때 애니메이션
- **터치 제스처**: 모바일에서 스와이프 제스처 지원

## 📁 파일 구조

```
spdc-2025/
├── index.html          # 메인 HTML 파일
├── styles.css          # 반응형 CSS 스타일
├── script.js           # JavaScript 기능
├── README.md           # 프로젝트 설명서
└── assets/             # 이미지 및 리소스 폴더
    ├── spdc-logo.svg
    ├── spdc-logo-white.svg
    ├── hero-image.jpg
    ├── speaker-1.jpg
    ├── speaker-2.jpg
    ├── speaker-3.jpg
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    ├── gallery-4.jpg
    ├── gallery-5.jpg
    ├── gallery-6.jpg
    ├── gallery-7.jpg
    ├── sponsor-1.svg
    ├── sponsor-2.svg
    ├── sponsor-3.svg
    ├── sponsor-4.svg
    ├── sponsor-5.svg
    └── sponsor-6.svg
```

## 🚀 시작하기

### 1. 프로젝트 다운로드
```bash
git clone [repository-url]
cd spdc-2025
```

### 2. 로컬 서버 실행
```bash
# Python 3 사용
python -m http.server 8000

# 또는 Node.js 사용
npx serve .

# 또는 PHP 사용
php -S localhost:8000
```

### 3. 브라우저에서 확인
```
http://localhost:8000
```

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary Blue**: `#2388ff` - 주요 액션 버튼 및 강조
- **Secondary Purple**: `#4a3aff` - 보조 색상
- **Text Dark**: `#1c1c1c` - 주요 텍스트
- **Text Gray**: `#636366` - 보조 텍스트
- **Background Light**: `#f0f1f6` - 배경색
- **Background Dark**: `#090909` - 다크 섹션 배경

### 타이포그래피
- **Primary Font**: Pretendard Variable (한글 최적화)
- **Display Font**: DM Serif Display (제목용)

### 반응형 브레이크포인트
- **Mobile**: 480px
- **Tablet**: 768px
- **Desktop**: 1024px
- **Large**: 1200px

## 📱 반응형 레이아웃

### 데스크톱 (1200px+)
- 2열 그리드 레이아웃
- 전체 네비게이션 메뉴 표시
- 큰 폰트 사이즈와 여백

### 태블릿 (768px-1199px)
- 적응형 그리드
- 메뉴 아이템 축소
- 중간 폰트 사이즈

### 모바일 (480px-767px)
- 단일 컬럼 레이아웃
- 햄버거 메뉴
- 작은 폰트 사이즈

### 소형 모바일 (480px 미만)
- 최적화된 터치 인터페이스
- 최소 여백과 폰트
- 단순화된 레이아웃

## 🔧 커스터마이징

### 색상 변경
`styles.css`의 CSS 변수를 수정하여 색상을 변경할 수 있습니다:

```css
:root {
    --primary-color: #2388ff;
    --secondary-color: #4a3aff;
    --text-dark: #1c1c1c;
    /* ... */
}
```

### 폰트 변경
Google Fonts에서 다른 폰트를 선택하고 `index.html`의 링크를 수정하세요.

### 이미지 교체
`assets/` 폴더의 이미지 파일들을 원하는 이미지로 교체하세요.

## 🌟 주요 섹션

### 1. Hero 섹션
- 메인 타이틀과 CTA 버튼
- 얼리버드 배지
- 컨퍼런스 이미지와 프로그레스 바

### 2. About 섹션
- 컨퍼런스 소개
- 날짜 및 장소 정보

### 3. Keynote Speakers
- 연사 프로필 카드
- 호버 애니메이션

### 4. Programs
- 2일간 프로그램 일정
- 세션별 상세 정보

### 5. Tickets
- 3가지 티켓 옵션
- 가격 및 혜택 비교

### 6. FAQ
- 아코디언 형태의 질문/답변
- 클릭으로 펼치기/접기

## 🔍 접근성

- **키보드 네비게이션**: Tab 키로 모든 요소 접근 가능
- **스크린 리더**: 적절한 ARIA 라벨과 시맨틱 HTML
- **색상 대비**: WCAG 가이드라인 준수
- **포커스 표시**: 키보드 사용자를 위한 명확한 포커스 표시

## 📈 성능 최적화

- **이미지 지연 로딩**: 뷰포트에 들어올 때만 이미지 로드
- **스크롤 이벤트 쓰로틀링**: 성능 최적화
- **CSS 애니메이션**: GPU 가속 활용
- **폰트 최적화**: Google Fonts preconnect 사용

## 🛠️ 브라우저 지원

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **모바일 브라우저**: iOS Safari 14+, Chrome Mobile 90+

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요.

---

**SPDC 2025** - 디자인의 미래를 논하다 🎨
