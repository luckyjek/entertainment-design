# ๐ค  K-pop ์ํฐํ์ธ๋จผํธ ํ๋กํ ํ์ ํํ์ด์ง  
>K-๋ฌธํ๋ฅผ ์ ๋ํ๋ K-pop. ์ด์ ์ด์ธ๋ฆฌ๋ Art ๋๋์ ์ฌ์ดํธ ์ ์  
>์ํฐ์คํธ์ ํจ๊ป ์ฐ์ ์ฌ์ง์ ์ ์ฅํ  ์ ์๋ ์๋น์ค  
>https://623465b8ffb0001ab27c9a07--entertainment-desing.netlify.app/info

<details>
<summary><b>URLํด๋ฆญํ๊ธฐ ์ , ์ฃผ์์ฌํญ ํผ์ณ๋ณด๊ธฐ</b></summary>
<div markdown="1">

- ์์ URL์ netlify๋ฅผ ์ฌ์ฉํ '์์URL'
- ๋ง์ฝ ์๋์ ๊ฐ์ Page Not Found Modal์ด ๋์ค๋ฉด? 'Back to our site'๋ฅผ ๋๋ฅด๋ฉด ์ ์ ๋์
![image](https://user-images.githubusercontent.com/70943889/158994427-b8f3ea43-fa0a-4d22-b7ba-b0cecd7ed6a2.png)

</div>
</details>

</br>

## 1. ์ ์ ๊ธฐ๊ฐ & ์ฐธ์ฌ ์ธ์
- 2022๋ 03์ 07์ผ ~ 03์ 15์ผ(9์ผ)
- ๊ฐ์ธ ํ๋ก์ ํธ

</br>

## 2. ๊ธฐ์  ์คํ
#### `Front-end`
  - HTML
  - PostCSS
  - JavaScript/JSX
  - React.js
### `ETC`
  - Firebase
  - YouTube API

</br>

## 3. ์ฌ์ดํธ๋งต

<img src="https://github.com/luckyjek/entertainment-design/blob/main/public/images/portfolio/entertainment-sitemap.png" width="100%" height="100%" />

## 4. ํต์ฌ ๊ธฐ๋ฅ
  - main.jsx ์์ YouTube API ์ฌ์ฉ, ์๋์ผ๋ก ์์ ์ฌ์  
  - ์ฌ์ฌ์ฉ ๊ฐ๋ฅํ Modal ์ปดํฌ๋ํธ  
  - Firebase ์ฌ์ฉํ Google, GitHub ๋ก๊ทธ์ธ  
  - Firebase ์ฌ์ฉํ ์ค์๊ฐ ๋ฐ์ดํฐ๋ฒ ์ด์ค  

<details>
<summary><b>ํต์ฌ ๊ธฐ๋ฅ ์ค๋ช ํผ์ณ๋ณด๊ธฐ</b></summary>
<div markdown="1">

### 4.1 main.jsx ์์ YouTube API ์ฌ์ฉ, ์๋์ผ๋ก ์์ ์ฌ์  

<img src="https://github.com/luckyjek/entertainment-design/blob/main/public/images/portfolio/api-autoplay.png" width="100%" height="100%" />
  
- **'autoplay=1', allow='autoplay' ์๋์ผ๋ก ์์ ์ฌ์๋๋๋ก [์ฐธ๊ณ ์๋ฃ](https://www.outsystems.com/forums/discussion/66950/autoplay-an-embeded-youtube-video-in-reactive-web-app/)๋ณด๋ฉฐ ์ฒ๋ฆฌ** ๐ [์ฝ๋ ํ์ธ](https://github.com/luckyjek/entertainment-design/blob/main/src/components/main/main.jsx#L15)
  - default ์์์ BTS๋ก ์ค์ ํด๋์์ต๋๋ค.

### 4.2 ์ฌ์ฌ์ฉ ๊ฐ๋ฅํ Modal ์ปดํฌ๋ํธ  

- **์ฌ์ฌ์ฉ ๊ฐ๋ฅํ Modal ์ปดํฌ๋ํธ๋ฅผ ๋ง๋  ํ, ํ์ํ 4๊ฐ ์ปดํฌ๋ํธ์ ์ฌ์ฌ์ฉ** ๐ [์ฝ๋ ํ์ธ](https://github.com/luckyjek/entertainment-design/blob/main/src/components/modal/modal.jsx#L5)
  - Modal์ด ํ์ํ ๊ฐ ์ปดํฌ๋ํธ์ name์ ๋ณ์๋ก ๋ง๋ค๊ณ , ์ฌ์ฌ์ฉํ  ์ ์๋ Modal๋ก ๊ฐ์ ์ ๋ฌํ๋๋ก ๊ตฌํํ์์ต๋๋ค.

### 4.3 Firebase ์ฌ์ฉํ Google, GitHub ๋ก๊ทธ์ธ  
 
<img src="https://github.com/luckyjek/entertainment-design/blob/main/public/images/portfolio/login-service.png" width="100%" height="100%" />  

- **AuthService class ์์ฑ, ๊ตฌ์กฐํ** ๐ [auth_service.js ์ฝ๋ ํ์ธ](https://github.com/luckyjek/entertainment-design/blob/main/src/service/auth_service.js#L4) & [login.jsx ์ฝ๋ ํ์ธ](https://github.com/luckyjek/entertainment-design/blob/main/src/components/login/login.jsx#L5)
  - Firebase์ ๋คํธ์ํฌ ํต์ ํ  ๋, class๋ฅผ ๋ฐ๋ก ๋ง๋ค์ด ์ดํ ํ์ฅ์ฑ๊ณผ ์ ์ง๋ณด์๊ฐ ์ฉ์ดํ๋๋ก ๊ตฌํํ์ต๋๋ค.
  - ๋ก๊ทธ์ธ ์ธ์ฆ ์, Google๊ณผ GitHub์ ๊ฐ์ ํจ์๋ฅผ ์ฌ์ฉํ๋ฏ๋ก ์ฌ์ฌ์ฉํ  ์ ์๊ฒ ๊ตฌํํ์ต๋๋ค.

### 4.4 Firebase ์ฌ์ฉํ ์ค์๊ฐ ๋ฐ์ดํฐ๋ฒ ์ด์ค  

<img src="https://github.com/luckyjek/entertainment-design/blob/main/public/images/portfolio/fileInput-service.png" width="100%" height="100%" />  

- **์ถ๊ฐ, ์ญ์ , ์์  ๊ธฐ๋ฅ** ๐ [card_repository.js ์ฝ๋ ํ์ธ](https://github.com/luckyjek/entertainment-design/blob/main/src/service/card_repository.js#L5) & [maker.jsx ์ฝ๋ ํ์ธ](https://github.com/luckyjek/entertainment-design/blob/main/src/components/maker/maker.jsx#L8)
  - ์นด๋์ ์ถ๊ฐ, ์ญ์ , ์์  ๊ธฐ๋ฅ์ ๊ณตํต์ผ๋ก ์ฌ์ฉํ๋ ํ์ ์ปดํฌ๋ํธ๋ค์ props ์ ๋ฌ์ ์ํด ํจ์๋ Maker ์ปดํฌ๋ํธ์ ์ ์ํ์์ต๋๋ค.

</div>
</details>

</br>

## 5. ํต์ฌ ํธ๋ฌ๋ธ ์ํ
### 5.1 ๋ผ์ฐํฐ v5, ์ปดํฌ๋ํธ ์ ๋ฌ ์ ๋ฌธ์ 

<img src="https://github.com/luckyjek/entertainment-design/blob/main/public/images/portfolio/router-error.png" width="100%" height="100%" />

- ์ฐ์ , ์ด ํ๋ก์ ํธ์์๋ ๋ผ์ฐํฐ v5๋ฅผ ์ฌ์ฉํ์์ต๋๋ค. ๊ทธ ์ด์ ๋ [์ด์  ํด๋ก  ์ฝ๋ฉ์ ํ๋ฉด์ v6 ์ ์ฌ์ฉ](https://github.com/luckyjek/card-maker/blob/main/src/app.jsx#L9)ํด๋ดค๊ธฐ ๋๋ฌธ์๋๋ค.  
- [React Router๋ฅผ ์ฐธ๊ณ ํ์ฌ](https://reactrouter.com/docs/en/v6/upgrading/v5) ์ฒ์ path ์ค์ ํ  ๋, ๊ฐ๋์ฑ์ ๋์ด๊ธฐ ์ํด ์๋ `๊ธฐ์กด ์ฝ๋` ์ ๊ฐ์ด ์ค์ ํ์์ต๋๋ค.  

<details>
<summary><b>๊ธฐ์กด ์ฝ๋</b></summary>
<div markdown="1">

~~~js
<Route path='/info' FileInput={FileInput} component={Maker} />
~~~

</div>
</details>

- error์ ์์ธ์ ์ง๊ธ ์๊ฐํ๋ฉด ๋๋ฌด๋ ๋น์ฐํ์ง๋ง, ํด๊ฒฐํ๋ ๊ทธ๋๋ ์ ์๋๋์ง ์ดํด๊ฐ ์ ๋ผ์ [๋น์ทํ error๋ฅผ ํด๊ฒฐํ ๋ธ๋ก๊ทธ๋ฅผ ์ฐธ๊ณ ํ์ฌ](https://karzin.tistory.com/242) FileInput ์ปดํฌ๋ํธ๋ฅผ ์ฌ์ฉํ๋ CardAddForm ์ปดํฌ๋ํธ๊น์ง ์ฃผ์์ ํ๋ํ๋ ํด๊ฐ๋ฉฐ ์์ธ์ ์ฐพ์์ต๋๋ค.  
- ์์ธ์ ๋ผ์ฐํฐ ์ค์ ์ ์์์ต๋๋ค. ์ฆ, `appยทjsx`์์ ๋ผ์ฐํฐ ์ค์ ์ ํ๊ฒ ๋  ๋ `๊ธฐ์กด ์ฝ๋`์ ๊ฐ์ ๋ฐฉ์์ Maker ์ปดํฌ๋ํธ๋ก ๊ฐ์ด ์ ๋ฌ๋์ง ๋ชปํ๊ณ  <Route />์์ผ๋ก ์ ๋ฌ๋๋ ๊ฒ์ ๊นจ๋ฌ์์ต๋๋ค.   
- ์ด์ ์์ธ์ ์ฐพ๊ณ  ๋ค์ ๋ผ์ฐํฐ ์ค์ ์ ํด์ฃผ๊ธฐ ์ํด [React Router๋ฅผ ์ฐธ๊ณ ํ์ฌ](https://reactrouter.com/docs/en/v6/upgrading/v5), `๊ฐ์ ๋ ์ฝ๋`์ ๊ฐ์ด ๋ณ๊ฒฝํด์ฃผ์์ต๋๋ค.

<details>
<summary><b>๊ฐ์ ๋ ์ฝ๋</b></summary>
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

## 6. ํ๊ณ  / ๋๋์ 
>Entertainment Design ํ๋ก์ ํธ๋ฅผ ์งํํ๋ฉด์ ์ฒ์ ์ฌ์ฉํ๋ React.js์ ๊ฐ๋์ ์ดํดํ๋๋ฐ ์์ด [์ด์ ์ ๋ง๋  ๋๋ฉํ์ด์ง](https://github.com/luckyjek/cafe898-8)๊ฐ ํ ๋๊ฐ ๋์ด ๋ง์ ๋์์ด ๋์์ต๋๋ค. 
>์ด์ ์ด๋ค ์ผ์ด๋ ์ง ๊ธฐ๋ณธ์ด ๊ฐ์ฅ ์ค์ํ๋ค๋ ๊ฒ์ ๋ค์ ํ๋ฒ ๊นจ๋ฌ์ ์ ์์๋ ํ๋ก์ ํธ์์ต๋๋ค.  
>
>Entertainment Design ํ๋ก์ ํธ๋ `๋๋ฆผ ์ฝ๋ฉ์ React` ๊ฐ์๋ฅผ ๋ค์ผ๋ฉฐ ์ ์ฒด์ ์ธ React.js ๊ฐ๋์ ์ดํดํ๊ณ , ์์ฉํ์์ต๋๋ค.  
>๋ฌผ๋ก  ์ฒ์ React.js๋ฅผ ์ฌ์ฉํ๋ฉฐ ๊ฐ๋์ ์ดํดํ๋ฉด์ ๊ตฌํํ๋ ๊ฒ์ ์ด๋ ค์ ์ง๋ง, `ํ`์ด ์๋ `๊ฐ์ธ`์ผ๋ก ๊ธฐ๋ฅ์ ํ๋ํ๋ ๊ตฌํํด๋๊ฐ๋ ์ฑ์ทจ๊ฐ์ ๋ ๋ฐฐ๊ฐ ๋ ํ๋ก์ ํธ์์ต๋๋ค.
