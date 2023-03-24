export default function CanvasMouseTrail(){
    const canvas =  document.querySelector('.canvas');
    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    let particlesArr = []
    let hue = 0
    
    const mouse = {
        x: undefined,
        y: undefined
    }
    
    canvas.addEventListener('mousemove', function (event){
        mouse.x = event.x
        mouse.y = event.y
        for(let i = 0; i < 3; i++) {
            particlesArr.push(new Particle())
        }
    })
    
    class Particle {
        constructor() {
            this.x = mouse.x
            this.y = mouse.y
            this.size = Math.random() * 2 + 5
            this.speedX = Math.random() * 2 - 1
            this.speedY = Math.random() * 2 - 1
            this.color = `hsl(${hue}, 100%, 50%)`
        }
        update(){
            this.x += this.speedX
            this.y += this.speedY
            if(this.size > 0.5)
                this.size -= 0.03
        }
        draw(){
            ctx.fillStyle = this.color
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
            ctx.fill()
        }
    }
    function handleParticle(){
        for(let i = 0; i < particlesArr.length; i++) {
            particlesArr[i].update()
            particlesArr[i].draw()
            for(let j = i; j < particlesArr.length; j++){
                const dx = particlesArr[i].x - particlesArr[j].x
                const dy = particlesArr[i].y - particlesArr[j].y
                const distance = Math.sqrt(dx * dx + dy * dy)
                //time
                if(distance < 30){
                    ctx.beginPath()
                    ctx.strokeStyle = particlesArr[i].size / 10
                    ctx.linewidth = particlesArr[i].size / 10
                    ctx.moveTo(particlesArr[i].x, particlesArr[i].y)
                    ctx.lineTo(particlesArr[i].x, particlesArr[i].y)
                    ctx.stroke()
                }
            }
            if(particlesArr[i].size <= 0.5){
                particlesArr.splice(i, 1)
                i--
            }
        }
    }
    
    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        handleParticle()
        hue++
        requestAnimationFrame(animate)
    }
    
    window.addEventListener("resize", function(){
        canvas.width = innerWidth
        canvas.height = innerHeight
    })
    window.addEventListener("mouseout", function() {
        mouse.x = undefined
        mouse.y = undefined
    })
    animate()
}
CanvasMouseTrail()