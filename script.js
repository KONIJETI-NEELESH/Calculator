const buttons = document.querySelectorAll('.buttons');
const input = document.querySelector('.field');
let string = "0"
input.value = string
const screenWidth = window.screen.width;
if (screenWidth < 600) {
    buttons.forEach((ele) => {
        ele.addEventListener('click', () => {
            ele.style.backgroundColor = "rgb(255, 40, 0)";
            ele.style.transition = "0.1s all ease-in-out";
            setTimeout(() => {
                ele.style.backgroundColor = "";
                ele.style.transition = "";
            }, 250)
        })
    })
}
else {
    buttons.forEach((ele) => {
        ele.addEventListener('click', () => {
            setTimeout(() => {
                ele.style.backgroundColor = "rgb(255, 40, 0)";
                ele.style.transition = "0.1s all ease-in-out";
            }, 200)
        })
        ele.addEventListener('mouseover', () => {
            ele.style.backgroundColor = "orangered"
        })
        ele.addEventListener('mouseout', () => {
            ele.style.backgroundColor = 'rgb(65, 65, 65)'
        })

    })
}


buttons.forEach((element) => {
    element.addEventListener('click', (() => {
        if (element.innerHTML == "AC") {
            string = "0"
            input.value = string
        }
        else if (element.innerHTML == "DEL") {
            if (string.length == 1) {
                string = "0"
            }
            else {
                string = string.slice(0, -1)
            }
            input.value = string
        }
        else if (element.innerHTML == "=") {
            s = string[string.length - 1]
            if (s == '*' || s == '/' || s == '%' || s == '+' || s == '-') {
                alert('Invalid Expression')
            }
            else {
                string = eval(string).toString()
                input.value = string
            }
        }
        else if (element.innerHTML == '*' || element.innerHTML == '/' || element.innerHTML == '%' || element.innerHTML == '+' || element.innerHTML == '-') {
            s = string[string.length - 1]
            if (s == '*' || s == '/' || s == '%' || s == '+' || s == '-') {
                string = string.slice(0, -1)
                string += element.innerHTML
                input.value = string
            }
            else {
                string += element.innerHTML
                input.value = string
            }
        }
        else if (element.innerHTML == '.') {
            s = string.length - 1
            let str = ''
            while (s >= 0) {
                if (string[s] == '+' || string[s] == '-' || string[s] == '/' || string[s] == '*' || string[s] == '%') {
                    break
                }
                str += string[s]
                s = s - 1
            }
            if (!str.includes('.')) {
                string += element.innerHTML
                input.value = string
            }
        }
        else {
            if (string == "0") {
                string = element.innerHTML
                input.value = string
            }
            else {
                string += element.innerHTML
                input.value = string
            }
        }
    }))
})