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
        "docente",
        'Libros para Docentes',
        'Libros pensados para docentes del primer ciclo de primaria; con propuestas basadas en la didáctica de las ciencias naturales, en forma de secuencias y de proyectos.\nNuestras propuestas se basan en las investigaciones en didáctica de las ciencias naturales, sin dejar de lado las articulaciones con otras didácticas específicas como Prácticas del Lenguaje y Educación digital, entre otras. \nTambién ofrecemos capacitaciones en formato de talleres y seminarios para que puedan profundizar en dichas propuestas y ponerlas en práctica dentro del aula.',
        'Libros pensados para docentes del primer ciclo de primaria; con propuestas basadas en la didáctica de las ciencias naturales, en forma de secuencias y de proyectos.\nNuestras propuestas se basan en las investigaciones en didáctica de las ciencias naturales, sin dejar de lado las articulaciones con otras didácticas específicas como Prácticas del Lenguaje y Educación digital, entre otras.',
        'También ofrecemos capacitaciones en formato de talleres y seminarios para que puedan profundizar en dichas propuestas y ponerlas en práctica dentro del aula.',
        'https://tiendageneracionsemilla.ar/',
        '.png',
        '.png',
        false),

    new Product("didacticos",
        'Materiales didácticos',
        'Contamos con materiales didácticos como juegos, experiencias y experimentos entre otros.\nTambién tenemos cajas didácticas que reúnen los recursos en un combo  y sirven para complementar los libros favoreciendo el aprendizaje a través del hacer, del jugar y de poner en práctica los conocimientos.\nLas cajas docentes cuentan con combos para que puedan trabajar en pequeños grupos con lxs niñxs en el aula. También cuentan con otros recursos especialmente diseñados para el trabajo áulico como láminas y objetos imantados para pizarras, entre otros.',
        'Contamos con materiales didácticos como juegos, experiencias y experimentos entre otros.\nTambién tenemos cajas didácticas que reúnen los recursos en un combo  y sirven para complementar los libros favoreciendo el aprendizaje a través del hacer, del jugar y de poner en práctica los conocimientos.',
        'Las cajas docentes cuentan con combos para que puedan trabajar en pequeños grupos con lxs niñxs en el aula. También cuentan con otros recursos especialmente diseñados para el trabajo áulico como láminas y objetos imantados para pizarras, entre otros.',
        'https://tiendageneracionsemilla.ar/',
        '.png',
        '.png',
        false),

    new Product("kits",
        'Kits',
        'Conjunto de productos de la editorial que, comprados en kits, tienen precios promocionales.\nSi te interesa que desarrollemos algún producto en particular o que armemos un Kit personalizado, no dudes en dejarnos tus sugerencias en el formulario de contacto o en cualquiera de nuestras redes.',
        'Conjunto de productos de la editorial que, comprados en kits, tienen precios promocionales.',
        'Si te interesa que desarrollemos algún producto en particular o que armemos un Kit personalizado, no dudes en dejarnos tus sugerencias en el formulario de contacto o en cualquiera de nuestras redes.',
        'https://tiendageneracionsemilla.ar/',
        '.png',
        '.png',
        false),


    ]; // <---- NO BORRAR!!!
