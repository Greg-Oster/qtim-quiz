export function trimString(text: string, length: number){
    return text.length > length ?
            text.substring(0, length - 3) + "..." :
                text;
}