Webcam.set({
    width: 400,
    height: 300,
    image_formate: "jpeg",
    jpeg_quality: 90
})

Webcam.attach("#camera");

function take_snapshot() {
 
    // take snapshot and get image data
    Webcam.snap( function(data_uri) {
     // display results in page
    //  document.getElementById('results').innerHTML = 
    //  '<img src="'+data_uri+'"/>';
    document.getElementById('results').setAttribute("style", `background: url(${data_uri})`);
     } );
}