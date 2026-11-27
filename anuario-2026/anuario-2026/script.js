const STUDENTS_PER_PAGE = 6;

const students = [
  { name: "Alison Fidelis", profession: "Odontologia", photo: "Alison.jpeg" },
  { name: "Anna Beatriz", profession: "Engenharia Civil", photo: "Anna.jpeg" },
  { name: "Arthur Cesar", profession: "Engenharia de Software", photo: "Arthur.jpeg" },
  { name: "Cesar Augusto", profession: "Direito", photo: "Cesar.jpeg" },
  { name: "Davi Kenji", profession: "Engenharia de Software", photo: "" },
  { name: "Eric Rodrigues", profession: "Medicina", photo: "" },
  { name: "Joao Ricardo", profession: "Engenharia de Software", photo: "" },
  { name: "Kauan Augusto", profession: "Engenharia de Software", photo: "Kauan.jpeg" },
  { name: "Luan Sarno", profession: "Engenharia Mecânica", photo: "" },
  { name: "Luís Felipe", profession: "Engenharia de Software", photo: "luisamorin.jpeg" },
  { name: "Luiggi Grecco", profession: "Tecnologia da Informação", photo: "Luiggi.jpeg" },
  { name: "Manuelle Germano", profession: "Nutrição", photo: "Manuelle.jpeg" },
  { name: "Marcos Vinicius", profession: "Engenharia de Software", photo: "Marcos.jpeg" },
  { name: "Miguel Braga", profession: "Desenvolvimento de Software", photo: "MiguelB.jpeg" },
  { name: "Miguel Sarti", profession: "Engenharia de Software", photo: "MiguelS.jpeg" },
  { name: "Vitor Gabriel", profession: "Ciências Biológicas", photo: "VitorG.jpeg" },
  { name: "Victor De Melo", profession: "Engenharia de Software", photo: "Victor de Melo.jpeg" },
  { name: "Yasmin Alves", profession: "Farmácia", photo: "Yasmin.jpeg" },
  { name: "Ygor Irineu", profession: "Engenharia de Software", photo: "" }
].sort(function (a, b) { return a.name.localeCompare(b.name, "pt-BR"); });

var bookState = "closed";
var currentPage = 0;
var totalPages = Math.ceil(students.length / STUDENTS_PER_PAGE);

var coverView = document.getElementById("cover-view");
var openingView = document.getElementById("opening-view");
var pagesView = document.getElementById("pages-view");
var coverButton = document.getElementById("open-book");
var leftColumn = document.getElementById("left-page");
var rightColumn = document.getElementById("right-page");
var pageInfo = document.getElementById("page-info");
var letterRange = document.getElementById("letter-range");
var dotsContainer = document.getElementById("dots");
var prevButton = document.getElementById("prev-page");
var nextButton = document.getElementById("next-page");
var bookSpread = document.getElementById("book-spread");

function pad(n) { return String(n + 1).padStart(2, "0"); }

function getPageStudents() {
  var all = students.slice(currentPage * STUDENTS_PER_PAGE, (currentPage + 1) * STUDENTS_PER_PAGE);
  var mid = Math.ceil(all.length / 2);
  return { all: all, left: all.slice(0, mid), right: all.slice(mid), mid: mid };
}

function escapeAttr(str) {
  return String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function entryHTML(student, index, delay) {
  var photoContent = student.photo
    ? '<span class="photo-fallback" aria-hidden="true">📷</span>' +
      '<img src="' + escapeAttr("../imagens/" + encodeURIComponent(student.photo)) + '" alt="Foto de ' + escapeAttr(student.name) + '" onload="if (this.previousElementSibling) this.previousElementSibling.style.display=\'none\';" onerror="this.remove();" />'
    : '<span class="photo-fallback" aria-hidden="true">📷</span>';

  return '<article class="entry" style="animation-delay: ' + delay + 's">' +
    '<div class="photo">' + photoContent + '</div>' +
    '<div class="entry-content">' +
      '<div class="entry-title">' +
        '<span class="entry-number">' + pad(index) + '</span>' +
        '<span class="entry-name">' + student.name + '</span>' +
      '</div>' +
      '<div class="entry-profession">' + student.profession + '</div>' +
    '</div>' +
  '</article>';
}

function renderDots() {
  dotsContainer.innerHTML = "";
  for (var i = 0; i < totalPages; i++) {
    var dot = document.createElement("button");
    dot.className = "dot" + (i === currentPage ? " active" : "");
    dot.type = "button";
    dot.setAttribute("data-page", i);
    dot.addEventListener("click", function () {
      currentPage = parseInt(this.getAttribute("data-page"));
      renderPages(true);
    });
    dotsContainer.appendChild(dot);
  }
}

function renderPages(animate) {
  var data = getPageStudents();

  // Animação de voltar á pagina anterior ou avançar para a próxima página
  if (animate && bookSpread) {
    bookSpread.classList.remove("page-turn");
    void bookSpread.offsetWidth; // trigger reflow
    bookSpread.classList.add("page-turn");
  }

  leftColumn.innerHTML = data.left.map(function (s, i) {
    return entryHTML(s, currentPage * STUDENTS_PER_PAGE + i, 0.05 + i * 0.07);
  }).join("");

  rightColumn.innerHTML = data.right.map(function (s, i) {
    return entryHTML(s, currentPage * STUDENTS_PER_PAGE + data.mid + i, 0.05 + (data.mid + i) * 0.07);
  }).join("");

  var first = data.all[0] ? data.all[0].name[0] : "";
  var last = data.all[data.all.length - 1] ? data.all[data.all.length - 1].name[0] : "";
  letterRange.textContent = first === last ? first : first + " — " + last;

  pageInfo.textContent = "Página " + (currentPage + 1) + " de " + totalPages;
  prevButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === totalPages - 1;
  renderDots();
}

function showState() {
  coverView.classList.toggle("hidden", bookState !== "closed");
  openingView.classList.toggle("hidden", bookState !== "opening");
  pagesView.classList.toggle("hidden", bookState !== "open");
}

coverButton.addEventListener("click", function () {
  bookState = "opening";
  showState();
  setTimeout(function () {
    bookState = "open";
    showState();
    renderPages(false);
  }, 1200);
});

prevButton.addEventListener("click", function () {
  currentPage = Math.max(0, currentPage - 1);
  renderPages(true);
});

nextButton.addEventListener("click", function () {
  currentPage = Math.min(totalPages - 1, currentPage + 1);
  renderPages(true);
});

showState();