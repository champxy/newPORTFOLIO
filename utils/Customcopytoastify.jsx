import { toast } from "react-toastify";

export const Customcopytoastify = (message) => {
  toast(
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span>{message}</span>
    </div>,
    {
      position: "bottom-center",
      autoClose: 3000, // ปิดอัตโนมัติหลัง 3 วินาที
      hideProgressBar: true,
      closeOnClick: true, // ปิดได้เมื่อคลิก
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false, // ปิดปุ่มกากบาท
      style: {
        background: "#232329", // เปลี่ยนสีพื้นหลังเป็นสีดำ/เทาเข้ม
        color: "white", // สีข้อความ
        borderRadius: "8px", // มุมโค้ง
        padding: "16px", // ระยะห่างด้านใน
        textAlign: "center", // ข้อความอยู่ตรงกลาง
      },
    }
  );
};
