const toggleSidebar = () => {
  document.querySelector('[data-selector="sidebar"]').classList.toggle('-active');
}

export const Menu = () => {
  document.querySelector('[data-selector="open-menu"]').addEventListener('click', toggleSidebar)
  document.querySelector('[data-selector="close-menu"]').addEventListener('click', toggleSidebar)
  document.querySelector('[data-selector="sidebar"]').querySelectorAll('a').forEach((target) => {
    if (window.location.href === target.href) {
      target.classList.add('-current')
    } else {
      target.classList.remove('-current')
    }
  })
}
