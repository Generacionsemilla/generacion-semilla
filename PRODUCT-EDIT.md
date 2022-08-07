## Modify products

In order to modify products list and details, you need to modify the constant **PRODUCTS** in file :

```bash
/src/model/product.js
```

in case you want to change the images, they are under the folders:

```bash
/src/assets/products/icons/
/src/assets/products/images/desktop
/src/assets/products/images/mobile
```

they follow the logic:
- [product_name].png for icons (product list and detail view) 

- [product_name]_1[image1_format] for detail view top image

- [product_name]_2[image2_format] for detail view bottom image

As long as all images exists for icon, desktop and mobile, everything will work fine.