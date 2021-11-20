class Product {
    name;
    title;
    description;
    upper_text;
    lower_text;
    image_1;
    image_2;

    constructor(name, title, description, upper_text, lower_text) {
        this.name = name
        this.title = title
        this.description = description
        this.upper_text = upper_text
        this.lower_text = lower_text
    }

}

export const PRODUCTS = [new Product("primaria",'Libros primaria','a', 'texto arriba primaria', 'texto abajo primaria'),
                        new Product("docente",'Material Docente', 'b','texto arriba docente', 'texto abajo docente'),
                        new Product("didacticas",'Cajas didácticas', 'c','texto arriba didacticas', 'texto abajo didacticas'),
                        new Product("kits",'Kits Personalizados', 'd','texto arriba kits', 'texto abajo kits'),
                        ];
