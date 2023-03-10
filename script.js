document.getElementById('partydiv').style.display = "none"
document.getElementById('chatdiv').style.display = "none"
document.getElementById('discoverdiv').style.display = "none"
document.getElementById('profilediv').style.display = "none"
document.getElementById('camdiv').style.display = "none"


if (localStorage.getItem("username") == null) {
  //document.getElementById('delbutton').style.display = "none"
  document.getElementById('footer').style.display = "none"
    document.getElementById('logindiv').style.display = "block"
  document.getElementById('loginfooter').style.display = "block"
  document.getElementById('partydiv').style.display = "none"
  document.getElementById('chatdiv').style.display = "none"
  document.getElementById('discoverdiv').style.display = "none"
  document.getElementById('profilediv').style.display = "none"
  document.getElementById('camdiv').style.display = "none"
}
else {

  //document.getElementById('delbutton').style.display = "none"
  document.getElementById('footer').style.display = "block"
  document.getElementById('logindiv').style.display = "none"
  document.getElementById('loginfooter').style.display = "none"
  document.getElementById('partydiv').style.display = "none"
  document.getElementById('chatdiv').style.display = "none"
  document.getElementById('camdiv').style.display = "block"
  document.getElementById('discoverdiv').style.display = "none"
  document.getElementById('profilediv').style.display = "none"
  document.getElementById('profilepicture').src = localStorage.getItem('profilepicture')
  document.getElementById('profiletitle').innerHTML = localStorage.getItem('username')
  document.body.style.background = localStorage.getItem('profilecolor')
  document.documentElement.style.background = localStorage.getItem('profilecolor')
}






function login() {
//alert('Username: ' + document.getElementById('username').value + '\n' + 'Password: ' + document.getElementById('password').value)
document.getElementById('logindiv').style.display = "none"
document.getElementById('partydiv').style.display = "none"
document.getElementById('chatdiv').style.display = "none"
document.getElementById('camdiv').style.display = "block"
document.getElementById('discoverdiv').style.display = "none"
document.getElementById('profilediv').style.display = "none"
  var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

//document.getElementById('screenshot').style.display = 'none';
document.getElementById('footer').style.display = "block"
document.getElementById('loginfooter').style.display = 'none';
localStorage.setItem("username", document.getElementById('username').value);
document.getElementById('profiletitle').innerHTML = localStorage.getItem('username')
}


function screenshot() {
  let canvas = document.createElement('canvas');
let video = document.getElementById('videoElement');

canvas.width = 750;
canvas.height = 562.5;

let ctx = canvas.getContext('2d');
ctx.drawImage( video, 0, 0, canvas.width, canvas.height );

let image = canvas.toDataURL('image/jpeg');
document.getElementById('screenshot').src = image
  
 document.getElementById('scrbutton').style.display = "none"
  document.getElementById('delbutton').style.display = "block"
 
 document.getElementById('videoElement').style.display = 'none';
  document.getElementById('screenshot').style.display = 'block';
}

function deletescr() {
  document.getElementById('scrbutton').style.display = "block"
  document.getElementById('delbutton').style.display = "none"
  document.getElementById('videoElement').style.display = 'block';
  document.getElementById('screenshot').style.display = 'none';
}

function openparty() {
  document.getElementById('partydiv').style.display = "block"
  document.getElementById('chatdiv').style.display = "none"
  document.getElementById('camdiv').style.display = "none"
  document.getElementById('discoverdiv').style.display = "none"
  document.getElementById('profilediv').style.display = "none"
}

function openchat() {
  document.getElementById('partydiv').style.display = "none"
  document.getElementById('chatdiv').style.display = "block"
  document.getElementById('camdiv').style.display = "none"
  document.getElementById('discoverdiv').style.display = "none"
  document.getElementById('profilediv').style.display = "none"
}

function opencam() {
  document.getElementById('partydiv').style.display = "none"
  document.getElementById('chatdiv').style.display = "none"
  document.getElementById('camdiv').style.display = "block"
  document.getElementById('discoverdiv').style.display = "none"
  document.getElementById('profilediv').style.display = "none"
}

function opendiscover() {
  document.getElementById('partydiv').style.display = "none"
  document.getElementById('chatdiv').style.display = "none"
  document.getElementById('camdiv').style.display = "none"
  document.getElementById('discoverdiv').style.display = "block"
  document.getElementById('profilediv').style.display = "none"
}

function openprofile() {
  document.getElementById('partydiv').style.display = "none"
  document.getElementById('chatdiv').style.display = "none"
  document.getElementById('camdiv').style.display = "none"
  document.getElementById('discoverdiv').style.display = "none"
  document.getElementById('profilediv').style.display = "block"
}


document.getElementById('pictureInput').addEventListener('change', async (event) => {
  // clean up earliest files
  myFiles = {}
  // set state of files to false until each of them is processed
  isFilesReady = false

  const files = event.srcElement.files;

  const filePromises = Object.entries(files).map(item => {
    return new Promise((resolve, reject) => {
      const [index, file] = item
      const reader = new FileReader();
      reader.readAsBinaryString(file);

      reader.onload = function(event) {
        // Convert file to Base64 string
		// btoa is built int javascript function for base64 encoding
      console.log('Image Added!\nSource:\n\n' + 'data:image/png;base64, ' + btoa(event.target.result))
      document.getElementById('profilepicture').src = 'data:image/png;base64, ' + btoa(event.target.result)
      localStorage.setItem('profilepicture', 'data:image/png;base64, ' + btoa(event.target.result))

      };
      reader.onerror = function() {
        console.log("can't read the file");
        reject()
      };
    })
  })

  Promise.all(filePromises)
    .then(() => {
      console.log('ready to submit')
      isFilesReady = true
    })
    .catch((error) => {
      console.log(error)
      console.log('something wrong happened')
    })
})

function changecolor() {
console.log(document.getElementById('profilecolor').value )

if (document.getElementById('profilecolor').value == 'default') {
  localStorage.setItem('profilecolor', '#8969cf')
  document.body.style.background = "#8969cf"
  document.documentElement.style.background = "#8969cf"
}
else if (document.getElementById('profilecolor').value == 'red') {
  localStorage.setItem('profilecolor', '#92031c')
  document.body.style.background = "#92031c"
  document.documentElement.style.background = "#92031c"
}
else if (document.getElementById('profilecolor').value == 'grey') {
  localStorage.setItem('profilecolor', '#131313')
  document.body.style.background = "#131313"
  document.documentElement.style.background = "#131313"
}

}