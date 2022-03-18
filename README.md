# 🎤  K-pop 엔터테인먼트 홈페이지
>K-문화를 선도하는 K-pop. 이에 어울리는 Art 느낌의 사이트 제작  
>아티스트와 함께 찍은 사진을 저장할 수 있는 서비스  
>
<details>
<summary><b>URL클릭하기 전, 주의사항 펼쳐보기</b></summary>
<div markdown="1">

- 아래의 URL은 netlify를 사용한 '임시URL'
- 만약 아래와 같은 Page Not Found Modal이 나오면, Back to our site를 누르면 정상 동작
- ![image](https://user-images.githubusercontent.com/70943889/158994427-b8f3ea43-fa0a-4d22-b7ba-b0cecd7ed6a2.png)

</div>
</details>
>https://623465b8ffb0001ab27c9a07--entertainment-desing.netlify.app/info


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

- **추가, 삭제, 수정** 🔎 [maker.jsx 코드 확인](https://github.com/luckyjek/entertainment-design/blob/main/src/service/card_repository.js#L5) & [maker.jsx 코드 확인](https://github.com/luckyjek/entertainment-design/blob/main/src/components/maker/maker.jsx#L8)
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
> 이번 프로젝트를 진행하면서 [Cafe898-8](https://github.com/luckyjek/cafe898-8) 의 HTML, CSS, JavaScript로만 사용하여 기본으로
> 랜딩 페이지를 만들어본 것이 많은 도움이 되었습니다. 어떤 일이든지 기본이 중요하다는 것을 많이 느꼈습니다.
> 저는 Vue.js가 아닌 React.js 라이브러리를 선택하여 `드림 코딩의 React` 강의를 들으며 전체적인 React.js 컨셉을 이해할 수 있었습니다.  
> 개인 [프로젝트 기획 및 필요한 기능 구현을 작성](https://luckyjek.tistory.com/108) 을 하면서,  
> (물론 기획과는 다르게 바뀌는 부분도 있었지만) 어렵고, 오류 하나가 생기면 검색하고, 적용해보고를 반복하며 기본 2시간 소요하며 구현해나갔습니다.
> 쉽지 않았지만, 팀이 아닌 개인으로 기능을 하나하나 구현해나가는 성취감은 더 배가 되가 되었습니다.
