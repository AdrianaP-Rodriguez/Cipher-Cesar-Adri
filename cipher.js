const cipher = {
    encode: (desplazamiento, texto) => {
        let wordCipher = ""
        for (let i = 0; i < texto.length; i++) {
            let textoASCII = texto.charCodeAt(i);
            let formula = (textoASCII - 65 + desplazamiento) % 26 + 65;
            let letter = String.fromCharCode(formula);
            wordCipher += letter;

        }
        return wordCipher

    },
    decode: (desplazamiento, texto) => {
        let wordCipher = ""
        for (let i = 0; i < texto.length; i++) {
            let textoASCII = texto.charCodeAt(i);
            let formula = (textoASCII + 65 - desplazamiento) % 26 + 65;
            let letter = String.fromCharCode(formula);
            wordCipher += letter;
            console.log(wordCipher)

        }
        return wordCipher


    }
}

export default cipher;