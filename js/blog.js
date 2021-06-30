var data;

fetch("../js/blog.json")
  .then((results) => results.json())
  .then((datablog) => {
    data = datablog;
    for (item in data) {
      addRow(
        data[item].author,
        data[item].title,
        data[item].subcontent,
        data[item].createddate,
        data[item].img,
        item,
      );
    }
  });

function addRow(author, title, subcontent, date, img, id) {
  const div = document.createElement("div");

  div.className = "blog";

  div.innerHTML =
    `
    <div class="img"><img src="` +
    img +
    `" alt=""></div>
    <div class="info">
        <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                class="bi bi-calendar-check" viewBox="0 0 16 16">
                <path
                    d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg> <span>` +
    date +
    `</span>
    
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                class="bi bi-person-fill" viewBox="0 0 16 16">
                <path
                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <span>` +
    author +
    `</span>
        </p>
        <h6>` +
    title +
    `</h6>
        <p>` +
    subcontent +
    `</p>
        <a href="detailBlog.html?id=` +
    id +
    `">Read more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  class="bi bi-chevron-double-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg></a>
    </div>
    
    `;
  document.getElementById("listblog").appendChild(div);
}
var filteredData;
function find(e) {
  let searchInput = e.value;
  filteredData = data.filter(function abc(item) {
    return (
      item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.title.toString().includes(searchInput.toString())
    );
  });
  console.log(filteredData);
  cleanBlogList();
if (filteredData.length > 0) {
    document.getElementById("note").style.display = "none";
    for (item in data) {
      for (itemFilter in filteredData)  {
        if  (data[item].id == filteredData[itemFilter].id){
             console.log(data[item].id)
             document.getElementsByClassName("blog")[item].style.display = "block";
        }
           
      }
    }
  }
  else {
    document.getElementById("note").style.display = "block";
    document.getElementById("note").innerHTML ="not found";
  }
}
 function cleanBlogList (){
    for (item in data) {
        document.getElementsByClassName("blog")[item].style.display = "none";
      }
 }
