import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { IntrinsicProps } from '../shared/classes'
import { Sun, Moon } from '../images'

const ThemeToggle = ({ className }: IntrinsicProps) => (
  <div className={className}>
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label>
          <input
            type="checkbox"
            onChange={event =>
              toggleTheme(event.target.checked ? 'dark' : 'light')
            }
            checked={theme === 'dark'}
            style={{ visibility: 'hidden' }}
          />
          {theme === 'dark' ? (
            <Sun height="2rem" width="2rem" />
          ) : (
            <Moon height="2rem" width="2rem" />
          )}
        </label>
      )}
    </ThemeToggler>
  </div>
)

interface HeaderProps {
  title: string
  description: string
}

const Header = ({
  title,
  description,
  className
}: HeaderProps & IntrinsicProps) => (
  <div className={`${className} md:flex md:justify-between md:items-center`}>
    <div>
      <h1 className="text-4xl md:text-6xl text-gray-900 dark:text-gray-50 font-bold mb-1 md:mb-2">
        {title}
      </h1>
      <code className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 font-thin">
        {description}
      </code>
    </div>
    <ThemeToggle className="md:mr-12" />
  </div>
)

export default Header
