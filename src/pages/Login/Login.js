import "../Commons/Common.css";
import "./Login.css";

function Login() {
  document.body.classList.add("common__body");

  let loginInput = document.getElementsByClassName("login__input");
  let id = loginInput[0];
  let pw = loginInput[1];
  let btn = document.querySelector(".login__btn > button");

  document.addEventListener("keyup", function (event) {
    if (id.value.length > 0 && pw.value.length > 0) {
      btn.disabled = false;
      btn.className = "login__btn-enable";
    } else {
      btn.disabled = true;
      btn.className = "login__btn-disable";
    }
  });

  return (
    <div className="login">
      <div className="common__arragement--center login__logo">
        <span className="logo-text">Instagram</span>
      </div>
      <div className="login__form">
        <div className="common__arragement--center login__content">
          <input className="login__input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
        </div>
        <div className="common__arragement--center login__content">
          <input className="login__input" type="password" placeholder="비밀번호" />
        </div>
        <div className="common__arragement--center login__btn">
          <button className="login__btn-disable" type="submit" disabled>
            로그인
          </button>
        </div>
        <div className="common__arragement--center login__find">
          <a className="login__find--pw" href="#!">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
