export async function countryHits() {
    return [
        {
            country: 'Algeria',
            hits: 10000
        },
        {
            country: 'Spain',
            hits: 15000
        }, {
            country: 'Italy',
            hits: 20000
        },
        {
            country: 'France',
            hits: 50000
        }
    ]
}

export async function extension() {
    return [
        {
            value: 100,
            datetime: '2020-12-06'
        },
        {
            value: 130,
            datetime: '2020-12-05'
        }, {
            value: 70,
            datetime: '2020-12-04'
        }, {
            value: 150,
            datetime: '2020-12-03'
        }
    ]
}

export async function lastExtension() {
    return [
        {
            value: 50
        }
    ]
}

export async function application() {
    return [
        {
            value: 1,
            datetime: '2020-12-06'
        },
        {
            value: 10,
            datetime: '2020-12-05'
        }, {
            value: 20,
            datetime: '2020-12-04'
        }, {
            value: 5,
            datetime: '2020-12-03'
        }
    ]
}

export async function lastApplication() {
    return [
        {
            value: 1
        },
        {
            value: 10
        }, {
            value: 20
        }, {
            value: 5
        }
    ]
}

export async function slackLetter() {
    return [
        {
            title: 'Info numéro 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis tellus ante, eu semper neque efficitur ut. Nulla mi diam, cursus quis nunc non, lobortis blandit mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis tellus ante, eu semper neque efficitur ut. Nulla mi diam, cursus quis nunc non, lobortis blandit mi.'
        },
        {
            title: 'Info numéro 2',
            description: 'Integer fringilla suscipit molestie. Integer sagittis, nisl ut vestibulum eleifend, lorem lorem tempus dui, in consequat nibh sem et sapien. Integer fringilla suscipit molestie. Integer sagittis, nisl ut vestibulum eleifend, lorem lorem tempus dui, in consequat nibh sem et sapien.'
        },
        {
            title: 'Info numéro 3',
            description: 'Sed sodales a mauris ut elementum. Cras tempor ex arcu, fringilla volutpat nisi lacinia nec. Sed lacinia lectus consectetur sapien consequat aliquet. Sed sodales a mauris ut elementum. Cras tempor ex arcu, fringilla volutpat nisi lacinia nec. Sed lacinia lectus consectetur sapien consequat aliquet.'
        },
    ]
}

export async function listEvent() {
    return [
        {
            date: '2020-12-24',
            event: 'Fête de Noël',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis tellus ante, eu semper neque efficitur ut. Nulla mi diam, cursus quis nunc non, lobortis blandit mi.'
        }
    ]
}