export function ScrollBarRemover(isShow) {
  if (isShow) {
    document.body.classList.add("remove-scrollBar");
  } else {
    document.body.classList.remove("remove-scrollBar");
  }
}
