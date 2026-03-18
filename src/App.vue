<template>
  <div class="scene">
    <!-- Atmospheric glow layers -->
    <div class="glow glow--center" />
    <div class="glow glow--tl" />
    <div class="glow glow--br" />

    <!-- Grid background via CSS -->
    <div class="grid-bg" />

    <!-- Main content -->
    <main class="stage">
      <HeroSection />
    </main>

    <!-- Corner labels -->
    <span class="corner corner--bl">nakurulabs.com</span>
    <span class="corner corner--br">© 2025 Nakuru Labs</span>
  </div>
</template>

<script setup>
import HeroSection from './components/HeroSection.vue'
</script>

<style scoped>
.scene {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Grid */
.grid-bg {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 48px 48px;
  opacity: 0.45;
  pointer-events: none;
  z-index: 0;
}

/* Vignette over grid */
.grid-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 75% 75% at 50% 50%, transparent 25%, var(--bg) 100%);
}

/* Glow blobs */
.glow {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.glow--center {
  width: 640px;
  height: 420px;
  background: radial-gradient(ellipse, #7c3aed 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.18;
  filter: blur(110px);
}

.glow--tl {
  width: 340px;
  height: 340px;
  background: radial-gradient(ellipse, #5b21b6 0%, transparent 70%);
  top: -120px;
  left: -120px;
  opacity: 0.14;
  filter: blur(90px);
}

.glow--br {
  width: 300px;
  height: 300px;
  background: radial-gradient(ellipse, #6d28d9 0%, transparent 70%);
  bottom: -80px;
  right: -80px;
  opacity: 0.12;
  filter: blur(90px);
}

/* Main stage */
.stage {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Corner labels */
.corner {
  position: fixed;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  color: var(--muted);
  opacity: 0.45;
  text-transform: uppercase;
  z-index: 2;
}

.corner--bl { bottom: 28px; left: 32px; }
.corner--br { bottom: 28px; right: 32px; }

@media (max-width: 480px) {
  .corner { display: none; }
}
</style>
