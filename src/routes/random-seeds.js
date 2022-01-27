const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const randomString = () => {
    let letters = Array(8)
    for (let i = 0; i < letters.length; ++i) {
        letters[i] = characters[Math.floor(Math.random() * characters.length)]
    }

    return letters.join('')
}

export const get = async () => ({
    body: {
        seed: randomString(),
    },
})
