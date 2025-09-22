# Security & Privacy Notes

## Thread Persistence ✅
- Lần đầu chat → Tạo thread mới và lưu vào `localStorage`
- Từ lần 2 → Sử dụng thread cũ để maintain context
- Clear chat → Xóa thread và tạo mới

## Hiding API Calls từ F12 Network

### 🔒 **Phương pháp hiện tại (Basic)**
- OpenAI calls vẫn visible trong Network tab
- API key có thể bị exposed trong browser

### 🛡️ **Phương pháp cải thiện:**

#### 1. **Web Workers (Advanced)**
```typescript
// File: src/utils/apiProxy.ts đã tạo
// Sử dụng Web Workers để hide API calls
// Không hoàn toàn secure nhưng khó detect hơn
```

#### 2. **Proxy Server (Recommended)**
```bash
# Backend proxy để hide real API calls
# Frontend chỉ call local API
# Backend call OpenAI API
```

#### 3. **Environment Obfuscation**
```bash
# Sử dụng build-time env encryption
# API key được mã hóa trong production
```

### ⚠️ **Lưu ý quan trọng:**

1. **Frontend Security Limitations:**
   - Mọi thứ trong frontend đều có thể bị reverse engineer
   - API keys trong browser env không bao giờ 100% secure
   - Chỉ có thể làm khó việc detect, không thể ẩn hoàn toàn

2. **Best Practice:**
   ```bash
   # Production setup:
   # 1. Backend API proxy
   # 2. Rate limiting
   # 3. Authentication
   # 4. CORS properly configured
   ```

3. **Current Setup (Development):**
   - ✅ Thread persistence working
   - ❌ API calls visible in Network
   - ❌ API key exposed in browser
   - ✅ Functional for development/demo

### 🚀 **Upgrade to Production:**

1. **Tạo backend API:**
```javascript
// backend/api/chat.js
app.post('/api/chat', async (req, res) => {
  // Call OpenAI from server
  // Hide API key completely
})
```

2. **Frontend chỉ call local API:**
```typescript
// frontend
fetch('/api/chat', {
  method: 'POST',
  body: JSON.stringify({ message })
})
```

Với setup hiện tại: **Hoạt động tốt cho development và demo, nhưng cần backend proxy cho production.**
