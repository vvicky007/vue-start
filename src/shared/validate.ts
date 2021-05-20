export default function (element: HTMLElement, binding: any) {
  if (binding.value.type == "email") {
    if (!binding.value.val.includes("@")) {
      element.style.border = "2px solid red";
    } else {
      element.style.border = "";
    }
  }
}
