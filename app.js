let resData;

function filter() {
    let search = document.getElementById("searchInput").value.toLowerCase();
    let cardInner = document.getElementsByClassName("col");

    for (let i = 0; i < cardInner.length; i++) {
        //city = listInner[i].getElementsByClassName("city");
        cardTitle = cardInner[i].getElementsByClassName("cardTitle");
        if (//city[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
            cardTitle[0].innerHTML.toLowerCase().indexOf(search) != -1
        ) {
            cardInner[i].style.display = "flex"
        } else {
            cardInner[i].style.display = "none"
        }
    }
}

//TMDB 오픈 API -> Movie Top Rated
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
    let html = ''; // html 변수 선언 및 초기화
    // console.log("test : " + data);
    resData = data['results']; // resData 변수에는 불러온 데이터를 배열형식으로 저장한다.
    // console.log(resData);

    //함수 renderData는 fetch를 통해 받아온 데이터를 매개변수로 받는다.
    for (let i = 0; i < resData.length; i++) {
        // console.log(resData[i]);
        let htmlSegment =
            `<div class="col" onclick="alert('id 값 : ${resData[i].id} ')">
                                <div class="card h-100">
                                    <img src="https://image.tmdb.org/t/p/w500${resData[i].poster_path}" 
                                        class="card-img-top">
                                    <div class="cardBody">
                                        <h4 class="cardTitle">${resData[i].title}</h4><br>
                                        <p class="cardText">${resData[i].overview}</p>
                                        <p>Rating : ${resData[i].popularity}</p>
                                    </div>
                                 </div>
                            </div>`;

        html += htmlSegment;
    }

    let appendMycards = document.querySelector('#mycards');
    appendMycards.innerHTML = html;
}

getData();


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

