const mockProductData = [
  {
    name: 'AIRism COTTON CREW NECK OVERSIZED T-SHIRT', code: 'SP000001', category: { code: 'DM000001', name: 'Áo thun' }, createdDate: '2021-03-04',
    isDeleted: false, price: 250000, promotionalPrice: 199000, sold: 125, review: 50, rating: 4.5,
    images: ['https://im.uniqlo.com/images/common/pc/goods/441601/item/00_441601.jpg', 'https://im.uniqlo.com/images/common/pc/goods/441601/item/07_441601.jpg'],
    details: [
      {
        color: 'white',
        sizes: [{ size: 'S', inventory: 7 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 0 }, { size: 'XL', inventory: 6 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/441601/item/00_441601.jpg',
      }, {
        color: 'gray',
        sizes: [{ size: 'S', inventory: 13 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 3 }, { size: 'XL', inventory: 23 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/441601/item/07_441601.jpg',
      }
    ],
  }, {
    name: 'Uniqlo U Airism Cotton Áo Thun Cổ Tròn Tay Lỡ', code: 'SP000002', category: { code: 'DM000001', name: 'Áo thun' }, createdDate: '2021-01-02',
    isDeleted: false, price: 450000, promotionalPrice: 349000, sold: 100, review: 19, rating: 4.8,
    images: ['https://im.uniqlo.com/images/common/pc/goods/435806/item/00_435806.jpg', 'https://im.uniqlo.com/images/common/pc/goods/435806/item/02_435806.jpg', 'https://im.uniqlo.com/images/common/pc/goods/435806/item/07_435806.jpg'],
    details: [
      {
        color: 'white',
        sizes: [{ size: 'S', inventory: 0 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 7 }, { size: 'XL', inventory: 9 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/435806/item/00_435806.jpg'
      }, {
        color: 'light gray',
        sizes: [{ size: 'S', inventory: 21 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 6 }, { size: 'XL', inventory: 3 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/435806/item/02_435806.jpg'
      }, {
        color: 'gray',
        sizes: [{ size: 'S', inventory: 13 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 3 }, { size: 'XL', inventory: 3 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/435806/item/07_435806.jpg'
      }
    ],
  }, {
    name: 'SLEEVE CREW NECK OVERSIZED T-SHIRT', code: 'SP000003', category: { code: 'DM000001', name: 'Áo thun' }, createdDate: '2021-01-03',
    isDeleted: false, price: 420000, promotionalPrice: 319000, sold: 120, review: 50, rating: 4.7,
    images: ['https://im.uniqlo.com/images/common/pc/goods/422995/item/00_422995.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/435806/item/02_435806.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/422995/item/30_422995.jpg'],
    details: [
      {
        color: 'white',
        sizes: [{ size: 'S', inventory: 15 }, { size: 'M', inventory: 35 }, { size: 'L', inventory: 7 }, { size: 'XL', inventory: 16 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/422995/item/00_422995.jpg',
      }, {
        color: 'black',
        sizes: [{ size: 'S', inventory: 12 }, { size: 'M', inventory: 25 }, { size: 'L', inventory: 23 }, { size: 'XL', inventory: 0 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/422995/item/09_422995.jpg',
      }, {
        color: 'natural',
        sizes: [{ size: 'S', inventory: 7 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 23 }, { size: 'XL', inventory: 0 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/422995/item/30_422995.jpg',
      }
    ],
  }, {
    name: 'Áo thun DRY nhiều màu cổ V ngắn tay', code: 'SP000004', category: { code: 'DM000001', name: 'Áo thun' }, createdDate: '2021-01-04',
    isDeleted: false, price: 350000, promotionalPrice: 219000, sold: 45, review: 10, rating: 5.0,
    images: ['https://im.uniqlo.com/images/common/pc/goods/427916/item/00_427916.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/427916/item/03_427916.jpg'],
    details: [
      {
        color: 'white',
        sizes: [{ size: 'S', inventory: 7 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 0 }, { size: 'XL', inventory: 6 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/427916/item/00_427916.jpg',
      }, {
        color: 'gray',
        sizes: [{ size: 'S', inventory: 13 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 3 }, { size: 'XL', inventory: 0 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/427916/item/03_427916.jpg',
      }
    ],
  }, {
    name: 'Uniqlo U Airism Cotton Áo Thun Cổ Tròn Tay Lỡ', code: 'SP000005', category: { code: 'DM000001', name: 'Áo thun' }, createdDate: '2021-05-15',
    isDeleted: false, price: 250000, promotionalPrice: 149000, sold: 105, review: 30, rating: 4.8,
    images: ['https://im.uniqlo.com/images/common/pc/goods/422989/item/21_422989.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/422989/item/59_422989.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/422989/item/62_422989.jpg'],
    details: [
      {
        color: 'light orange',
        sizes: [{ size: 'S', inventory: 0 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 7 }, { size: 'XL', inventory: 9 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/422989/item/21_422989.jpg'
      }, {
        color: 'dark green',
        sizes: [{ size: 'S', inventory: 21 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 6 }, { size: 'XL', inventory: 3 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/422989/item/59_422989.jpg'
      }, {
        color: 'blue',
        sizes: [{ size: 'S', inventory: 13 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 3 }, { size: 'XL', inventory: 3 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/422989/item/62_422989.jpg'
      }
    ],
  }, {
    name: 'JW Anderson Áo Sơ Mi Vải Sọc Nhăn Kẻ Caro Ngắn Tay', code: 'SP000006', category: { code: 'DM000002', name: 'Áo sơ mi casual' }, createdDate: '2021-04-23',
    isDeleted: false, price: 450000, promotionalPrice: 349000, sold: 220, review: 150, rating: 3.8,
    images: ['https://im.uniqlo.com/images/common/pc/goods/440346/item/30_440346.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/440346/item/69_440346.jpg'],
    details: [
      {
        color: 'nature',
        sizes: [{ size: 'S', inventory: 15 }, { size: 'M', inventory: 15 }, { size: 'L', inventory: 0 }, { size: 'XL', inventory: 14 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/440346/item/30_440346.jpg',
      }, {
        color: 'navi',
        sizes: [{ size: 'S', inventory: 12 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 2 }, { size: 'XL', inventory: 10 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/440346/item/69_440346.jpg',
      }
    ],
  }, {
    name: 'JW Anderson Áo Sơ Mi Vải Sọc Nhăn Kẻ Caro Ngắn Tay', code: 'SP000007', category: { code: 'DM000002', name: 'Áo sơ mi casual' }, createdDate: '2021-03-05',
    isDeleted: false, price: 450000, promotionalPrice: 339000, sold: 220, review: 150, rating: 3.8,
    images: ['https://im.uniqlo.com/images/common/pc/goods/440345/item/01_440345.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/440345/item/08_440345.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/440345/item/57_440345.jpg'],
    details: [
      {
        color: 'off white',
        sizes: [{ size: 'S', inventory: 15 }, { size: 'M', inventory: 15 }, { size: 'L', inventory: 0 }, { size: 'XL', inventory: 14 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/440345/item/01_440345.jpg',
      }, {
        color: 'dark gray',
        sizes: [{ size: 'S', inventory: 12 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 2 }, { size: 'XL', inventory: 10 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/440345/item/08_440345.jpg',
      }, {
        color: 'olive',
        sizes: [{ size: 'S', inventory: 12 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 2 }, { size: 'XL', inventory: 10 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/440345/item/57_440345.jpg',
      }
    ],
  }, {
    name: 'EXTRA FINE COTTON BROADCLOTH SHORT SLEEVE SHIRTỡ', code: 'SP000008', category: { code: 'DM000002', name: 'Áo sơ mi casual' }, createdDate: '2021-03-05',
    isDeleted: false, price: 450000, promotionalPrice: 319000, sold: 100, review: 19, rating: 4.8,
    images: ['https://im.uniqlo.com/images/common/pc/goods/436487/item/55_436487.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/436487/item/68_436487.jpg'],
    details: [
      {
        color: 'green',
        sizes: [{ size: 'S', inventory: 0 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 7 }, { size: 'XL', inventory: 9 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/440345/item/01_440345.jpg'
      }, {
        color: 'blue',
        sizes: [{ size: 'S', inventory: 21 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 6 }, { size: 'XL', inventory: 3 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/436487/item/68_436487.jpg'
      }
    ],
  }, {
    name: 'EXTRA FINE COTTON BROADCLOTH SHORT SLEEVE SHIRT', code: 'SP000009', category: { code: 'DM000002', name: 'Áo sơ mi casual' }, createdDate: '2021-05-02',
    isDeleted: false, price: 420000, promotionalPrice: 399000, sold: 120, review: 50, rating: 4.7,
    images: ['https://im.uniqlo.com/images/common/pc/goods/436486/item/00_436486.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/436486/item/64_436486.jpg'],
    details: [
      {
        color: 'white',
        sizes: [{ size: 'S', inventory: 15 }, { size: 'M', inventory: 35 }, { size: 'L', inventory: 7 }, { size: 'XL', inventory: 16 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/436486/item/00_436486.jpg',
      }, {
        color: 'blue',
        sizes: [{ size: 'S', inventory: 12 }, { size: 'M', inventory: 25 }, { size: 'L', inventory: 23 }, { size: 'XL', inventory: 0 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/436486/item/64_436486.jpg',
      }
    ],
  }, {
    name: 'AIRism COTTON CREW NECK OVERSIZED T-SHIRT', code: 'SP000010', category: { code: 'DM000001', name: 'Áo thun' }, createdDate: '2021-04-11',
    isDeleted: false, price: 250000, promotionalPrice: 149000, sold: 125, review: 50, rating: 4.5,
    images: ['https://im.uniqlo.com/images/common/pc/goods/441601/item/00_441601.jpg', 'https://im.uniqlo.com/images/common/pc/goods/441601/item/07_441601.jpg'],
    details: [
      {
        color: 'white',
        sizes: [{ size: 'S', inventory: 7 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 0 }, { size: 'XL', inventory: 6 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/441601/item/00_441601.jpg',
      }, {
        color: 'gray',
        sizes: [{ size: 'S', inventory: 13 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 3 }, { size: 'XL', inventory: 23 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/441601/item/07_441601.jpg',
      }
    ],
  }, {
    name: 'Uniqlo U Airism Cotton Áo Thun Cổ Tròn Tay Lỡ', code: 'SP000011', category: { code: 'DM000001', name: 'Áo thun' }, createdDate: '2021-02-01',
    isDeleted: false, price: 450000, promotionalPrice: 359000, sold: 100, review: 19, rating: 4.8,
    images: ['https://im.uniqlo.com/images/common/pc/goods/435806/item/00_435806.jpg', 'https://im.uniqlo.com/images/common/pc/goods/435806/item/02_435806.jpg', 'https://im.uniqlo.com/images/common/pc/goods/435806/item/07_435806.jpg'],
    details: [
      {
        color: 'white',
        sizes: [{ size: 'S', inventory: 0 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 7 }, { size: 'XL', inventory: 9 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/435806/item/00_435806.jpg'
      }, {
        color: 'light gray',
        sizes: [{ size: 'S', inventory: 21 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 6 }, { size: 'XL', inventory: 3 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/435806/item/02_435806.jpg'
      }, {
        color: 'gray',
        sizes: [{ size: 'S', inventory: 13 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 3 }, { size: 'XL', inventory: 3 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/435806/item/07_435806.jpg'
      }
    ],
  }, {
    name: 'SLEEVE CREW NECK OVERSIZED T-SHIRT', code: 'SP000012', category: { code: 'DM000001', name: 'Áo thun' }, createdDate: '2021-01-01',
    isDeleted: false, price: 420000, promotionalPrice: 239000, sold: 120, review: 50, rating: 4.7,
    images: ['https://im.uniqlo.com/images/common/pc/goods/422995/item/00_422995.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/435806/item/02_435806.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/422995/item/30_422995.jpg'],
    details: [
      {
        color: 'white',
        sizes: [{ size: 'S', inventory: 15 }, { size: 'M', inventory: 35 }, { size: 'L', inventory: 7 }, { size: 'XL', inventory: 16 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/422995/item/00_422995.jpg',
      }, {
        color: 'black',
        sizes: [{ size: 'S', inventory: 12 }, { size: 'M', inventory: 25 }, { size: 'L', inventory: 23 }, { size: 'XL', inventory: 0 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/422995/item/09_422995.jpg',
      }, {
        color: 'natural',
        sizes: [{ size: 'S', inventory: 7 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 23 }, { size: 'XL', inventory: 0 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/422995/item/30_422995.jpg',
      }
    ],
  }, {
    name: 'Áo thun DRY nhiều màu cổ V ngắn tay', code: 'SP000013', category: { code: 'DM000001', name: 'Áo thun' }, createdDate: '2021-02-27',
    isDeleted: false, price: 350000, promotionalPrice: 279000, sold: 45, review: 10, rating: 5.0,
    images: ['https://im.uniqlo.com/images/common/pc/goods/427916/item/00_427916.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/427916/item/03_427916.jpg'],
    details: [
      {
        color: 'white',
        sizes: [{ size: 'S', inventory: 7 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 0 }, { size: 'XL', inventory: 6 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/427916/item/00_427916.jpg',
      }, {
        color: 'gray',
        sizes: [{ size: 'S', inventory: 13 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 3 }, { size: 'XL', inventory: 0 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/427916/item/03_427916.jpg',
      }
    ],
  }, {
    name: 'Uniqlo U Airism Cotton Áo Thun Cổ Tròn Tay Lỡ', code: 'SP000014', category: { code: 'DM000001', name: 'Áo thun' }, createdDate: '2021-05-30',
    isDeleted: false, price: 250000, promotionalPrice: 179000, sold: 105, review: 30, rating: 4.8,
    images: ['https://im.uniqlo.com/images/common/pc/goods/422989/item/21_422989.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/422989/item/59_422989.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/422989/item/62_422989.jpg'],
    details: [
      {
        color: 'light orange',
        sizes: [{ size: 'S', inventory: 0 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 7 }, { size: 'XL', inventory: 9 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/422989/item/21_422989.jpg'
      }, {
        color: 'dark green',
        sizes: [{ size: 'S', inventory: 21 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 6 }, { size: 'XL', inventory: 3 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/422989/item/59_422989.jpg'
      }, {
        color: 'blue',
        sizes: [{ size: 'S', inventory: 13 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 3 }, { size: 'XL', inventory: 3 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/422989/item/62_422989.jpg'
      }
    ],
  }, {
    name: 'JW Anderson Áo Sơ Mi Vải Sọc Nhăn Kẻ Caro Ngắn Tay', code: 'SP000015', category: { code: 'DM000002', name: 'Áo sơ mi casual' }, createdDate: '2021-05-14',
    isDeleted: false, price: 450000, promotionalPrice: 359000, sold: 220, review: 150, rating: 3.8,
    images: ['https://im.uniqlo.com/images/common/pc/goods/440346/item/30_440346.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/440346/item/69_440346.jpg'],
    details: [
      {
        color: 'nature',
        sizes: [{ size: 'S', inventory: 15 }, { size: 'M', inventory: 15 }, { size: 'L', inventory: 0 }, { size: 'XL', inventory: 14 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/440346/item/30_440346.jpg',
      }, {
        color: 'navi',
        sizes: [{ size: 'S', inventory: 12 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 2 }, { size: 'XL', inventory: 10 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/440346/item/69_440346.jpg',
      }
    ],
  }, {
    name: 'JW Anderson Áo Sơ Mi Vải Sọc Nhăn Kẻ Caro Ngắn Tay', code: 'SP000016', category: { code: 'DM000002', name: 'Áo sơ mi casual' }, createdDate: '2021-05-14',
    isDeleted: false, price: 450000, promotionalPrice: 349000, sold: 220, review: 150, rating: 3.8,
    images: ['https://im.uniqlo.com/images/common/pc/goods/440345/item/01_440345.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/440345/item/08_440345.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/440345/item/57_440345.jpg'],
    details: [
      {
        color: 'off white',
        sizes: [{ size: 'S', inventory: 15 }, { size: 'M', inventory: 15 }, { size: 'L', inventory: 0 }, { size: 'XL', inventory: 14 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/440345/item/01_440345.jpg',
      }, {
        color: 'dark gray',
        sizes: [{ size: 'S', inventory: 12 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 2 }, { size: 'XL', inventory: 10 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/440345/item/08_440345.jpg',
      }, {
        color: 'olive',
        sizes: [{ size: 'S', inventory: 12 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 2 }, { size: 'XL', inventory: 10 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/440345/item/57_440345.jpg',
      }
    ],
  }, {
    name: 'EXTRA FINE COTTON BROADCLOTH SHORT SLEEVE SHIRTỡ', code: 'SP000017', category: { code: 'DM000002', name: 'Áo sơ mi casual' }, createdDate: '2021-02-02',
    isDeleted: false, price: 450000, promotionalPrice: 399000, sold: 100, review: 19, rating: 4.8,
    images: ['https://im.uniqlo.com/images/common/pc/goods/436487/item/55_436487.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/436487/item/68_436487.jpg'],
    details: [
      {
        color: 'green',
        sizes: [{ size: 'S', inventory: 0 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 7 }, { size: 'XL', inventory: 9 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/440345/item/01_440345.jpg'
      }, {
        color: 'blue',
        sizes: [{ size: 'S', inventory: 21 }, { size: 'M', inventory: 5 }, { size: 'L', inventory: 6 }, { size: 'XL', inventory: 3 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/436487/item/68_436487.jpg'
      }
    ],
  }, {
    name: 'EXTRA FINE COTTON BROADCLOTH SHORT SLEEVE SHIRT', code: 'SP000018', category: { code: 'DM000002', name: 'Áo sơ mi casual' }, createdDate: '2021-02-12',
    isDeleted: false, price: 420000, promotionalPrice: 399000, sold: 120, review: 50, rating: 4.7,
    images: ['https://im.uniqlo.com/images/common/pc/goods/436486/item/00_436486.jpg',
      'https://im.uniqlo.com/images/common/pc/goods/436486/item/64_436486.jpg'],
    details: [
      {
        color: 'white',
        sizes: [{ size: 'S', inventory: 15 }, { size: 'M', inventory: 35 }, { size: 'L', inventory: 7 }, { size: 'XL', inventory: 16 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/436486/item/00_436486.jpg',
      }, {
        color: 'blue',
        sizes: [{ size: 'S', inventory: 12 }, { size: 'M', inventory: 25 }, { size: 'L', inventory: 23 }, { size: 'XL', inventory: 0 }],
        image: 'https://im.uniqlo.com/images/common/pc/goods/436486/item/64_436486.jpg',
      }
    ],
  }
]

module.exports = mockProductData