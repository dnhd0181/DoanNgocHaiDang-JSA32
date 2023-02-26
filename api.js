document.getElementById('myBtn').addEventListener('click', Music);

function Music() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
  };
  
  fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=viewCount&q=rap&key=AIzaSyAD6aWbbZv02RhvqCDhK6zRARdWxt-f8v0", requestOptions)
    .then(response => response.json())
    .then(data => {
      let author = data.items;
      console.log(author);
      
      // Tạo biến output và gán giá trị khởi tạo cho nó
      let output = "<h2><center>Get Random music</center></h2>";
      
      // Duyệt qua từng phần tử trong mảng author
      author.forEach(function(lists) {
        output += `
          <div class="container">
            <div class="card mt-4 bg-light">
              <ul class="list-group">
                <li class="list-group-item"><h2>Name: ${lists.snippet.title}</h2></li>
                <li class="list-group-item"><h2>Channel: ${lists.snippet.channelTitle}</h2></li>
              </ul>
            </div>
          </div>
        `;
      });
      
      // Gán giá trị của biến output vào phần tử có id là "output"
      document.getElementById('output').innerHTML = output;
    })
    .catch(error => {
      console.log('error', error);
    });
}