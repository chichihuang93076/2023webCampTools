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

    //console.log("worksData", worksData);
    // console.log("pagesData", pagesData);

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

  if (works !== "") {
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
  for (i = 1; i <= pagesData.total_pages; i++) {
    pages += `<li><a class="btn3 ${
      i == pagesData.current_page ? "active" : ""
    } active" href="#">${i}</a></li>`;
  }
  if (pagesData.has_next) {
    pages += `<li><a class="btn3" href="#"><span class="material-icons">
              keyboard_arrow_right</span></a></li>`;
  }
  if (pages !== "") {
    paginationList.innerHTML = pages;
  }
}

// 搜尋
const search = document.querySelector("#search");
search.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    data.search = search.value;
    data.page = 1;
    //console.log(data);
    getData(data);
  }
});

const filtersort = document.querySelector("#filtersort");
//  由新到舊 -> sort = 0
filtersort.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e.target.innerHTML);
  e.target.classList.toggle("active");
  if (data.sort === 0) {
    data.sort = 1;
    filtersort.innerHTML =
      '由舊到新<span class="material-icons">keyboard_arrow_down</span>';
  } else {
    data.sort = 0;
    filtersort.innerHTML =
      '由新到舊<span class="material-icons">keyboard_arrow_down</span>';
  }
  getData(data);
});

const filterbtn = document.querySelector("#filterbtn");
$("#filterbtn").on("click", (e) => {
  e.preventDefault();
  e.target.classList.toggle("active");
});

// 切換作品類型
const filterbtns = document.querySelectorAll(".btn2");
filterbtns.forEach((item) => {
  //console.log(item);
  item.addEventListener("click", (e) => {
    e.preventDefault();
    //console.log(e.target);
    e.target.classList.toggle("active");
    if (item.textContent === "全部") {
      data.type = "";
    } else {
      data.type = item.textContent;
    }
    getData(data);
  });
});
