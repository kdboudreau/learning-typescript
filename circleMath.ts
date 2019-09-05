namespace MyMath {
    // can nest namespaces
    export namespace Circle {
        const PI = 3.14;
        
        export function calculateCircumference(diameter: number) {
            return diameter * PI;
        }
    }
}