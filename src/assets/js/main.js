window.addEventListener("load", function () {
  const toggle = document.querySelector(".toogle");
  const menu = document.querySelector(".header-menu");
  toggle && toggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu && menu.classList.add("is-show");
  }
  document.addEventListener("click", handleClickOutside);
  function handleClickOutside(e) {
    if (
      e.target.matches(".toogle") ||
      e.target.matches(".header-menu, .header-menu *")
    )
      return;
    menu && menu.classList.remove("is-show");
  }
});
const bigImg = document.querySelector(".big-img1 img");
// let small = document.querySelector(".big-img .img-tt");
function showImg(pic) {
  bigImg.src = pic;
}

function setActiveMenu(index) {
  // Lấy tất cả các phần tử <a> trong menu
  var menuItems = document.querySelectorAll("#menu .menu-link");

  // Loại bỏ lớp 'active' khỏi tất cả các phần tử <a>
  menuItems.forEach(function (item) {
    item.classList.remove("is-active");
  });

  // Thêm lớp 'active' vào phần tử <a> có chỉ mục được truyền vào
  menuItems[index].classList.add("is-active");
}
function setActiveSize(index) {
  // Lấy tất cả các phần tử <a> trong menu
  var menuItems = document.querySelectorAll(".size .psize");

  // Loại bỏ lớp 'active' khỏi tất cả các phần tử <a>
  menuItems.forEach(function (item) {
    item.classList.remove("active");
  });

  // Thêm lớp 'active' vào phần tử <a> có chỉ mục được truyền vào
  menuItems[index].classList.add("active");
}
function setActiveMenuAdmin(index) {
  // Lấy tất cả các phần tử <a> trong menu
  var menuItems = document.querySelectorAll("#menu .menu-link");

  // Loại bỏ lớp 'active' khỏi tất cả các phần tử <a>
  menuItems.forEach(function (item) {
    item.classList.remove("is-active");
  });

  // Thêm lớp 'active' vào phần tử <a> có chỉ mục được truyền vào
  menuItems[index].classList.add("is-active");
}
