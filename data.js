if (localStorage.getItem("passedData") != null) {
    var receive = JSON.parse(localStorage.getItem("passedData"))
    var i;
        for (i = 0; i < receive.anggota.length; i++) {
            document.body.innerHTML += '<h1>'+receive.anggota[i].nama+'</h1>'
        }
    localStorage.clear();
}

if (localStorage.getItem("passedDataSingular") != null) {
    document.body.innerHTML += '<h1>'+localStorage.getItem("passedDataSingular")+'</h1>'
    localStorage.clear();
    // console.log(localStorage.getItem("passedDataSingular"))
}

function throw_data() {
    localStorage.setItem("passedData", JSON.stringify(nmDevData));
    window.location.replace("/coba_js");
}

function throw_data_sg(sg) {
    localStorage.setItem("passedDataSingular", sg);
    window.location.replace("/coba_js");
}

var devdata = JSON.parse(`{
    "anggota" : [
        {
            "nama" : "Albari"
        },
        {
            "nama" : "Fachri"
        },
        {
            "nama" : "Argi"
        }
    ]
}`)

var nmDevData = {
    "anggota" : [
        {
            "nama" : "Albari"
        },
        {
            "nama" : "Fachri"
        },
        {
            "nama" : "Argi"
        }
    ]
}

console.log(nmDevData.anggota.length)

document.head.innerHTML += `
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Hello, world!</title>
`

document.body.innerHTML += `
    <h1>Lorem Ipsum<h1>
`

document.body.innerHTML += `
    <h1>Hello, world!</h1>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
`

var i;
for (i = 0; i < devdata.anggota.length; i++) {
    document.body.innerHTML += '<input id="send_data_sg "type="submit" value="Trigger send '+devdata.anggota[i].nama+'" onclick="throw_data_sg('+"'"+devdata.anggota[i].nama+"'"+');"><br>'
}
