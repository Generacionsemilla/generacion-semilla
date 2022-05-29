class Product {
    name;
    title;
    description;
    upper_text;
    link;
    image1_format;
    image2_format;
    active;

    constructor(name, title, upper_text,  link, image1_format, image2_format, active) {
        this.name = name
        this.title = title
        this.upper_text = upper_text
        this.link = link
        this.active = active
        this.image1_format = image1_format
        this.image2_format = image2_format
    }

}

export const PRODUCTS = [new Product("primaria",'Libros para ninxs','Textos de ciencias de la naturaleza pensados para niñxs del primer ciclo de la escuela primaria.\nLos contenidos se basan en las prescripciones de los Diseños Curriculares de Nación, Provincia de Buenos Aires y CABA.\nCada libro incluye, además de textos sobre ciencias, actividades del tipo experiencias y experimentos, entrevistas, curiosidades, juegos, relatos sobre historias de la ciencia y diferentes recursos gráficos que colaboran en la comprensión de los contenidos. \nPor otra parte, cada libro es a su vez, un cuaderno de naturalista, porque tiene cierre elástico, hojas en blanco para registrar experiencias, un sobre para guardar recolecciones y una plancha de sticker troquelados.', 'https://editorialgeneracionsemilla.mercadoshops.com.ar/MLA-1137619555-libro-curiosa-botanica-1-botanica-para-ninxs-_JM','.jpg','.png', true),
                        new Product("docente",'Libros para Docentes', 'Libros pensados para docentes del primer ciclo de primaria; con propuestas basadas en la didáctica de las ciencias naturales, en forma de secuencias y de proyectos.\nNuestras propuestas se basan en las investigaciones en didáctica de las ciencias naturales, sin dejar de lado las articulaciones con otras didácticas específicas como Prácticas del Lenguaje y Educación digital, entre otras. \nTambién ofrecemos capacitaciones en formato de talleres y seminarios para que puedan profundizar en dichas propuestas y ponerlas en práctica dentro del aula.', 'https://editorialgeneracionsemilla.mercadoshops.com.ar/', '.png','.png',false),
                        new Product("didacticos",'Materiales didácticos', 'Contamos con materiales didácticos como juegos, experiencias y experimentos entre otros.\nTambién tenemos cajas didácticas que reúnen los recursos en un combo  y sirven para complementar los libros favoreciendo el aprendizaje a través del hacer, del jugar y de poner en práctica los conocimientos.\nLas cajas docentes cuentan con combos para que puedan trabajar en pequeños grupos con lxs niñxs en el aula. También cuentan con otros recursos especialmente diseñados para el trabajo áulico como láminas y objetos imantados para pizarras, entre otros.', 'https://editorialgeneracionsemilla.mercadoshops.com.ar/', '.png','.png', false),
                        new Product("kits",'Kits', 'Conjunto de productos de la editorial que, comprados en kits, tienen precios promocionales.\nSi te interesa que desarrollemos algún producto en particular o que armemos un Kit personalizado, no dudes en dejarnos tus sugerencias en el formulario de contacto o en cualquiera de nuestras redes.', 'https://editorialgeneracionsemilla.mercadoshops.com.ar/', '.png','.png', false),
                        ];
