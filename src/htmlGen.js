
const htmlGen = data =>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>teamHtmlGenerator</title>
    </head>
    <body>
        
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row"><div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">Michael Scott<br /><br />${data[0].getRole()}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${data[0].getId()}</li>
                <li class="list-group-item">Email Address: ${data[0].getEmail()}</li>
                <li class="list-group-item">Office Phone:${data[0].getOfficeNumber()}</li>
            </ul>
            </div>
        </div><div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">Ryan Ellingson<br /><br />${data[1].getRole()}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${data[1].getId()}</li>
                <li class="list-group-item">Email Address:${data[1].getEmail()}</li>
                <li class="list-group-item">GitHub:${data[1].getEmail()}</li>
            </ul>
            </div>
        </div><div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">Dwight Schrute<br /><br />${data[2].getRole()}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${data[2].getEmail()}</li>
                <li class="list-group-item">Email Address: ${data[2].getEmail()}</li>
                <li class="list-group-item">School:${data[2].getEmail()}</li>
            </ul>
            </div>
        </div> </div>
    </div>
    
    </body>
    </html>`
}
    




 module.exports = htmlGen;