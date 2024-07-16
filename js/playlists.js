playlist = [
     {
          "id": 1,
          "title": "Chicken Nuggets | Restaurant Style |",
          "image": "images/playlist/nuggets.jpeg",
          "url": "https://youtube.com/shorts/1EOjQnZFsK8?si=Yxvhp4m9xYLszWHv"
     },
     {
          "id": 2,
          "title": "Gobi manchurian | restaurant style |Easy to make at home |",
          "image": "images/playlist/gobi.jpeg",
          "url": "https://youtube.com/shorts/gd5U4Snk-Po?si=FdbUXHbomGXBw9G0"
     },
     {
          "id": 3,
          "title": "Watermelon juice & icecream|",
          "image": "images/playlist/water.jpeg",
          "url": "https://youtube.com/shorts/zLMmQE8m7Pg?si=8xvkI6NCc5lX633y"
     },
     {
          "id": 4,
          "title": "kuKure Chaat | 2Minute snacks | ASMR |",
          "image": "images/playlist/kuru.jpeg",
          "url": "https://youtube.com/shorts/f7DrSq1_-YY?si=4UTKMFDwnZYvQF3C"
     },
     {
          "id": 5,
          "title": "Butter Kulcha | Butter naan | Tasty |",
          "image": "images/playlist/butter.jpeg",
          "url": "https://youtube.com/shorts/da6_FOz-8sY?si=72BCbuEtyHlfaAB_"
     },
     {
          "id": 6,
          "title": "Paneer Butter Masala Recipe | Restaurant style | Tasty |",
          "image": "images/playlist/paner.jpeg",
          "url": "https://youtube.com/shorts/yqBDcpTq3gA?si=UNY-koUZ7_Wa_Xgh"
     }
];


playlistContainer = document.getElementById('playlist-cotainer');

playlist = playlist.reverse();


playlist.forEach(playlistItem => {
     console.log(playlistItem);

     playlistContainer.innerHTML += `
     <div class="col w-auto">
          <div class="card" style="max-width: 540px;">
               <div class="row g-0">
                    <div class="col-md-6">
                         <a href="${playlistItem.url}" target="_blank" class="link-none"><img src="${playlistItem.image}" class="img-fluid rounded-start" alt="..."></a>
                    </div>
                    <div class="col-md-6">
                         <div class="card-body">
                              <a href="${playlistItem.url}" target="_blank" class="link-none"><h5 class="card-title">${playlistItem.title}</h5></a>
                         </div>
                    </div>
               </div>
          </div>
     </div>
     `;
});