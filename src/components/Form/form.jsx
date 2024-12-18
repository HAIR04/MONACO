import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    package: "",
    numberOfPeople: "",
    additionalRequest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^0\d{9,10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(formData.phone)) {
      Swal.fire({
        icon: "error",
        title: "Lỗi!",
        text: "Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại hợp lệ!.",
        confirmButtonText: "Đóng",
        confirmButtonColor: "#e11d48",
      });
      return;
    }

    if (isSubmitting) {
      Swal.fire({
        icon: "warning",
        title: "Vui lòng đợi!",
        text: "Bạn chỉ có thể gửi yêu cầu sau 5 giây.",
        confirmButtonText: "Đóng",
        confirmButtonColor: "#e11d48",
      });
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_uu24hel",
        "template_t8vll2k",
        e.target,
        "6nooVVJZEQE93be_W"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Thành công!",
            html: "Yêu cầu của bạn đã được gửi thành công!<br>Chúng tôi sẽ phản hồi trong thời gian sớm nhất!",
            confirmButtonText: "Xác nhận",
            confirmButtonColor: "#4f46e5",
          });

          setTimeout(() => {
            setIsSubmitting(false);
          }, 5000);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Lỗi!",
            text: "Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại sau.",
            confirmButtonText: "Đóng",
            confirmButtonColor: "#e11d48",
          });

          setTimeout(() => {
            setIsSubmitting(false);
          }, 5000);
        }
      );
  };

  const timeOptions = Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2);
    const minute = i % 2 === 0 ? "00" : "30";
    return `${hour.toString().padStart(2, "0")}:${minute}`;
  });

  return (
    <div className="max-w-3xl mx-auto border-2 border-yellow-500 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-white mb-6">
        GỬI YÊU CẦU ĐẶT LỊCH
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tên / Bí danh"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Số Điện Thoại"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="" disabled>
              Chọn khung giờ
            </option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="" disabled>
              Chọn gói dịch vụ
            </option>
            <option value="Massage 60 phút + Hồ bơi">
              Massage 60 phút + Hồ bơi
            </option>
            <option value="Massage 90 phút + Hồ bơi">
              Massage 90 phút + Hồ bơi
            </option>
            <option value="Massage 120 phút + Hồ bơi">
              Massage 120 phút + Hồ bơi
            </option>
          </select>
          <input
            type="number"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
            required
            placeholder="Số người"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <textarea
          name="additionalRequest"
          value={formData.additionalRequest}
          onChange={handleChange}
          placeholder="Yêu Cầu Khác (chọn kỹ thuật viên, rượu, dịch vụ phụ...)"
          className="w-full italic p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 text-white font-semibold rounded-xl focus:outline-none focus:ring-2 transition-all duration-500 transform ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-600 hover:bg-opacity-90 hover:scale-105"
          }`}
        >
          {isSubmitting ? "Đặt Lịch Ngay" : "Đặt Lịch Ngay"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
