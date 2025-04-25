# 29CM – TypeScript + Next.js App Router 기반  프로젝트

이 프로젝트는 29CM의 UI/UX를 참고해 `Next.js App Router`, `TypeScript`, `Context API` 등을 활용하여 **토스의 프론트엔드 개발 철학**에 맞춰 구현한 클론 프로젝트입니다.

> **“변경하기 쉬운 코드”, “재사용 가능한 모듈”, “예측 가능한 디렉토리 구조”**를 핵심 가치로 설정하였습니다.
> 

## 🎯 프로젝트 핵심 포인트

- **✅ TypeScript 기반 정적 타입 안전성 보장**
- **✅ 재사용성과 테스트 용이성을 고려한 컴포넌트 모듈화**
- **✅ Context API로 전역 상태 효율적 관리**
- **✅ App Router 기반의 명확한 폴더 설계**
- **✅ 무한 스크롤(Infinite Scroll) 구현**
- **✅ 페이지 새로고침 이슈 대응 및 데이터 복구 처리**

## 🎯 토스의 코드 기준을 반영한 설계

### 📌 변경하기 쉬운 코드

- 명확한 타입 선언을 통한 컴포넌트 입출력 정리
- 전역 상태를 `Context API`로 관리하고, 관련 로직은 훅으로 캡슐화
- `params`, `ref`, `observer` 등 React hook 사용 기준에 따라 엄격히 분리

### 📦 재사용 가능한 모듈 구조

- `Card`, `CardList`, `Header`, `Footer` 등 UI 컴포넌트는 SRP(단일 책임 원칙)에 따라 파일 분리
- `CardContext`, `CategoryContext`를 통해 상태별 분리 및 확장 고려

## 🎯 무한 스크롤 구현

- **IntersectionObserver API** 사용
- **초기 렌더 시 3개**, 이후 **스크롤 감지 시 3개씩 추가**
- **카드 데이터는 초기와 추가 데이터로 분리 관리** (`initialCards`, `additionalData`)
- 새로고침 시 카드 상태가 초기화되는 문제는 `addCards()` 재호출로 보완

## 🎯 기타 구현 요소

- `useParams()`의 비동기 언래핑(`React.use()`) 적용
- Next.js에서 권장하는 `Client Component` 선언 (`"use client"`)
- 동적 라우팅 `/order/[id]` 페이지에서 상태 초기화 대응 포함
- `count` 등 구매 수량 조절 UI 상태도 분리 적용
