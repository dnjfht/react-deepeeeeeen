import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "mlcz9q-5174.csb.app",
      // 여기에 Devbox에서 제공하는 임시 도메인을 추가
      // 필요하다면 다른 로컬 개발 호스트 (예: 'localhost', '127.0.0.1')도 추가
    ],
    // 개발 서버의 호스트 주소 설정
    // '0.0.0.0'을 사용하면 외부 네트워크에서 접속 가능
    host: "localhost",
    // 개발 서버의 포트 번호 설정
    port: 5174,
  },
});
