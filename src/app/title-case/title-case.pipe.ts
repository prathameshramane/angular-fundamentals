import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "titlecase"
})
export class TitleCasePipe implements PipeTransform {
    transform(title: any, ...args: any[]) {
        if (!title) return null;
        const wordsArray = title.split(" ")
        const prepositions = ["of", "the"];
        let modifiedTitle = "";
        wordsArray.forEach((w: string, index: number) => {
            if (index > 0 && prepositions.includes(w)) modifiedTitle += " " + w;
            else modifiedTitle += " " + w.charAt(0).toUpperCase() + w.substring(1).toLowerCase();
        });

        return modifiedTitle;
    }
}