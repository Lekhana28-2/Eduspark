import { BookOpen, Sparkles, UserRound } from 'lucide-react'

const navigation = [
  { label: 'Home', href: '#top', current: true },
  { label: 'AI Tutor', href: '#ai-tutor' },
  { label: 'Games', href: '#learning-games' },
  { label: 'Languages', href: '#language-learning' },
  { label: 'Library', href: '#library' },
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="EduSpark home">
          <span className="brand-symbol" aria-hidden="true">
            <BookOpen />
            <Sparkles className="brand-sparkle" />
          </span>
          <span className="brand-name">
            Edu<strong>Spark</strong>
          </span>
        </a>

        <nav className="primary-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              className="nav-link"
              href={item.href}
              key={item.label}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="student-profile">
          <span className="profile-avatar" aria-hidden="true">
            <UserRound />
          </span>
          <span className="profile-name">My learning</span>
        </div>
      </div>
    </header>
  )
}
