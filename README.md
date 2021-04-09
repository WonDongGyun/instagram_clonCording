# instagram_clonCording  
트리스티의 Node js + mongoose + React를 사용한 Instagram Clone Cording Project  
[**[트리스티의 Node js + mongoose + React를 사용한 Clone Cording 프로젝트에 오신 여러분을 환영합니다!]**](https://tristy.tistory.com/)  

<br/>
<br/>

[**[Fornt-End Github]**](https://github.com/rlagudals95/team3/)  
[**[Demo Video]**](https://www.youtube.com/watch?v=OJqWtzs6EeM)  

<br/>
<br/>

로그인, 회원가입, 메인화면, 글쓰기, 프로필, 좋아요 기능이 구현된 인스타그램 클론 코딩입니다.  

Instagram Clone Cording Project  
use  node js, mongoose and React  


<br/>
<br/>

🤔 프로젝트 개요
-------------  
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li><b>진행 날짜 - 2021.04.02 ~ 2021.04.08</b></li>
<li><b>목적 - 팀원들과 함께, 백엔드와 프론트 엔드의 역할을 맡아 클론 코딩을 해보자!!!</b></li>
<li><b>필수 포함 사항</b></li>
</ul>

<br/>
<br/>

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/114043193-07afbd80-98c1-11eb-8076-054678406013.png"></p>

<br/>
<br/>





😀 사용한 패키지 및 CSS  
-----------------
- **Express**  　　　=> node.js의 웹 프레임워크  
- **mongoose**　　=> node.js에서 비관계형 데이터베이스인 Mongo DB를 사용해보자  
- **eslint**　　　　=> node.js에서 팀 단위 협업시, 문법 검사를 해보자  
- **prettier**　　　=> node.js에서 팀 단위 협업시, 코딩 스타일을 통일해보자  
- **husky**　　=> node.js에서 git hook을 손쉽게 관리해보자 
- **lint-staged**　　=> node.js에서 Git에 staged 상태인 파일만 lint해주자  
- **cors**　　=> node.js에서 cors 문제를 해결해보자  
- **nodemon**　　=> node.js에서 파일 수정시 자동으로 서버를 내렸다가 올려보자  
- **bcrypt**　　=> node.js에서 데이터베이스에 저장할 비밀번호를 암호화 해보자  
- **multer**　　=> node.js에서 프론트 엔드에서 보내주는 이미지 데이터를 받아보자   
- **multer-s3**　　=> node.js에서 AWS S3에 접근하여 이미지 데이터를 업로드 해보자   
- **aws-sdk**　　=> node.js에서 AWS를 사용해보자      
- **jwt**　　=> node.js에서 jwt 토큰을 이용한 로그인 기능을 구현해보자        


<br/>
<br/>

🤭 구현한 기능 
-----------------
1.  로그인 및 회원가입 기능  
2.  메인 페이지 글 보여주기 기능  
3.  좋아요 및 싫어요 기능  
4.  로그인 한 사용자의 프로필 데이터 보여주기 기능  
5.  글쓰기 및 이미지 업로드 기능  


<br/>
<br/>

🤭 이번 프로젝트를 하며 새롭게 배운 것
-----------------
1.  백엔드 단 구조 잡기 (mvc 구조)  
2.  multer를 사용하여 이미지를 프론트 엔드에서 받아오고,  그것을 AWS S3에 올려보기  
3.  bcrypt를 사용하여 비밀번호를 암호화하여 저장하고, 로그인시 비교하기  
4.  authorization 인증 토큰을 헤더로 담아오기  



<br/>
<br/>


😎 폴더 구조  
-----------------  

<br/>

```bash
instagram_clonCording
├─ node_modules
│  
├─ .vscode
│  
├─ middleWare
│  └─ verifiacation
│     └─ verify_middleWare.js
│  
│  
├─ models
│  ├─ schema
│  │  └─ board_schema.js
│  │  └─ comment_schema.js
│  │  └─ like_schema.js
│  │  └─ user_schema.js
│  │
│  └─ connectDB.js
│  
├─ controller
│  ├─ board_controller
│  │  ├─ board_service
│  │  │  └─ board_service.js
│  │  └─ board_controller.js
│  │
│  ├─ login_controller
│  │  ├─ login_service
│  │  │  └─ login_service.js
│  │  └─ login_controller.js
│  │
│  ├─ main_controller
│  │  ├─ main_service
│  │  │  └─ main_service.js
│  │  └─ main_controller.js
│  │
│  ├─ profile_controller
│  │  ├─ profile_service
│  │  │  └─ profile_service.js
│  │  └─ profile_controller.js
│  │
│  └─ register_controller
│     ├─ register_service
│     │  └─ register_service.js
│     └─ register_controller.js
│  
└─ app.js
└─ package-lock.json
└─ package.json
└─ awsconfig.json
└─ .prettierrc.json
└─ .eslintrc.json
```

<br/>
<br/>
<br/>



🤭 multer와 AWS 사용하기
-----------------

<br/>
<br/>

multer를 사용하여 Amazon S3에 이미지를 업로드할 수 있습니다.  

단, 이미 Amazon S3 bucket이 만들어진 상태여야 하고  
미리 awsconfig.json에 aws 키값을 받아서 입력해야 합니다.  

물론, 저는 노출 방지를 위해서 내용을 빼놨습니다.  

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/114110890-8af9ff00-9913-11eb-98e6-97c4e743b9f0.png"></p>

<br/>
<br/>


🤭 bcrypt 암호화 하기 및 비교하기  
-----------------

<br/>
<br/>

bcrypt는 미국 NSA에서 설계한 암호화 해시 함수입니다.  

기존의 SHA가 해쉬속도가 너무 빠른 탓에 레인보우 테이블을 만들 수 있는 시간이 단축된다는 문제점이 있었습니다.  

bcrypt는 blowfish라는 기법이 사용되어서 원하는 만큼 해쉬 속도를 조절할 수 있다는 장점이 있었습니다.  
그래서 이번 프로젝트에서는 bcrypt로 암호화를 진행하였습니다.  

만약, 보안에 더 민감한 곳이라면 scrypt나, Argon2id를 사용해야 합니다.  

<br/>
<br/>

mongoDB 스키마에 암호화 걸기  

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/114111464-0e682000-9915-11eb-9cbf-9ad124b4b165.png"></p>

<br/>
<br/>

bcrypt로 암호화된 비밀번호와 입력된 비밀번호 비교하기  

<p align="center"><img src="https://user-images.githubusercontent.com/52685665/114111532-348dc000-9915-11eb-8b7d-abbc9bf32cc6.png"></p>







