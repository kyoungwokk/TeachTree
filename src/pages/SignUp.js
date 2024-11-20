import React, { useState } from 'react';
import './Sign.css';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isNewsletterChecked, setIsNewsletterChecked] = useState(false);

  const checkConditions = () => {
    const hasTwoTypes = /(?=.*[A-Za-z])(?=.*[0-9])|(?=.*[A-Za-z])(?=.*[!@#$%^&*])|(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password);
    const validLength = password.length >= 8 && password.length <= 32;
    const noRepeats = !/(.)\1\1/.test(password);
    return { hasTwoTypes, validLength, noRepeats };
  };

  const { hasTwoTypes, validLength, noRepeats } = checkConditions();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    } else if (!hasTwoTypes || !validLength || !noRepeats) {
      alert('Password does not meet the required conditions!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/signup', {
        id: userId,
        password: password,
        email: email,
        username: name,
        phone_number: phoneNumber, // 전화번호
      });

      if (response.data.success) {
        const token = response.data.token; // 서버에서 반환된 JWT
        localStorage.setItem('jwtToken', token); // JWT 로컬 스토리지에 저장
        alert('회원가입 성공!');
        window.location.href = '/'; // 메인 페이지로 리다이렉트
      } else {
        alert(`회원가입 실패: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('회원가입 중 문제가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
      <div className="signup-container">
        <div className="signup-form">
          <div className="logo-container">
            <img src="/apple_logo.png" alt="logo" className="signlogo" />
          </div>
          <h2>회원가입</h2>

          <form onSubmit={handleSubmit}>
            <label>이름</label>
            <input
                type="text"
                placeholder="홍길동"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label>전화번호</label>
            <input
                type="tel"
                placeholder="010-1234-5678"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
            />

            <label>이메일</label>
            <input
                type="email"
                placeholder="example@teachtree.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label>아이디</label>
            <input
                type="text"
                placeholder="아이디를 입력하세요"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
            />

            <label>비밀번호</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <ul className="password-rules">
              <li className={hasTwoTypes ? 'valid' : ''}>
                ✓ 영문/숫자/특수문자 중, 2가지 이상 포함
              </li>
              <li className={validLength ? 'valid' : ''}>
                ✓ 8자 이상 32자 이하 (공백 제외)
              </li>
              <li className={noRepeats ? 'valid' : ''}>
                ✓ 연속 3자 이상 동일한 문자/숫자 제외
              </li>
            </ul>

            <label>비밀번호 확인</label>
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />

            <div className="newsletter-checkbox">
              <input
                  type="checkbox"
                  id="newsletter"
                  checked={isNewsletterChecked}
                  onChange={(e) => setIsNewsletterChecked(e.target.checked)}
              />
              <label htmlFor="newsletter">회원 가입 시에 유용한 최신 소식을 받아보세요.</label>
            </div>

            <button type="submit" className="signup-button">가입하기</button>
          </form>
        </div>
      </div>
  );
};

export default SignUp;
