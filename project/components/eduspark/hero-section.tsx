import Image from 'next/image'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="hero-panel" aria-labelledby="hero-title">
      <div className="hero-copy">
        <span className="hero-kicker">
          <Sparkles aria-hidden="true" /> A brighter way to learn
        </span>
        <h1 className="hero-title" id="hero-title">
          <span>Learn smarter,</span>
          <span className="hero-title-accent">grow further.</span>
        </h1>
        <p className="hero-description">
          Build confidence, find your focus, and make every study session count.
          Your next big idea starts here.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#learning-tools">
            <span className="action-play" aria-hidden="true">
              <Play />
            </span>
            Start learning
            <ArrowRight className="action-arrow" aria-hidden="true" />
          </a>
          <a className="secondary-action" href="#library">
            Visit your library <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="hero-note">
          <span className="note-sparkles" aria-hidden="true">
            <Sparkles />
          </span>
          Small steps today. Big possibilities tomorrow.
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <Image
          className="hero-illustration"
          src="/eduspark-hero.png"
          alt=""
          width={1360}
          height={896}
          priority
          sizes="(max-width: 760px) 90vw, 48vw"
        />
      </div>
    </section>
  )
}
