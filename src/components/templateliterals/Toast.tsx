// Position prop can be one off
// "left-center" | "left-top" | "left-botton" | "center" | "center-top" | "center-bottom" | "right-center" | "right-top" | "right-bottom"

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification position is {position}</div>;
};
