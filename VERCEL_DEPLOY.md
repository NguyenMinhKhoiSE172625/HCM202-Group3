# 🚀 Hướng dẫn Deploy lên Vercel

## ✅ Đã chuyển sang OpenAI
AI đã được chuyển từ Google Gemini sang OpenAI để hoạt động ổn định hơn.

## 🔧 Cách khắc phục

### Bước 1: Cấu hình Environment Variables trên Vercel
1. Vào **Vercel Dashboard** → Chọn project
2. Vào **Settings** → **Environment Variables**
3. Thêm biến môi trường:
   ```
   Name: VITE_OPENAI_API_KEY
   Value: [YOUR_NEW_OPENAI_API_KEY_HERE]
   ```
   ⚠️ **Lưu ý bảo mật**:
   - Sử dụng API key mới từ OpenAI
   - Không chia sẻ API key trong code hoặc file public
   - API key phải bắt đầu bằng `sk-proj-...`

4. Chọn **All Environments** (Production, Preview, Development)
5. Click **Save**

### Bước 2: Redeploy
1. Vào **Deployments** tab
2. Click **Redeploy** trên deployment mới nhất
3. Hoặc push code mới để trigger auto-deploy

### Bước 3: Kiểm tra
1. Mở website trên Vercel
2. Test AI chat để xem có hoạt động không
3. Kiểm tra Console (F12) xem còn lỗi gì không

## 🔍 Debug
Nếu vẫn lỗi, kiểm tra:
1. **API Key có đúng không**: Phải bắt đầu bằng `sk-proj-...`
2. **Tài khoản OpenAI có credit không**
3. **API key có quyền truy cập GPT-4 không**

## 📝 Lưu ý
- File .env chỉ hoạt động ở local development
- Vercel cần cấu hình Environment Variables riêng
- Sau khi thay đổi env vars phải redeploy
- OpenAI ổn định hơn Gemini cho production
