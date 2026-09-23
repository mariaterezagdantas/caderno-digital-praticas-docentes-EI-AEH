import styles from './HeroIllustration.module.css'

export function HeroIllustration() {
  return (
    <figure className={styles.frame}>
      <svg className={styles.artwork} viewBox="0 0 520 380" role="img" aria-labelledby="home-art-title home-art-desc">
        <title id="home-art-title">Um encontro de leitura, escuta e imaginação</title>
        <desc id="home-art-desc">Rabisco editorial de uma professora e uma criança compartilhando um livro junto ao leito hospitalar. Um pequeno brinquedo e uma cortina aberta situam o encontro. Traços livres, sem detalhes faciais, e pequenas manchas pastel destacam a presença e a experiência educativa.</desc>
        <g fill="none" stroke="var(--color-sage-700)" strokeLinecap="round" strokeLinejoin="round">
          {/* A few washes leave most of the page empty. */}
          <path d="M133 160c10-5 19-2 24 5 4 9 1 18-5 23-10 5-20 1-22-7-1-8-3-15 3-21Z" fill="var(--color-sage-100)" stroke="none" />
          <path d="M271 224c12-4 23-3 31 1 6 5 3 10-5 10-9-2-18 1-25 0-7-2-8-7-1-11Z" fill="var(--color-terracotta-100)" stroke="none" />
          <path d="M374 282c12-3 26-2 35 2 4 4 1 8-7 8-8-1-18 1-28-1-5-2-5-6 0-9Z" fill="var(--color-mist-100)" stroke="none" />
          {/* Open curtain contours, not a frame around the scene. */}
          <path d="M313 62c24-2 45 1 69-1 17-1 33-1 49 0m-117 7c0 21-3 40-9 59m12-20c-1 9-4 17-8 23m117-63c-1 24 3 49 7 69m-12-65c1 18 1 31 4 47" strokeWidth="1.05" opacity=".65" />
          {/* Teacher, leaning toward the shared book. */}
          <path d="M172 127c-7-1-12-7-16-12-4-6-4-12-2-18 2-8 8-12 15-14 7-2 14 0 19 4 7 5 11 12 9 20-1 7-5 14-11 18" strokeWidth="1.65" />
          <path d="M154 108c-4-6-4-13-1-20 3-7 10-11 17-12 8-1 15 2 21 7 4 3 5 8 7 12-6-1-10-5-15-5-4-1-9 0-12 3-3 4-3 9-7 11" strokeWidth="1.75" />
          <path d="M151 88c-5-3-10-2-12 3-2 4 1 9 5 9l7-2m18 32-3 9m17-9 5 9" strokeWidth="1.15" />
          <path d="M165 137c-14 0-25 9-32 22-7 12-10 25-13 39-3 10-3 21-6 31m68-90c13 2 24 14 29 25 4 8 8 16 12 22-5 4-11 8-17 9-6-8-12-17-18-23m-44 11c-4 15-5 32-6 47c12 3 25 4 37 1" strokeWidth="1.7" />
          <path d="M223 189c10 7 19 17 28 25 4 3 8 6 13 7m-56-23c11 10 22 21 34 28 6 3 12 5 18 4m4-9c6-3 10-2 14 1l4 5c-2 2-5 1-8-1m-14 4c5 2 9 1 13-1" strokeWidth="1.25" />
          <path d="M194 145c12 6 15 18 21 28m4 4c10 6 21 10 30 14 5 2 10 3 15 2m-3 5c-7 1-13 0-17-2" strokeWidth="1.2" />
          <path d="M116 237c-4 11-2 23 8 27 13 5 26 6 40 8l-11 44m21-80c14 5 25 14 26 23 0 13-12 24-20 36l-9 23m-20 1 13 2m7 0 15-1" strokeWidth="1.45" />
          <path d="M103 245c15 1 30 0 45 1m-44 7-5 54m47-34-1 20" strokeWidth="1.05" />
          {/* Child sitting upright, reaching into the reading encounter. */}
          <path d="M350 160c-7-2-12-7-13-13-2-7 0-13 5-17 6-5 14-5 21-1 6 4 10 11 8 17-1 6-5 11-10 13m-24-16c-3-7-1-14 5-19 6-4 12-5 18-2 6 2 11 6 13 12-7-3-12-5-17-2-4 2-6 4-9 4" strokeWidth="1.55" />
          <path d="M347 165c-11 4-17 13-19 24-3 12-1 25-3 37 15 4 31 3 44 0-1-13 0-25-3-36-1-10-5-18-11-23" strokeWidth="1.6" />
          <path d="M332 180c-6 8-11 17-17 22-6 3-13 4-19 4m34-10c-6 8-14 13-21 15l-13 1m0-7c-5-2-9-1-13 1-2 2-2 4 1 4l8-1m-2 6 8-2" strokeWidth="1.25" />
          <path d="M358 191c-5 10-10 16-18 22m-9-6 6 8m-11 16c-3 10 0 17 10 20l33 1m-8-20c12 5 23 10 31 17" strokeWidth="1.3" />
          {/* Pillow and bed outline quietly locate the scene in hospital. */}
          <path d="M375 167c12-3 25 0 35 2 3 17 4 35 2 51-12 0-24-3-33-1m-2-45c1 9 0 17 2 23" strokeWidth="1.05" />
          <path d="M397 250c11 1 25 1 37 0m-111 9c39-1 77 2 111-1 4 3 6 7 4 12-38 1-77-2-115 0m115-24c-1-23 2-44 0-65 1-6 7-7 9-1 1 29 0 58 0 87m-113 9-1 40m105-41 2 40m-116 1 15 1m99-1 14 2" strokeWidth="1.25" />
          {/* Book, tray and a small open-ended play object. */}
          <path d="M238 228c15-4 30-1 43 5 14-7 28-8 42-6l-4 23c-12-2-24 1-36 6-15-6-30-8-46-6l1-16m44 1 1 17m-34-16 18 4m24-2 19-3" strokeWidth="1.2" />
          <path d="M230 260c29-2 65 1 96-1m-48 7-2 49m-11 3 30 1m87-79c-4-2-6-5-5-9 2-5 8-6 12-2 4 5 1 10-3 11m17 0 1-12 12 2-1 12-10-1" strokeWidth="1.05" />
          <path d="M83 332c22-1 46 1 65 0m152-1c25-2 45 1 63 0m50-1 37 1" strokeWidth=".85" opacity=".5" />
        </g>
      </svg>
    </figure>
  )
}