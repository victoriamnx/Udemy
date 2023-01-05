const colors = {
    p: '#7A5C61',
    div: '#FFCAD4',
    span: '#B0D0D3',
    section: '#C08497',
    ul: '#F7AF9D',
    ol: '#05A8AA',
    header: '#B8D5B8',
    nav: '#DC602E',
    main: '#BC412B',
    footer: '#B8D5B8',
    form: '#F7ACCF',
    body: '#6874E8',
    padrao: '#E8F0FF',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('Label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})