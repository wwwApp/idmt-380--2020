const sectionNav = document.querySelector(".nav");
const levelTabWrapper = document.querySelector(".toggle");
const teaserSections = document.querySelectorAll(".teaser");

let activeTeasers;
let observer;
let sectionNavItems;
let selectedTab;

function initSectionNav() {
  selectedTab = levelTabWrapper.querySelector(".is-active").dataset.selected;
  activeTeasers = [...teaserSections].filter(
    (section) => section.dataset.level === selectedTab
  );

  sectionNav.innerHTML = "";
  for (let i = 0; i < activeTeasers.length; i++) {
    sectionNav.innerHTML += `<li class="nav__item" data-target="${activeTeasers[i].id}"></li>`;
  }

  // first is always active
  sectionNav.children[0].classList.add("is-active");
  document.body.classList.add(`for-${activeTeasers[0].dataset.level}`);
  detectSectionScrolled();
}

function initLevelTab() {
  levelTabWrapper.addEventListener("click", (e) => {
    let selectedTab = e.srcElement.dataset.selected;
    let tabs = levelTabWrapper.querySelectorAll(".toggle__button");
    tabs.forEach((tab) => {
      let tabLevel = tab.dataset.selected;
      if (tabLevel === selectedTab) {
        tab.classList.add("is-active");
        document.body.classList.add(`for-${tabLevel}`);
      } else {
        tab.classList.remove("is-active");
        document.body.classList.remove(`for-${tabLevel}`);
      }
    });

    initSectionNav();
  });
}

function detectSectionScrolled() {
  let options = {
    rootMargin: "0px",
    threshold: 0.65,
  };

  const observer = new IntersectionObserver(handleSectionObserver, options);
  activeTeasers.forEach((section) => {
    observer.observe(section, options);
  });
}

function handleSectionObserver(entries, observer) {
  sectionNavItems = sectionNav.querySelectorAll(".nav__item");
  entries.forEach((entry) => {
    let currentSection = entry.target.id;
    let activeNavItem = [...sectionNavItems].find(
      (item) => item.dataset.target === currentSection
    );

    if (entry.isIntersecting) {
      activeNavItem.classList.add("is-active");
    } else {
      activeNavItem.classList.remove("is-active");
    }
  });
}

function initApp() {
  initSectionNav();
  initLevelTab();
}

initApp();
