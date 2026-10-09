# CLAUDE.md — vioranextjs

Dự án Next.js convert từ theme HTML "Viora" (multipurpose, 20 niche demo
khác nhau + 1 trang landing giới thiệu theme).

Nguồn HTML gốc: `../viora/viora/` (đối chiếu, KHÔNG chỉnh sửa).

## Phạm vi dự án — RẤT QUAN TRỌNG

Đây KHÔNG phải 1 website — theme gốc chứa `index.html` (trang landing giới
thiệu + xem tất cả demo) và 20 thư mục `demo-<niche>/`, mỗi thư mục là
1 website hoàn chỉnh riêng (10-19 trang/niche), độc lập hoàn toàn với
nhau (header/style/data khác nhau).

Ngoài ra có 14 file `elements-*.html` (catalog UI component của theme,
KHÔNG PHẢI nội dung thật) — LOẠI HẲN khỏi phạm vi convert, không bao giờ
động tới.

Convert THEO TỪNG NICHE MỘT, không làm dàn trải nhiều niche cùng lúc. Khi
bắt đầu 1 niche mới, tạo prompt riêng (`.claude/prompts/<niche>-<page>.md`)
giống cách đã làm với dự án agentranextjs trước đó.

## Routing đặc biệt

- `/` (route gốc) = trang chủ niche **corporate** (`demo-corporate/index.html`),
  KHÔNG PHẢI trang landing/demo-switcher.
- `/landing` = trang landing/demo-switcher gốc (`index.html` ở thư mục
  gốc theme, trang giới thiệu + xem tất cả 20 demo). Nếu phần này đã lỡ
  được tạo ở route "/" từ trước, DỜI sang "/landing" (di chuyển
  page.tsx, giữ nguyên nội dung, không viết lại).

## Quy ước Route Group (App Router)

Dùng route group — thư mục đặt tên trong ngoặc đơn `(ten-nhom)` — để gom
route theo từng niche/khu vực, KHÔNG xuất hiện trong URL thực tế (chỉ
dùng để tổ chức code cho gọn, tránh app/ có hàng chục route ngang hàng
gây rối khi dự án có nhiều niche). Mỗi route group có thể có layout.tsx
riêng nếu niche đó cần layout khác biệt.

Cấu trúc chuẩn:

```
app/
├── (landing)/
│   └── landing/
│       └── page.tsx              → /landing
├── (demo-corporate)/
│   ├── page.tsx                   → / (trang chủ niche corporate)
│   ├── about-us/page.tsx          → /about-us
│   ├── contact/page.tsx           → /contact
│   ├── services/page.tsx
│   ├── service-detail/page.tsx
│   ├── our-team/page.tsx
│   ├── team-detail/page.tsx
│   ├── portfolio/page.tsx
│   ├── portfolio-detail/page.tsx
│   ├── blog-with-sidebar/page.tsx
│   ├── blog-full-width/page.tsx
│   ├── blog-detail/page.tsx
│   ├── carrer/page.tsx
│   ├── carrer-detail/page.tsx
│   ├── faqs/page.tsx
│   └── layout.tsx                 → layout riêng niche corporate nếu cần
│                                     (Header/Footer riêng của niche này)
├── (demo-<niche-khac>)/           → thêm 1 route group tương tự khi bắt
│                                     đầu làm niche mới, đặt tên đúng
│                                     theo tên thư mục demo-<niche> gốc
├── not-found.tsx
├── layout.tsx                      → root layout chung (nếu có phần dùng
│                                     chung thật sự giữa landing và các niche,
│                                     ví dụ font next/font/google)
└── favicon.ico
```

Quy tắc đặt tên route group: dùng đúng `(demo-<niche>)` (giữ nguyên tiền
tố "demo-" như thư mục gốc) để nhất quán, dễ đối chiếu ngược lại HTML gốc.

## Stack

- Next.js App Router, TypeScript, SCSS thuần (không Tailwind)
- Thư viện gốc cần cài tương ứng khi dùng tới: GSAP (đã có sẵn file thật
  trong assets/js, không như agentrahtml phải bù thiếu), ScrollSmoother,
  SplitText, Swiper, Isotope (cân nhắc thay bằng filter state React thay
  vì cài thư viện), Atropos (hiệu ứng tilt 3D), image-compare-viewer,
  Splitting.js, Fancybox (lightbox)

## Cấu trúc thư mục components/data/hooks/styles

```
src/
├── app/                     → xem "Quy ước Route Group" ở trên
├── components/
│   ├── landing/          → Header/MobileNav/Modal/section riêng trang landing
│   ├── layout/            → Header/Footer style theo từng niche (component
│   │                         nhận prop niche/variant nếu cấu trúc menu giống
│   │                         nhau đủ để dùng chung — PHẢI kiểm tra thực tế
│   │                         từng niche trước khi quyết định dùng chung hay
│   │                         tách riêng, KHÔNG giả định trước)
│   ├── homes/
│   │   └── demo-<niche>/  → section trang chủ riêng của niche, chỉ tạo khi
│   │                         bắt đầu làm niche đó
│   ├── othersPages/
│   │   └── demo-<niche>/  → about/contact/faq/service/... riêng từng niche
│   └── common/             → chỉ đặt vào đây khi XÁC NHẬN 2+ niche dùng chung
│                              y hệt 1 UI pattern, không đặt trước khi chắc chắn
├── data/
│   └── demo-<niche>/       → data riêng từng niche (menu, content...)
├── hooks/                   → hook dùng chung thật sự (useAccordion,
│                              useCountUp, useHorizontalAccordion...) — chỉ
│                              tạo khi có ít nhất 2 nơi cần dùng
└── styles/                  → SCSS gốc giữ nguyên cấu trúc partial
```

## Quy tắc bắt buộc (kế thừa từ dự án agentranextjs trước)

1. Không giữ jQuery. Convert mọi jQuery/Bootstrap JS sang React hook/state.
2. Đọc kỹ code JS gốc (main.js hoặc file JS riêng từng niche) TRƯỚC khi
   viết lại animation/interaction phức tạp — không đoán qua giao diện,
   đặc biệt với các hiệu ứng có công thức tính toán động (kiểu
   horizontal-accordion đã gặp ở agentrahtml).
3. Trước khi kết luận 1 hiện tượng là "bug", XÁC MINH bằng cách đọc code
   gốc hoặc chạy thử HTML gốc (Playwright) — không đoán qua ảnh chụp.
4. Giữ nguyên đúng nội dung/lỗi nội dung có trong HTML gốc (tên trùng lặp,
   text lặp lại...) trừ khi người dùng yêu cầu sửa khác đi.
5. Ảnh dùng next/image, có alt, khai báo width/height hoặc dùng fill.
6. Không tự ý mở rộng phạm vi — chỉ làm đúng niche/trang được yêu cầu,
   không tự động làm thêm niche khác.
7. Section/component lặp lại ở ≥2 trang CÙNG 1 niche → tách component
   dùng chung trong đúng thư mục niche đó. Section giống nhau giữa CÁC
   NICHE KHÁC NHAU → chỉ gộp vào common/ khi thực sự xác nhận giống hệt,
   không ép buộc.
8. Mỗi niche/route group mới → tạo đúng route group `(demo-<niche>)`
   tương ứng, không gộp lẫn route của niche này vào route group của niche
   khác.

## Việc KHÔNG được làm

- Không convert bất kỳ file elements-*.html nào.
- Không tự chuyển sang niche khác khi chưa xong niche đang làm (trừ khi
  người dùng yêu cầu).
- Không xoá file HTML gốc trong ../viora/viora/.
- Không convert nhiều trang cùng lúc trong 1 lần chạy — làm từng trang,
  báo cáo xong mới sang trang kế (như quy trình đã áp dụng ở
  agentranextjs).

## Lệnh hay dùng

```bash
npm run dev
npm run build
npm run lint
```
