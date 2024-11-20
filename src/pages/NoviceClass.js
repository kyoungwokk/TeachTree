import React from 'react';
import './NoviceClass.css';

function NoviceClass() {
    return (
        <div className="novice-class">
            {/* 상단 소개 섹션 */}
            <div className="intro-section">
                <div className="intro-text">
                    <h2>Teach Tree는 어떤 학습을 제공하나요?</h2>
                    <h1>Teach Tree는<br />IT분야의 기반을 다질 수 있는<br />학습기회를 제공합니다.</h1>
                    <p>경제적, 사회적 배경에 상관 없이<br />누구나 잠재력을 펼칠 수 있는 사회를 만들어 갑니다.</p>
                </div>
                <div className="circle-image-container">
                    <img src="circle3.png" alt="Teach Tree Categories" className='circle-image' />
                </div>
            </div>

            {/* 노베이스 컨텐츠 장점 섹션 */}
            <div className="advantages-section">
                <h2>Teach Tree가 집중하는 핵심가치</h2>
                <div className="advantage-cards">
                    <div className="advantage-card">고객의 필요성을 중시<br />우리는 실효보다 고객의 필요한 것에 최우선을 둡니다.</div>
                    <div className="advantage-card">수강생들의 결과물을 위한 강의<br />고객이 원하는 결과를 위해 필요한 강습을 충족하여 창의성을 발휘할 수 있도록 합니다.</div>
                    <div className="advantage-card">지속성장의 원동력을 부여<br />누구나 성장 가능할 수 있도록 지속성과 성장을 추구하는 플랫폼을 만듭니다.</div>
                    <div className="advantage-card">트렌드를 반영한 강의 개선<br />최신 기술에 맞춘 현장 실무 강의를 제공합니다.</div>
                    <div className="advantage-card">보다 혁신을 고민하는 강의<br />최신 IT 기술 트렌드를 반영하여 혁신적인 강의를 제공합니다.</div>
                </div>
            </div>

            {/* 추가 섹션 */}
            <div className="additional-section">
                <h2>Teach Tree의 목표</h2>
                <p>Teach Tree는 사회 전 분야에 필요한 IT 인재들을 육성하고자 목표를 갖고 있습니다.</p>
                {/* 추가 콘텐츠 삽입 */}
            </div>
        </div>
    );
}

export default NoviceClass;
