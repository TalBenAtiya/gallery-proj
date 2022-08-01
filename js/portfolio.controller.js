console.log('Starting up');

$(onInit)
$('.submit-btn').click()

function onInit(){
  renderProjectsGrid(onMailSubmit)
}

function renderModal(id) {
  const project = getProjectById(id)
  console.log(project);


  var strHTML =
    `<h2>${project.name}</h2>
   <p class="item-intro text-muted">${project.title}.</p>
   <img class="img-fluid d-block mx-auto" src="${project.img}" alt="">
   <p>${project.desc}</p>
   <ul class="list-inline">
     <li>Date: ${project.publishedAt}</li>
     <li>Category: ${project.labels}</li>   
   </ul>

   <button class="btn btn-primary open-proj-btn" onclick=" window.open('${project.url}','_blank')" type="button">
       <i class="fa fa-github"></i>
       Open Project
     </button>

     <button class="btn btn-primary close-proj-btn" data-dismiss="modal" type="button">
            <i class="fa fa-times"></i>
            Close
        </button>`


  $('.modal-body').html(strHTML)

}


function renderProjectsGrid() {
  const projects = getProjectForDisplay()
  var strsHTML = projects.map(project =>
    `<div class="col-md-4 col-sm-6 portfolio-item">
        <a onclick="renderModal('${project.id}')" class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid proj-img" src="${project.img}" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${project.name}</h4>
        <p class="text-muted">Project</p>` )

  $('.grid-container').html(strsHTML)
}

function onMailSubmit(){
const $elMail = $('#mail-input').val()
const $elSubject = $('#mail-subject').val()
const $elTxt = $('#text-area').val()
  window.open(`https://mail.google.com/mail/u/0/?fs=1&to=benatia.tal@gmail.com&su=${$elSubject}&body=From:${$elMail}                 
               Message:${$elTxt}&bcc=&tf=cm`)
}

