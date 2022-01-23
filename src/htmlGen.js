let arrHeadData = "";
let arrTailData = "";
let arrBodyData = "";
let fullString = "";
/** 
 * 
/* Creating a function that will generate HTML code for the questions. */
const htmlGen = (data) => {
  arrHeadData = (`<!DOCTYPE html><html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <title>teamHtmlGenerator</title><nav class="navbar navbar-dark bg-dark mb-5">
    <span class="navbar-brand mb-0 h1 w-100 text-center">Generated Profile</span>
</nav>
</head>
<body><div class="container">`);

  for (let i = 0; i < data.length; i++) {
    let a;
    switch (data[i].getRole() === a) {
      case a === "Manager":
        arrBodyData = (`<div class="row"><div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-heading">${data[i].getName()}<br /><br />${data[i].getRole()}</h5>
        <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${data[i].getId()}</li>
            <li class="list-group-item">Email Address: ${data[i].getEmail()}</li>
            <li class="list-group-item">Office Phone: ${data[i].getOfficeNumber(true)}</li> </
        </ul>
        </div></div></div>`);
         break;
      case a === "Engineer":
        arrBodyData = (`<div class="row"><div class="col-6">
<div class="card mx-auto mb-3" style="width: 18rem">
<h5 class="card-heading">${data[i].getName()}<br /><br />${data[i].getRole()}</h5>
<div class="card-body">
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID:${data[i].getId()}</li>
    <li class="list-group-item">Email Address: ${data[i].getEmail()}</li>
    <li class="list-group-item">Github:${data[i].getGithub()}</li>
</ul>
</div></div></div>`);
        break;
      case a === "Intern":
        arrBodyData = (`<div class="row"><div class="col-6">
<div class="card mx-auto mb-3" style="width: 18rem">
<h5 class="card-heading">${data[i].getName()}<br /><br />${data[i].getRole()}</h5>
<div class="card-body">
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID:${data[i].getId()}</li>
    <li class="list-group-item">Email Address: ${data[i].getEmail()}</li>
    <li class="list-group-item">School:${data[i].getSchool()}</li>
</ul>
</div></div></div>`);
    }
  }

  arrTailData = (`</body></html>`);

  return arrHeadData + (arrBodyData + arrTailData);
};

module.exports = htmlGen;
