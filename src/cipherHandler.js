export const cipherHandler = (cipherType, text) => {
    switch (cipherType) {
        case 'a1z26':
            a1z26Handler(text)
            break
    }
    return result
}

let result = ''

const alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я']

const a1z26Handler = (text) => {
    let localText = text.toLowerCase()
    for(let i = 0; i <= localText.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (localText[i] === alphabet[j]) {
                result += ((j + 1) + ' ')
            }
        }
    }
}
