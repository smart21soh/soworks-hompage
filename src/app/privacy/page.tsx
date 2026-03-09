"use client";
import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <main style={{ minHeight: '100vh', padding: '100px 20px', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <Link href="/" className="glass-btn glass-btn-outline" style={{ alignSelf: 'flex-start', padding: '10px 20px', fontSize: '0.9rem' }}>
                ← 홈으로 돌아가기
            </Link>

            <div className="glass-panel" style={{ padding: '40px', marginTop: '20px' }}>
                <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '30px' }}>개인정보 처리방침</h1>

                <div style={{ lineHeight: '1.8', color: 'var(--text-muted)' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '30px', marginBottom: '15px' }}>1. 수집하는 개인정보 항목</h2>
                    <p>
                        본 웹사이트는 회원가입 기능이 없으며, 연락하기 기능을 통한 이메일 정보 외에 별도의 개인정보를 수집하지 않습니다.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '30px', marginBottom: '15px' }}>2. 개인정보의 수집 및 이용 목적</h2>
                    <p>
                        수집된 이메일 정보는 오직 문의 사항에 대한 답변 및 소통을 위해서만 제한적으로 사용됩니다.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '30px', marginBottom: '15px' }}>3. 개인정보의 보유 및 이용 기간</h2>
                    <p>
                        문의 내용 및 답변 완료 후 관련 법령에 명시되지 않는 한 즉시 파기합니다.
                    </p>
                </div>
            </div>
        </main>
    );
}
