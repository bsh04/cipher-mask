export const cipherHandler = (isCoder, cipherType, text, key) => {
    result = ''
    let newText = text.replace(/ /g, '')
    switch (cipherType) {
        case 'a1z26':
            isCoder ? a1z26HandlerCoder(newText) : a1z26HandlerDecoder(newText)
            break
        case 'rot1':
            rot1Handler(isCoder, newText, 1)
            break
        case 'caesar':
            caesarHandler(isCoder, newText)
            break
        case 'vigener':
            vigenerHandler(isCoder, newText, key)
    }
    return result
}

let result = ''

const alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я']

const a1z26HandlerCoder = (text) => {
    let localText = text.toLowerCase()
    for (let i = 0; i < localText.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (localText[i] === alphabet[j]) {
                result += i === (localText.length - 1) ? (j + 1) : ((j + 1) + ' ')
            }
        }
    }
}

const a1z26HandlerDecoder = (text) => {
    let localText = text.split(' ')
    for (let i = 0; i < localText.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (+localText[i] === j + 1) {
                result += alphabet[j]
            }
        }
    }
}

const rot1Handler = (isCoder, text, step) => {
    let localText = text.toLowerCase()
    for (let i = 0; i < localText.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (localText[i] === alphabet[j]) {
                if (isCoder) {
                    result += alphabet[
                        j + step < alphabet.length
                            ?
                            j + step
                            :
                            (j + step) - alphabet.length
                    ]
                } else {
                    result += alphabet[
                        j - step >= 0
                        ?
                            j - step
                            :
                            (j - step) + alphabet.length
                    ]
                }
            }
        }
    }
}

const caesarHandler = (isCoder, text) => {
    for (let i = 0; i < alphabet.length; i++) {
        result += `ROT${i + 1}: `
        rot1Handler(isCoder, text, i + 1)
        result += i !== alphabet.length - 1 ? '\n' : ''
    }
}

const vigenerHandler = (isCoder, text, key) => {

    a1z26HandlerCoder(text)
    let extraText = result.split(' ')

    result = ''

    a1z26HandlerCoder(key)
    let extraSteps = result.split(' ')
    let steps = []

    while (steps.length < extraText.length) {
        steps = [...steps, ...extraSteps]
    }

    if (steps.length > extraText.length) {
        steps = steps.slice(0, extraText.length)
    }

    result = ''

    for (let i = 0; i < text.length; i++) {
        if (isCoder) {
            if (Number(extraText[i]) + Number(steps[i]) - 1 >= alphabet.length) {
                result += alphabet[(Number(extraText[i]) + Number(steps[i]) - 1) - alphabet.length]
            } else {
                result += alphabet[Number(extraText[i]) + Number(steps[i]) - 1]
            }
        } else {
            if (Number(extraText[i]) - Number(steps[i]) - 1 >= 0) {
                result += alphabet[(Number(extraText[i]) - Number(steps[i]) - 1)]
            } else {
                result += alphabet[(Number(extraText[i]) - Number(steps[i]) - 1) + alphabet.length]
            }
        }
    }
}