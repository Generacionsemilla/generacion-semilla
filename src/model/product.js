class Product {
    name;
    title;
    upper_text;
    lower_text;
    icon;
    image_1;
    image_2;

    constructor(name, title, upper_text, lower_text) {
        this.name = name;
        this.title = title;
        this.upper_text = upper_text
        this.lower_text = lower_text
    }

}

export const PRODUCTS = [new Product("primaria",'Libros primaria', 'texto arriba primaria', 'texto abajo primaria'),
                        new Product("didacticas",'Cajas didácticas', 'texto arriba didacticas', 'texto abajo didacticas'),
                        new Product("docente",'Material Docente', 'texto arriba docente', 'texto abajo docente')];
