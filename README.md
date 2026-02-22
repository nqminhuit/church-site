# Giáo xứ Hy Vọng - Website

Đây là website chính thức của Giáo xứ Hy Vọng, được xây dựng bằng Next.js 15 và React 19. Website cung cấp thông tin về giáo xứ, lịch giờ lễ, thông báo, hoạt động, và hình ảnh cộng đồng.

## Mục đích

- Giới thiệu Giáo xứ Hy Vọng
- Thông báo lịch lễ, sự kiện, và các hoạt động mục vụ
- Chia sẻ hình ảnh và tin tức cộng đồng
- Liên hệ và thông tin liên lạc

## Cài đặt và Chạy

### Yêu cầu
- Node.js 24+
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

## Thêm và Cập nhật Nội dung

- **Cập nhật thông báo**:
  1. use a markdown editor e.g., https://stackedit.io (online) and write the new announcement there
  2. review content, then copy it to a file temp: e.g., `/tmp/ann.md`
  3. encode the file into 1 single line of text with this command: `base64 -w0 /tmp/ann.md`
  4. go to github action 'Create Announcement' then trigger with inputs:
	  1. Content: the output of step #3
	  2. Slug: filename also will be the slug in url path
	  3. Summary: short texts to let people know about the content
	  4. Thumbnail: for the /thong-bao page

- **Hình ảnh**: Thêm vào `public/photos/` và cập nhật trong `app/page.js`

- **Update Main banner**:
``` bash
aws s3 cp /path/to/file.jpg s3://web/church/hyvong/media/main_banner.jpg
```

- **Gospel of the day**:
There will be another repository responsible for this content: https://github.com/nqminhuit/liturgical-calendar
  - The calendar must be commit to `resources/liturgical-calendar-<year>.json` of that repository
  - The `resources/lectionary.json` is one-time-work and will be reused every year.
  - `resources/vietnam-liturgical-calendar-<year>.json`: this file will override some Masses specific only in Vietnam.


## Triển khai
Deploy tự động khi push thay đổi on main branch


### Các bước triển khai thủ công
1. Build production:
 ```bash
 npm run build
 ```

2. Start server (dev):
 ```bash
 (cd out && python -m http.server 8000)
 ```


## Đóng góp

Mọi đóng góp được chào đón! Vui lòng tạo issue hoặc pull request.
