# justgram-react-justcode

> 미션 순서에 맞게 순수 JavaScript로 구현한 인스타그램 프로젝트를 React로 옮기는 과제

## 🚀 Mission 1

**CRA 프로젝트 설치**

<details>
<summary>과제 설명</summary>
<div markdown="1">
<br>

### CRA 설치

- 프로젝트 초기화

### 폴더 및 파일 구조 세팅

- src 폴더 안에 - pages 폴더 설치
- pages 폴더 안에 Login 폴더, Main 폴더를 생성
- Login 폴더 안에 Login.js, Login.css 파일을 생성
- Main 폴더 안에 Main.js, Main.css 파일을 생성
- public 폴더 안에 - images 폴더를 생성하고 image 파일을 관리

  - `img` 태그 `src` 값으로 `/images/(파일이름)` 이렇게 지정 (`<img src=“/images/파일이름” />`)
  - `css`에서는 public 폴더에 접근하는게 불가능하므로 `background-image` 에 활용해야하는 이미지들은 `src/assets/images/` 디렉토리에서 관리

### Local Server 띄우기

- 이전에 JavaScript로 구현한 Justgram 소스 코드 중 html, css 코드를 복사 붙여넣기 (html 태그 내에 class 는 className으로 변경)
- `npm start` 를 해서 Login, Main 컴포넌트가 각각 잘 나오는지 확인
- index.js에서 컴포넌트를 바꿔가면서 화면에 정상적으로 나오면 성공

</div>
</details>

## 🚀 Mission 2

**React Router & Sass**

<details>
<summary>과제 설명</summary>
<div markdown="1">
<br>

### React Router

- 현 프로젝트에 라우팅 기능을 적용
- 경로에 따라 Login 페이지와 Main 페이지가 화면에 출력
- Login 버튼 클릭 시 Main 페이지로 이동할 수 있도록 구현
- 우선 `<Link>` 컴포넌트를 활용한 방법으로 구현
- 그 다음으로는 `useNavigate` 훅을 활용하여 구현

### Sass

- 기존에 작성한 css 파일을 모두 scss 파일로 변환
- 변환 과정에서 Sass의 nesting 을 사용해서 수정

</div>
</details>

## 🚀 Mission 3

**useState**

<details>
<summary>과제 설명</summary>
<div markdown="1">
<br>

### Login - 사용자 입력 데이터 저장

- 다음의 순서에 맞게 코드를 작성하여 ID, PW `<input>`에 입력된 값을 state 에 저장
  - ID `<input>` 에서 `onChange` event 발생
  - event 발생 시 `handleIdInput` 함수 실행
  - `handleIdInput` 는 이벤트를 인자로 받음
  - event가 일어난 요소에 담긴 value 값 (`event.target.value`)을 state에 저장
  - 위의 과정을 PW `<input>` 에도 동일하게 적용

### Login - 로그인 버튼 활성화 (validation)

- 입력한 아이디와 비밀번호가 기준에 맞는 경우에만 로그인 버튼 색상이 활성화될 수 있도록 구성
- ex. ID - `@` 포함 / PW - 5글자 이상
- [삼항 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) 적용해서 조건에 따라 버튼 색상에 변화

### Main - 댓글 기능

- 사용자가 댓글 입력 후 enter 를 누르거나 왼쪽의 버튼 클릭 시 댓글이 추가되도록 구현
- 댓글 기능을 구현하기 위해 배열 데이터 타입 활용
- [Array.map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 참고해서 시도

</div>
</details>

## 🚀 Mission 4

**props**

<details>
<summary>과제 설명</summary>
<div markdown="1">
<br>

### Main - 피드, 댓글 컴포넌트화 + props로 데이터 전달

- map 함수를 활용해 피드 및 댓글 목록 구현
- 피드와 댓글을 컴포넌트화
- 부모의 `state` 에 저장된 댓글 데이터에 `Array.map()` 메소드를 적용해 댓글의 개수만큼 댓글 컴포넌트 출력
- 필요한 데이터를 `props` 로 전달
- 기존에 보였던 대로 댓글이 화면에 나타나면 과제 완료

### map 함수 적용시 key를 부여하는 이유

- 공식문서를 참고하여 `map 함수 적용시 key props를 부여하는 이유`에 대해 블로그를 작성
  - [리스트와 Key - React](https://ko.reactjs.org/docs/lists-and-keys.html)
- 본인이 작성한 map 함수 사용 코드를 예시로 활용하여 설명

</div>
</details>

## 🚀 Mission 5

**useEffect + fetch**

<details>
<summary>과제 설명</summary>
<div markdown="1">
<br>

### mock data를 활용하여 여러 개의 댓글 구현

- 댓글 데이터를 목데이터 파일로 분리해서 관리
- 아직 `fetch` 함수가 익숙지 않을 경우, `.json` 파일이 아닌 `.js` 파일로 진행
- 데이터가 기획에 맞게 UI 가 나타나면 과제 완료
- 로그인 실습 후에는 반드시 `.json` 파일로 변환 후 `fetch` 함수 적용해서 구현

### mock data를 활용하여 여러 개의 피드 구현

- mock data를 활용하여 데이터를 따로 분리해준 뒤 여러개의 피드를 구현
- mock data로 분리한 피드 데이터를 `Array.map()`을 활용하여 구조를 표현
- 댓글 데이터는 피드 데이터의 각 피드별로 포함되도록 구조화

</div>
</details>

---

## 🚀 Mission 6

**피드별 좋아요 기능 구현**

<details>
<summary>과제 설명</summary>
<div markdown="1">
<br>

- 리스트 페이지에서 특정 피드의 하트 버튼을 눌렀을 때 그 피드의 하트만 붉게 변하고 다시 누르면 하트가 원래대로 돌아오도록 구성
- Issue에 있는 Mission 6을 PR Linked Issue에 등록

</div>
</details>

## 🚀 Mission 7

**피드별 댓글 삭제 기능 구현**

<details>
<summary>과제 설명</summary>
<div markdown="1">
<br>

- 각 댓글 별로 삭제 버튼을 만들어서 클릭했을 때 해당 댓글이 삭제되도록 구성
- Issue에 있는 Mission 7을 PR Linked Issue에 등록

</div>
</details>

## 🚀 Mission 8

**피드별 댓글 좋아요 기능 구현**

<details>
<summary>과제 설명</summary>
<div markdown="1">
<br>

- 각 댓글 별로 좋아요 버튼을 만들어서 클릭 했을 때 해당 리뷰만 좋아요 표시가 되고, 다시 누르면 좋아요가 취소되도록 구성
- Issue에 있는 Mission 9을 PR Linked Issue에 등록

</div>
</details>

---

## 참고

- 없음
