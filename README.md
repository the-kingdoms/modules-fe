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

# 부모 프로젝트에서 우리팀 디자인을 사용하는 방법
1. yarn add lodash (tailwind.config파일 merge를 위한 라이브러리 설치)
2. 아래 예시와 같은 코드를 부모 프로젝트의 tailwind.config 파일에 입력
   
```
import { merge } from "lodash";
import tailwindCustomConfig from "./tailwind_custom.config";

const config: Config = merge(baseConfig, tailwindCustomConfig);

export default config;
```
