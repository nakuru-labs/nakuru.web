<template>
  <section class="hero">
    <!-- Logo -->
    <div class="logo-wrap" :class="{ visible: shown }">
      <img src="/logo-lockup.png" alt="Nakuru Labs" class="logo-img" />
      <span class="logo-labs">LABS</span>
    </div>

    <!-- Divider -->
    <div class="divider" :class="{ visible: shown }" />

    <!-- Tagline -->
    <p class="tagline" :class="{ visible: shown }">
      Tools for game developers
    </p>

    <!-- Links -->
    <div class="links" :class="{ visible: shown }">
      <a
        class="cta"
        href="https://fludex.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Explore FludeX</span>
        <span class="cta-arrow">→</span>
      </a>

      <a class="contact" href="mailto:contact@nakurulabs.com">
        contact@nakurulabs.com
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const shown = ref(false)
onMounted(() => {
  requestAnimationFrame(() => {
    setTimeout(() => { shown.value = true }, 60)
  })
})
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding: 0 24px;
}

/* ── Logo ── */
.logo-wrap {
  position: relative;
  width: 220px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}

.logo-labs {
  position: absolute;
  bottom: 7%;      /* % so it scales with the wrap at every size */
  right: -4px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  color: var(--muted);
  line-height: 1;
  pointer-events: none;
}

.logo-wrap.visible {
  opacity: 1;
  transform: translateY(0);
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  mix-blend-mode: lighten;
}

/* ── Divider ── */
.divider {
  width: 1px;
  height: 32px;
  background: linear-gradient(to bottom, transparent, var(--accent), transparent);
  margin: 8px 0;
  opacity: 0;
  transition: opacity 0.9s 0.1s cubic-bezier(0.16, 1, 0.3, 1);
}

.divider.visible {
  opacity: 0.4;
}

/* ── Tagline ── */
.tagline {
  font-family: var(--font-mono);
  font-weight: 300;
  font-size: 0.68rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 52px;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.9s 0.15s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.9s 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

.tagline.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── Links ── */
.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.9s 0.28s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.9s 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

.links.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── CTA button — white border, fills violet on hover ── */
.cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 32px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #ffffff;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: color 0.25s, border-color 0.25s;
}

.cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 0;
}

.cta:hover {
  color: #ffffff;
  border-color: var(--accent);
}

.cta:hover::before {
  transform: scaleX(1);
}

.cta span,
.cta-arrow {
  position: relative;
  z-index: 1;
}

.cta-arrow {
  transition: transform 0.2s;
}

.cta:hover .cta-arrow {
  transform: translateX(5px);
}

/* ── Contact link ── */
.contact {
  font-family: var(--font-mono);
  font-size: 0.63rem;
  font-weight: 300;
  color: var(--muted);
  letter-spacing: 0.12em;
  border-bottom: 1px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}

.contact:hover {
  color: var(--text);
  border-color: var(--muted);
}

/* ── Responsive ── */
@media (max-width: 480px) {
  .logo-wrap {
    width: 160px;
    height: 160px;
  }

  .logo-labs {
    font-size: 0.58rem;
    letter-spacing: 0.14em;
    right: -14px;   /* push outside wrap to clear NAKURU text */
  }
}
</style>