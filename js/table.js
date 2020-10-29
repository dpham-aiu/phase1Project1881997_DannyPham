var tableForm = document.getElementsByClassName("formTable");
var blogTable = document.getElementById("blogTable");
var imgElement;
function showForm() {
  tableForm[0].style.display = "block";
}

function closeForm() {
  tableForm[0].style.display = "none";
}

function readUrl(input) {
  imgElement = document.createElement("img");
  imgElement.className = "img-fluid";
  imgElement.id = "image";
  imgElement.style.height = "200px";
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      imgElement.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function addBlogPost() {
  var username = document.getElementById("username").value;
  var usernameNode = document.createTextNode(username);
  var userPara = document.createElement("p");
  userPara.appendChild(usernameNode);
  var title = document.getElementById("title").value;
  var titleNode = document.createTextNode(title);
  var titleH2 = document.createElement("h2");
  titleH2.appendChild(titleNode);
  var comment = document.getElementById("content").value;
  var commentNode = document.createTextNode(comment);
  var commentPara = document.createElement("p");
  commentPara.appendChild(commentNode);
  commentPara.className = "commentPara";
  var container = document.createElement("div");
  container.className = "container blogTable";
  var row = document.createElement("div");
  row.className = "row";
  var col4 = document.createElement("div");
  col4.className = "col-lg-4 col-md-4 col-sm-12";
  var col8 = document.createElement("div");
  col8.className = "col-lg-8 col-md-8 col-sm-12";
  var col12 = document.createElement("div");
  col12.className = "col-lg-12 col-md-12 col-sm-12";
  var currentdate = new Date();
  var datetime =
    currentdate.getMonth() +
    1 +
    "/" +
    currentdate.getDate() +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  var date = document.createElement("p");
  date.innerHTML = datetime;
  date.className = "dateText";
  if (username | title | (comment === "") | (imgElement === undefined)) {
    alert("Please enter a value for the fields. Also enter a picture!");
  } else {
    console.log(imgElement);
    col4.appendChild(titleH2);
    col4.appendChild(userPara);
    col4.appendChild(date);
    col8.appendChild(imgElement);
    col12.appendChild(commentPara);
    row.appendChild(col4);
    row.appendChild(col8);
    row.appendChild(col12);
    container.appendChild(row);
    blogTable.appendChild(container);
  }
}
