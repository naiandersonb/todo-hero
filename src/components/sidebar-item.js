
export function SidebarItem(title = '') {
  const sidebarItem = document.createElement("button");
  sidebarItem.classList.add("sidebar-item");
  sidebarItem.innerText = title;

  return sidebarItem;
}