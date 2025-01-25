# React + TypeScript 테스트 환경 및 테스트코드 구현

테스트도구를 테스트 하기위한 레포

## 🛠 기술 스택

- React + TypeScript
- Vitest + React Testing Library (단위/통합 테스트)
- Storybook (UI 개발 및 문서화)
- Loki (시각적 회귀 테스트)

## 📦 설치 및 설정

1. 프로젝트 생성
```bash
npm create vite@latest . --template react-ts
npm install
```

2. 테스트 도구 설치
```bash
# 단위/통합 테스트 도구
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @vitejs/plugin-react

# Storybook
npx storybook@latest init

# 시각적 회귀 테스트
npm install -D loki
```

3. Docker/Colima 설정 (시각적 회귀 테스트용)
```bash
brew install colima
colima start
```

## 🚀 실행 방법

```bash
# 개발 서버 실행
npm run dev

# 단위 테스트 실행 (watch 모드)
npm test

# Storybook 실행
npm run storybook

# 시각적 회귀 테스트 (Storybook 실행 중이어야 함)
npm run test:visual
```

## 💡 테스트 도구별 사용법

### Vitest + React Testing Library
```typescript
// Button.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })
})
```

### Storybook
```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
}
```

### 실행화면

![image](https://github.com/user-attachments/assets/864c77f0-d3a0-4347-9ba1-f80dd4b62440)


## 📊 프로젝트 적용 분석

### 장점

1. 종합적인 테스트 커버리지
   - 기능적 테스트 (Vitest)
   - UI 컴포넌트 문서화 (Storybook)
   - 시각적 일관성 검증 (Loki)

2. 개발 생산성 향상
   - 실시간 테스트 피드백
   - 컴포넌트 독립적 개발 가능
   - 자동화된 UI 검증

3. 팀 협업 개선
   - 문서화 자동화
   - UI 변경사항 시각적 추적
   - 일관된 테스트 환경

### 단점

1. 초기 설정 복잡성
   - 여러 도구의 설정 필요
   - Docker/Colima 환경 구축 필요
   - 학습 곡선이 있음

2. 리소스 사용
   - 여러 프로세스 동시 실행 필요
   - 메모리 사용량 증가 (진짜 엄청남)
   - 빌드 시간 증가 (진짜 이것도 미침)

3. 관리 포인트 증가
   - 여러 설정 파일 관리
   - 테스트 코드 유지보수
   - 불필요한 테스트 케이스 발생 가능

## 🎯 사용 방식

1. TDD 접근법 활용
   - 실패하는 테스트 작성
   - 테스트 통과하는 코드 구현
   - 리팩토링 및 최적화

2. 선별적 테스트 적용
   - 핵심 컴포넌트 위주로 시각적 회귀 테스트
   - 중요 기능에 대한 단위 테스트 집중
   - 필요한 컴포넌트만 스토리북 문서화

3. CI/CD 통합
   - 자동화된 테스트 실행
   - PR 시 시각적 회귀 테스트
   - 배포 전 전체 테스트 실행

## 🤔 결론

구축은 쉽고 storybook으로 ui나 페이지를 만들어두고 Chromatic(유료서비스)나 깃허브페이지로 배포하게 되면
링크 공유로 모두가 페이지를 미리볼수있고 vitest를 통해 컴포넌트가 바뀌는걸 감지해
실시간으로 테스트를 할수있음 그치만 플젝이 진짜 무거워질것같음 CI/CD로 최적화 필요할듯

