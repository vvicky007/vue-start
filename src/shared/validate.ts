export default function (element: HTMLElement, binding: any) {
  if (binding.value.type == "email") {
    if (!binding.value.val.includes("@")) {
      element.classList.add("invalid");
    } else {
      element.classList.remove("invalid");
    }
  }
}
