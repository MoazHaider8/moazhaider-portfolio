# Industry Page Template Documentation

## Overview
This is a **universal industry page template** that powers all 27 industry-specific SEO pages under `/industries/{slug}`. 

The template is fully dynamic—you only need to add industry data to `lib/industryData.ts` to generate a complete, conversion-optimized landing page.

---

## File Structure

```
app/industries/[slug]/page.tsx          # Dynamic route with metadata & schema
lib/industryData.ts                     # Industry-specific content data
components/industry-page/
  ├── IndustryHero.tsx                  # Hero with form
  ├── UnderstandingIndustry.tsx         # Search behavior explanation
  ├── IndustryChallenges.tsx            # Pain points
  ├── IndustryStrategy.tsx              # SEO approach
  ├── IndustryIncludes.tsx              # Deliverables
  ├── IndustryLocations.tsx             # Geographic targeting
  ├── IndustryWhyChoose.tsx             # Trust & authority
  ├── IndustryRelatedServices.tsx       # Internal linking to services
  ├── IndustryFAQ.tsx                   # FAQs with accordion
  └── IndustryCTA.tsx                   # Final conversion section
```

---

## Page Structure (10 Sections)

### 1. Industry Hero
**Purpose:** Immediate relevance, trust, lead capture

**Features:**
- Industry-specific badge and H1
- Positioning statement (1-2 lines)
- Dual CTAs (Free Audit + Book Call)
- Quick audit form (right column)
- Trust indicators (Local/National focus, White-Hat, Direct Access)

**Customization:**
- `badge`: Display name (e.g., "HVAC SEO Services")
- `h1`: Main headline with industry name
- `positioning`: 1-2 sentence value prop

---

### 2. Understanding Industry
**Purpose:** Industry education, entity definition, search intent explanation

**Features:**
- 3-column layout
- How customers search (search behavior patterns)
- Buying intent (emergency, research, comparison)
- SEO focus (local, national, or hybrid)

**Customization:**
- `searchBehavior`: Describe typical search patterns
- `buyingIntent`: Explain intent type and conversion timeline
- `seoType`: "local" | "national" | "hybrid"

---

### 3. Common SEO Challenges
**Purpose:** Pain-point alignment, problem awareness

**Features:**
- Icon checklist with X marks
- 5-6 industry-specific challenges
- Glassmorphism cards with hover effects

**Customization:**
- `challenges`: Array of 5-6 pain points unique to the industry

**Examples:**
- HVAC: "Seasonal demand fluctuations"
- Plumbing: "24/7 emergency competition"
- SaaS: "Long sales cycles and complex buying committees"

---

### 4. My SEO Strategy
**Purpose:** Authority, methodology, internal linking to services

**Features:**
- Strategy explanation paragraph
- Links to 3 primary service pages
- "No cookie-cutter" trust message

**Customization:**
- `strategyApproach`: 2-3 sentences on industry-specific SEO approach
- `primaryServices`: Array of service slugs (e.g., `["local-seo", "content-seo"]`)

---

### 5. What's Included
**Purpose:** Tangible deliverables, outcome-focused value

**Features:**
- 2-column grid of deliverables
- Each item has title + outcome
- Checkmark icons with gradient backgrounds

**Customization:**
- `includes`: Array of objects with:
  - `title`: Deliverable name
  - `outcome`: What the customer gets (outcome, not feature)

**Example:**
```typescript
{
  title: "Emergency Keyword Research",
  outcome: "Target high-intent searches like 'refrigerator repair near me'"
}
```

---

### 6. Industry + Locations Synergy
**Purpose:** Geographic targeting explanation, local SEO reinforcement

**Features:**
- Explains how industry + location targeting works
- Single vs multi-location support
- International availability note

**Customization:**
- `locationStrategy`: 2-3 sentences on geographic approach for this industry

---

### 7. Why Choose Me
**Purpose:** Conversion, trust, differentiation

**Features:**
- 4 reasons in 2x2 grid:
  1. Industry experience (custom per industry)
  2. White-hat only
  3. Direct expert access
  4. ROI-driven SEO
- No contracts trust signal

**Customization:**
- `industryExperience`: 2-3 sentences on your specific experience with this industry

---

### 8. Related SEO Services
**Purpose:** Internal linking, cross-sell, site architecture

**Features:**
- 4-column grid of related services
- Links to service pages
- Bottom CTAs to /services and /industries

**Customization:**
- `relatedServices`: Array of service slugs (typically 4-8)
- `relatedCMS`: (Optional) Array of CMS slugs if applicable

**Service Slugs Available:**
- `local-seo`
- `technical-seo`
- `content-seo`
- `on-page-seo`
- `link-building`
- `seo-audit`
- `ecommerce-seo`
- `off-page-seo`

---

### 9. FAQs
**Purpose:** Long-tail rankings, objection handling

**Features:**
- Accordion UI (click to expand)
- 6-10 industry-specific questions
- Schema-ready (already in page.tsx)

**Customization:**
- `faqs`: Array of objects with:
  - `question`: FAQ question
  - `answer`: Detailed answer (2-4 sentences)

**FAQ Types to Include:**
- How long does SEO take in this industry?
- Is local SEO important for {industry}?
- Can SEO compete with [competitor type]?
- What's the ROI on {industry} SEO?
- Do I need [specific tactic] for this industry?
- How important are reviews for {industry}?

---

### 10. Industry CTA
**Purpose:** Final conversion push

**Features:**
- Large headline with industry name
- Dual CTAs (Free Audit + Book Call)
- Trust microcopy (30-min audit details)
- 4 trust signals (No Contracts, White-Hat, Direct Access, ROI-Focused)

**Customization:**
- Auto-populates from industry data
- No customization needed (uses industry name dynamically)

---

## Schema Markup (Auto-Generated)

Each industry page includes:

1. **Service Schema**
   - Name: "{Industry} SEO Services"
   - Provider: Moaz Haider
   - Area Served: United States

2. **WebPage Schema**
   - URL, title, description
   - Connected to Service schema

3. **BreadcrumbList Schema**
   - Home → Industries → {Industry Name}

4. **FAQPage Schema**
   - All FAQs from industryData.ts

---

## SEO Metadata (Auto-Generated)

Each page gets:
- Unique `<title>` tag
- Meta description
- Canonical URL
- Open Graph tags (Facebook/LinkedIn)
- Twitter Card tags

**Customization:**
- `metaTitle`: Page title (50-60 characters)
- `metaDescription`: Meta description (150-160 characters)

---

## Internal Linking Strategy

Each industry page automatically links to:

1. **Service Pages** (Section 4 & 8)
   - Primary services in Strategy section
   - Related services in Related Services section

2. **Industries Hub** (/industries)
   - Breadcrumb
   - Related Services section

3. **CMS Pages** (Optional, if relevant)
   - Can link to WordPress, Shopify, etc. if applicable

4. **Case Studies** (Optional)
   - Can be added to Related Services section

---

## Adding a New Industry

### Step 1: Add Data to `lib/industryData.ts`

```typescript
"carpet-cleaning-seo": {
  name: "Carpet Cleaning",
  slug: "carpet-cleaning-seo",
  icon: "Sparkles", // Lucide icon name
  
  metaTitle: "Carpet Cleaning SEO Services | Get More Bookings",
  metaDescription: "Increase carpet cleaning leads with local SEO...",
  
  badge: "Carpet Cleaning SEO",
  h1: "SEO Services for Carpet Cleaning Companies That Want More Bookings",
  positioning: "Turn local searches into booked appointments...",
  
  searchBehavior: "Customers search for carpet cleaning with...",
  buyingIntent: "Transactional - customers book same-day or next-day...",
  seoType: "local",
  
  challenges: [
    "High competition from franchises",
    "Seasonal demand fluctuations",
    "Low-quality leads from aggregators",
    "Price shopping customers",
    "Review reputation management"
  ],
  
  strategyApproach: "My carpet cleaning SEO focuses on...",
  primaryServices: ["local-seo", "on-page-seo", "technical-seo"],
  
  includes: [
    { title: "Local Keyword Research", outcome: "Target 'carpet cleaning near me' searches" },
    { title: "Google Business Profile", outcome: "Rank in Local Pack for your service area" },
    // ... more deliverables
  ],
  
  locationStrategy: "Carpet cleaning is hyper-local. I create...",
  
  industryExperience: "I've helped carpet cleaning companies...",
  
  relatedServices: ["local-seo", "on-page-seo", "technical-seo", "seo-audit"],
  
  faqs: [
    {
      question: "How long does carpet cleaning SEO take?",
      answer: "Local SEO for carpet cleaning typically..."
    },
    // ... 5-9 more FAQs
  ]
}
```

### Step 2: Build the Site

```bash
npm run build
```

The page is automatically generated at `/industries/carpet-cleaning-seo`

### Step 3: Test

Visit: `http://localhost:3000/industries/carpet-cleaning-seo`

Check:
- Metadata in `<head>`
- Schema JSON-LD
- All internal links work
- Form submission works
- Mobile responsive

---

## Design System

### Colors
- Primary: Purple (#9333ea) to Pink (#ec4899) gradients
- Background: Slate-900 (#0f172a)
- Text: White (#ffffff) on dark, Gray-900 on light
- Accents: Purple/Pink for CTAs and highlights

### Components
- **Glassmorphism**: `backdrop-blur-xl bg-white/5 border border-white/10`
- **Cards**: Rounded-2xl, gradient borders on hover
- **Buttons**: Gradient backgrounds, hover scale effects
- **Icons**: Lucide React, 16x16 or 14x14 size

### Animations
- Framer Motion `whileInView` for scroll reveals
- Stagger delays (0.1s increments)
- Hover scale (1.05) for interactive elements
- Transform transitions for arrows and icons

---

## Content Guidelines

### Headlines
- Use industry name prominently in H1
- Include action words: "Generate", "Dominate", "Increase", "Win"
- Focus on outcomes: "More Leads", "Consistent Bookings", "Higher Rankings"

### Copy Tone
- Direct, confident, results-focused
- Avoid jargon unless industry-specific
- Use "I" (not "we") for personal connection
- Short paragraphs (2-3 sentences max)

### CTAs
- Primary: "Get Free SEO Audit"
- Secondary: "Book a Strategy Call"
- Always paired (give options)

### Trust Signals
- No contracts
- White-hat only
- Direct expert access
- ROI-driven
- Industry experience

---

## Performance

### Static Generation
- All pages are statically generated at build time
- No runtime data fetching
- Fast page loads (<1s)

### Image Optimization
- Use Next.js Image component if adding images
- WebP format preferred
- Lazy loading enabled

### Code Splitting
- Each component is code-split automatically
- Framer Motion animations tree-shaken

---

## Maintenance

### Update All Industries
If you need to update a component globally (e.g., change CTA wording):
1. Edit the component file in `components/industry-page/`
2. Rebuild: `npm run build`
3. All 27 pages update automatically

### Update One Industry
If you need to update content for one industry:
1. Edit the industry data in `lib/industryData.ts`
2. Rebuild: `npm run build`
3. Only that industry page updates

---

## Next Steps

### Remaining Industries to Add
You currently have 3 industries with full data:
1. ✅ Appliance Repair SEO
2. ✅ HVAC SEO
3. ✅ Plumbing SEO

**Still need data for 24 industries:**
- Carpet Cleaning
- Gutter Installation
- Siding
- Bathroom Remodeling
- Kitchen Remodeling
- Flooring
- Walk-In Tubs
- Dumpster Rental
- Home Security
- Mold Remediation
- Electrician
- Roofing
- Water Damage Restoration
- Garage Door Repair
- Pest Control
- Self Storage
- Fire Damage Restoration
- Healthcare
- Law Firm
- Real Estate
- SaaS
- Home Services
- B2B
- Dental

### Industry Data Template
For each industry, define:
- Search behavior patterns
- 5-6 common challenges
- SEO strategy approach
- 6 deliverables (title + outcome)
- Location strategy
- Industry experience (2-3 sentences)
- 6-10 FAQs

---

## Conversion Optimization

### CTA Placement
- Hero (2 CTAs)
- After Challenges
- After Why Choose Me
- Final CTA section
- Every 2-3 sections

### Form Strategy
- Hero form: Quick audit request (name, email, website)
- Bottom form: Full contact form (FreeAuditForm component)
- Both submit to same `/api/contact` endpoint

### Trust Building
- Industry experience mentioned early
- White-hat guarantee throughout
- No contracts / no lock-ins
- Direct expert access
- ROI focus over vanity metrics

---

## SEO Best Practices

### On-Page SEO
- H1 includes industry name + "SEO Services"
- H2s use variations: "{Industry} SEO", "SEO for {Industry}"
- Internal links use descriptive anchor text
- Image alt tags (if added) include industry keywords

### Technical SEO
- Canonical URLs set
- Schema markup complete
- Mobile-responsive
- Fast load times (<1s)
- Proper heading hierarchy

### Keyword Strategy
- **Primary:** "{industry} SEO services"
- **Secondary:** "SEO for {industry} companies", "{industry} SEO consultant"
- **Long-tail:** Captured in FAQs

### Avoid Cannibalization
- Industry pages = WHO you serve
- Service pages = HOW you execute
- CMS pages = WHERE it's implemented
- Each targets distinct search intent

---

## Support

For questions or customization help:
1. Check this documentation first
2. Review existing industry data (HVAC, Plumbing) for examples
3. Test locally before deploying
4. Commit changes incrementally (one industry at a time)

**Good luck building out all 27 industry pages! 🚀**
