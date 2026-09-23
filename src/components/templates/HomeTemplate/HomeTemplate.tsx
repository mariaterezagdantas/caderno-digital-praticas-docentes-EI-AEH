import {
  Hero,
  ModulesSection,
  NavigationCallout,
  RepositoryIntroduction,
} from '../../organisms'

export function HomeTemplate() {
  return (
    <>
      <Hero />
      <RepositoryIntroduction />
      <ModulesSection />
      <NavigationCallout />
    </>
  )
}
