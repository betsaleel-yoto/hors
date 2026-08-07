---
name: HOREB Excellence
colors:
  surface: '#f9f9f8'
  surface-dim: '#dadad9'
  surface-bright: '#f9f9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f3'
  surface-container: '#eeeeed'
  surface-container-high: '#e8e8e7'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#404944'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1f0'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#2b6954'
  primary: '#003527'
  on-primary: '#ffffff'
  primary-container: '#064e3b'
  on-primary-container: '#80bea6'
  inverse-primary: '#95d3ba'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#0c342a'
  on-tertiary: '#ffffff'
  tertiary-container: '#254b40'
  on-tertiary-container: '#92baab'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f0d6'
  primary-fixed-dim: '#95d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#0b513d'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#c2ebdc'
  tertiary-fixed-dim: '#a7cfc0'
  on-tertiary-fixed: '#002018'
  on-tertiary-fixed-variant: '#284e42'
  background: '#f9f9f8'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 72px
    fontWeight: '300'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-sm:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '300'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  headline-md:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  margin-desktop: 80px
  margin-mobile: 24px
  gutter: 32px
  section-padding: 120px
---

## Brand & Style

The design system embodies the intersection of institutional stability and high-fashion editorial. It is designed for an international investment firm that commands respect through precision and legacy while maintaining a modern, sophisticated edge.

The aesthetic blends **Minimalism** with **Glassmorphism**. It prioritizes vast white space (luxury as a lack of clutter) and utilizes high-contrast typography to create a rhythmic, authoritative reading experience. The UI should feel like a premium digital publication—calm, confident, and meticulously organized. Visuals are treated with cinematic gravity, utilizing deep shadows and translucent layers to suggest depth and transparency.

## Colors

The palette is anchored in **Deep Emerald** and **Dark Forest**, representing the firm’s roots in mining and institutional growth. **Matte Gold** is used sparingly as an accent for high-level interactive elements or critical status indicators, signifying excellence.

Backgrounds primarily utilize **Warm White** and **Soft Ivory** to reduce the harshness of pure white, creating a more "paper-like" editorial feel. **Charcoal** provides the necessary weight for primary text, ensuring maximum legibility against light surfaces.

## Typography

The typographic hierarchy relies on the tension between the classic **EB Garamond** (standing in for Cormorant) and the systematic **Inter**. 

- **Headlines:** Use thin and light weights for large-scale headings. The generous line height and slight negative letter spacing on larger sizes create a distinctive, custom-tailored look.
- **Body:** Inter is set with a slightly increased tracking (letter-spacing) to enhance readability and evoke a sense of "breathing room."
- **Labels:** Small utility text and overlines should be set in Inter SemiBold, all-caps, with significant letter spacing to differentiate them from body content.

## Layout & Spacing

This design system employs a **Fixed Grid** on desktop to maintain the precision of a printed journal. Layouts center around a 12-column structure with wide gutters to allow for expansive "negative space" compositions.

**Key Layout Principles:**
- **Vertical Spacing:** Use exceptionally deep padding (120px+) between major sections to emphasize the firm's unhurried, confident pace.
- **Asymmetry:** Occasionally break the grid with large-scale imagery or "pull quotes" to mimic a high-end magazine layout.
- **Mobile Adaptivity:** On mobile, margins reduce to 24px, and vertical spacing compresses to 64px, while maintaining the high-contrast ratio of typography.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Subtle Glassmorphism** rather than aggressive shadows.

1.  **Surfaces:** The primary surface is Warm White. Secondary containers use Soft Ivory with a 1px border of Champagne (#E7E5E4) for definition.
2.  **Glassmorphism:** Navigation bars and modal overlays utilize a high-density background blur (20px+) with a 40% opacity Ivory tint. This creates a "frosted" effect that feels expensive and modern.
3.  **Shadows:** When necessary, use "Ambient Shadows"—ultra-diffused (40px-60px blur), very low opacity (5-8%), and tinted with Deep Emerald to avoid a "muddy" gray appearance.

## Shapes

The shape language is disciplined and professional. **Soft (0.25rem)** roundedness is the standard for cards and buttons. This provides a hint of approachability without sacrificing the architectural rigor of the "Institutional Trust" aesthetic. 

- **Images:** Should remain sharp (0px) or use a very minimal 4px radius to maintain a "photographic print" feel.
- **Interactive Elements:** Buttons and form inputs follow the `rounded-sm` (0.25rem) logic.
- **Decorative Elements:** Use thin, 1px horizontal and vertical rules (Matte Gold or Sage) to separate sections, reinforcing the grid.

## Components

### Buttons
- **Primary:** Deep Emerald background, Warm White text. No border. 0.25rem radius.
- **Secondary:** Transparent background, Deep Emerald 1px border.
- **Tertiary/Ghost:** Matte Gold text, no background. Used for "Read More" or "View Collection" actions.

### Cards
Cards are used to house investment data or mining reports. They should have no shadow by default, instead using a 1px border in Champagne. On hover, a soft ambient shadow is applied, and the border may transition to Matte Gold.

### Input Fields
Inputs should be "Minimalist Editorial" style—either a bottom-border only or a very light Sage-bordered box. Use Inter for input text and EB Garamond for field labels to maintain the brand voice.

### Specialized Components
- **Data Tables:** High-density, with thin Sage dividers. Headers in all-caps Inter.
- **Quote Blocks:** Large EB Garamond Italic text, centered, with a Matte Gold vertical line to the left.
- **Image Overlays:** Text placed directly on drone photography should sit on a Glassmorphic scrim to ensure legibility while maintaining the cinematic impact.