import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "njkhyd-5173.csb.app", // 여기에 Devbox에서 제공하는 임시 도메인을 추가
      // 필요하다면 다른 로컬 개발 호스트 (예: 'localhost', '127.0.0.1')도 추가
    ],
  },
});
