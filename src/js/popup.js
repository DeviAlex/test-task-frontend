export const Popup = (popupName) => {
  if (!popupName) {
    throw new Error('popupName argument is required')
  }

  const popupTarget = document.querySelector(`[data-popup="${popupName}"]`)

  const togglePopup = () => {
    popupTarget.classList.toggle("-open")
  }

  document.querySelector(`[data-open-popup="${popupName}"]`).addEventListener("click", togglePopup);

  popupTarget.querySelectorAll("[data-popup-close]").forEach((node) => {
    node.addEventListener("click", togglePopup)
  });
}