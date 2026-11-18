import { Bot, Gamepad2, Languages, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type LearningFeature = {
  id: string
  title: string
  description: string
  tag: string
  icon: LucideIcon
  tone: 'blue' | 'teal' | 'gold'
}

const features: LearningFeature[] = [
  {
    id: 'ai-tutor',
    title: 'AI Tutor',
    description: 'Get a patient explanation, a fresh example, or a hint when you need one.',
    tag: 'Personalized learning',
    icon: Bot,
    tone: 'blue',
  },
  {
    id: 'learning-games',
    title: 'Learning Games',
    description: 'Turn practice into play and build skills one satisfying round at a time.',
    tag: 'Learn by playing',
    icon: Gamepad2,
    tone: 'teal',
  },
  {
    id: 'language-learning',
    title: 'Language Learning',
    description: 'Explore new words and cultures with short, confidence-building lessons.',
    tag: 'Explore new languages',
    icon: Languages,
    tone: 'gold',
  },
]

export function FeatureGrid() {
  return (
    <section
      className="learning-section"
      id="learning-tools"
      aria-labelledby="learning-title"
    >
      <div className="section-heading">
        <div>
          <span className="section-kicker">
            <Sparkles aria-hidden="true" /> Your learning toolkit
          </span>
          <h2 id="learning-title">Where would you like to begin?</h2>
        </div>
        <p>Pick a path, follow your curiosity, and make a little progress today.</p>
      </div>

      <div className="feature-grid">
        {features.map((feature) => {
          const Icon = feature.icon

          return (
            <article
              className="feature-card"
              id={feature.id}
              key={feature.id}
              aria-labelledby={`${feature.id}-title`}
            >
              <span className={`feature-icon feature-icon--${feature.tone}`} aria-hidden="true">
                <Icon />
              </span>
              <h3 id={`${feature.id}-title`}>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="feature-tag">{feature.tag}</span>
            </article>
          )
        })}
      </div>
    </section>
  )
}
