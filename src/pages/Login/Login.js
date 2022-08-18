import "./Login.scss";

import LogoText from "../../components/logo/LogoText";

function Login() {
  return (
    <div className="common-container">
      <div className="login">
        <div className="login-header">
          <LogoText />
        </div>
        <div className="login-form">
          <div className="login-form__content">
            <input className="login-form__input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
            <input className="login-form__input" type="password" placeholder="비밀번호" />
            <button className="login-form__button" type="submit" disabled>
              로그인
            </button>
            <a className="login-form__content--find-password" href="#?">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
