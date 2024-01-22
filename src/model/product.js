class Product {
    name;
    title;
    description;
    upper_text_d;
    upper_text_m;
    lower_text_m;
    link;
    image1_format;
    image2_format;
    active;

    constructor(name, title, upper_text_d, upper_text_m, lower_text_m,  link, image1_format, image2_format, active) {
        this.name = name
        this.title = title
        this.upper_text_d = upper_text_d
        this.upper_text_m = upper_text_m
        this.lower_text_m = lower_text_m
        this.link = link
        this.active = active
        this.image1_format = image1_format
        this.image2_format = image2_format
    }

}

export const PRODUCTS = [

    /* salto de linea -> \n */

    /**********************/
    /* | copiar desde acá */
    /* v ******************/

    new Product(
    /* nombre representativo corto, todo en minuscula, sin espacios ni caracteres especiales */"curiosa",
    /* titulo del libro */'LIBRO CURIOSA BOTÁNICA 1',
    /* texto desktop */ 'Libro de ciencias de la naturaleza para la infancia\nTrabaja con temas de botánica prescriptos en los diseños curriculares de primero y segundo grado de primaria, como las partes de las plantas, sus características, sus propiedades comestibles y medicinales.\nTiene historias de las ciencias, juegos, experiencias y experimentos y una entrevista a una bióloga botánica',
    /* texto mobile arriba */'Libro de ciencias de la naturaleza para la infancia\nTrabaja con temas de botánica prescriptos en los diseños curriculares de primero y segundo grado de primaria, como las partes de las plantas, sus características, sus propiedades comestibles y medicinales.\n',
    /* texto mobile abajo */'Tiene historias de las ciencias, juegos, experiencias y experimentos y una entrevista a una bióloga botánica',
    /* link tienda (boton comprar) */'https://tiendageneracionsemilla.ar/MLA-1137619555-libro-curiosa-botanica-1-botanica-para-ninxs-_JM',
    /* formato imagenes arriba (mobiles y desktop) */ '.png',
    /* formato imagenes abajo (mobiles y desktop) */'.png',
    /* activo o no (false = imagenes proximamente) */true),

    /* ^ ***********/
    /* | hasta acá */
    /***************/
    new Product(
        "mandioca",
        'LIBRO EL JUEGO DE LA MANDIOCA',
        'El juego de la mandioca es un libro que contiene un juego de mesa para aprender sobre las plantas de un barrio ficticio:\nEl maravilloso y peculiar barrio de la Mandioca.\nEn el libro encuentran la historia del barrio, las instrucciones y normas del juego, las piezas para recortar como cartas, dado, fichas y una mandioca para armar.\nEn la contratapa está el tablero desplegable y un sobre para guardar todas las piezas del juego.',
        'El juego de la mandioca es un libro que contiene un juego de mesa para aprender sobre las plantas de un barrio ficticio:\nEl maravilloso y peculiar barrio de la Mandioca.\nEn el libro encuentran la historia del barrio, las instrucciones y normas del juego, las piezas para recortar como cartas, dado, fichas y una mandioca para armar.',
        'En la contratapa está el tablero desplegable y un sobre para guardar todas las piezas del juego.',
        'https://www.tiendageneracionsemilla.ar/MLA-1372663157-el-juego-de-la-mandioca-un-libro-para-aprender-botanica-_JM',
        '.png',
        '.png',
        true),
    
    new Product(
        "rita",
        'LIBRO EN EL PATIO DE MI ABUELA RITA',
        'En este libro, una niña relata sus encuentros con la abuela en un diario personal durante diez días.\nCada día revive momentos lúdicos con ella, sustentado en la observación, en preguntas y en respuestas que contribuyen al conocimiento sobre aspectos de la biodiversidad en ese pequeño hábitat del patio de su querida abuela Rita.',
        'En este libro, una niña relata sus encuentros con la abuela en un diario personal durante diez días.',
        'Cada día revive momentos lúdicos con ella, sustentado en la observación, en preguntas y en respuestas que contribuyen al conocimiento sobre aspectos de la biodiversidad en ese pequeño hábitat del patio de su querida abuela Rita.',
        'https://www.tiendageneracionsemilla.ar/MLA-1430480616-en-el-patio-de-mi-abuela-rita-libro-sobre-biodiversidad-_JM',
        '.png',
        '.png',
        true),    
    
    new Product(
        "plantoptico",
        'Libro Plantóptico',
        'Plantóptico es un libro con formato fascículo conformado por fichas didácticas para aprender sobre los órganos de las plantas (raíces, tallos y hojas). Especialmente diseñado para estudiantes que recién se inician en la lectoescritura y para trabajar en conjunto con las láminas botánicas. También puede complementarse con el libro "Curiosa Botánica".',
        'Plantóptico es un libro con formato fascículo conformado por fichas didácticas para aprender sobre los órganos de las plantas (raíces, tallos y hojas). Especialmente diseñado para estudiantes que recién se inician en la lectoescritura y para trabajar en conjunto con las láminas botánicas, entre otras.',
        'También puede complementarse con el libro "Curiosa Botánica".',
        'https://www.tiendageneracionsemilla.ar/MLA-1633827960-libro-plantoptico-fichas-sobre-el-mundo-de-las-plantas-_JM',
        '.png',
        '.png',
        true),

    new Product("didacticos",
        'Materiales didácticos para docentes',
        'Las láminas botánicas para pizarrón son nuestro primer producto pensado para los procesos de enseñanza y aprendizaje. Ideal para el contexto inicial y primario, para enseñar sobre las raíces, tallos y hojas. Se trata de láminas doble faz intervenibles, para colgar en el pizarrón y que vienen acompañadas del Plantóptico, un fascículo de fichas didácticas para quienes recién se inician en la lectoescritura.',
        'Las láminas botánicas para pizarrón son nuestro primer producto pensado para los procesos de enseñanza y aprendizaje. Ideal para el contexto inicial y primario, para enseñar sobre las raíces, tallos y hojas.',
        'Se trata de láminas doble faz intervenibles, para colgar en el pizarrón y que vienen acompañadas del Plantóptico, un fascículo de fichas didácticas para quienes recién se inician en la lectoescritura.',
        'https://www.tiendageneracionsemilla.ar/MLA-1402876795-laminas-botanicas-para-pizarron-escolar-precio-por-unidad-_JM',
        '.png',
        '.png',
        true),

    new Product("kits",
        'Kits',
        'Kit-Tubo de 8 láminas botánicas con el libro Plantóptico incluido. \nTemas de las láminas:\n1) El cuerpo de las plantas en doble faz con partes comestibles de las plantas.\n2) Tipos de plantas según su tallo en doble faz con diversidad de tallos. \n3) Diversidad de raíces en doble faz con experimento de raíces.\n4) Las hojas y sus partes en doble faz con diversidad de hojas según su forma.',
        'Conjunto de productos de la editorial que, comprados en kits, tienen precios promocionales.',
        'Si te interesa que desarrollemos algún producto en particular o que armemos un Kit personalizado, no dudes en dejarnos tus sugerencias en el formulario de contacto o en cualquiera de nuestras redes.',
        'https://www.tiendageneracionsemilla.ar/MLA-1634159860-kit-de-laminas-botanicas-escolares-para-pizarron-en-tubo-_JM',
        '.png',
        '.png',
        true),


    ]; // <---- NO BORRAR!!!
