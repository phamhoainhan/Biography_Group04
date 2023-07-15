
const links = document.querySelectorAll('.link');

// Lặp qua tất cả các liên kết và thêm sự kiện click vào chúng
for (let i = 0; i < links.length; i++) {
links[i].addEventListener('click', function (event) {

// Loại bỏ lớp 'active' khỏi tất cả các liên kết
for (let j = 0; j < links.length; j++) {
  if (links[j].classList.contains('active')) {
      links[j].classList.remove('active');
  }
}

// Thêm lớp 'active' cho liên kết vừa click
event.currentTarget.classList.add('active');
});
}





