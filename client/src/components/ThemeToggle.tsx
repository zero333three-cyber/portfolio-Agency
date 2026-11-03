import React from 'react';
import './ThemeToggle.css';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={`celestial-toggle ${isDark ? 'is-dark' : 'is-light'}`}
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      role="switch"
      aria-checked={isDark}
    >
      <span className="celestial-track">
        {/* Clouds for Day Mode */}
        <span className="celestial-cloud cloud-1" aria-hidden="true" />
        <span className="celestial-cloud cloud-2" aria-hidden="true" />
        <span className="celestial-cloud cloud-3" aria-hidden="true" />

        {/* Stars for Night Mode */}
        <span className="celestial-star star-1" aria-hidden="true" />
        <span className="celestial-star star-2" aria-hidden="true" />
        <span className="celestial-star star-3" aria-hidden="true" />
        <span className="celestial-star star-4" aria-hidden="true" />
        <span className="celestial-star star-5" aria-hidden="true" />

        {/* Sun / Moon Orb */}
        <span className="celestial-orb" aria-hidden="true">
          <span className="moon-crater crater-1" />
          <span className="moon-crater crater-2" />
          <span className="moon-crater crater-3" />
          <span className="sun-corona" />
        </span>
      </span>

      <span className="celestial-tooltip">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};

export default ThemeToggle;

