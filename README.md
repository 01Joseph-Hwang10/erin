# Erin

이전에 여자친구에게 HTML로 간단한 애니메이션 및 유저 상호작용을 포함한 랜딩 페이지 형식의 편지를 보내준 적이 있다.


지금 생각해보면 내가 매우 괴짜이지만, 의외로 여자친구의 반응이 좋았다. 
다음에도 이런 거 만들어달라는 여자친구의 피드백에 놀랐던 기억이 난다.


이에 이러한 인터렉티브 메시지를 쉽게 만들 수 있는 프로그램을 만들어보면 어떨까 하는 생각으로 이 프로젝트를 시작하게 되었다.


## 프로젝트의 경과

되게 야심차게 시작한 프로젝트이지만, 으레 대부분의 사이드 프로젝트가 그렇듯 금세 개발이 지쳐 프로젝트 개발을 멈추었다.


핑계를 대자면, 처음에 기획한 것이 너무 방대했다. 본 앱에는 원래 

1. 인터렉티브 편지지 에디터: 인스타그램 스토리 에디터를 생각하면 쉽다. 실제로 이 기능을 본따 만들고자 하였다.
2. SNS 기능: 카카오톡의 기능 위에 편지지를 주고 받을 수 있는 기능을 추가하려 하였다.
3. 데스크톱 웹 앱 + 모바일 앱 및 상호 호환: 모바일에서 작성한 편지지를 데스크탑에서도 열람할 수 있고, 데스크탑에서 작성한 편지지를 모바일에서도 열람할 수 있도록 하려 하였다.


이러한, 지금 보면 한 명이서 개발하기에는 말도 안되는 분량을 가지고 있었다. 하지만 그 당시에는 여자친구의 칭찬이 엄청난 동기부여제 였기에, 이렇게 야심차게 시작하게 되었다. (그리고 말로는 위에서 언급했듯 금세 지쳐서 프로젝트를 중단했다😅)

## Features

그래서 위의 기능 중에 어느 것이 구현되었느냐 하면, 1번, 인터렉티브 편지지 기능의 일부가 구현되었다.


일부라 함은 아래를 포함한다.

1. 텍스트 요소
   1. 애니메이션
   2. 여러 폰트
   3. 텍스트 정렬
   4. 색상 조절
2. 스티커 요소
   1. 애니메이션
3. 위 요소들의:
   1. 추가 기능
   2. 크기, 위치, 각도 조절 기능
   3. 삭제 기능

## Showcase

<img src="./examples/erin-showcase.gif" height="500" />


## Tech Stacks

- React Native
  - Expo
  - React Navigation
  - React Native Reanimated
- Redux

## Getting Started

```bash
# Install dependencies using package-lock.json
npm ci

# Start application server (Android)
npm run android

# Start application server (iOS)
cd ios && pod install && cd ..
npm run ios
```

## Troubleshooting

`npm run ios` 커맨드 실행시 아래와 같은 오류가 발생하는 경우:

```log
** BUILD FAILED **

The following build commands failed: CompileC /Users/muhammadaqeel/Library/Developer/Xcode/DerivedData/RICHLoad-grdecqvhxadocbfxxrsfifmleiew/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/Yoga.build/Objects-normal/arm64/Yoga.o /Users/muhammadaqeel/Desktop/RICHLoad-main/node_modules/react-native/ReactCommon/yoga/yoga/Yoga.cpp normal arm64 c++ com.apple.compilers.llvm.clang.1_0.compiler (in target 'Yoga' from project 'Pods') (1 failure)
```

아래 StackOverflow 문서를 참조하면 에러를 해결할 수 있습니다.

> [CompileC Yoga.cpp normal arm64 c++ com.apple.compilers.llvm.clang.1_0.compiler](https://stackoverflow.com/questions/75945734/compilec-yoga-cpp-normal-arm64-c-com-apple-compilers-llvm-clang-1-0-compiler)

