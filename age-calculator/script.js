
let text  = document.getElementById("field-span")

let userInput  = document.getElementById("date")
userInput.max = new Date().toISOString().split("T")[0]

function calculate () {
    let birthDate = new Date(userInput.value)

    const m1 = birthDate.getMonth() + 1
    const y1 = birthDate.getFullYear()
    const d1 = birthDate.getDate()
    
    let today = new Date()
    const m2 = today.getMonth() + 1
    const y2 = today.getFullYear()
    const d2 = today.getDate()

    let y3,m3,d3;

    y3 = y2 - y1

    if (m2 >= m1) {
        m3 = m2 - m1
    } else {
        y3--;
        m3 = 12 + m2 - m1
    }

    if (d2 >= d1) {
        d3 = d2 - d1
    } else {
        m3--;
        d3 = getDateInMonth(y1,m1) + m2 - m1
    }

    if (m3 < 0) {
        m3 = 11
        y3--
    }

    text.innerHTML = `You are ${y3} years ${m3} month and ${d3} years old.`
}

function getDateInMonth (year, month) {
    return new Date(year,month,0).getDate()
}

