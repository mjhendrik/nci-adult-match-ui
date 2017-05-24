export function scrollToElement(id: string): void {
  let element = window.document.getElementById(id);
  if (element) {
    setTimeout(() => { console.log(element.offsetTop); window.scroll(0, element.offsetTop); });
  }
}
