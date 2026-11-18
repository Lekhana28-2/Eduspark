import { FeatureGrid } from '@/components/eduspark/feature-grid'
import { HeroSection } from '@/components/eduspark/hero-section'
import { LibraryPreview } from '@/components/eduspark/library-preview'
import { SiteHeader } from '@/components/eduspark/site-header'

export function DashboardScreen() {
  return (
    <div className="app-shell" id="top">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeatureGrid />
        <LibraryPreview />
      </main>
    </div>
  )
}
