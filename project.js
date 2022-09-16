let projectData = [
  {
    image: 'img/project-2.png',
    name: 'Spam-email-detection-ML-models',
    detail: 'Machine learning model that can detect Spam emails.',
    github: 'https://github.com/HamaHedi/Spam-email-detection-ML-models',

    tags: '#Python, #Machine learning',
  },
  {
    image: 'img/project-3.png',
    name: 'file-storage-tracker',
    detail:
      'MERN app where user can upload files with storage and archive pages.',
    github: 'https://github.com/HamaHedi/file-storage-tracker',

    tags: '#MaterialUi, #ReactJs,#Mongodb,#NodeJs',
  },
];

// creating project cards in frontend

const createProjectCards = (data) => {
  let projectContainer = document.querySelector('.project-container');

  projectContainer.innerHTML += `
            <div class="project-card" data-tags="${data.tags}">
                <div class="project-wrapper">
                    <div class="project-thumbnail">
                        <img src="img/close.png" class="close-btn" alt="">
                        <img src="${data.image}" class="project-img" alt="">
                        <span class="tags">${data.tags}</span>
                    </div>

                    <div class="project-body">
                        <h1 class="project-name">${data.name}</h1>
                        <p class="project-detail">${data.detail}</p>
                        <a href="${data.github}" class="btn">github</a>
                        <a href="${data.live}" class="btn">see live</a>
                    </div>
                </div>
            </div>
    `;
};

projectData.forEach((data) => createProjectCards(data));
