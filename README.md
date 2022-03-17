# 🎤  K-pop 엔터테인먼트 홈페이지
>K-문화를 선도하는 K-pop. 이에 어울리는 Art 느낌의 사이트 제작  
>아티스트와 함께 찍은 사진을 저장할 수 있는 서비스  
>(다시 배포한 url 넣기)

</br>

## 1. 제작 기간 & 참여 인원
- 2022년 03월 07일 ~ 03월 15일(9일)
- 개인 프로젝트

</br>

## 2. 기술 스택
#### `Front-end`
  - HTML
  - PostCSS
  - JavaScript/JSX
  - React.js
### `ETC`
  - Firebase
  - YouTube API

</br>

## 3. 핵심 기능
  - main에서 YouTube API 사용, 자동으로 음악이 흘러나오게 처리
  - ...
  - ...

<details>
<summary><b>핵심 기능 설명 펼쳐보기</b></summary>
<div markdown="1">

### 3.1 구조도

<img src="..." width="60%" height="60%" />

- **...** 🔎 [코드 확인](...)
  - ...

### 3.2 main에서 YouTube API 사용

<img src="https://github.com/luckyjek/entertainment-design/blob/main/public/images/portfolio/api-autoplay.png" width="100%" height="100%" />
  
- **자동으로 음악이 흘러나오게 처리** 🔎 [코드 확인](https://github.com/luckyjek/entertainment-design/blob/main/src/components/main/main.jsx#L15)
  - default음악은 bts로 설정

### 3.3 ...
- **...** 🔎 [코드 확인](...)
  - ...

### 3.4 ...
- **...** 🔎 [코드 확인](...)
  - ...

</div>
</details>

</br>

## 4. 핵심 트러블 슈팅
### 4.1 라우터 v5, 컴포넌트 전달시 문제

<img src="https://github.com/luckyjek/entertainment-design/blob/main/public/images/portfolio/router-error.png" width="100%" height="100%" />

- 이 서비스에서는 라우터 v5를 사용하였습니다.  
  그 이유는 [이전 클론 코딩을 하면서 v6을 사용](https://github.com/luckyjek/card-maker/blob/main/src/app.jsx#L9)해봤기 때문입니다.
- [React Router](https://reactrouter.com/docs/en/v6/upgrading/v5) 를 보고 처음 path설정할 때, 가독성을 좋게하기위해 아래 `기존코드` 와 같이 설정 하였습니다.

<details>
<summary><b>기존 코드</b></summary>
<div markdown="1">

~~~js
<Route path='/info' FileInput={FileInput} component={Maker} />
~~~

</div>
</details>

- 지금생각하면 너무도 당연하지만, error를 해결하는 그 때는 왜 안되는지 이해가 안돼서  
- 실질적으로 FileInput을 사용하는 CardAddForm 컴포넌트까지 주석을 하나하나 해가며 찾았습니다.  
- 원인은 `기존코드` 와 같은 방식은 Maker로 전달되지 못하고 <Route />안으로 전달되는것을 깨달았고,
  다시 docs에 들어가서 확인 후, `개선된 코드` 와 같이 변경해주었습니다.

<details>
<summary><b>개선된 코드</b></summary>
<div markdown="1">

~~~js
<Route path='/maker'>
  <Maker  
    FileInput={FileInput} 
    authService={authService}
    cardRepository={cardRepository}
  />
</Route>
~~~

</div>
</details>

</br>

## 5. 회고 / 느낀점
>프로젝트 개발 회고 글: url

----------------------------------------

### entertainment-design

####  3월 7일 
##### 프로젝트 소개 및 기본설치 https://luckyjek.tistory.com/108

####  3월 8일
##### Router설정 및 Header, Footer 마크업 https://luckyjek.tistory.com/109
##### Simple 레이아웃 마크업 https://luckyjek.tistory.com/110

#### <span style="color:red">3월 9일</span>
##### Youtube api받아오기 https://luckyjek.tistory.com/111

#### 3월 10일
##### 토글구현완료 및 Maker Card page Preview부분 레이아웃작업

#### 3월 11일
##### Make Card부분 Editor 그리고 Preview부분의 사진 업로드, 삭제 구현완료 그리고 대환장 오류파티
