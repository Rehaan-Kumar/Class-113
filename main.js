function preload() {
}

function setup() {
    canvas = createCanvas(400,380)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(400,380)
    video.hide()
    tint_color = ""
}

function draw() {
    image(video,0,0,400,380)
    tint_color = document.getElementById("tint_color").value
    tint(tint_color);
}

function take_snapshot() {
    save("Rehaan_Kumar.jpeg")
}