import { useMemo, useState } from "react"

type IconName = "grid" | "bag" | "return" | "box" | "users" | "receipt" | "staff" | "truck" | "chart" | "store" | "settings" | "search" | "bell" | "pin" | "wifi" | "clock" | "arrow" | "pound" | "basket" | "trend" | "alert" | "tag" | "pause" | "gift" | "card" | "cash" | "check" | "close" | "chevron" | "menu"

const iconPaths: Record<IconName, React.ReactNode> = {
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
    </>
  ),
  bag: (
    <>
      <path d="M6 8h12l1 13H5L6 8Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </>
  ),
  return: (
    <>
      <path d="M9 7H4v-5" />
      <path d="M4 7a9 9 0 1 1-1 10" />
    </>
  ),
  box: (
    <>
      <path d="m3 7 9 5 9-5-9-5-9 5Z" />
      <path d="m3 7 9 5v10l-9-5V7Z" />
      <path d="m21 7-9 5v10l9-5V7Z" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 2h12v20l-3-2-3 2-3-2-3 2V2Z" />
      <path d="M9 7h6M9 11h6M9 15h3" />
    </>
  ),
  staff: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 22a8 8 0 0 1 16 0M18 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 16 4-5 3 3 5-7" />
    </>
  ),
  store: (
    <>
      <path d="M3 9 5 3h14l2 6" />
      <path d="M5 13v8h14v-8M9 21v-6h6v6" />
      <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 12.6a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" />
      <circle cx="12" cy="20" r="1" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M14 7l5 5-5 5" />
    </>
  ),
  pound: (
    <>
      <path d="M8 20h9M8 12h7M16 5a4 4 0 0 0-8 1v9a5 5 0 0 1-2 4" />
    </>
  ),
  basket: (
    <>
      <path d="m3 9 2 11h14l2-11H3ZM8 9l4-6 4 6" />
      <path d="M9 13v3M15 13v3" />
    </>
  ),
  trend: (
    <>
      <path d="m3 17 6-6 4 4 7-8" />
      <path d="M14 7h6v6" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3 2 21h20L12 3Z" />
      <path d="M12 9v5M12 18h.01" />
    </>
  ),
  tag: (
    <>
      <path d="M20 13 13 20 3 10V3h7l10 10Z" />
      <circle cx="7.5" cy="7.5" r="1" />
    </>
  ),
  pause: (
    <>
      <rect x="5" y="4" width="5" height="16" rx="1" />
      <rect x="14" y="4" width="5" height="16" rx="1" />
    </>
  ),
  gift: (
    <>
      <rect x="3" y="9" width="18" height="12" rx="2" />
      <path d="M12 9v12M3 13h18M7.5 9C4 9 4 4 7 4c2 0 5 5 5 5M16.5 9C20 9 20 4 17 4c-2 0-5 5-5 5" />
    </>
  ),
  card: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="3" />
      <path d="M2 10h20M6 15h4" />
    </>
  ),
  cash: (
    <>
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <circle cx="12" cy="13" r="3" />
      <path d="M6 10H5v1M18 16h1v-1" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
}

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  )
}

function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  className?: string
  onClick?: () => void
  disabled?: boolean
}) {
  return (
    <button
      className={`button button--${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

function Logo() {
  return (
    <div className="logo">
      <div className="logo-mark">
        <div className="hanger">⌒</div>
      </div>
      <div>
        <div className="logo-name">StyleSphere</div>
        <div className="logo-pos">POINT OF SALE</div>
      </div>
    </div>
  )
}

const productImages = [
  "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1722340321028-5c7ce4d082f3?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1682397125609-47018c1cb3ee?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1643015862949-5c8d15a4242e?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1634653131107-ecc30d4501ac?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1773747310819-ae0ca63f5385?auto=format&fit=crop&w=600&q=85",
]

const products = [
  {
    id: 1,
    name: "Elodie Knit",
    desc: "Oatmeal · Soft merino blend",
    price: 68,
    stock: 8,
    image: productImages[0],
  },
  {
    id: 2,
    name: "Marlow Shoulder Bag",
    desc: "Tan · Italian leather",
    price: 89,
    stock: 4,
    image: productImages[1],
  },
  {
    id: 3,
    name: "Celia Oxford Shirt",
    desc: "Ivory · Organic cotton",
    price: 54,
    stock: 12,
    image: productImages[2],
  },
  {
    id: 4,
    name: "Aster Rib Cardigan",
    desc: "Forest · Lambswool",
    price: 72,
    stock: 2,
    image: productImages[3],
  },
  {
    id: 5,
    name: "Mabel Colour Knit",
    desc: "Rust mix · Brushed wool",
    price: 76,
    stock: 6,
    image: productImages[4],
  },
  {
    id: 6,
    name: "Luna Crew Knit",
    desc: "Cream · Cashmere blend",
    price: 96,
    stock: 9,
    image: productImages[5],
  },
]

type CartItem = typeof products[number] & { qty: number; size: string }

const navItems: { label: string; icon: IconName; screen?: string }[] = [
  { label: "Dashboard", icon: "grid", screen: "dashboard" },
  { label: "Sell", icon: "bag", screen: "sell" },
  { label: "Returns", icon: "return" },
  { label: "Products & Inventory", icon: "box" },
  { label: "Customers", icon: "users" },
  { label: "Orders & Receipts", icon: "receipt" },
  { label: "Staff & Shifts", icon: "staff" },
  { label: "Suppliers", icon: "truck" },
  { label: "Reports", icon: "chart" },
  { label: "Branches", icon: "store" },
  { label: "Settings", icon: "settings" },
]

function TopChrome({
  setScreen,
  menuOpen,
  setMenuOpen,
}: {
  setScreen: (value: string) => void
  menuOpen: boolean
  setMenuOpen: (value: boolean) => void
}) {
  return (
    <>
      <div className="utility">
        <div className="utility-location">
          <Icon name="pin" size={14} /> Birmingham — Bullring{" "}
          <span className="utility-chevron">⌄</span>
        </div>
        <div className="utility-meta">
          <span>
            <Icon name="clock" size={14} /> Tue 20 Oct 2026 · 10:42
          </span>
          <span>Till 04</span>
          <span className="online">
            <i /> Online
          </span>
          <div className="mini-avatar">AH</div>
          <span className="staff-name">
            Amelia Hart <small>Store Manager</small>
          </span>
        </div>
      </div>
      <div className="main-header">
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation"
        >
          <Icon name="menu" />
        </button>
        <Logo />
        <label className="global-search">
          <Icon name="search" />
          <input placeholder="Search products, SKUs, customers, receipts…" />
          <kbd>F2</kbd>
        </label>
        <div className="header-actions">
          <button className="icon-button" aria-label="Notifications">
            <Icon name="bell" />
            <i />
          </button>
          <Button onClick={() => setScreen("sell")}>
            <Icon name="bag" size={18} /> New Sale{" "}
            <span className="shortcut">F1</span>
          </Button>
        </div>
      </div>
    </>
  )
}

function Sidebar({
  screen,
  setScreen,
  open,
}: {
  screen: string
  setScreen: (value: string) => void
  open: boolean
}) {
  return (
    <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
      <div className="nav-eyebrow">WORKSPACE</div>
      <nav>
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`nav-item ${screen === item.screen ? "active" : ""}`}
            onClick={() => item.screen && setScreen(item.screen)}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
            {item.screen === "sell" && <kbd>F1</kbd>}
          </button>
        ))}
      </nav>
      <div className="help-card">
        <div className="orbit-small" />
        <div className="help-title">Need a hand?</div>
        <div className="help-copy">Chat with retail support</div>
        <button>
          Open support <Icon name="arrow" size={15} />
        </button>
      </div>
      <div className="sidebar-footer">
        <Icon name="wifi" size={17} />
        <div>
          <strong>All systems synced</strong>
          <span>Last update 2 mins ago</span>
        </div>
      </div>
    </aside>
  )
}

function Sparkline({ down = false }: { down?: boolean }) {
  return (
    <svg
      className={`sparkline ${down ? "down" : ""}`}
      viewBox="0 0 120 36"
      preserveAspectRatio="none"
    >
      <path
        className="spark-fill"
        d="M0 31 C10 25,16 29,25 21 S42 26,50 17 S68 20,77 12 S96 18,120 3 L120 36 L0 36Z"
      />
      <path d="M0 31 C10 25,16 29,25 21 S42 26,50 17 S68 20,77 12 S96 18,120 3" />
    </svg>
  )
}

function KpiCard({
  icon,
  label,
  value,
  trend,
  note,
  down = false,
}: {
  icon: IconName
  label: string
  value: string
  trend: string
  note: string
  down?: boolean
}) {
  return (
    <div className="kpi-card">
      <div className="kpi-top">
        <div className="icon-badge">
          <Icon name={icon} />
        </div>
        <span className={`trend-chip ${down ? "trend-chip--down" : ""}`}>
          <Icon name="trend" size={13} />
          {trend}
        </span>
      </div>
      <div className="kpi-label">{label}</div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-note">{note}</div>
      <Sparkline down={down} />
    </div>
  )
}

function SalesChart() {
  return (
    <div className="chart-wrap">
      <div className="chart-y">
        <span>£1.2k</span>
        <span>£900</span>
        <span>£600</span>
        <span>£300</span>
        <span>£0</span>
      </div>
      <svg
        className="sales-chart"
        viewBox="0 0 740 220"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="orangeFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8620C" stopOpacity=".24" />
            <stop offset="100%" stopColor="#E8620C" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className="grid-lines">
          <path d="M0 15H740M0 62H740M0 109H740M0 156H740M0 203H740" />
        </g>
        <path
          className="previous-line"
          d="M0 180 C50 167,75 175,110 146 S180 154,225 119 S310 131,357 91 S440 108,485 77 S565 95,615 56 S690 69,740 39"
        />
        <path
          className="area"
          d="M0 187 C48 181,74 161,112 168 S174 132,224 141 S304 99,358 112 S438 72,486 82 S561 49,616 61 S693 22,740 30 L740 220 L0 220Z"
        />
        <path
          className="current-line"
          d="M0 187 C48 181,74 161,112 168 S174 132,224 141 S304 99,358 112 S438 72,486 82 S561 49,616 61 S693 22,740 30"
        />
        <circle cx="616" cy="61" r="5" />
        <circle cx="616" cy="61" r="10" className="pulse-circle" />
      </svg>
      <div className="chart-x">
        <span>9am</span>
        <span>10am</span>
        <span>11am</span>
        <span>12pm</span>
        <span>1pm</span>
        <span>2pm</span>
        <span>3pm</span>
        <span>4pm</span>
        <span>5pm</span>
      </div>
    </div>
  )
}

function Dashboard({ setScreen }: { setScreen: (value: string) => void }) {
  return (
    <main className="content dashboard">
      <section className="hero-card">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-content">
          <div className="eyebrow">LIVE AT BIRMINGHAM — BULLRING</div>
          <div className="display-title">
            Good morning, <span>Amelia</span>
          </div>
          <div className="hero-copy">
            You’re <strong>18% ahead</strong> of last Tuesday. A beautiful start
            to the day.
          </div>
          <div className="hero-buttons">
            <Button onClick={() => setScreen("sell")}>
              Start Selling <Icon name="arrow" size={17} />
            </Button>
            <Button variant="outline">View Reports</Button>
          </div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-ring">
            <span>£4.2k</span>
            <small>TODAY</small>
          </div>
          <div className="hero-stat-note">
            <span className="dot-live" /> Live sales
          </div>
        </div>
      </section>

      <div className="section-heading">
        <div>
          <div className="eyebrow">TODAY’S PERFORMANCE</div>
          <div className="section-title">
            At a <span>glance</span>
          </div>
        </div>
        <div className="updated">
          <span className="dot-live" /> Updated live
        </div>
      </div>
      <section className="kpi-grid">
        <KpiCard
          icon="pound"
          label="TODAY’S REVENUE"
          value="£4,286.40"
          trend="+18.2%"
          note="vs £3,626 last Tuesday"
        />
        <KpiCard
          icon="receipt"
          label="TRANSACTIONS"
          value="74"
          trend="+9.4%"
          note="8 more than last Tuesday"
        />
        <KpiCard
          icon="basket"
          label="AVERAGE BASKET"
          value="£57.92"
          trend="+8.1%"
          note="Up £4.34 from last week"
        />
        <KpiCard
          icon="bag"
          label="ITEMS SOLD"
          value="132"
          trend="+12.6%"
          note="1.8 items per transaction"
        />
      </section>

      <section className="dashboard-grid">
        <div className="card sales-card">
          <div className="card-header">
            <div>
              <div className="eyebrow">HOURLY SALES</div>
              <div className="card-title">Sales through the day</div>
            </div>
            <div className="chart-legend">
              <span>
                <i className="legend-current" /> Today
              </span>
              <span>
                <i className="legend-previous" /> Last Tuesday
              </span>
            </div>
            <button className="period-button">
              Today <span>⌄</span>
            </button>
          </div>
          <SalesChart />
        </div>
        <div className="card alerts-card">
          <div className="card-header">
            <div>
              <div className="eyebrow">NEEDS ATTENTION</div>
              <div className="card-title">Store alerts</div>
            </div>
            <button className="round-arrow">
              <Icon name="arrow" />
            </button>
          </div>
          <div className="alert-list">
            <div className="alert-row">
              <div className="alert-icon amber">
                <Icon name="alert" />
              </div>
              <div>
                <strong>Low stock</strong>
                <span>8 products need attention</span>
              </div>
              <b>8</b>
            </div>
            <div className="alert-row">
              <div className="alert-icon green">
                <Icon name="truck" />
              </div>
              <div>
                <strong>Pending transfers</strong>
                <span>Leeds → Birmingham</span>
              </div>
              <b>3</b>
            </div>
            <div className="alert-row">
              <div className="alert-icon peach">
                <Icon name="return" />
              </div>
              <div>
                <strong>Refund approval</strong>
                <span>Waiting for your review</span>
              </div>
              <b>1</b>
            </div>
            <div className="alert-row">
              <div className="alert-icon red">
                <Icon name="clock" />
              </div>
              <div>
                <strong>Clock-in issue</strong>
                <span>Jordan Reed · 09:04</span>
              </div>
              <b>1</b>
            </div>
          </div>
          <button className="text-link">
            View all store alerts <Icon name="arrow" size={15} />
          </button>
        </div>
      </section>

      <section className="popular-section">
        <div className="ornament-title">
          <i />
          <span>BEST SELLERS TODAY</span>
          <i />
        </div>
        <div className="popular-header">
          <div className="section-title">
            The pieces they <span>love</span>
          </div>
          <button className="text-link">
            View product report <Icon name="arrow" size={15} />
          </button>
        </div>
        <div className="popular-grid">
          {products.slice(0, 4).map((product, index) => (
            <div className="popular-card" key={product.id}>
              <div className="rank-badge">0{index + 1}</div>
              <img src={product.image} alt={product.name} />
              <div className="popular-info">
                <div className="popular-name">{product.name}</div>
                <div className="popular-desc">
                  {product.desc.split(" · ")[0]} · {index + 4} sizes sold
                </div>
                <div className="popular-meta">
                  <strong>
                    {16 - index * 2} <small>UNITS</small>
                  </strong>
                  <strong>
                    £{(product.price * (16 - index * 2)).toLocaleString()}{" "}
                    <small>REVENUE</small>
                  </strong>
                </div>
              </div>
              <button
                className="quick-add"
                onClick={() => setScreen("sell")}
                aria-label={`Sell ${product.name}`}
              >
                +
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="promo">
        <div className="promo-content">
          <div className="eyebrow light">ACTIVE PROMOTION · UNTIL 31 OCT</div>
          <div className="promo-title">
            The Autumn <span>Edit</span>
          </div>
          <div className="promo-copy">
            20% off all knitwear · Online and in store
          </div>
          <Button className="promo-button">
            Manage Offer <Icon name="arrow" size={16} />
          </Button>
        </div>
        <div className="promo-image">
          <img src={productImages[3]} alt="Folded autumn knitwear" />
          <div className="promo-badge">
            <strong>20%</strong>
            <span>OFF</span>
          </div>
        </div>
      </section>

      <section className="status-strip">
        <div>
          <div className="status-icon">
            <Icon name="wifi" />
          </div>
          <span>
            TILL STATUS
            <strong>
              <i className="dot-live" /> 4 of 4 online
            </strong>
          </span>
        </div>
        <div>
          <div className="status-icon">
            <Icon name="clock" />
          </div>
          <span>
            LAST SYNC<strong>2 minutes ago</strong>
          </span>
        </div>
        <div>
          <div className="status-icon">
            <Icon name="cash" />
          </div>
          <span>
            CASH IN DRAWER<strong>£684.50</strong>
          </span>
        </div>
        <div>
          <div className="status-icon">
            <Icon name="staff" />
          </div>
          <span>
            SHIFT TIME<strong>3h 42m</strong>
          </span>
        </div>
      </section>
    </main>
  )
}

function ProductCard({
  product,
  onAdd,
}: {
  product: typeof products[number]
  onAdd: () => void
}) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className={`stock-pill ${product.stock <= 2 ? "low" : ""}`}>
          <i />
          {product.stock <= 2 ? `Only ${product.stock} left` : "In stock"}
        </span>
      </div>
      <div className="product-info">
        <div>
          <div className="product-name">{product.name}</div>
          <div className="product-desc">{product.desc}</div>
        </div>
        <div className="product-bottom">
          <strong>£{product.price.toFixed(2)}</strong>
          <button
            className="quick-add"
            onClick={onAdd}
            aria-label={`Add ${product.name}`}
          >
            +
          </button>
        </div>
      </div>
    </article>
  )
}

function Basket({
  cart,
  setCart,
  onPay,
}: {
  cart: CartItem[]
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
  onPay: () => void
}) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const changeQty = (id: number, delta: number) =>
    setCart((old) =>
      old.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
      ),
    )
  const remove = (id: number) =>
    setCart((old) => old.filter((item) => item.id !== id))
  return (
    <aside className="basket-panel">
      <div className="basket-header">
        <div>
          <div className="eyebrow">TILL 04 · SALE #00874</div>
          <div className="basket-title">
            Current Sale <span>{cart.reduce((n, i) => n + i.qty, 0)}</span>
          </div>
        </div>
        <button className="customer-chip">
          <span>+</span> Attach customer
        </button>
      </div>
      <div className="basket-customer">
        <div className="customer-avatar">EC</div>
        <div>
          <strong>Emma Clarke</strong>
          <span>
            <b>GOLD</b> Sphere Insider · 2,840 pts
          </span>
        </div>
        <button aria-label="Remove customer">
          <Icon name="close" size={16} />
        </button>
      </div>
      <div className="basket-items">
        {cart.length === 0 ? (
          <div className="empty-basket">
            <div className="empty-orbit">
              <Icon name="bag" size={32} />
            </div>
            <div className="empty-title">Ready when you are</div>
            <p>Scan a barcode or add a piece from the collection.</p>
          </div>
        ) : (
          cart.map((item) => (
            <div className="basket-item" key={item.id}>
              <img src={item.image} alt="" />
              <div className="item-detail">
                <strong>{item.name}</strong>
                <span>
                  {item.size} · {item.desc.split(" · ")[0]}
                </span>
                <div className="item-actions">
                  <div className="stepper">
                    <button onClick={() => changeQty(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => changeQty(item.id, 1)}>+</button>
                  </div>
                  <button className="tag-action">
                    <Icon name="tag" size={15} /> Discount
                  </button>
                </div>
              </div>
              <div className="item-price">
                <button
                  onClick={() => remove(item.id)}
                  aria-label="Remove item"
                >
                  <Icon name="close" size={16} />
                </button>
                <strong>£{(item.price * item.qty).toFixed(2)}</strong>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="basket-footer">
        <div className="sale-options">
          <button>
            <Icon name="pause" size={17} /> Hold Sale <kbd>F4</kbd>
          </button>
          <button>
            <Icon name="tag" size={17} /> Apply Discount <kbd>F8</kbd>
          </button>
          <button>
            <Icon name="gift" size={17} /> Gift Receipt{" "}
            <span className="toggle" />
          </button>
        </div>
        <div className="totals">
          <div>
            <span>Subtotal</span>
            <strong>£{subtotal.toFixed(2)}</strong>
          </div>
          <div className="discount">
            <span>Member discount</span>
            <strong>−£0.00</strong>
          </div>
          <div>
            <span>VAT (20%, included)</span>
            <strong>£{(subtotal / 6).toFixed(2)}</strong>
          </div>
          <div className="grand-total">
            <span>Total</span>
            <strong>£{subtotal.toFixed(2)}</strong>
          </div>
        </div>
        <Button
          className="charge-button"
          onClick={onPay}
          disabled={!cart.length}
        >
          <span>Charge £{subtotal.toFixed(2)}</span>
          <kbd>F12</kbd>
        </Button>
        <div className="secure-note">
          <Icon name="wifi" size={14} /> Secure payment · Terminal connected
        </div>
      </div>
    </aside>
  )
}

function PaymentModal({
  total,
  onClose,
  onComplete,
}: {
  total: number
  onClose: () => void
  onComplete: () => void
}) {
  const [method, setMethod] = useState("card")
  return (
    <div className="modal-backdrop">
      <div className="payment-modal">
        <button className="modal-close" onClick={onClose}>
          <Icon name="close" />
        </button>
        <div className="eyebrow">TAKE PAYMENT</div>
        <div className="payment-title">How would they like to pay?</div>
        <div className="payment-total">£{total.toFixed(2)}</div>
        <div className="tender-grid">
          <button
            className={method === "card" ? "selected" : ""}
            onClick={() => setMethod("card")}
          >
            <div className="tender-icon">
              <Icon name="card" size={28} />
            </div>
            <strong>Card</strong>
            <span>Chip & PIN</span>
          </button>
          <button
            className={method === "contactless" ? "selected" : ""}
            onClick={() => setMethod("contactless")}
          >
            <div className="tender-icon">
              <Icon name="wifi" size={28} />
            </div>
            <strong>Contactless</strong>
            <span>Tap to pay</span>
          </button>
          <button
            className={method === "cash" ? "selected" : ""}
            onClick={() => setMethod("cash")}
          >
            <div className="tender-icon">
              <Icon name="cash" size={28} />
            </div>
            <strong>Cash</strong>
            <span>Open drawer</span>
          </button>
          <button
            className={method === "gift" ? "selected" : ""}
            onClick={() => setMethod("gift")}
          >
            <div className="tender-icon">
              <Icon name="gift" size={28} />
            </div>
            <strong>Gift Card</strong>
            <span>Scan or enter</span>
          </button>
        </div>
        <div className="terminal-message">
          <span className="terminal-pulse" />
          <div>
            <strong>
              {method === "card" ? "Terminal ready" : "Payment ready"}
            </strong>
            <span>
              {method === "card"
                ? "Ask the customer to insert or tap their card"
                : "Continue when the customer is ready"}
            </span>
          </div>
        </div>
        <Button className="complete-pay" onClick={onComplete}>
          Complete £{total.toFixed(2)} payment <Icon name="arrow" />
        </Button>
      </div>
    </div>
  )
}

function SuccessModal({ total, onNext }: { total: number; onNext: () => void }) {
  return (
    <div className="modal-backdrop">
      <div className="success-modal">
        <div className="success-check">
          <Icon name="check" size={42} />
        </div>
        <div className="script-note">Nice one!</div>
        <div className="success-title">Payment complete</div>
        <p>£{total.toFixed(2)} paid by card. The receipt is ready.</p>
        <div className="receipt-preview">
          <div>
            <Logo />
            <span>£{total.toFixed(2)}</span>
          </div>
          <small>SALE #00874 · 20/10/2026 · 10:44</small>
        </div>
        <div className="receipt-actions">
          <Button variant="outline">
            <Icon name="receipt" /> Print
          </Button>
          <Button variant="outline">Email</Button>
          <Button variant="outline">SMS</Button>
        </div>
        <Button className="next-customer" onClick={onNext}>
          Next Customer <Icon name="arrow" />
        </Button>
      </div>
    </div>
  )
}

function SellScreen() {
  const [category, setCategory] = useState("All")
  const [cart, setCart] = useState<CartItem[]>([
    { ...products[0], qty: 1, size: "M" },
    { ...products[2], qty: 1, size: "10" },
  ])
  const [payment, setPayment] = useState<"closed" | "open" | "success">(
    "closed",
  )
  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart],
  )
  const add = (product: typeof products[number]) =>
    setCart((old) => {
      const found = old.find((item) => item.id === product.id)
      return found
        ? old.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
          )
        : [...old, { ...product, qty: 1, size: "M" }]
    })
  return (
    <main className="sell-layout">
      <section className="catalogue">
        <div className="catalogue-top">
          <div>
            <div className="eyebrow">BIRMINGHAM COLLECTION</div>
            <div className="section-title">
              Find the perfect <span>piece</span>
            </div>
          </div>
          <div className="view-count">{products.length * 8} products</div>
        </div>
        <label className="scan-search">
          <div className="barcode-icon">▥</div>
          <input autoFocus placeholder="Scan barcode or type SKU" />
          <div>
            <kbd>F2</kbd>
            <Icon name="search" />
          </div>
        </label>
        <div className="category-scroll">
          {[
            "All",
            "Women",
            "Men",
            "Kids",
            "Footwear",
            "Accessories",
            "New In",
            "Sale",
          ].map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={() => add(product)}
            />
          ))}
        </div>
      </section>
      <Basket cart={cart} setCart={setCart} onPay={() => setPayment("open")} />
      {payment === "open" && (
        <PaymentModal
          total={subtotal}
          onClose={() => setPayment("closed")}
          onComplete={() => setPayment("success")}
        />
      )}
      {payment === "success" && (
        <SuccessModal
          total={subtotal}
          onNext={() => {
            setCart([])
            setPayment("closed")
          }}
        />
      )}
    </main>
  )
}

export default function App() {
  const [screen, setScreen] = useState("dashboard")
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app-shell">
      <TopChrome
        setScreen={setScreen}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Sidebar
        screen={screen}
        setScreen={(value) => {
          setScreen(value)
          setMenuOpen(false)
        }}
        open={menuOpen}
      />
      <div className="main-area">
        {screen === "sell" ? (
          <SellScreen />
        ) : (
          <Dashboard setScreen={setScreen} />
        )}
      </div>
    </div>
  )
}
