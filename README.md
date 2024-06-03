# modules-fe

storybook을 통한 컴포넌트 개발 프로젝트

## develop

```bash
- next.js 프레임워크 위에서 돌아가는 컴포넌트 개발
- storybook을 활용하여 컴포넌트 시각화
- npm을 이용하여 컴포넌트 패키지 배포
```

# branch 관리

main - legacy
StorybookNpm - storybook과 npm 배포가 이루어지는 브랜치

# git workflow 관리

- s3를 통한 storybook 배포는 pull-request가 닫혔을 때 작동 : s3.yml
- pull-request 검증 기능 : test.yml
- Npm package 배포는 version이 변경될 때 작동 : npm.yml
