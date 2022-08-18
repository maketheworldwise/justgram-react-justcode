import "./Login.scss";

import LogoText from "../../components/logo/LogoText";

function Login() {
  return (
    <div className="base">
      <div className="login">
        <div className="head">
          <LogoText />
        </div>
        <div className="form">
          <div className="content">
            <input className="user-info" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
            <input className="user-info" type="password" placeholder="비밀번호" />
            <button className="send-info" type="submit" disabled>
              로그인
            </button>
            <a className="find-password" href="#?">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
