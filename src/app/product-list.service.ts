import { product } from "./product.model";



export class ProductListService{

    getProducts(){
        return this.products.slice()
    }


    products: product[] = [
        new product(
        'Y 81',
          'VIVO Mobliwe with best camera features',
          'https://m.media-amazon.com/images/I/61aiOrPuw9L._SL1100_.jpg',
          15000.00,
          'VIVO'
        ),
        new product(
          'RealMe 5G',
            'RealMe Mobile with good processor with 5G and high quality',
            'https://image01.realme.net/general/20220912/1662959333129.png',
            25000.00,
            'RealMe'
          ),
          new product(
            'Apple',
              'Experience the brand of APPLE and APPLE MAC',
              'https://images.hindustantimes.com/tech/img/2022/12/22/960x540/victor-serban-H-mzalaeXYU-unsplash_1671732688355_1671732698970_1671732698970.jpg',
              50000.00,
              'APPLE'
            ),
            new product(
              'POCO',
                'POCO mobile with best gaming features',
                'https://cdn1.smartprix.com/rx-iSSevt1SF-w1200-h1200/SSevt1SF.jpg',
                30000.00,
                'POCO M4'
              )
      
      ]
      
}