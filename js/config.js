/**
 * ============================================
 *  网站配置文件 — 修改内容只需改这个文件
 *  Website Config — Edit this file to update all content
 * ============================================
 */
const SITE_CONFIG = {

  // ========== 网站基本信息 / Site Info ==========
  site: {
    name: 'HY Packaging',
    nameCN: 'HY 包装',
    slogan: 'Custom Paper Packaging Manufacturer',
    logo: 'images/logo.png',
    favicon: 'images/favicon.ico',
    email: 'info@hypackaging.com',
    phone: '+84 123 456 789',
    whatsapp: '+84123456789',
    address: 'Shanghai, China',
    copyright: '© 2024 HY Packaging. All rights reserved.',
  },

  // ========== 品牌色 / Brand Colors ==========
  colors: {
    primary:   '#1a3a5c',
    secondary: '#c9a96e',
    accent:    '#c9a96e',
    dark:      '#1a1a1a',
    light:     '#faf8f5',
    white:     '#ffffff',
    text:      '#333333',
    textLight: '#888888',
  },

  // ========== 导航菜单 / Navigation ==========
  nav: [
    { label: 'Home',        labelCN: '首页',       href: '#home' },
    { label: 'Products',    labelCN: '产品',       href: '#products' },
    { label: 'Gallery',     labelCN: '产品图库',   href: '#gallery' },
    { label: 'Factory',     labelCN: '工厂展示',   href: '#factory' },
    { label: 'About',       labelCN: '关于我们',   href: '#about' },
    { label: 'Custom',      labelCN: '定制服务',   href: '#custom' },
    { label: 'Contact',     labelCN: '联系我们',   href: '#contact' },
  ],

  // ========== 首页大屏 / Hero Banner (单张，不轮播) ==========
  hero: {
    image: 'images/hero1.svg',
    tag: 'Premium Packaging Manufacturer',
    tagCN: '高端包装制造商',
    title: 'Custom Paper Packaging Manufacturer',
    titleCN: '专业纸制包装制造商',
    subtitle: 'Gift Boxes • Display Boxes • Paper Cards • Foil Stamping • OEM & ODM',
    subtitleCN: '礼品盒 • 展示盒 • 纸卡 • 烫金工艺 • OEM & ODM',
    primaryBtn: 'Get Quote',
    primaryBtnCN: '获取报价',
    primaryLink: '#contact',
    secondaryBtn: 'View Products',
    secondaryBtnCN: '查看产品',
    secondaryLink: '#products',
  },

  // ========== 产品分类 / Product Categories ==========
  categories: [
    {
      id: 'gift-boxes',
      name: 'Gift Boxes',
      nameCN: '礼品盒',
      icon: '🎁',
      image: 'images/cat-giftboxes.svg',
      description: 'Premium custom gift boxes',
    },
    {
      id: 'rigid-boxes',
      name: 'Rigid Boxes',
      nameCN: '硬纸盒',
      icon: '📦',
      image: 'images/cat-rigidboxes.svg',
      description: 'High-end rigid setup boxes',
    },
    {
      id: 'folding-cartons',
      name: 'Folding Cartons',
      nameCN: '折叠纸盒',
      icon: '📋',
      image: 'images/cat-folding.svg',
      description: 'Versatile & efficient cartons',
    },
    {
      id: 'paper-cards',
      name: 'Paper Cards',
      nameCN: '纸卡包装',
      icon: '📄',
      image: 'images/cat-papercards.svg',
      description: 'Custom printed paper cards',
    },
    {
      id: 'foil-packaging',
      name: 'Foil Stamping',
      nameCN: '烫金包装',
      icon: '✨',
      image: 'images/cat-foil.svg',
      description: 'Hot foil stamping packaging',
    },
    {
      id: 'custom-packaging',
      name: 'Custom Packaging',
      nameCN: '定制包装',
      icon: '🔧',
      image: 'images/cat-custom.svg',
      description: 'Fully customized solutions',
    },
  ],

  // ========== 特色产品 / Featured Products ==========
  featuredProducts: [
    {
      id: 1,
      name: 'Luxury Magnetic Rigid Box',
      nameCN: '高档磁吸硬纸盒',
      price: '$3.50',
      moq: 'MOQ: 500 pcs',
      image: 'images/product-01.svg',
      badge: 'Bestseller',
      badgeCN: '热卖',
      material: 'Rigid Board + Magnet',
      colors: ['#1a1a1a', '#ffffff', '#1a3a5c', '#c9a96e'],
    },
    {
      id: 2,
      name: 'Custom Printed Folding Carton',
      nameCN: '定制印刷折叠纸盒',
      price: '$1.80',
      moq: 'MOQ: 1000 pcs',
      image: 'images/product-02.svg',
      badge: 'Popular',
      badgeCN: '热门',
      material: 'Coated Cardboard',
      colors: ['#ffffff', '#1a1a1a', '#8B7355'],
    },
    {
      id: 3,
      name: 'Corrugated Shipping Box',
      nameCN: '瓦楞运输包装盒',
      price: '$2.20',
      moq: 'MOQ: 500 pcs',
      image: 'images/product-03.svg',
      badge: 'New',
      badgeCN: '新品',
      material: 'Corrugated Kraft Paper',
      colors: ['#8B4513', '#1a1a1a'],
    },
    {
      id: 4,
      name: 'Hot Foil Stamping Gift Box',
      nameCN: '烫金工艺礼品盒',
      price: '$5.50',
      moq: 'MOQ: 300 pcs',
      image: 'images/product-05.svg',
      badge: 'Premium',
      badgeCN: '高端',
      material: 'Rigid Board + Gold Foil',
      colors: ['#1a1a1a', '#c9a96e', '#8B0000'],
    },
    {
      id: 5,
      name: 'Custom Paper Card Sleeve',
      nameCN: '定制纸卡套',
      price: '$0.80',
      moq: 'MOQ: 2000 pcs',
      image: 'images/product-06.svg',
      badge: 'Custom',
      badgeCN: '可定制',
      material: 'Art Paper + Custom Print',
      colors: ['#ffffff', '#1a1a1a', '#c9a96e'],
    },
    {
      id: 6,
      name: 'Luxury Two-Piece Gift Box',
      nameCN: '高档天地盖礼盒',
      price: '$6.00',
      moq: 'MOQ: 200 pcs',
      image: 'images/product-07.svg',
      badge: 'Premium',
      badgeCN: '高端',
      material: 'Rigid Board + Velvet Lining',
      colors: ['#1a1a1a', '#ffffff', '#8B7355'],
    },
    {
      id: 7,
      name: 'Eco-Friendly Kraft Mailer Box',
      nameCN: '环保牛皮纸邮寄盒',
      price: '$2.80',
      moq: 'MOQ: 500 pcs',
      image: 'images/product-08.svg',
      badge: 'New',
      badgeCN: '新品',
      material: 'Kraft Paper',
      colors: ['#8B4513', '#1a1a1a'],
    },
  ],

  // ========== 产品图库 / Product Gallery ==========
  gallery: [
    { name: 'Gift Boxes',       nameCN: '礼品盒',       image: 'images/gallery-giftboxes.svg' },
    { name: 'Display Boxes',    nameCN: '展示盒',       image: 'images/gallery-display.svg' },
    { name: 'Paper Cards',      nameCN: '纸卡',         image: 'images/gallery-cards.svg' },
    { name: 'Luxury Packaging', nameCN: '高档包装',     image: 'images/gallery-luxury.svg' },
    { name: 'Custom Packaging', nameCN: '定制包装',     image: 'images/gallery-custom.svg' },
  ],

  // ========== 工厂展示 / Factory Showcase ==========
  factory: [
    { name: 'Printing Machine',     nameCN: '印刷设备', icon: '🖨️' },
    { name: 'Laminating',           nameCN: '覆膜工艺', icon: '📜' },
    { name: 'Die Cutting',          nameCN: '模切工艺', icon: '✂️' },
    { name: 'Finishing',            nameCN: '后道加工', icon: '🔧' },
    { name: 'Quality Inspection',   nameCN: '质检品控', icon: '🔍' },
  ],

  // ========== 定制服务亮点 / Customization Features ==========
  customFeatures: [
    {
      icon: '🎨',
      title: 'Custom Design & Structure',
      titleCN: '定制设计与结构',
      desc: 'Tailored box structures, die lines, and packaging engineering',
      descCN: '定制盒型结构、模切线及包装工程设计',
    },
    {
      icon: '🖨️',
      title: 'Printing & Finishing',
      titleCN: '印刷与表面处理',
      desc: 'Offset, UV, foil stamping, embossing, debossing, spot UV, and more',
      descCN: '胶印、UV、烫金、压印、凹印、局部UV等多种工艺',
    },
    {
      icon: '📏',
      title: 'Custom Size & Dimensions',
      titleCN: '定制尺寸',
      desc: 'Any size, any shape — fully customized to your product specifications',
      descCN: '任意尺寸、任意形状，完全根据您的产品规格定制',
    },
    {
      icon: '🌱',
      title: 'Sustainable Materials',
      titleCN: '环保材料',
      desc: 'FSC certified paper, recycled board, biodegradable options available',
      descCN: 'FSC认证纸张、再生纸板、可降解材料可选',
    },
  ],

  // ========== 为什么选择我们 / Why Choose Us ==========
  whyUs: [
    {
      icon: '🏆',
      title: '15+ Years Experience',
      titleCN: '15年以上经验',
      desc: 'Trusted packaging manufacturer with over 15 years of industry expertise',
      descCN: '值得信赖的包装制造商，拥有超过15年的行业经验',
    },
    {
      icon: '🏭',
      title: 'Factory Direct Price',
      titleCN: '工厂直供价格',
      desc: 'Own manufacturing facility — competitive pricing, no middleman markup',
      descCN: '自有工厂，价格有竞争力，无中间商加价',
    },
    {
      icon: '📉',
      title: 'Low MOQ',
      titleCN: '低起订量',
      desc: 'Flexible minimum order quantities to support businesses of all sizes',
      descCN: '灵活的起订量，支持各种规模的企业',
    },
    {
      icon: '⚡',
      title: 'Fast Turnaround',
      titleCN: '快速交付',
      desc: 'Sample in 3–5 days, bulk production in 10–20 days',
      descCN: '打样3-5天，大货生产10-20天',
    },
    {
      icon: '🌍',
      title: 'Global Shipping',
      titleCN: '全球发货',
      desc: 'Reliable logistics partners, shipping to 50+ countries worldwide',
      descCN: '可靠的物流合作伙伴，全球50+国家发货',
    },
    {
      icon: '🤝',
      title: 'OEM & ODM Service',
      titleCN: 'OEM & ODM服务',
      desc: 'Full OEM and ODM capabilities — we bring your packaging vision to life',
      descCN: '完整的OEM和ODM能力，将您的包装愿景变为现实',
    },
  ],

  // ========== 联系表单字段 / Contact Form ==========
  contactInfo: {
    email: 'info@hypackaging.com',
    phone: '+84 123 456 789',
    whatsapp: '+84 123 456 789',
    address: 'Shanghai, China',
    workingHours: 'Mon – Sat: 8:00 – 17:30 (GMT+7)',
    workingHoursCN: '周一至周六: 8:00 – 17:30 (GMT+7)',
  },

  // ========== 页脚链接 / Footer Links ==========
  footerLinks: {
    products: [
      { label: 'Gift Boxes', labelCN: '礼品盒', href: '#products' },
      { label: 'Rigid Boxes', labelCN: '硬纸盒', href: '#products' },
      { label: 'Folding Cartons', labelCN: '折叠纸盒', href: '#products' },
      { label: 'Paper Cards', labelCN: '纸卡', href: '#products' },
    ],
    company: [
      { label: 'About Us', labelCN: '关于我们', href: '#about' },
      { label: 'Our Factory', labelCN: '工厂展示', href: '#factory' },
      { label: 'Certifications', labelCN: '资质证书', href: '#about' },
      { label: 'Blog', labelCN: '博客', href: '#' },
    ],
    support: [
      { label: 'Contact Us', labelCN: '联系我们', href: '#contact' },
      { label: 'FAQ', labelCN: '常见问题', href: '#' },
      { label: 'Shipping Info', labelCN: '运费说明', href: '#' },
      { label: 'Custom Order', labelCN: '定制订单', href: '#custom' },
    ],
  },

  // ========== 社交媒体 / Social Media ==========
  social: [
    { platform: 'Instagram', icon: 'fab fa-instagram', url: '#' },
    { platform: 'Facebook',  icon: 'fab fa-facebook',  url: '#' },
    { platform: 'LinkedIn',  icon: 'fab fa-linkedin',  url: '#' },
    { platform: 'YouTube',   icon: 'fab fa-youtube',   url: '#' },
    { platform: 'Pinterest', icon: 'fab fa-pinterest', url: '#' },
  ],
};
