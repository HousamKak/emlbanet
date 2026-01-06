# Em Elbanat Website - Comprehensive Development Plan

## 1. Project Overview

**Business Name:** إم البنات (Em Elbanat - "Mother of Girls")
**Type:** Home-based kitchen / Catering service
**Location:** Beirut, Lebanon
**Tagline:** "Homemade Food" / "أكل بيت عالطلب"
**Contact:** Phone: 71/259389
**Social:** Instagram: [@em.elbanet_](https://www.instagram.com/em.elbanet_)

---

## 2. Visual Identity (Extracted from Logo & Poster)

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Light Green | `#9ACD32` | Primary accent, borders, buttons |
| Brown | `#6B4423` | Text, chef apron, warm accents |
| Coral/Salmon | `#E07B6A` | Highlights, sparkles, CTAs |
| Cream/Beige | `#F5F5DC` | Background |
| White | `#FFFFFF` | Cards, content areas |
| Golden | `#D4A84B` | Accent for promotions |

### Typography Recommendations
- **Arabic:** Cairo or Tajawal (Google Fonts) - warm, friendly, readable
- **English:** Nunito or Poppins - rounded, matches Arabic warmth
- **Headings:** Bold, slightly larger
- **Body:** Regular weight, comfortable reading size

### Design Elements
- Circular frames for food images (matching logo style)
- Dotted border patterns (from logo)
- Sparkle/star decorations (coral colored)
- Soft, warm, homey aesthetic
- Family-friendly, inviting feel

---

## 3. Menu Items Catalog

### Category: Salads & Mezze (سلطات ومقبلات)
| Item (AR) | Item (EN) | Price | Serves | Image |
|-----------|-----------|-------|--------|-------|
| فتوش | Fatoush | $15 | 6 ppl | Fatoush 6ppl - 15$.jpeg |
| متبل باذنجان | Eggplant Mutabal | $7 | Large plate | check ref 3.jpeg |
| متبل حمص | Hummus | $8 | Large plate | - |

### Category: Stuffed Dishes (محاشي)
| Item (AR) | Item (EN) | Price | Notes | Image |
|-----------|-----------|-------|-------|-------|
| ورق عنب لحمة بقر | Grape Leaves (Beef) | $15/kg | +$5 cooked | check ref 1.jpeg |
| ورق عنب لحمة غنم | Grape Leaves (Lamb) | $20/kg | +$5 cooked | check ref 1.jpeg |
| شيخ المحشي + رز | Sheikh el Mahshi + Rice | $25 | 4 ppl | شيخ المحشي.jpeg |

### Category: Kibbeh & Fried Items (كبب ومقالي)
| Item (AR) | Item (EN) | Price | Notes | Image |
|-----------|-----------|-------|-------|-------|
| كبب | Kibbeh (dozen) | $8 | +$2 fried | صفيحة دزينة.jpeg |
| رقاقات | Rqaqat (dozen) | $6 | +$2 fried | - |

### Category: Pastries & Fatayer (فطاير ومعجنات)
| Item (AR) | Item (EN) | Price | Notes | Image |
|-----------|-----------|-------|-------|-------|
| فطاير سبانخ | Spinach Fatayer (dozen) | $3 | - | سبانغ 3$.jpeg |
| فطاير لحمة غنم | Lamb Fatayer (dozen) | $6 | - | check ref 4.jpeg |
| صفيحة | Sfiha (dozen) | $6 | - | صفيحة دزينة.jpeg |

### Category: Desserts & Sweets (حلويات)
| Item (AR) | Item (EN) | Price | Notes | Image |
|-----------|-----------|-------|-------|-------|
| بوش دو نويل | Bûche de Noël | $35 | 40cm | Bûche de noël.jpeg |
| تارت فواكه | Fruit Tart | $25 | 20 ppl | تارت ٢٠ شخص.jpeg |

---

## 4. Technical Architecture

### Stack
```
Frontend: React 18+ with Vite
Styling: Tailwind CSS (mobile-first, RTL support)
i18n: react-i18next (Arabic/English)
State: React Context (for cart)
Build: Vite
Deployment: GitHub Pages (static)
CI/CD: GitHub Actions
```

### Project Structure
```
emlbanet/
├── public/
│   ├── images/
│   │   ├── menu/           # Optimized menu images (WebP)
│   │   ├── logo.webp
│   │   └── poster.webp
│   ├── favicon.ico
│   └── _redirects          # For SPA routing
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── menu/
│   │   │   ├── MenuCard.tsx
│   │   │   ├── MenuCategory.tsx
│   │   │   └── MenuGrid.tsx
│   │   ├── cart/
│   │   │   ├── CartDrawer.tsx
│   │   │   ├── CartItem.tsx
│   │   │   └── CartSummary.tsx
│   │   ├── promotions/
│   │   │   ├── PromoBanner.tsx
│   │   │   └── DealCard.tsx
│   │   └── common/
│   │       ├── LanguageToggle.tsx
│   │       ├── Button.tsx
│   │       └── Badge.tsx
│   ├── context/
│   │   ├── CartContext.tsx
│   │   └── LanguageContext.tsx
│   ├── data/
│   │   └── menu.ts         # Menu items data (easy to update)
│   ├── i18n/
│   │   ├── index.ts
│   │   ├── ar.json
│   │   └── en.json
│   ├── hooks/
│   │   ├── useCart.ts
│   │   └── useLanguage.ts
│   ├── pages/
│   │   └── Home.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   └── menu.ts
│   ├── App.tsx
│   └── main.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## 5. Image Handling Strategy

### Recommendation: Local Optimized Images
For a small menu site without backend, local optimized images are best:

1. **Convert to WebP format** - 25-35% smaller than JPEG
2. **Create multiple sizes** for responsive loading:
   - Thumbnail: 200x200px (menu grid)
   - Medium: 400x400px (detail view)
   - Large: 800x800px (hero/promotional)
3. **Lazy loading** - Only load images when they enter viewport
4. **Use `<picture>` element** with fallbacks

### Build-time Image Processing
```bash
# Using sharp or imagemin during build
- Compress all images
- Generate WebP versions
- Create srcset variants
```

### Why NOT External CDN for this project:
- Small number of images (~15-20)
- No backend means no dynamic image management
- GitHub Pages hosting is free and fast
- Simpler deployment without external dependencies

---

## 6. Site Sections & Features

### 6.1 Header (Fixed on Mobile)
- Logo (compact on scroll)
- Language toggle (AR/EN)
- Cart icon with item count badge
- Hamburger menu (mobile)

### 6.2 Hero Section
- Large promotional banner (using poster aesthetic)
- Business tagline
- Quick CTA: "View Menu" / "شاهد القائمة"

### 6.3 Promotions Section
- Highlighted deals/seasonal items
- Carousel or featured cards
- "New" / "Popular" / "Seasonal" badges

### 6.4 Menu Section
- Category tabs/pills (horizontal scroll on mobile)
- Grid of food cards with:
  - Circular image (matching brand)
  - Name (AR primary, EN secondary based on language)
  - Price
  - Serving size indicator
  - "Add to Order" button with quantity selector
  - Options toggles (cooked/uncooked, fried/unfried)

### 6.5 Cart Drawer (Slide-in)
- Item list with quantities
- Price modifiers (cooking options)
- Running total
- "Send Order via WhatsApp" button
- Clear cart option

### 6.6 Contact/Footer
- Phone number (click to call)
- Instagram link
- WhatsApp link
- Location hint (Beirut)
- Business hours (if provided)

---

## 7. Internationalization (i18n)

### Language Support
- **Default:** Arabic (RTL)
- **Secondary:** English (LTR)
- **Switching:** Toggle button, persisted in localStorage

### RTL Considerations
- Tailwind RTL plugin
- Logical properties (start/end vs left/right)
- Icon/image flipping where needed
- Number formatting

### Translation Keys Structure
```json
{
  "nav": { "menu": "القائمة", "cart": "السلة" },
  "menu": {
    "categories": { "salads": "سلطات", ... },
    "items": { ... }
  },
  "cart": { "total": "المجموع", "order": "اطلب الآن" },
  "common": { "add": "أضف", "remove": "إزالة" }
}
```

---

## 8. Cart & Ordering Flow

### Cart Features (No Backend)
1. Add items with quantity
2. Select item options (cooked/fried modifiers)
3. Calculate running total
4. Persist cart in localStorage
5. Generate WhatsApp message with order details

### WhatsApp Order Message Format
```
مرحبا! أود طلب التالي:
------------------
- ورق عنب لحمة بقر (مطبوخ) x2 - $40
- فطاير سبانخ x1 - $3
------------------
المجموع: $43

[Customer can add their address/notes in WhatsApp]
```

---

## 9. Mobile-First Design Approach

### Breakpoints
```css
/* Mobile first */
default: 0-639px (mobile)
sm: 640px+ (large mobile)
md: 768px+ (tablet)
lg: 1024px+ (desktop)
```

### Mobile Optimizations
- Touch-friendly tap targets (min 44px)
- Swipeable category tabs
- Bottom-sheet cart drawer
- Sticky header with scroll behavior
- Thumb-zone friendly CTAs
- Fast tap response (no 300ms delay)

### Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3s
- Lighthouse Mobile Score: 90+

---

## 10. CI/CD Pipeline (GitHub Actions)

### Workflow: `.github/workflows/deploy.yml`
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Deployment URL
After setting up GitHub repo: `https://[username].github.io/emlbanet/`
(Later: Custom domain when DNS is ready)

---

## 11. Data Structure for Easy Updates

### `src/data/menu.ts`
```typescript
export interface MenuItem {
  id: string;
  nameAr: string;
  nameEn: string;
  price: number;
  unit: 'item' | 'dozen' | 'kg' | 'plate';
  serves?: number;
  category: Category;
  image: string;
  options?: ItemOption[];
  badges?: ('new' | 'popular' | 'seasonal')[];
}

export interface ItemOption {
  id: string;
  nameAr: string;
  nameEn: string;
  priceModifier: number; // e.g., +5 for cooked
}

// Easy to add new items:
export const menuItems: MenuItem[] = [
  {
    id: 'grape-leaves-beef',
    nameAr: 'ورق عنب لحمة بقر',
    nameEn: 'Grape Leaves (Beef)',
    price: 15,
    unit: 'kg',
    category: 'stuffed',
    image: '/images/menu/grape-leaves.webp',
    options: [
      { id: 'cooked', nameAr: 'مطبوخ', nameEn: 'Cooked', priceModifier: 5 }
    ]
  },
  // ... more items
];
```

---

## 12. Additional Suggestions

### Features to Consider Adding
1. **Gallery section** - Showcase catering spreads (check ref 2 shows beautiful spread)
2. **Testimonials** - Customer reviews (can pull from Instagram)
3. **About section** - Brief story of "Em Elbanat"
4. **FAQ** - Delivery areas, order lead time, payment methods

### Future Enhancements (Phase 2)
1. **Online ordering form** - Netlify Forms or similar
2. **Menu PDF download** - Printable version
3. **Search/filter** - For larger menus
4. **Dark mode** - Optional
5. **PWA support** - Install as app

### SEO & Social
- OpenGraph meta tags
- Arabic & English meta descriptions
- Structured data (Restaurant schema)
- Instagram feed embed (optional)

---

## 13. Implementation Steps

### Phase 1: Project Setup
1. Initialize Vite + React + TypeScript project
2. Configure Tailwind CSS with RTL support
3. Set up i18n with Arabic/English
4. Create folder structure
5. Process and optimize images

### Phase 2: Core Components
1. Build Layout components (Header, Footer)
2. Create Menu data structure
3. Build MenuCard and MenuGrid components
4. Implement category filtering

### Phase 3: Cart Functionality
1. Create Cart context
2. Build CartDrawer component
3. Implement add/remove/quantity logic
4. Add WhatsApp order generation

### Phase 4: Polish & Promotions
1. Add promotions section
2. Implement language switching
3. Mobile optimizations
4. Performance tuning

### Phase 5: Deployment
1. Set up GitHub repository
2. Configure GitHub Actions
3. Test deployment
4. (Later) Configure custom domain

---

## 14. Questions for Clarification

Before proceeding, please confirm or provide:

1. **Business hours?** - Should we display operating hours?
2. **Delivery areas?** - Any specific areas served?
3. **Minimum order?** - Is there a minimum order amount?
4. **Current promotions/deals?** - Any specific deals to highlight?
5. **About text?** - Brief description of the business for About section?
6. **Preferred domain name?** - For when DNS setup is ready?

---

## Summary

This plan creates a modern, mobile-first bilingual website that:
- Perfectly matches your brand identity
- Makes it easy to browse and order food
- Works seamlessly on mobile devices
- Is easy to update when adding new menu items
- Deploys automatically via GitHub Actions
- Requires no backend or ongoing server costs

**Ready to proceed with implementation upon your approval!**
