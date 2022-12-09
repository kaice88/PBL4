const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".left-tab");

const tabActive = $(".left-tab.active");

tabs.forEach((tab) => {
  tab.onclick = function () {
    console.log(this);
    $(".left-tab.active").classList.remove("active");
    this.classList.add("active");
  };
});

$('.sub-btn').onclick = function() {
  $('.sub-menu').classList.toggle("display");
  $('.dropdown').classList.toggle("rotate");
}
