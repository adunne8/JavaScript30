const blogDiv = document.querySelector('.blog');
const data = JSON.parse(blog);

console.log(data);
console.log(data.length);

function buildBlog(data){
    for (let i = 0; i < data.length; i++){
        console.log(data[i].img);
        blogDiv.innerHTML += `
            <div class="blog-entry">
                <img src=${data[i].img}>
                <h2>${data[i].title}</h2>
                <p class="details"><img class="language" src="symbols/${data[i].language}.jpg"><span class="date">${data[i].date}</span></p>
                <p>${data[i].content}</p>
            </div>`;
    }
}

buildBlog(data);
