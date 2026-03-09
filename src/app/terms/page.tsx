"use client";
import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
    return (
        <main style={{ minHeight: '100vh', padding: '100px 20px', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <Link href="/" className="glass-btn glass-btn-outline" style={{ alignSelf: 'flex-start', padding: '10px 20px', fontSize: '0.9rem' }}>
                ← 홈으로 돌아가기
            </Link>

            <div className="glass-panel" style={{ padding: '40px', marginTop: '20px' }}>
                <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '30px' }}>이용약관</h1>

                <div style={{ lineHeight: '1.8', color: 'var(--text-muted)' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '30px', marginBottom: '15px' }}>1. 일반 사항</h2>
                    <p>
                        본 웹사이트는 개인 포트폴리오 및 소개 목적으로 운영되며, 제공되는 모든 정보는 정보 제공 목적으로만 사용됩니다.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '30px', marginBottom: '15px' }}>2. 저작권</h2>
                    <p>
                        웹사이트에 포함된 디자인, 코드, 텍스트 및 이미지(퍼블릭 도메인 제외) 등의 저작권은 운영자에게 귀속됩니다. 무단 복제 및 수정 후 재배포를 금지합니다.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '30px', marginBottom: '15px' }}>3. 면책 조항</h2>
                    <p>
                        본 사이트의 외부 링크로 향하는 타 사이트의 내용이나 정책에 대해서는 책임을 지지 않습니다.
                    </p>
                </div>
            </div>
        </main>
    );
}
