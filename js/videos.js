videos = [
     

     {
          "src": "https://youtube.com/shorts/gRvvapozN_E?si=uUzPeQqatbmO0rJ4",
          "title": "content will be soon here"
     },
     

     
     
     
];


videoContainer = document.getElementById('video-cotainer');

videos.forEach(video => {
     videoContainer.innerHTML += `
     <div class="col my-2">
          <div class="card shadow-sm">
               <iframe width="100%" height="225" src="${video.src}"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
               </iframe>
               <div class="col my-2">
                    <div class="card-body">
                         <p class="card-text">${video.title}</p>
                    </div>
               </div>
          </div>
     </div>
     `;
});

