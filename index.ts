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

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }
}