import { Point, Size } from 'tns-core-modules/ui/core/view';

export class Rect {
    public origin: Point;   // x and y
    public size: Size;     // height and weight
    
    constructor(x: number, y :number, width: number, height:number){
        this.origin = {x,y};
        this.size = {width, height};
    }

    // get image map shape
    static fromPoint(x: number, y:number, side: number): Rect{
        const rect = new Rect(x - side/2, y - side /2, side, side);
        return rect;
    }

    
    static isPointInsideRect(point: Point, rect: Rect): boolean {
        
        // rect origin
        const z1 = rect.origin.x;
        const z2 = rect.origin.y;
        const z3 = rect.origin.x + rect.size.width;
        const z4 = rect.origin.y + rect.size.width;

        // normalize x and y coords
        const x1 = Math.min(z1,z3);
        const x2 = Math.min(z1,z3);
        const y1 = Math.min(z1,z4);
        const y2 = Math.min(z1,z4);

        // if point is in rect
        if((x1 <= point.x) && (point.x <= x2) && (y1 <= point.y) && (point.y <= y2)){
            return true;
        }
        else{
            return false;
        }


    }
}