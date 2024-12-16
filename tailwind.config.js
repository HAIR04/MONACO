module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#2B2B2B",
        footer: "#3B3B3B",
        popular: "#A259FF",
      },
      borderRadius: {
        "2.5xl": "20px",
      },
      fontSize: {
        medium: "17px",
      },
      clipPath: {
        diagonal: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)", // Vát chéo từ dưới lên
      },
      keyframes: {
        blink: {
          '0%': { color: '#EF4444' },  // Đỏ (red-600)
          '50%': { color: '#F59E0B' }, // Vàng (yellow-600)
          '100%': { color: '#EF4444' }, // Đỏ (red-600)
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        blink: 'blink 0.4s steps(1) infinite', // Sử dụng steps để nhấp nháy ngay lập tức
        shake: 'shake 0.5s ease-in-out infinite', // Hiệu ứng rung
      },
      boxShadow: {
        'frame': '0 0 0 4px rgba(255, 0, 0, 0.5)', // Thêm hiệu ứng khung (frame) màu đỏ
        'frame-yellow': '0 0 0 4px rgba(255, 255, 0, 0.5)', // Thêm hiệu ứng khung (frame) màu vàng
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
