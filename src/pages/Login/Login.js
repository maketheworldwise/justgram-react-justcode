import { useState } from "react";
import "./Login.scss";

import LogoText from "../../components/logo/LogoText";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleIdInput = (e) => {
    const idValue = e.target.value;
    setId(idValue);
    idValue.includes("@") && pw.length >= 5 ? setIsValid(true) : setIsValid(false);
  };

  const handlePwInput = (e) => {
    const pwValue = e.target.value;
    setPw(pwValue);
    id.includes("@") && pw.length >= 5 ? setIsValid(true) : setIsValid(false);
  };

  return (
    <div className="base">
      <div className="login">
        <div className="head">
          <LogoText />
        </div>
        <div className="form">
          <div className="content">
            <input className="user-info" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={handleIdInput} />
            <input className="user-info" type="password" placeholder="비밀번호" onChange={handlePwInput} />
            <button className="send-info" type="submit" disabled style={{ opacity: isValid ? "100%" : "50%" }}>
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
