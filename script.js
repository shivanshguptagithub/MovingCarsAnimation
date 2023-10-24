let i = 0
let audio = new Audio('sound.mp3')
let d = -15

document.body.addEventListener("click", () => {
    setInterval(() => {
        i += 6
        d += 0.1
        document.getElementById("carWheelLeft").style.transform = `rotate(${i}deg)`
        document.getElementById("carWheelRight").style.transform = `rotate(${i}deg)`
        // document.getElementById("carBody").style.top = '28.4vw'
        // setTimeout(() => {
        //     document.getElementById("carBody").style.top = '28.5vw'
        // }, 1);
        document.getElementById("carWheelLeft2").style.transform = `rotate(${i}deg)`
        document.getElementById("carWheelRight2").style.transform = `rotate(${i}deg)`
        // document.getElementById("carBody2").style.top = '33.4vw'
        // setTimeout(() => {
        //     document.getElementById("carBody2").style.top = '33.5vw'
        // }, 1);
        document.getElementById("carWheelLeft3").style.transform = `rotate(${i}deg)`
        document.getElementById("carWheelRight3").style.transform = `rotate(${i}deg)`
        // document.getElementById("carBody3").style.top = '26.4vw'
        // setTimeout(() => {
        //     document.getElementById("carBody3").style.top = '26.5vw'
        // }, 1);
        document.getElementById("carWheelLeft4").style.transform = `rotate(${i}deg)`
        document.getElementById("carWheelRight4").style.transform = `rotate(${i}deg)`
        // document.getElementById("carBody4").style.top = '35.4vw'
        // setTimeout(() => {
        //     document.getElementById("carBody4").style.top = '35.5vw'
        // }, 1);
        audio.play()
        if (d < 100) {
            document.getElementById("carWheelLeft").style.left = `${d + 2.4}vw`
            document.getElementById("carWheelRight").style.left = `${d + 12.5}vw`
            document.getElementById("carBody").style.left = `${d}vw`

            document.getElementById("carWheelLeft2").style.left = `${d + 2.4-15}vw`
            document.getElementById("carWheelRight2").style.left = `${d + 12.5-15}vw`
            document.getElementById("carBody2").style.left = `${d-15}vw`

            document.getElementById("carWheelLeft3").style.left = `${d + 2.4+40}vw`
            document.getElementById("carWheelRight3").style.left = `${d + 12.5+40}vw`
            document.getElementById("carBody3").style.left = `${d+40}vw`

            document.getElementById("carWheelLeft4").style.left = `${d + 2.4+35}vw`
            document.getElementById("carWheelRight4").style.left = `${d + 12.5+35}vw`
            document.getElementById("carBody4").style.left = `${d+35}vw`
        }
        else{
            d=-21
        }
        setInterval(() => {
            audio.play()
        }, 8000);
        document.getElementById("track").style.animation = "myfirst linear 3s infinite"
        document.getElementById("background").style.animation = "myfirst linear 60s infinite"
        document.getElementById("trees").style.animation = "myfirst linear 20s infinite"
    }, 1);


})