/**
 * LA GROUP — CLIENT-SIDE ULTRA-FAST ENGINE (7-PILLAR STRUCTURE)
 * Multi-Language (VI / EN / ZH), Quick Quote Chatbox, 3D WebGL Auto-pause, FAQ & Video
 */

// Force window scroll position to (0, 0) on load/reload to guarantee landing at top like clicking logo
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
  setTimeout(() => window.scrollTo(0, 0), 10);
});

// ==========================================================================
// 1. MULTI-LANGUAGE TRANSLATION DICTIONARY (VI / EN / ZH)
// ==========================================================================
const i18nDictionary = {
  vi: {
    ann_badge_1: "PREMIER CAMPAIGNS Q3/Q4",
    ann_text_1: "Tặng gói tư vấn chiến lược Omnichannel trị giá 25.000.000đ cho 5 thương hiệu cao cấp đầu tiên trong tháng.",
    ann_cta_1: "Nhận ưu đãi",
    ann_badge_2: "MEGA LIVE STUDIO 4K",
    ann_text_2: "Khai trương Phim trường Mega Livestream 4K chuẩn Quốc tế — Tối ưu tỷ lệ chuyển đổi doanh số vượt bậc.",
    ann_cta_2: "Đặt lịch trải nghiệm",
    ann_badge_3: "TALENT ACQUISITION 2026",
    ann_text_3: "Mở cổng casting độc quyền Top 10 KOC & Creator tiềm năng đồng hành cùng các nhãn hàng quốc tế.",
    ann_cta_3: "Ứng tuyển ngay",
    ann_badge_4: "PRIVATE MEDIA AUDIT",
    ann_text_4: "Tài trợ 100% chi phí Audit toàn diện hiệu suất Media & Cam kết ROAS đa kênh cho Doanh nghiệp.",
    ann_cta_4: "Đăng ký Audit",
    menu_home: "Trang chủ",
    menu_about: "Về LA Group",
    menu_about_intro: "Giới thiệu",
    menu_about_intro_sub: "Tầm nhìn, sứ mệnh & triết lý",
    menu_about_team: "Đội ngũ",
    menu_about_team_sub: "Ban lãnh đạo & chuyên gia sáng tạo",
    menu_services: "Dịch vụ",
    menu_srv_production: "Production — Sản xuất nội dung",
    menu_srv_production_sub: "TVC 4K Cinema, Viral Video, Lookbook",
    menu_srv_ads: "Service & Ads — Vận hành & Ads",
    menu_srv_ads_sub: "Tối ưu CPA & cam kết ROAS đa kênh",
    menu_srv_network: "Media Network",
    menu_srv_network_sub: "Hệ thống kênh Social đa nền tảng",
    menu_srv_ecom: "E-Com — Social Commerce",
    menu_srv_ecom_sub: "Trường quay Mega Live & TikTok Shop",
    menu_srv_academy: "Academy — Đào tạo",
    menu_srv_academy_sub: "Đào tạo Host Live & đội ngũ in-house",
    menu_partners: "Đối tác",
    menu_part_clients: "Khách hàng / Thương hiệu",
    menu_part_clients_sub: "150+ Nhãn hàng đồng hành",
    menu_part_koc: "KOC / Creator Network",
    menu_part_koc_sub: "Mạng lưới 50+ Creator độc quyền",
    menu_projects: "Dự án",
    menu_proj_cases: "Case Study / Dự án tiêu biểu",
    menu_proj_cases_sub: "Thước phim & chiến dịch 4K thực chiến",
    menu_proj_blog: "Blog / Tin tức & Kiến thức",
    menu_proj_blog_sub: "Xu hướng truyền thông & Social Commerce",
    menu_careers: "Tuyển dụng",
    menu_contact: "Liên hệ",
    menu_cont_form: "Form liên hệ",
    menu_cont_form_sub: "Gửi yêu cầu hợp tác & tư vấn",
    menu_cont_faq: "FAQ",
    menu_cont_faq_sub: "Giải đáp câu hỏi thường gặp",
    btn_quote: "Nhận Báo Giá",
    hero_badge: "THE NEXT-GEN MEDIA & GROWTH ECOSYSTEM",
    hero_title_1: "ĐỊNH HÌNH",
    hero_title_2: "CHUẨN MỰC MEDIA",
    hero_title_3: "THẾ HỆ MỚI",
    hero_desc: "LA Group hợp nhất năng lực Sản Xuất Điện Ảnh 4K, Mạng Lưới Creator Độc Quyền và Tối Ưu Doanh Số Livestream Đa Kênh — Kiến tạo dấu ấn độc bản và tăng trưởng vượt bậc cho thương hiệu cao cấp.",
    hero_btn_quote: "Nhận Báo Giá Nhanh",
    hero_btn_join: "Tham Gia LA Group",
    hero_btn_join_sub: "Dành cho Idol & Creator Network",
    hero_proof_text: "Hơn 150+ Nhãn hàng & Tập đoàn hàng đầu bảo chứng",
    showreel_hint: "Nhấp để phát video độ phân giải cao 4K trên YouTube",
    stat_views: "Tổng Lượt View Đa Nền Tảng",
    stat_brands: "Nhãn Hàng Cao Cấp Đồng Hành",
    stat_creators: "KOC & Creator Độc Quyền",
    stat_roas: "ROAS Trung Bình Chiến Dịch",
    about_badge: "VỀ LA GROUP",
    about_title: "Triết Lý Nghệ Thuật & Tăng Trưởng Thực Chiến",
    about_desc: "Không chỉ là đơn vị sản xuất media thông thường, LA Group định vị là đối tác chiến lược toàn diện đưa thương hiệu bứt phá.",
    about_lead: "Kết hợp chuẩn xác giữa tính thẩm mỹ điện ảnh đỉnh cao và khoa học dữ liệu chuyển đổi.",
    about_body: "Mỗi thước phim, mỗi phiên livestream và mỗi chiến dịch KOC do LA Group thực thi đều hướng tới mục tiêu tối thượng: Nâng tầm nhận diện thương hiệu và tối đa hóa tỷ lệ chuyển đổi doanh thu.",
    team_badge: "BAN LÃNH ĐẠO & CHUYÊN GIA",
    team_title: "Đội Ngũ Sáng Tạo Tiên Phong",
    srv_badge: "DỊCH VỤ TOÀN DIỆN",
    srv_title_1: "Hệ Thống Giải Pháp",
    srv_title_2: "5 Trụ Cột Tăng Trưởng",
    srv_desc: "Chuỗi dịch vụ khép kín từ sản xuất nội dung, vận hành quảng cáo, media network, social commerce tới đào tạo in-house.",
    clients_badge: "ĐỐI TÁC THƯƠNG HIỆU",
    clients_title: "150+ Nhãn Hàng & Tập Đoàn Đồng Hành",
    clients_desc: "Tự hào là đối tác chiến lược của các thương hiệu hàng đầu trong ngành Dược mỹ phẩm, Thời trang cao cấp, Công nghệ và F&B.",
    koc_badge: "MẠNG LƯỚI ĐỘC QUYỀN",
    koc_title: "Mạng Lưới KOC & Creator Độc Quyền",
    proj_badge: "DỰ ÁN TIÊU BIỂU",
    proj_title_1: "Case Studies &",
    proj_title_2: "Showreel Thực Tế",
    proj_desc: "Khám phá các tác phẩm media 4K và chiến dịch bùng nổ doanh số được thực thi bởi đội ngũ LA Group.",
    blog_badge: "BLOG & KIẾN THỨC",
    blog_title: "Tin Tức & Xu Hướng Media 2026",
    careers_badge: "CAREERS AT LA GROUP",
    careers_title_1: "Gia Nhập Đội Ngũ",
    careers_title_2: "Sáng Tạo Tiên Phong",
    careers_desc: "Môi trường làm việc năng động, sáng tạo không giới hạn với chế độ đãi ngộ vượt trội cho nhân tài media.",
    faq_badge: "HỎI ĐÁP THƯỜNG GẶP",
    faq_title: "Giải Đáp Thắc Mắc & Chính Sách Hợp Tác",
    contact_badge: "GET IN TOUCH",
    contact_title_1: "Sẵn Sàng Kiến Tạo",
    contact_title_2: "Chiến Dịch Đột Phá?",
    contact_desc: "Hãy chia sẻ mục tiêu của thương hiệu. Chuyên gia cố vấn chiến lược của LA Group sẽ phản hồi bản kế hoạch chi tiết trong vòng 24 giờ.",
    form_title: "Đăng Ký Tư Vấn & Nhận Báo Giá",
    form_name: "Họ và Tên *",
    form_phone: "Số Điện Thoại / Zalo *",
    form_brand: "Tên Thương Hiệu / Doanh Nghiệp",
    form_service: "Dịch Vụ Quan Tâm",
    form_msg: "Nhu Cầu Chi Tiết",
    form_submit: "GỬI YÊU CẦU TƯ VẤN NGAY",
    form_success: "Cảm ơn bạn! LA Group đã nhận được thông tin và sẽ liên hệ trong vòng 24 giờ.",
    ft_menu: "ĐIỀU HƯỚNG CHÍNH",
    ft_legal: "CHÍNH SÁCH & ĐIỀU KHOẢN"
  },
  en: {
    ann_badge_1: "PREMIER CAMPAIGNS Q3/Q4",
    ann_text_1: "Complimentary $1,000 Omnichannel Strategy Consultation for the first 5 luxury brands this month.",
    ann_cta_1: "Claim Offer",
    ann_badge_2: "MEGA LIVE STUDIO 4K",
    ann_text_2: "Grand Opening of International Standard 4K Mega Livestream Studios — Maximize GMV conversions.",
    ann_cta_2: "Book a Tour",
    ann_badge_3: "TALENT ACQUISITION 2026",
    ann_text_3: "Exclusive casting call for Top 10 high-potential KOCs & Creators to collaborate with global brands.",
    ann_cta_3: "Apply Now",
    ann_badge_4: "PRIVATE MEDIA AUDIT",
    ann_text_4: "100% Sponsored Full Media Performance & Multi-channel ROAS Audit for Enterprise Brands.",
    ann_cta_4: "Request Audit",
    menu_home: "Home",
    menu_about: "About LA Group",
    menu_about_intro: "Introduction",
    menu_about_intro_sub: "Vision, mission & philosophy",
    menu_about_team: "Team",
    menu_about_team_sub: "Executive leadership & creatives",
    menu_services: "Services",
    menu_srv_production: "Production — Content Creation",
    menu_srv_production_sub: "4K Cinema TVC, Viral Videos, Lookbooks",
    menu_srv_ads: "Service & Ads — Operations & Ads",
    menu_srv_ads_sub: "CPA optimization & verified ROAS",
    menu_srv_network: "Media Network",
    menu_srv_network_sub: "Multi-platform social publishing channels",
    menu_srv_ecom: "E-Com — Social Commerce",
    menu_srv_ecom_sub: "Mega Live Studios & TikTok Shop",
    menu_srv_academy: "Academy — Training",
    menu_srv_academy_sub: "Live Host & in-house media team training",
    menu_partners: "Partners",
    menu_part_clients: "Clients / Brands",
    menu_part_clients_sub: "150+ Leading enterprise brands",
    menu_part_koc: "KOC / Creator Network",
    menu_part_koc_sub: "Exclusive roster of 50+ Creators",
    menu_projects: "Projects",
    menu_proj_cases: "Case Studies / Featured Work",
    menu_proj_cases_sub: "Cinematic 4K campaigns & live cases",
    menu_proj_blog: "Blog / Insights & News",
    menu_proj_blog_sub: "Media trends & Social Commerce strategies",
    menu_careers: "Careers",
    menu_contact: "Contact",
    menu_cont_form: "Contact Form",
    menu_cont_form_sub: "Request consultation & partnership",
    menu_cont_faq: "FAQ",
    menu_cont_faq_sub: "Frequently asked questions",
    btn_quote: "Get a Quote",
    hero_badge: "THE NEXT-GEN MEDIA & GROWTH ECOSYSTEM",
    hero_title_1: "SHAPING",
    hero_title_2: "THE FUTURE OF MEDIA",
    hero_title_3: "STANDARDS",
    hero_desc: "LA Group unites 4K Cinema Production, Exclusive Creator Talent and Multi-channel Livestream GMV Acceleration — crafting bespoke impact and exponential growth for premier brands.",
    hero_btn_quote: "Instant Quote",
    hero_btn_join: "Join LA Group",
    hero_btn_join_sub: "For Idols & Creators",
    hero_proof_text: "Trusted by 150+ Top-tier Brands & Conglomerates",
    showreel_hint: "Click to play high-definition 4K video on YouTube",
    stat_views: "Total Multi-Platform Views",
    stat_brands: "Premium Enterprise Partners",
    stat_creators: "Exclusive Top Creators",
    stat_roas: "Average Campaign ROAS",
    about_badge: "ABOUT LA GROUP",
    about_title: "Cinematic Artistry & Empirical Performance",
    about_desc: "Far beyond traditional media production, LA Group serves as an end-to-end strategic growth partner for ambitious brands.",
    about_lead: "Precision synthesis of premium cinematic aesthetics and conversion data science.",
    about_body: "Every visual frame, livestream broadcast, and creator activation executed by LA Group is engineered for twin outcomes: elevate brand equity and maximize revenue conversion.",
    team_badge: "LEADERSHIP & DIRECTORS",
    team_title: "Pioneering Creative Leaders",
    srv_badge: "COMPREHENSIVE SERVICES",
    srv_title_1: "Strategic Architecture",
    srv_title_2: "5 Pillars of Growth",
    srv_desc: "An integrated lifecycle encompassing cinema production, performance ads, media networks, social commerce, and in-house academy.",
    clients_badge: "BRAND PARTNERS",
    clients_title: "150+ Enterprise Clients & Conglomerates",
    clients_desc: "Proud strategic growth partner to industry leaders across Derma-Cosmetics, High-end Fashion, Smart Living, and Luxury F&B.",
    koc_badge: "EXCLUSIVE ROSTER",
    koc_title: "Exclusive KOC & Creator Network",
    proj_badge: "FLAGSHIP WORK",
    proj_title_1: "Case Studies &",
    proj_title_2: "Production Showreel",
    proj_desc: "Explore 4K cinema productions and high-converting campaigns delivered by LA Group.",
    blog_badge: "BLOG & INSIGHTS",
    blog_title: "2026 Media Trends & Intelligence",
    careers_badge: "CAREERS AT LA GROUP",
    careers_title_1: "Join Our Team of",
    careers_title_2: "Creative Pioneers",
    careers_desc: "A fast-paced, high-standard environment offering unmatched autonomy and rewards for top media talent.",
    faq_badge: "FREQUENTLY ASKED QUESTIONS",
    faq_title: "Common Questions & Partnership Terms",
    contact_badge: "GET IN TOUCH",
    contact_title_1: "Ready to Scale Your",
    contact_title_2: "Next Breakthrough?",
    contact_desc: "Share your brand goals. Our executive media strategists will deliver a tailored action blueprint within 24 hours.",
    form_title: "Request Strategic Consultation & Quote",
    form_name: "Full Name *",
    form_phone: "Phone Number / WhatsApp *",
    form_brand: "Brand / Company Name",
    form_service: "Service of Interest",
    form_msg: "Detailed Requirements",
    form_submit: "SUBMIT INQUIRY NOW",
    form_success: "Thank you! LA Group has received your request and will follow up within 24 hours.",
    ft_menu: "MAIN NAVIGATION",
    ft_legal: "LEGAL & POLICIES"
  },
  zh: {
    ann_badge_1: "2026 高端营销季 Q3/Q4",
    ann_text_1: "本月前5家高端签约品牌尊享价值 1,000 美元的全渠道增长战略咨询。",
    ann_cta_1: "立即领取",
    ann_badge_2: "4K 超级直播影棚",
    ann_text_2: "国际标准 4K 超级直播影棚盛大启用 — 驱动全渠道电商转化率飞跃。",
    ann_cta_2: "预约体验",
    ann_badge_3: "2026 达人招募计划",
    ann_text_3: "独家招募前 10 位潜力 KOC 与内容创作者，携手国际顶尖品牌共赢。",
    ann_cta_3: "立即申请",
    ann_badge_4: "企业级媒体诊断",
    ann_text_4: "为品牌提供 100% 全额赞助的媒体全域投放与 ROAS 效果诊断方案。",
    ann_cta_4: "预约诊断",
    menu_home: "首页",
    menu_about: "关于 LA 集团",
    menu_about_intro: "企业简介",
    menu_about_intro_sub: "愿景、使命与核心哲学",
    menu_about_team: "核心团队",
    menu_about_team_sub: "高管领导层与创意总监",
    menu_services: "核心业务",
    menu_srv_production: "内容制作 — 4K影视级",
    menu_srv_production_sub: "4K商业TVC、病毒短片、视觉大片",
    menu_srv_ads: "全渠道代运营与广告投放",
    menu_srv_ads_sub: "精准CPA优化与高额ROAS保障",
    menu_srv_network: "自媒体矩阵网络",
    menu_srv_network_sub: "覆盖千万级受众的社媒渠道矩阵",
    menu_srv_ecom: "社交电商与直播基地",
    menu_srv_ecom_sub: "超级直播间与TikTok Shop代运营",
    menu_srv_academy: "商学院企业培训",
    menu_srv_academy_sub: "金牌主播孵化与企业内部赋能",
    menu_partners: "合作伙伴",
    menu_part_clients: "合作客户 / 知名品牌",
    menu_part_clients_sub: "150+ 长期合作高端品牌",
    menu_part_koc: "独家签约创作者矩阵",
    menu_part_koc_sub: "50+ 头部与垂类独家达人",
    menu_projects: "成功案例",
    menu_proj_cases: "精选项目 / 实战作品",
    menu_proj_cases_sub: "4K影视级作品与破亿GMV案例",
    menu_proj_blog: "行业洞察与新闻博客",
    menu_proj_blog_sub: "最新媒体风向与社交电商实操",
    menu_careers: "招贤纳士",
    menu_contact: "联系我们",
    menu_cont_form: "合作咨询表单",
    menu_cont_form_sub: "提交业务需求与定制方案",
    menu_cont_faq: "常见问题",
    menu_cont_faq_sub: "合作流程与政策解答",
    btn_quote: "获取报价",
    hero_badge: "新一代媒体与全渠道增长生态圈",
    hero_title_1: "重塑",
    hero_title_2: "未来媒体标准",
    hero_title_3: "与转化格局",
    hero_desc: "LA集团深度整合 4K电影级内容制作、独家顶流KOC达人矩阵 与 全渠道直播电商GMV爆发增长力——为高端品牌构筑非凡印记与百倍增长。",
    hero_btn_quote: "快速获取报价",
    hero_btn_join: "加入 LA 集团",
    hero_btn_join_sub: "达人 / 创作者专属通道",
    hero_proof_text: "超过 150+ 知名品牌与跨国集团一致信赖",
    showreel_hint: "点击在 YouTube 上播放 4K 高清影片",
    stat_views: "全平台累计播放量",
    stat_brands: "高端合作品牌方",
    stat_creators: "独家签约KOC达人",
    stat_roas: "平均广告投放回报率",
    about_badge: "关于 LA 集团",
    about_title: "电影美学与数据驱动增长的终极融合",
    about_desc: "不仅是单纯的内容制作商，LA集团更是助力品牌实现全方位爆发增长的战略合伙人。",
    about_lead: "高端艺术美学与精准转化科学的严密共振。",
    about_body: "LA集团打造的每一部4K影片、每一场超级直播与每一次达人投放，均以两大终极目标为导向：提升品牌尊贵心智，最大化实效商业转化。",
    team_badge: "高管层与核心主创",
    team_title: "引领行业的先锋创意团队",
    srv_badge: "全链路服务",
    srv_title_1: "战略架构",
    srv_title_2: "五大增长支柱",
    srv_desc: "涵盖4K影视制作、数字投放、社交媒体矩阵、直播电商与实战培训的闭环生态。",
    clients_badge: "品牌伙伴",
    clients_title: "150+ 知名企业与跨国品牌共同见证",
    clients_desc: "深感荣幸成为护肤医美、高端时尚、智能家居与精品餐饮领域领军者的长期战略伙伴。",
    koc_badge: "独家资源",
    koc_title: "独家签约达人与创作者网络",
    proj_badge: "代表作品",
    proj_title_1: "实战案例与",
    proj_title_2: "4K 影视片单",
    proj_desc: "探索由 LA 集团团队倾力打造的爆款视觉作品与现象级带货战役。",
    blog_badge: "行业智库",
    blog_title: "2026 媒体趋势与商业实战",
    careers_badge: "加入我们",
    careers_title_1: "与先锋创作者同行",
    careers_title_2: "开启非凡旅程",
    careers_desc: "充满活力、无拘创意的广阔舞台，为优秀媒体英才提供行业顶尖的回报与发展空间。",
    faq_badge: "常见解答",
    faq_title: "常见疑问与合作政策",
    contact_badge: "即刻联络",
    contact_title_1: "准备好开启您的",
    contact_title_2: "下一个现象级战役了吗？",
    contact_desc: "请告诉我们您的品牌愿景。LA 集团战略顾问将在 24 小时内为您量身定制详尽执行方案。",
    form_title: "提交业务咨询与报价申请",
    form_name: "您的姓名 *",
    form_phone: "联系电话 / 微信 *",
    form_brand: "企业 / 品牌名称",
    form_service: "感兴趣的业务板块",
    form_msg: "具体需求说明",
    form_submit: "立即提交合作咨询",
    form_success: "感谢您的信任！LA集团已收到您的需求，将在24小时内与您联系。",
    ft_menu: "主导航",
    ft_legal: "法律声明与政策"
  }
};

let currentLang = 'vi';

function switchLanguage(lang) {
  if (!i18nDictionary[lang]) return;
  currentLang = lang;
  
  // Update button label
  const langLabel = document.getElementById('currentLangLabel');
  if (langLabel) langLabel.textContent = lang.toUpperCase();

  // Update active state in desktop dropdown
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update active state in mobile bar
  document.querySelectorAll('.mob-lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Apply translations to all [data-i18n] elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nDictionary[lang] && i18nDictionary[lang][key]) {
      el.textContent = i18nDictionary[lang][key];
    }
  });

  // Close lang menu
  const menu = document.getElementById('langMenu');
  if (menu) menu.classList.remove('show');
}

// ==========================================================================
// 2. QUICK QUOTE CHATBOX (MODAL INTERACTION - NO REDIRECT)
// ==========================================================================
function openQuoteChatbox(prefill) {
  const backdrop = document.getElementById('quoteChatboxBackdrop');
  if (!backdrop) return;
  backdrop.classList.add('open');

  if (prefill) {
    appendChatMessage('bot', `Tôi thấy bạn đang quan tâm đến "${prefill}". Vui lòng để lại số điện thoại hoặc Zalo để chuyên viên LA Group gửi bảng giá chi tiết ngay nhé!`);
  }
}

function closeQuoteChatbox() {
  const backdrop = document.getElementById('quoteChatboxBackdrop');
  if (backdrop) backdrop.classList.remove('open');
}

function appendChatMessage(type, text) {
  const body = document.getElementById('chatboxBody');
  if (!body) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${type}`;
  msgDiv.innerHTML = `<p>${text}</p>`;
  body.appendChild(msgDiv);
  body.scrollTop = body.scrollHeight;
}

function handleChatSelect(serviceName) {
  appendChatMessage('user', serviceName);
  
  setTimeout(() => {
    appendChatMessage('bot', `Tuyệt vời! Gói <strong>${serviceName}</strong> hiện đang có ưu đãi đặc biệt trong tháng này. Bạn dự kiến triển khai với mức ngân sách khoảng bao nhiêu (hoặc cho LA Group xin Số Điện Thoại/Zalo để gửi proposal)?`);
  }, 400);
}

function handleChatSend(event) {
  event.preventDefault();
  const input = document.getElementById('chatInput');
  if (!input || !input.value.trim()) return;

  const text = input.value.trim();
  appendChatMessage('user', text);
  input.value = '';

  setTimeout(() => {
    appendChatMessage('bot', `Đã ghi nhận yêu cầu của bạn! Cố vấn trưởng của LA Group đang chuẩn bị bảng dự toán chi tiết và sẽ liên hệ phản hồi bạn ngay lập tức. Cảm ơn bạn!`);
    
    if (typeof confetti === 'function') {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.85 } });
    }
  }, 600);
}

// ==========================================================================
// 3. YOUTUBE VIDEO MODAL ENGINE
// ==========================================================================
function openYouTubeModal(videoId, title) {
  const modal = document.getElementById('youtubeModal');
  const iframe = document.getElementById('youtubeIframe');
  const modalTitle = document.getElementById('youtubeModalTitle');

  if (!modal || !iframe) return;

  modalTitle.innerHTML = `<i class="fa-brands fa-youtube text-gold"></i> ${title || 'LA Group 4K Media'}`;
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  modal.classList.add('open');
}

function closeYouTubeModal() {
  const modal = document.getElementById('youtubeModal');
  const iframe = document.getElementById('youtubeIframe');
  if (!modal || !iframe) return;

  iframe.src = '';
  modal.classList.remove('open');
}

// ==========================================================================
// 4. THREE.JS LIGHTWEIGHT 3D MESH (AUTO-PAUSING 0% GPU DRAIN)
// ==========================================================================
function initLightweight3D() {
  const canvas = document.getElementById('webglCanvas');
  const container = document.getElementById('canvas3dContainer');
  if (!canvas || !container || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 50);
  camera.position.z = 7;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

  // Light Torus Knot Geometry (Optimized 64x18)
  const geometry = new THREE.TorusKnotGeometry(1.6, 0.42, 64, 18);
  const material = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    emissive: 0x332205,
    metalness: 0.92,
    roughness: 0.18,
    wireframe: false
  });
  const torusKnot = new THREE.Mesh(geometry, material);
  scene.add(torusKnot);

  // Subtle Particles
  const pCount = 80;
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(pCount * 3);
  for (let i = 0; i < pCount * 3; i += 3) {
    pPos[i] = (Math.random() - 0.5) * 12;
    pPos[i + 1] = (Math.random() - 0.5) * 12;
    pPos[i + 2] = (Math.random() - 0.5) * 8;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  const pMat = new THREE.PointsMaterial({ color: 0xffdf73, size: 0.05, transparent: true, opacity: 0.6 });
  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  // Studio Lights
  const dirLight = new THREE.DirectionalLight(0xffdf73, 2.0);
  dirLight.position.set(4, 5, 5);
  scene.add(dirLight);

  const ambientLight = new THREE.AmbientLight(0x222222, 1.2);
  scene.add(ambientLight);

  let isRendering = true;
  function animate() {
    if (!isRendering) return;
    requestAnimationFrame(animate);

    torusKnot.rotation.x += 0.005;
    torusKnot.rotation.y += 0.008;
    particles.rotation.y += 0.001;

    renderer.render(scene, camera);
  }
  animate();

  // Viewport Auto-Pause to guarantee 0% GPU waste when scrolled down
  const heroSec = document.getElementById('hero');
  if (heroSec && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!isRendering) {
            isRendering = true;
            animate();
          }
        } else {
          isRendering = false;
        }
      });
    }, { threshold: 0.05 });
    observer.observe(heroSec);
  }

  // Handle Resize
  window.addEventListener('resize', () => {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }, { passive: true });
}

// ==========================================================================
// 5. EVENT LISTENERS & DOM INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Initialize 3D
  initLightweight3D();

  // 1.1 Smooth Anchor Navigation without hash mutation (F5 always lands on top)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#' || targetId === '#hero') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      try {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } catch (err) {
        // Fallback
      }
    });
  });

  // 1.2 Rotating Announcement Bar Ticker (Multi-Slide with Smooth Transitions)
  const annSlider = document.getElementById('announcementSlider');
  if (annSlider) {
    const slides = annSlider.querySelectorAll('.announcement-slide');
    let currentSlide = 0;
    let tickerInterval = null;

    function nextAnnSlide() {
      if (slides.length <= 1) return;
      const prev = slides[currentSlide];
      prev.classList.remove('active');
      prev.classList.add('slide-out');

      currentSlide = (currentSlide + 1) % slides.length;
      const next = slides[currentSlide];
      next.classList.remove('slide-out');
      next.classList.add('active');

      setTimeout(() => {
        prev.classList.remove('slide-out');
      }, 700);
    }

    function startAnnTicker() {
      if (tickerInterval) clearInterval(tickerInterval);
      tickerInterval = setInterval(nextAnnSlide, 4500);
    }

    function stopAnnTicker() {
      if (tickerInterval) clearInterval(tickerInterval);
    }

    startAnnTicker();

    const annBar = document.getElementById('announcementBar');
    if (annBar) {
      annBar.addEventListener('mouseenter', stopAnnTicker);
      annBar.addEventListener('mouseleave', startAnnTicker);
    }
  }

  // 2. Language Dropdown Toggle
  const langBtn = document.getElementById('langSelectorBtn');
  const langMenu = document.getElementById('langMenu');
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      langMenu.classList.remove('show');
    });
  }

  // Language options in dropdown
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });

  // Mobile language options
  document.querySelectorAll('.mob-lang-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });

  // 3. Mobile Navigation Drawer
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    document.querySelectorAll('.mob-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // 4. FAQ Accordion Toggle
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('active');

      // Close all other FAQs
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      if (!isOpen) item.classList.add('active');
    });
  });

  // 5. Video Trigger Handlers
  document.querySelectorAll('[data-youtube-id]').forEach(el => {
    el.addEventListener('click', () => {
      const videoId = el.getAttribute('data-youtube-id');
      const title = el.getAttribute('data-video-title');
      openYouTubeModal(videoId, title);
    });
  });

  const modalBackdrop = document.getElementById('youtubeModal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeYouTubeModal();
    });
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeYouTubeModal();
      closeQuoteChatbox();
    }
  });

  // 6. Talent Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const talentCards = document.querySelectorAll('.talent-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      talentCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 7. Animated Number Counters
  const counters = document.querySelectorAll('.counter');
  let counted = false;
  function runCounters() {
    if (counted) return;
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const isDecimal = target % 1 !== 0;
      let start = 0;
      const duration = 1200;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = isDecimal 
          ? (start + (target - start) * progress).toFixed(1)
          : Math.floor(start + (target - start) * progress);

        if (counter.textContent.includes('M+')) {
          counter.textContent = current + 'M+';
        } else if (counter.textContent.includes('+')) {
          counter.textContent = current + '+';
        } else if (counter.textContent.includes('x')) {
          counter.textContent = current + 'x';
        } else {
          counter.textContent = current;
        }

        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    });
    counted = true;
  }

  const statsRibbon = document.querySelector('.stats-ribbon');
  if (statsRibbon && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        runCounters();
        statsObserver.disconnect();
      }
    }, { threshold: 0.2 });
    statsObserver.observe(statsRibbon);
  }

  // 8. Lead Gen Form Submission
  const leadForm = document.getElementById('leadGenForm');
  const alertSuccess = document.getElementById('formSuccessAlert');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (alertSuccess) {
        alertSuccess.classList.add('show');
        setTimeout(() => alertSuccess.classList.remove('show'), 6000);
      }
      leadForm.reset();
      if (typeof confetti === 'function') {
        confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
      }
    });
  }

  // 9. Scroll to top button
  const topBtn = document.getElementById('scrollToTop');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        topBtn.style.opacity = '1';
        topBtn.style.pointerEvents = 'auto';
      } else {
        topBtn.style.opacity = '0';
        topBtn.style.pointerEvents = 'none';
      }
    }, { passive: true });

    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 10. Theme Toggle
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('theme-light');
      const isLight = document.body.classList.contains('theme-light');
      themeBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun text-gold"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
  }
});
