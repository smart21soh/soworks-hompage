"use client";
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Hero Section with Video Background */}
      <section style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

        {/* Placeholder Video Banner */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.4
          }}
        >
          {/* A reliable placeholder video source for demonstration */}
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,1) 100%)', zIndex: 1 }}></div>

        {/* Hero Content */}
        <div className="animate-fade-in" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px', padding: '0 20px' }}>
          <h1 className="text-glow" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1 }}>
            CREATE. <br />
            <span className="text-gradient">INNOVATE.</span> <br />
            INSPIRE.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', fontWeight: 300 }}>
            아름다운 디지털 경험을 만들어갑니다.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <a href="#portfolio" className="glass-panel glass-btn glass-btn-primary">
              작업물 보기
            </a>
            <a href="#contact" className="glass-btn glass-btn-outline">
              연락하기
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '60px', textAlign: 'center' }}><span className="text-gradient">Selected Works</span></h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {/* Project Box 1 */}
          <div className="glass-panel portfolio-card">
            <div style={{ position: 'absolute', inset: 0, background: 'url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80) center/cover', opacity: 0.6 }}></div>
            <div className="overlay" style={{ background: 'rgba(124, 58, 237, 0.8)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '10px' }}>Project Alpha</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>UI/UX Design & Development</p>
            </div>
          </div>

          {/* Project Box 2 */}
          <div className="glass-panel portfolio-card">
            <div style={{ position: 'absolute', inset: 0, background: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80) center/cover', opacity: 0.6 }}></div>
            <div className="overlay" style={{ background: 'rgba(6, 182, 212, 0.8)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '10px' }}>Neon Dashboard</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Web Application</p>
            </div>
          </div>

          {/* Project Box 3 */}
          <div className="glass-panel portfolio-card">
            <div style={{ position: 'absolute', inset: 0, background: 'url(https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80) center/cover', opacity: 0.6 }}></div>
            <div className="overlay" style={{ background: 'rgba(6, 182, 212, 0.8)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '10px' }}>Geometric Data</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Data Visualization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '100px 20px', textAlign: 'center', background: 'var(--glass-bg)', borderTop: '1px solid var(--glass-border)' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Let's Work Together</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>새로운 도전을 언제나 환영합니다.</p>
        <a href="mailto:hello@example.com" className="glass-panel glass-btn glass-btn-primary">
          이메일 보내기
        </a>
      </section>

      {/* Footer */}
      <footer style={{ padding: '30px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <Link href="/privacy" style={{ textDecoration: 'underline', marginRight: '20px', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>개인정보 보호정책</Link>
          <Link href="/terms" style={{ textDecoration: 'underline', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>이용약관</Link>
        </div>
        <div>
          © {new Date().getFullYear()} My Portfolio. Built with Next.js.
        </div>
      </footer>
    </main>
  );
}
