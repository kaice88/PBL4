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
