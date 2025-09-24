import React from 'react';

function ThemeToggle() {
  const get = () =>
    (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') ||
    'light';
  const [theme, setTheme] = React.useState<'light' | 'dark'>(get());

  React.useEffect(() => {
    const saved = (localStorage.getItem('theme') as 'light' | 'dark') || get();
    document.documentElement.setAttribute('data-theme', saved);
    setTheme(saved);
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        width: 40,
        height: 20,
        borderRadius: 20,
        border: '1px solid var(--border, #ccc)',
        background: theme === 'light' ? '#eee' : '#333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: theme === 'light' ? 'flex-start' : 'flex-end',
        padding: 2,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: theme === 'light' ? 'yellow' : 'white',
        }}
      />
    </button>
  );
}

export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'var(--g2) var(--g4)',
      }}
    >
      <div style={{ fontWeight: 900 }}>PORTFOLIO</div>
      <nav style={{ display: 'flex', gap: 'var(--g3)', alignItems: 'center' }}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <ThemeToggle /> 
      </nav>
    </header>
  );
}
