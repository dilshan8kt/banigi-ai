import { getImageSize } from "react-image-size";
import Swal from "sweetalert2";

export const checkImageSize = async (path) => {
    const dimensions = await getImageSize(path);

    if (
      dimensions.width > 512 &&
      dimensions.width < 2048 &&
      dimensions.height > 512 &&
      dimensions.height < 2048
    ) {
      console.log(dimensions.width + " x " + dimensions.height);
      return true;
    } else {
      console.log(dimensions.width + " x " + dimensions.height);
      Swal.fire({
        title: "",
        text: "minimum dimension is 512 x 512 px.maximum allowed dimension is 2048 x 2048 px.",
        icon: "error",
        confirmButtonText: "OK",
        color: "red",
        width: "20rem",
        heightAuto: true,
        confirmButtonColor: "red",
        background: "antiquewhite",
      });
      return false;
    }
  };