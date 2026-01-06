# Excel Imagery

A high-end, editorial landing page for Excel Imagery — a premier photography and videography consultancy in Uyo, Nigeria. Built with a strict monochrome aesthetic and sophisticated user experience.

## ✨ Features

- **Editorial Design System**: Monochrome (black/white) aesthetic with minimal gold accents
- **Responsive Layout**: Mobile-first design with smooth desktop scaling
- **Premium Typography**: `Instrument Serif` for headings, `Outfit` for body text
- **Automated Booking System**: Integrated with Web3Forms for professional email delivery
- **Smooth Animations**: Framer Motion for elegant transitions and interactions
- **Custom Form Design**: Two-column editorial layout with sidebar information
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🎨 Design Philosophy

The site embodies a **monochrome editorial** aesthetic inspired by high-end fashion magazines and luxury brand portfolios. Key principles:

- **High contrast** black and white foundation
- **Generous white space** for premium feel
- **Subtle grain texture** overlay for tactile quality
- **Editorial typography** with varying weights and styles
- **Restrained gold accents** (`#D4AF37`) used only for prestige elements

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 7
- **Styling**: Tailwind CSS v4 + Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Web3Forms (automated email delivery)
- **Fonts**: Google Fonts (Instrument Serif, Outfit)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Mbakara1/excel_package.git
cd excel_package

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Configuration

### Web3Forms Setup

The booking form uses [Web3Forms](https://web3forms.com) for automated email delivery:

1. The API key is already configured in `src/components/BookingForm.jsx`
2. Emails are sent to `pmbakara@gmail.com`
3. No additional setup required — it works out of the box

To modify the recipient email, update line 19 in `BookingForm.jsx`:

```javascript
access_key: 'your-web3forms-key-here',
```

### Content Customization

- **Contact Info**: Update in `src/components/Footer.jsx` and `src/components/BookingForm.jsx`
- **Packages**: Edit the `packages` array in `src/components/Pricing.jsx`
- **Terms**: Modify content in `src/components/Terms.jsx`
- **Gallery Images**: Replace images in `src/components/GalleryPreview.jsx`

## 📂 Project Structure

```
excel-package/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Sticky navigation with mobile menu
│   │   ├── Hero.jsx             # Landing section
│   │   ├── Pricing.jsx          # Package cards (6 volumes)
│   │   ├── Terms.jsx            # Accordion-style T&C
│   │   ├── GalleryPreview.jsx   # Photo showcase
│   │   ├── BookingForm.jsx      # Two-column reservation form
│   │   └── Footer.jsx           # Footer with developer credit
│   ├── App.jsx                  # Main component assembly
│   ├── index.css                # Global styles & design tokens
│   └── main.jsx                 # React entry point
├── public/
│   └── Excel Imagery white logo format.png
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the `dist` folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Deploy the `dist` folder to gh-pages branch
```

## 🎯 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: ~345KB (minified JS) + ~35KB (CSS)
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <2.5s

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Credits

**Design & Development**: [Goodness Mbakara](https://x.com/goodnesmbakara)  
**Client**: Excel Imagery  
**Location**: Uyo, Nigeria

## 📄 License

© 2026 Excel Imagery Archive. All Rights Reserved.

---

Built with ❤️ using React, Vite, and Tailwind CSS
