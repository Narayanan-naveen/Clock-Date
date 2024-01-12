//clock code



function display() {
    let DateTime = new Date()
    let hr = DateTime.getHours()
    let min = DateTime.getMinutes()
    let sec = DateTime.getSeconds()
    if (hr > 12) {
        hr = hr - 12
        ampm.innerHTML = "PM"
    }
    document.getElementById('hr').innerHTML = padzero(hr)
    document.getElementById('min').innerHTML = padzero(min)
    document.getElementById('sec').innerHTML = padzero(sec)
}
function padzero(num) {
    return num < 10 ? "0" + num : num
}

//date

function datedisplay() {
    let onlydate = new Date()
    let Dt = onlydate.getDate()
    let mon = onlydate.getMonth() + 1
    let year = onlydate.getFullYear()
    document.getElementById('dt').innerHTML = padzero(Dt)
    document.getElementById('mon').innerHTML = padzero(mon)
    document.getElementById('year').innerHTML = year
}

setInterval(datedisplay, 1000)

setInterval(display, 1000)