# 🔥 SPARKUP CLIENT

## 🎯 Commit Convention

<details>
<summary>Show details</summary>

### ✨ 기능 개발
- ✨ **feat**: 새로운 기능 추가
- 🔧 **config**: 설정 파일 변경 (tailwind.config, next.config 등)
- 🎨 **ui**: UI 컴포넌트 추가/수정
- 🔗 **api**: API 연동 및 서비스 로직
- 📱 **page**: 새로운 페이지 추가/수정
- 🗃️ **data**: 데이터베이스, 상태관리 관련
- ⚡ **perf**: 성능 최적화

### 🐛 수정 & 관리
- 🐛 **fix**: 버그 수정
- ♻️ **refactor**: 코드 리팩토링 (기능 변경 없이)
- 🔥 **remove**: 파일/코드 삭제
- ✂️ **remname**: 파일명 변경
- 💄 **style**: 코드 스타일 변경 (포맷팅, 세미콜론 등)
- 🚨 **lint**: 린팅 오류 수정
- 🎨 **design**: CSS 디자인 설정 추가/수정

### 📝 문서 & 기타
- 📝 **docs**: 문서 수정 (README, 주석 등)
- 🎉 **init**: 프로젝트 초기 설정
- 🚀 **deploy**: 배포 관련  

</details>

  
<br>

## 🎯 Project Structure - Domain-Driven-Design


<details>
<summary>Show Details</summary>

```

┌─app/                    # Next.js App Router
│   ├── (auth)/            # 로그인/회원가입 페이지
│   ├── (main)/            # 메인 서비스 페이지
│   │   ├── ideas/         # 아이디어 관련 페이지
│   │   ├── projects/      # 프로젝트 관련 페이지
│   │   ├── my/           # 마이페이지 (내 아이디어, 내 프로젝트, 알림, 프로필)
│   │   └── search/       # 검색 페이지
│   └── layout.tsx        # 루트 레이아웃
├── components/            # 공통 컴포넌트
│   ├── ui/               # 기본 UI 컴포넌트 (Button, Card, Input 등)
│   ├── layout/           # 레이아웃 (Header, Sidebar, Footer)
│   └── common/           # 공통 비즈니스 컴포넌트 (SearchBar, Filter 등)
├── features/             # 도메인별 기능 (DDD)
│   ├── ideas/            # 아이디어 도메인
│   ├── projects/         # 프로젝트 도메인
│   ├── notifications/    # 알림 도메인
│   ├── user/            # 사용자 도메인
│   ├── auth/            # 인증 도메인
│   └── search/          # 검색 도메인
├── shared/              # 공유 유틸리티
│   ├── lib/             # 라이브러리 설정 (axios, react-query 등)
│   ├── hooks/           # 공통 훅
│   ├── utils/           # 유틸 함수
│   ├── constants/       # 상수 정의
│   └── types/           # 글로벌 타입
└── styles
```

</details>