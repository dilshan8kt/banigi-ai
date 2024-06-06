import Swal from "sweetalert2";

export const errorMsg = (msg) => {
    Swal.fire({
      title: "",
      text: msg,
      icon: "error",
      confirmButtonText: "OK",
      color: "red",
      width: "20rem",
      heightAuto: true,
      confirmButtonColor: "red",
      background: "antiquewhite",
    });
  };