function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}
let url_str = location; // lấy địa chỉ url
let url = new URL(url_str);
let search_params = url.searchParams;
//lấy đươc  id
let id = search_params.get("id");
window.onload = () => {
  fetch("../js/blog.json")
    .then((results) => results.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].author);
      let item = id;
      addRow(
        data[item].author,
        data[item].title,
        data[item].content,
        data[item].createddate,
        data[item].img,
      );
      includeHTML();
    });
};

function addRow(author, title, content, date, img) {
  const div = document.createElement("div");

  div.className = "detailBlog";

  div.innerHTML =
    `
    <div class="img-d"><img src="` +
    img +
    `" alt=""></div>
    <div class="info-d">
        <nav><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                class="bi bi-calendar-check" viewBox="0 0 16 16">
                <path
                    d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg> <nav>` +
    date +
    `</nav>
    
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                class="bi bi-person-fill" viewBox="0 0 16 16">
                <path
                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <nav>` +
    author +
    `</nav>
        </nav>
        <h4 id="title-blog">` +
    title +
    `</h4>
        <p>` +
    content +
    `</p>
    </div>
    
    `;
  document.getElementById("detailblog").appendChild(div);
}
