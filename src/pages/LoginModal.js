import React, { useState } from 'react';
import './LoginModal.css';
import {useNavigate} from "react-router-dom";

function LoginModal({ isOpen, onClose }) {
  const [id, setId] = useState(''); // ID 상태
  const [password, setPassword] = useState(''); // 비밀번호 상태
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // 로그인 요청을 서버에 보내는 코드
    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, password }), // ID와 비밀번호 전달
    })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            alert('로그인 성공!');
            localStorage.setItem('jwtToken', data.token); // JWT 로컬 스토리지에 저장
            setId(''); // 로그인 성공 후 ID 초기화
            setPassword(''); // 로그인 성공 후 비밀번호 초기화
            onClose(); // 로그인 성공 시 모달 닫기
          } else {
            alert('로그인 실패: ' + data.message);
          }
        })
        .catch((error) => console.error('Error:', error));
  };

  return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <div className="LoginLogo">
            <img src="/MainLogo.png" alt="메인로고" className="logo" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="id"></label>
              <input
                  type="text"
                  id="id"
                  placeholder="아이디"
                  value={id}
                  onChange={(e) => setId(e.target.value)} // ID 상태 업데이트
                  required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password"></label>
              <input
                  type="password"
                  id="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // 비밀번호 상태 업데이트
                  required
              />
            </div>

            <button className="login-button" type="submit">
              로그인
            </button>
            <div className="links">
              <a href="#">회원가입 ·</a>
              <a href="#">아이디 · 비밀번호 찾기</a>
            </div>
          </form>
        </div>
      </div>
  );
}

export default LoginModal;
