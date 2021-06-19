const w : number = window.innerWidth 
const h : number = window.innerHeight 
const parts : number = 4 
const strokeFactor : number = 90 
const scGap : number = 0.02 / parts 
const rot : number = Math.PI / 2 
const delay : number = 20 
const backColor : string = "#BDBDBD"
const colors : Array<string> = [
    "#f44336",
    "#3F51B5",
    "#F9A825",
    "#6A1B9A",
    "#00C853"
]
const barWFactor : number = 4.9 
const barHFactor : number = 9.2 
const rFactor : number = 24.9 

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }
}

class DrawingUtil {

    static drawCircle(context : CanvasRenderingContext2D, x : number, y : number, r : number) {
        context.beginPath()
        context.arc(x, y, r, 0, 2 * Math.PI)
        context.fill()
    }

    static drawBarStickBall(context : CanvasRenderingContext2D, scale : number) {
        const sc1 : number = ScaleUtil.divideScale(scale, 0, parts)
        const sc2 : number = ScaleUtil.divideScale(scale, 1, parts)
        const sc3 : number = ScaleUtil.divideScale(scale, 2, parts)
        const r : number = Math.min(w, h) / rFactor  
        const barW : number = Math.min(w, h) / barWFactor 
        const barH : number = Math.min(w, h) / barHFactor 
        context.save()
        context.translate(w / 2, h / 2 + (h / 2 + r) * sc3)
        context.rotate(2 * Math.PI * sc3)
        for (var j = 0; j < 2; j++) {
            context.save()
            context.scale(1 - 2 * j, 1)
            DrawingUtil.drawCircle(
                context,
                -barW / 3,
                -h / 2 - r + (h / 2 -barH / 2) * sc2,
                r
            )
            context.restore()
        }
        context.fillRect(-(barW / 2) * sc1, -barH / 2, barW, barH)
        context.restore()
    }

    static drawBSBNode(context : CanvasRenderingContext2D, i : number, scale : number) {
        context.fillStyle = colors[i]
        DrawingUtil.drawBarStickBall(context, scale)
    }
}