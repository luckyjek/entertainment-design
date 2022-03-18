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

## 3. 사이트맵

<img src="https://github.com/luckyjek/entertainment-design/blob/main/public/images/portfolio/entertainment-sitemap.png" width="100%" height="100%" />

## 4. 핵심 기능
  - main 페이지에서 YouTube API 사용, 자동으로 음악 재생  
  - 재사용 가능한 Modal 컴포넌트  
  - Faribase 사용한 Google, Github 로그인  
  - Faribase 사용한 실시간 데이터베이스  

<details>
<summary><b>핵심 기능 설명 펼쳐보기</b></summary>
<div markdown="1">

### 4.1 main 페이지에서 YouTube API 사용, 자동으로 음악 재생  

<img src="https://github.com/luckyjek/entertainment-design/blob/main/public/images/portfolio/api-autoplay.png" width="100%" height="100%" />
  
- **"autoplay=1", allow="autoplay" 자동으로 음악 재생 되도록 처리** 🔎 [코드 확인](https://github.com/luckyjek/entertainment-design/blob/main/src/components/main/main.jsx#L15)
  - default음악은 bts로 설정 [참고](https://www.outsystems.com/forums/discussion/66950/autoplay-an-embeded-youtube-video-in-reactive-web-app/)

### 4.2 재사용 가능한 Modal 컴포넌트  

- **하나의 Modal 컴포넌트를을 만들어 필요한 4개 컴포넌트에 사용** 🔎 [코드 확인](https://github.com/luckyjek/entertainment-design/blob/main/src/components/modal/modal.jsx#L5)
  - Modal이 필요한 각 컴포넌트는 name을 변수를 만들고, Modal로 값을 전달

### 4.3 Faribase 사용한 Google, Github 로그인  
 
<img src="https://github.com/luckyjek/entertainment-design/blob/main/public/images/portfolio/login-service.png" width="100%" height="100%" />  

- **AuthService class생성, 구조화** 🔎 [auth_service.js 코드 확인](https://github.com/luckyjek/entertainment-design/blob/main/src/service/auth_service.js#L4) & [login.jsx 코드 확인](https://github.com/luckyjek/entertainment-design/blob/main/src/components/login/login.jsx#L5)
  - firebase와 네트워크 통신할때 구조화  
  - Google, Github 로그인 인증, 함수 재사용 

### 4.4 Faribase 사용한 실시간 데이터베이스  

<img src="https://github.com/luckyjek/entertainment-design/blob/main/public/images/portfolio/fileInput-service.png" width="100%" height="100%" />  

- **추가, 삭제, 수정** 🔎 [코드 확인](...)
  - 공통적으로 사용하는 함수는 Maker 컴포넌트에 정의하여 하위 컴포넌트로 props 전달 

</div>
</details>

</br>

## 5. 핵심 트러블 슈팅
### 5.1 라우터 v5, 컴포넌트 전달시 문제

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

## 6. 회고 / 느낀점
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
