import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'myPipe',
    standalone: true
})
export class MyPipe implements PipeTransform {
    transform(value: string) {
        return `${value} formatado`;
    }
}