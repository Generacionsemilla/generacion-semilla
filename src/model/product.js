class Product {
    name;
    title;
    description;
    upper_text;
    lower_text;
    link;

    constructor(name, title, description, upper_text, lower_text, link) {
        this.name = name
        this.title = title
        this.description = description
        this.upper_text = upper_text
        this.lower_text = lower_text
        this.link = link
    }

}

export const PRODUCTS = [new Product("primaria",'Libros primaria','primaria', 'Integer et dictum ante. In hac habitasse platea dictumst. Quisque a lorem eget justo faucibus faucibus. Mauris tempus metus vitae libero placerat rutrum. Praesent a lacus ultrices, dignissim libero vel, tincidunt leo. Duis nec interdum enim. Vivamus venenatis ornare erat, quis bibendum erat viverra ac.', 'Proin non odio in nisl auctor tempor. Fusce consectetur volutpat accumsan. Vestibulum venenatis mauris nibh, a porta dui mattis at. Morbi sed iaculis erat. Mauris auctor accumsan euismod. Proin tristique sit amet ligula sit amet vulputate. Vivamus mauris magna, aliquet nec maximus eget,', ''),
                        new Product("docente",'Material Docente', 'docente','Nunc vitae lobortis justo. Nulla euismod, magna sed sollicitudin dictum, lorem urna pellentesque tellus, nec suscipit nibh urna eget mauris. ', 'Maecenas rhoncus ligula velit, ac vestibulum nulla aliquam vel. Aenean id malesuada risus. Nam eros lectus, semper vitae massa quis, consectetur posuere neque. Nam a malesuada dui. Fusce turpis nisi, dapibus non massa eget, elementum aliquet libero. Ut convallis vulputate pellentesque. Phasellus magna augue, pharetra a libero eget, eleifend aliquet nunc. Cras rhoncus a erat sed aliquet. Donec dapibus ante tortor,', ''),
                        new Product("didacticas",'Cajas didácticas', 'didacticas','Integer et dictum ante. In hac habitasse platea dictumst. Quisque a lorem eget justo faucibus faucibus. Mauris tempus metus vitae libero placerat rutrum. Praesent a lacus ultrices, dignissim libero vel, tincidunt leo. Duis nec interdum enim. Vivamus venenatis ornare erat, quis bibendum erat viverra ac.', 'Pellentesque vestibulum faucibus turpis. Sed eu odio id sapien ultricies semper sed id ligula. Aenean iaculis velit eu ipsum varius elementum. Integer sem est, dignissim et lacus eleifend, aliquam interdum nisi. Integer auctor justo sit amet quam congue venenatis. Duis sodales egestas consectetur.', ''),
                        new Product("kits",'Kits Personalizados', 'kits','Pellentesque ac pellentesque velit. Vivamus vitae lectus varius, pharetra sem ac, accumsan justo. Cras id dapibus est, ac blandit quam. Integer justo erat,', 'Maecenas rhoncus ligula velit, ac vestibulum nulla aliquam vel. Aenean id malesuada risus. Nam eros lectus, semper vitae massa quis, consectetur posuere neque. Nam a malesuada dui. Fusce turpis nisi, dapibus non massa eget, elementum aliquet libero. Ut convallis vulputate pellentesque. Phasellus magna augue, pharetra a libero eget, eleifend aliquet nunc. Cras rhoncus a erat sed aliquet. Donec dapibus ante tortor,', ''),
                        ];
