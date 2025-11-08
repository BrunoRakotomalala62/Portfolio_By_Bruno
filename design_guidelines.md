# Design Guidelines: Developer Portfolio Website

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern developer portfolio leaders (GitHub profiles, Dribbble, Behance portfolios) while maintaining professional credibility. This portfolio balances visual appeal with technical professionalism, requiring custom showcase elements beyond standard patterns.

**Core Principles**:
- Professional yet personable presentation
- Visual hierarchy that guides attention to work samples
- Interactive elements that demonstrate technical skill
- Clean, scannable layouts for recruiters and clients

## Typography System

**Hierarchy**:
- Hero Name: Display/Extra large (text-5xl to text-7xl), bold weight (font-bold)
- Job Title/Role: Large (text-2xl to text-3xl), medium weight (font-medium)
- Section Headings: Extra large (text-4xl), semi-bold (font-semibold)
- Subsection/Project Titles: Large (text-xl to text-2xl), medium weight
- Skill Names: Medium (text-lg), medium weight
- Body Text: Base to large (text-base to text-lg), normal weight (font-normal)
- Labels/Tags: Small (text-sm), medium weight

**Font Selection**: Use 2 complementary Google Fonts - one clean sans-serif for headings (Inter, Poppins, or Space Grotesk), one readable sans-serif for body (Inter, DM Sans, or Outfit)

## Layout System

**Spacing Units**: Use Tailwind spacing of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 (desktop), py-12 to py-16 (mobile)
- Card spacing: p-6 to p-8
- Element gaps: gap-4, gap-6, gap-8
- Container margins: mx-auto with max-w-7xl

**Grid System**:
- Skills: 3-column grid on desktop (grid-cols-3), 2-column tablet (md:grid-cols-2), single column mobile
- Projects: 3-column grid on desktop, 2-column tablet, single column mobile
- Maintain consistent gap-6 to gap-8 between grid items

## Component Library

### Hero Section
- Full-width section with centered content (min-h-screen flex items-center)
- Circular profile image with subtle border/shadow (w-32 h-32 to w-40 h-40)
- Name, title, and 2-3 line description stacked vertically
- Primary CTA button ("View My Work" scroll anchor) with substantial padding (px-8 py-3)
- Clean background treatment (solid or subtle gradient)

### Skills Section
- Card-based layout with individual skill cards
- Each card contains:
  - Skill icon or technology logo (h-12 w-12)
  - Skill name (text-lg font-medium)
  - Proficiency level badge (Expert/Advanced/Intermediate) with badge styling (px-3 py-1 rounded-full text-sm)
  - Animated progress bar (h-2 rounded-full with filled portion)
  - Percentage indicator (text-sm)
  - Brief description (2-3 lines, text-sm)
- Cards with rounded corners (rounded-lg to rounded-xl) and padding (p-6)

### Projects Gallery
- Filter buttons row at top:
  - Horizontal button group (All/Frontend/Backend/Full Stack)
  - Active state clearly distinguished
  - Buttons with padding (px-6 py-2), rounded (rounded-lg)
- Project cards with:
  - Featured image (aspect-ratio-video, rounded-t-lg)
  - Overlay on hover with gradient backdrop
  - Project title (text-xl font-semibold)
  - Category badge (small, rounded pill style)
  - Brief description (2-3 lines)
  - Technology tags (inline-flex gap-2, text-xs with individual tag styling)
  - "View Live" link/button with external link icon
- "Load More" button at bottom (if needed)

### About Section
- Two-column layout on desktop (grid-cols-2), single column mobile
- Left column: Detailed bio text (max-w-prose for readability)
- Right column: Profile image or key stats
- Info items with icons:
  - Location with map pin icon
  - Years of experience with clock icon
  - Contact link with appropriate icon

### Footer
- Social media links with icon buttons (w-10 h-10 rounded-full)
- Contact information
- Quick navigation links
- Simple, clean layout (py-8)

## Images

**Hero Section**: Professional headshot/profile photo, circular crop, 320x320px minimum, centered above name and title

**Skills Section**: Technology icons from Font Awesome or Heroicons (outline style preferred for modern look)

**Projects Gallery**: 
- Each project requires featured image (16:9 aspect ratio preferred)
- Images should be high-quality screenshots or project visuals
- Minimum 800x450px for clarity
- Consistent aspect ratio across all project cards

**About Section**: Secondary profile photo or workspace image (optional but recommended), rectangular format

## Interactions & States

- **Filter Buttons**: Click to toggle active state, smooth transition of active indicator
- **Project Cards**: Scale slightly on hover (scale-105), show overlay with additional info
- **Skill Progress Bars**: Animate from 0 to percentage on scroll into view
- **Scroll Behavior**: Smooth scroll for CTA anchor links
- **Hover States**: Subtle lift on all cards (translate-y slightly, add shadow)

## Accessibility Requirements

- All interactive elements have minimum 44x44px touch targets
- Proper heading hierarchy (h1 for name, h2 for sections, h3 for subsections)
- Alt text for all images (profile, project screenshots)
- Sufficient color contrast for all text (4.5:1 minimum)
- Focus indicators visible on keyboard navigation
- ARIA labels for filter buttons and social links

## Icon Library

Use **Heroicons** (outline style) via CDN for:
- External link icons on project cards
- Location pin, clock, and contact icons in About section
- Social media icons in footer
- Arrow or chevron icons for navigation

## Responsive Breakpoints

- Mobile: < 768px (single column layouts, stacked navigation)
- Tablet: 768px - 1024px (2-column grids, compact spacing)
- Desktop: > 1024px (3-column grids, full layout features)