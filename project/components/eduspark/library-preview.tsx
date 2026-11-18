import { ArrowRight, BookMarked } from 'lucide-react'

export function LibraryPreview() {
  return (
    <section className="library-preview" id="library" aria-labelledby="library-title">
      <span className="library-mark" aria-hidden="true">
        <BookMarked />
      </span>
      <div className="library-copy">
        <span className="library-kicker">Your library</span>
        <h2 id="library-title">Keep good ideas close.</h2>
        <p>
          A home for the lessons, notes, and discoveries you want to come back to.
        </p>
      </div>
      <a className="library-action" href="#learning-tools">
        Explore learning tools <ArrowRight aria-hidden="true" />
      </a>
    </section>
  )
}
