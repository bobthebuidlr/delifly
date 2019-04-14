export interface ITitle {
    firstPart?: String,
    secondPart?: String,
    highlighted?: String
}

export interface IGalleryImages {
    image_1?: String,
    image_2?: String,
    image_3?: String,
    image_4?: String,
    image_5?: String
}

export interface IDetails {
    title?: ITitle,
    description?: String
}

export interface IProduct {
    id: Number,
    category: 'jewelry' | 'liquor' | 'styling',
    productVideoURL?: String; 
    title?: ITitle,
    description?: String,
    images: Array<String>,
    repeatIntroduction?: Boolean,
    galleryImages: IGalleryImages,
    details: Array<IDetails>
}