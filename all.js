// 資料串接
const apiPath = "https://2023-engineer-camp.zeabur.app";
const toolslist = document.querySelector("#toolsList");

const paginationList = document.querySelector("#paginationList");

let worksData = [];
let pagesData = {};

const data = {
  type: "",
  sort: 0,
  page: 1,
  search: "",
};

function getData({ type, sort, page, search }) {
  const apiUrl = `${apiPath}/api/v1/works?sort=${sort}`;
  axios.get(apiUrl).then((res) => {
    worksData = res.data.ai_works.data;
    pagesData = res.data.ai_works.page;

    console.log("worksData", worksData);
    console.log("pagesData", pagesData);

    renderWorks();
    renderpages();
  });
}

getData(data);

// 作品選染至畫面
function renderWorks() {
  let works = "";

  worksData.forEach((item) => {
    works += /*html*/ `
  <li class="toolsListCard">
        <div class="card-pic"><img
            src="${item.imageUrl}"
            alt="tool1"></div>
        <div class="tools-desc">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
        <div class="tools-ai">
          <p>>${item.model}</p>
          <span>>${item.discordId}</span>
        </div>
        <div class="tools-tag">
          <p>#${item.type}</p>
          <a href="${item.link}"><span class="material-icons">share</span></a>
        </div>
      </li>
  `;
  });

  if (works != "") {
    toolslist.innerHTML = works;
  }
}

//分頁
function renderpages() {
  let pages = "";
  if (pagesData.has_pre) {
    pages += `<li><a class="btn3" href="#"><span class="material-icons">
              keyboard_arrow_left</span></a></li>`;
  }
  for (i = 0; i < pagesData.total_pages; i++) {
    if (i + 1 == pagesData.current_page) {
      pages += `<li><a class="btn3 active" href="#">${i + 1}</a></li>`;
    } else {
      pages += `<li><a class="btn3" href="#">${i + 1}</a></li>`;
    }
  }
  if (pagesData.has_next) {
    pages += `<li><a class="btn3" href="#"><span class="material-icons">
              keyboard_arrow_right</span></a></li>`;
  }
  if (pages !== "") {
    paginationList.innerHTML = pages;
  }
}

$("#filterbtn").on("click", function () {
  this.classList.toggle("active");
});

$("#filtersort").on("click", function () {
  this.classList.toggle("active");
});

$(".btn2").on("click", function () {
  console.log(this);
  this.classList.toggle("active");
});

$(".backtoTop").on("click", () => {
  gotoTop();
});

function gotoTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
