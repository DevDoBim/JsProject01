let btn = document.querySelector("#search-button");
btn.addEventListener("click", function () {
    getData();
    alert();
});

let resData;

function getData() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWM4ZTI3MmRiYjdkYjNhYTUyNWRmM2UxMjFlZDZiZiIsInN1YiI6IjY0NzA4YTQ2NTQzN2Y1MDBhOTA3OGE4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qtjlgxSzhX1MsqOpNgnoJVkAbtDQaI9Zk1GgbViq0zs'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => renderData(response))
        .catch(err => console.error(err));
}

 function renderData(data) {
    // let data = await getData();
    let html = '';
    //console.log("test : " + data);
    resData = data['results'];
    //console.log(resData);

    for(let i = 0; i < resData.length; i++ ){
        //console.log(resData[i]);
        let htmlSegment = `<div class="col">
                                <div class="card h-100">
                                    <img src="${resData[i].poster_path}"
                                        class="card-img-top">
                                    <div class="card-body">
                                        <h5 class="card-title">${resData[i].title}</h5>
                                        <p class="card-text">${resData[i].overview}</p>
                                    </div>
                                </div>
                            </div>`;
        html += htmlSegment;
    }
    
    let appendMycards = document.querySelector('#mycards');
    appendMycards.innerHTML = html;
}

getData();

// data.forEach(data => {
    //     console.log("작동");
        // let htmlSegment = `<div class="col">
        //                         <div class="card h-100">
        //                             <img src="${data.poster_path}"
        //                                 class="card-img-top">
        //                             <div class="card-body">
        //                                 <h5 class="card-title">${data.title}</h5>
        //                                 <p class="card-text">${data.overview}</p>
        //                             </div>
        //                         </div>
        //                     </div>`;

        // html += htmlSegment;
    // });

// 받아온 데이터 > results : {...}
// adult:false
// backdrop_path:"/tmU7GeKVybMWFButWEGl2M4GeiP.jpg"
// genre_ids:(2)[18, 80]
// id:238
// original_language:"en"
// original_title:"The Godfather"
// overview:"Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge."
// popularity:87.284
// poster_path:"/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
// release_date:"1972-03-14"
// title:"The Godfather"
// video:false
// vote_average:8.7
// vote_count:18007

// .then(data => {
//     const id = document.createElement("div");
//     const title = document.createElement("div");
//     const overview = document.createElement("div");
//     const poster_path = document.createElement("div");
//     id.textContent = data.id;
//     title.textContent = data.title;
//     overview.textContent = data.overview;
//     poster_path.textContent = data.poster_path;
//     const mycards = document.getElementById("mycards");
//     mycards.appendChild(id);
//     mycards.appendChild(title);
//     mycards.appendChild(overview);
//     mycards.appendChild(poster_path);
// })

// .then((data) => {
//     let rows = data['options'] //data는 options
//         $('#cards-box').empty() //id가 cards-box인 div를 비운다.
//         rows.forEach((a) => { //forEach에서 사용하는 요소들을 a라고 칭한다.
//             let id = a['id'] //데이터 가져오기
//             let title = a['title']
//             let overview = a['overview']
//             let poster_path = a['poster_path']
//             let temp_html = `<div class="col">
//                                 <div class="card h-100">
//                                     <img src="${poster_path}"
//                                         class="card-img-top">
//                                     <div class="card-body">
//                                         <h5 class="card-title">${title}</h5>
//                                         <p class="card-text">${overview}</p>
//                                     </div>
//                                 </div>
//                             </div>`
//             $('#cards-box').append(temp_html) //id가 cards-box인 div에 temp_html를 붙인다.
//         })
// })