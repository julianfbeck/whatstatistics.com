# Blog Documentation

This document covers the blog system for the Eyevo website, including components, posts, layout, and image guidelines.

## Blog Structure

### File Locations

```
src/
├── content/
│   └── blog/
│       ├── en/           # English posts
│       │   ├── post-slug.md
│       │   └── post-slug.mdx
│       ├── de/           # German posts
│       ├── es/           # Spanish posts
│       └── fr/           # French posts
├── components/
│   └── blog/             # Reusable blog components
│       ├── CardShowcase.astro
│       ├── CardGrid.astro
│       ├── SetShowcase.astro
│       ├── PriceComparison.astro
│       ├── CardsByPokemon.astro
│       ├── DownloadCTA.astro
│       ├── TopValueCards.astro
│       ├── SetStats.astro
│       └── RandomCard.astro
└── pages/
    ├── blog/
    │   ├── index.astro   # English blog listing
    │   └── [slug].astro  # English post pages
    └── [lang]/blog/
        ├── index.astro   # Localized blog listing
        └── [slug].astro  # Localized post pages
```

## Post Frontmatter Schema

```yaml
---
title: "Post Title"                    # Required
description: "Meta description"        # Required
pubDate: 2025-01-15                    # Required (YYYY-MM-DD)
updatedDate: 2025-01-20                # Optional
coverImage: "/images/path/image.webp"  # Optional - feature image
emojiCover: "🚀"                       # Optional - emoji fallback
gradientFrom: "#3b82f6"                # Optional - gradient start (with emoji)
gradientTo: "#06b6d4"                  # Optional - gradient end (with emoji)
tags: ["tag1", "tag2"]                 # Required (can be empty array)
author: "Julian"                       # Optional (defaults to "Eyevo Team")
draft: false                           # Optional (defaults to false)
---
```

## Cover Images

### Image Requirements

- **Location**: `/public/images/features/` or `/public/images/blog/`
- **Format**: WebP preferred for performance
- **Dimensions**: 1200x630px (16:9) recommended for social sharing
- **Size**: Keep under 200KB

### Available Feature Images

```
/images/features/
├── scanning/
│   └── ai-scanner.webp        # Scanner app screenshots
├── pricing/
│   └── market-values.webp     # Price display screenshots
├── card-details/
│   └── card-detail-1.webp     # Card detail views
└── collection/
    └── collection-view.webp   # Collection management
```

### Fallback: Emoji Covers

When no `coverImage` is available, use emoji covers with gradients:

```yaml
emojiCover: "💎"
gradientFrom: "#8b5cf6"
gradientTo: "#6366f1"
```

Common gradient combinations:
- Blue: `#3b82f6` → `#06b6d4`
- Purple: `#8b5cf6` → `#6366f1`
- Red/Orange: `#ef4444` → `#f97316`
- Green: `#22c55e` → `#14b8a6`

## MDX Components

Blog posts can use `.mdx` files to include interactive components. Import components at the top of the post after frontmatter.

### CardShowcase

Display a single card with details.

```mdx
import CardShowcase from '../../../components/blog/CardShowcase.astro';

<CardShowcase cardName="Charizard" setName="Base Set" />
```

**Props:**
- `cardName` (string) - Card name to search
- `setName` (string, optional) - Filter by set
- `showPrice` (boolean, default: true) - Show price info
- `variant` (string, optional) - "compact" or "detailed"

### CardGrid

Display multiple cards in a grid.

```mdx
import CardGrid from '../../../components/blog/CardGrid.astro';

<CardGrid cardNames={["Pikachu", "Charizard", "Blastoise"]} columns={3} />
```

**Props:**
- `cardNames` (string[]) - Array of card names
- `setName` (string, optional) - Filter by set
- `columns` (number, default: 3) - Grid columns

### SetShowcase

Display a set with its top cards.

```mdx
import SetShowcase from '../../../components/blog/SetShowcase.astro';

<SetShowcase setName="Evolving Skies" showCards={6} />
```

**Props:**
- `setName` (string) - Set name to display
- `showCards` (number, default: 8) - Number of cards to show

### PriceComparison

Compare prices across card variants.

```mdx
import PriceComparison from '../../../components/blog/PriceComparison.astro';

<PriceComparison cardName="Charizard" setName="Base Set" />
```

**Props:**
- `cardName` (string) - Card name
- `setName` (string, optional) - Filter by set

### CardsByPokemon

Display all cards featuring a specific Pokemon.

```mdx
import CardsByPokemon from '../../../components/blog/CardsByPokemon.astro';

<CardsByPokemon pokemon="Charizard" limit={12} />
```

**Props:**
- `pokemon` (string) - Pokemon name to search
- `limit` (number, default: 12) - Max cards to show
- `showPrice` (boolean, default: true) - Show prices
- `sortBy` ("price" | "date" | "set", default: "price") - Sort order
- `title` (string, optional) - Custom section title

### DownloadCTA

App download call-to-action with three variants.

```mdx
import DownloadCTA from '../../../components/blog/DownloadCTA.astro';

<!-- Compact inline CTA -->
<DownloadCTA variant="compact" title="Try Eyevo" description="Scan cards instantly." emoji="📲" />

<!-- Default CTA block -->
<DownloadCTA title="Ready to scan?" description="Download Eyevo now." emoji="📱" />

<!-- Banner CTA (use at end of posts) -->
<DownloadCTA variant="banner" title="Start Scanning" description="Free to try!" emoji="🎴" />
```

**Props:**
- `title` (string, default: "Ready to scan your cards?")
- `description` (string, default: "Download Eyevo and identify your Pokemon cards in under a second.")
- `variant` ("default" | "compact" | "banner", default: "default")
- `emoji` (string, default: "📱")

### TopValueCards

Display most valuable cards from the database.

```mdx
import TopValueCards from '../../../components/blog/TopValueCards.astro';

<TopValueCards limit={10} minPrice={50} title="Most Valuable Cards" />
```

**Props:**
- `limit` (number, default: 10) - Number of cards
- `minPrice` (number, default: 0) - Minimum price filter
- `title` (string, optional) - Section title
- `setSlug` (string, optional) - Filter by set
- `showRank` (boolean, default: true) - Show ranking numbers

### SetStats

Display comprehensive statistics for a set.

```mdx
import SetStats from '../../../components/blog/SetStats.astro';

<SetStats setSlug="base1" showTopCards={3} />
<!-- or -->
<SetStats setName="Base Set" showTopCards={5} />
```

**Props:**
- `setSlug` (string, optional) - Set slug
- `setName` (string, optional) - Set name (alternative to slug)
- `showTopCards` (number, default: 3) - Top valuable cards to show

### RandomCard

Display a random card with optional filters.

```mdx
import RandomCard from '../../../components/blog/RandomCard.astro';

<RandomCard title="Random Holo Card" rarity="Rare Holo" minPrice={10} />
```

**Props:**
- `seed` (number, optional) - Random seed for consistent builds
- `rarity` (string, optional) - Filter by rarity
- `type` (string, optional) - Filter by type (Fire, Water, etc.)
- `setSlug` (string, optional) - Filter by set
- `minPrice` (number, default: 0) - Minimum price
- `title` (string, default: "Random Card")
- `showStats` (boolean, default: true) - Show card stats

## Current Blog Posts

### English Posts (`src/content/blog/en/`)

| File | Title | Type |
|------|-------|------|
| `getting-started-with-eyevo.mdx` | Getting Started with Eyevo | Tutorial |
| `how-to-export-your-pokemon-collection.md` | How to Export Your Collection | Tutorial |
| `ai-vs-ocr-scanning-which-to-use.md` | AI vs OCR Scanning | Guide |
| `pokemon-card-rarity-guide.mdx` | Pokemon Card Rarity Symbols | Guide |
| `how-to-tell-if-pokemon-card-is-worth-money.mdx` | Is Your Card Worth Money? | Guide |
| `pokemon-card-price-data-explained.mdx` | Price Data Explained | Guide |
| `reverse-holo-vs-regular-holo.mdx` | Reverse Holo vs Regular Holo | Guide |
| `most-valuable-pokemon-cards-2026.mdx` | Most Valuable Cards 2026 | Value |
| `pokemon-card-condition-guide.mdx` | Condition Guide (NM, LP, etc.) | Guide |
| `best-pokemon-card-scanner-apps-2026.mdx` | Best Scanner Apps 2026 | Comparison |
| `is-psa-grading-worth-it.mdx` | Is PSA Grading Worth It? | Guide |
| `how-to-spot-fake-pokemon-cards.mdx` | How to Spot Fake Pokemon Cards | Authentication |
| `ar-view-pokemon-cards-in-real-world.mdx` | AR View: Place Cards in Real World | Feature |
| `share-pokemon-cards-and-collection.mdx` | Share Cards and Collection | Feature |

### Localized Posts

German translations are in `src/content/blog/de/`. Not all posts are translated.

## Blog Layout

### Post Page Structure

1. Breadcrumbs (Home > Blog > Post Title)
2. Cover Image (with colored background) or Emoji Cover
3. Tags (pill badges)
4. Title (h1)
5. Meta (Author, Date)
6. Content (MDX rendered)
7. App Promo Section (auto-included)
8. Back to Blog link

### BlogAppPromo Component

A promotional section automatically added to the end of every blog post featuring:
- Phone mockup with app video
- Headline and description
- Feature badges (Instant Scan, Live Prices, Collection Manager)
- App Store download button
- Trust indicators (rating, downloads, rank)

This component is included in the blog layout files and requires no manual insertion. It uses the `lang` prop to track App Store campaign source.

### Styling Classes

The blog content uses the `.blog-content` class with custom styles in `src/styles/global.css`:

- Headers: White text with proper margins
- Paragraphs: Gray text (`text-gray-300`)
- Links: Red color with hover state
- Code blocks: Dark background with syntax highlighting
- Tables: Styled with borders and hover states
- Lists: Proper bullet/number styling

## Writing Guidelines

1. **Use MDX for posts with interactive elements** - Cards, sets, CTAs
2. **Include DownloadCTA at strategic points** - After valuable sections
3. **Add CardsByPokemon for popular Pokemon** - Charizard, Pikachu, Umbreon
4. **Use TopValueCards for value-focused posts** - Grading, pricing guides
5. **Link to actual card/set pages** - `/cards/{slug}`, `/sets/{slug}`
6. **Keep cover images consistent** - Use feature images or emoji covers

## SEO Considerations

- **Title**: Include target keyword near the beginning
- **Description**: 150-160 characters with keyword
- **Tags**: Use relevant, searchable terms
- **Headings**: Use proper h2/h3 hierarchy
- **Internal links**: Link to card/set pages
- **Structured data**: Article schema auto-generated
