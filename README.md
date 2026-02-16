# Giáo xứ Hy Vọng - Website

Đây là website chính thức của Giáo xứ Hy Vọng, được xây dựng bằng Next.js 15 và React 19. Website cung cấp thông tin về giáo xứ, lịch giờ lễ, thông báo, hoạt động, và hình ảnh cộng đồng.

## Mục đích

- Giới thiệu Giáo xứ Hy Vọng
- Thông báo lịch lễ, sự kiện, và các hoạt động mục vụ
- Chia sẻ hình ảnh và tin tức cộng đồng
- Liên hệ và thông tin liên lạc

## Cài đặt và Chạy

### Yêu cầu
- Node.js 18+
- npm hoặc yarn

### Bước cài đặt
1. Clone repository:
   ```bash
   git clone <repository-url>
   cd giao-xu-hy-vong
   ```

2. Cài đặt dependencies:
   ```bash
   npm install
   ```

3. Chạy server phát triển:
   ```bash
   npm run dev
   ```

Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt để xem website.

## Cấu trúc Dự án

- **app/**: Các trang Next.js (app router)
  - `page.js`: Trang chủ
  - `layout.js`: Layout chung
  - Các thư mục con cho từng trang (e.g., `lien-he/page.js`)
- **components/**: Component tái sử dụng (e.g., `CalendarSection.js`)
- **public/**: Tài sản tĩnh (hình ảnh trong `photos/`, favicon, etc.)

## Thêm và Cập nhật Nội dung

- **Lịch sự kiện**: Chỉnh sửa mảng `events` trong `components/CalendarSection.js`
- **Hình ảnh**: Thêm vào `public/photos/` và cập nhật trong `app/page.js`
- **Thông tin**: Chỉnh sửa nội dung trong các file trang hoặc tạo trang mới dưới `app/`
- **Thông báo**: Thêm vào phần thông báo trong `app/page.js` hoặc tạo trang `/thong-bao`

## Triển khai

Website được cấu hình sẵn cho Vercel:
1. Kết nối repository với Vercel
2. Deploy tự động khi push thay đổi

Caddyfile block:

```conf
church.prud.uk {
    import security_headers

    # Point to the atomic symlink (recommended for zero-downtime deploys)
    root * /path/to/current/out

    # SPA fallback – critical for Next.js client-side routing
    # so /lich-su-giao-xu and refreshes work without 404
    try_files {path} {path}/ /index.html

    file_server

    # Long-term caching for Next.js static assets
    @assets path_regexp ^/_next/static/.*
    header @assets {
        Cache-Control "public, max-age=3600, immutable"
    }

    # Optional: enable if you want separate logs for this site
    log {
        output file /path/to/log/caddy/church-access.log
        format console
        level WARN
    }

    # Optional: error logging just for this site (uncomment if needed)
    log error {
        output file /path/to/var/log/caddy/church-error.log
        format console
        level ERROR
    }
}
```

### Các bước triển khai thủ công
1. Build production:
   ```bash
   npm run build
   ```
2. Start server:
   ```bash
   (cd out && python -m http.server 8000)
   ```

one-liner:
``` bash
rm -rf out/ && npm run build && (cd out && python -m http.server 8000)
```



## Công nghệ Sử dụng

- **Next.js 15**: Framework React với app router
- **React 19**: Component-based UI
- **Tailwind CSS v4**: Styling và responsive design
- **React Calendar**: Component calendar tương tác

## Phát triển Thêm

- Thêm TypeScript để type safety
- Thiết lập testing với Jest
- Tích hợp CMS để quản lý nội dung động
- Thêm đa ngôn ngữ nếu cần

## Đóng góp

Mọi đóng góp được chào đón! Vui lòng tạo issue hoặc pull request.
