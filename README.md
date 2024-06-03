# modules-fe

storybook을 통한 컴포넌트 개발 프로젝트

## develop

```bash
- storybook을 활용한 컴포넌트 개발
- storybook과 npm 배포
```

# branch 관리

feature/storybook의 storybook 배포와 기존 develop branch의 npm 배포를 통합

- 기존 develop branch, feature/storybook branch 삭제 예정
- 기존 Storybook/NPM branch => 새 develop branch

# git workflow 관리

- s3를 통한 storybook 배포는 pull-request가 닫혔을 때 작동 : s3.yml
- pull-request 검증 기능 : test.yml
- Npm package 배포는 version이 변경될 때 작동 : npm.yml
