const allProducts = [
    // Gigabyte
    {
        category: 'Gigabyte',
        company: 'gigabyte',
        name: 'נייד GIGABYTE A16',
        description: 'מחשב גיימינג עוצמתי עם מעבד AMD R7, זיכרון 16GB, אחסון 1TB NVMe, וכרטיס מסך RTX 5060 8GB.',
        price: 5068,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/GIGABYTE GAMING A16 GA6H-01.png',
        imgAlt: 'נייד GIGABYTE A16 AMD R7 260 16GB 1TB Nvme RTX 5060 8GB IPS 3VH'
    },
    {
        category: 'Gigabyte',
        company: 'gigabyte',
        name: 'נייד GIGABYTE A16 ',
        description: 'מחשב גיימינג עם מעבד AMD R7, זיכרון 32GB, אחסון 1TB NVMe, וכרטיס מסך RTX 5060 8GB.',
        price: 5342,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/GIGABYTE GAMING A16 GA6H-01.png',
        imgAlt: 'נייד GIGABYTE A16 AMD R7 260 32GB 1TB Nvme RTX 5060 8GB IPS 3VH'
    },
    {
        category: 'Gigabyte',
        company: 'gigabyte',
        name: 'נייד GIGABYTE A16 ',
        description: 'מחשב גיימינג חזק עם מעבד RYZEN 7, זיכרון 16GB, אחסון 1TB NVMe, וכרטיס מסך RTX 5070 8GB.',
        price: 6083,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/GIGABYTE GAMING A16 GA63H-02.png',
        imgAlt: 'נייד GIGABYTE A16 WH RYZEN 7 260 16GB 1TB NVME RTX 5070 8GB IPS'
    },
    {
        category: 'Gigabyte',
        company: 'gigabyte',
        name: 'נייד GIGABYTE A16 ',
        description: 'מעבד i7-13620H, זיכרון 16GB, אחסון 1TB NVMe, וכרטיס מסך RTX 5060 8GB. מסך IPS איכותי.',
        price: 5055,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/GIGABYTE GAMING A16 GA6H-01.png',
        imgAlt: 'נייד GIGABYTE A16 CVH i7-13620H 16GB 1TB NVME RTX 5060 8GB IPS'
    },
    {
        category: 'Gigabyte',
        company: 'gigabyte',
        name: 'נייד GIGABYTE A16 ',
        description: 'מעבד i7-13620H, זיכרון 32GB, אחסון 1TB NVMe, וכרטיס מסך RTX 5060 8GB. מסך IPS איכותי.',
        price: 5329,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/GIGABYTE GAMING A16 GA6H-01.png',
        imgAlt: 'נייד GIGABYTE A16 CVH i7-13620H 32GB 1TB NVME RTX 5060 8GB IPS'
    },
    {
        category: 'Gigabyte',
        company: 'gigabyte',
        name: 'נייד Gigabyte AERO X16 ',
        description: 'מחשב פרימיום AERO X16 עם מעבד Ryzen AI 7, זיכרון 32GB, אחסון 1TB, כרטיס RTX 5070.',
        price: 8015,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/aero 16X (6).png',
        imgAlt: 'נייד Gigabyte AERO X16 Ryzen AI 7 350 32GB 1TB RTX 5070 WIN11 WH'
    },
    {
        category: 'Gigabyte',
        company: 'gigabyte',
        name: 'נייד Gigabyte AERO X16  ',
        description: 'מחשב פרימיום AERO X16 עם מעבד Ryzen AI 7, זיכרון 32GB, אחסון 1TB, כרטיס RTX 5070.',
        price: 8015,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/aero 16X (6).png',
        imgAlt: 'נייד Gigabyte AERO X16 Ryzen AI 7 350 32GB 1TB RTX 5070 WIN11 Gr'
    },
    {
        category: 'Gigabyte',
        company: 'gigabyte',
        name: 'מחשב נייד GIGABYTE AERO X16',
        description: 'מחשב נייד מקצועי AERO X16  עם מעבד R9 HX370, זיכרון 32GB DDR5, אחסון 1TB, וכרטיס 5070.',
        price: 9028,
       imgSrc: 'https://www.morlevi.co.il/cache/w_600/aero 16X (6).png',
        imgAlt: 'מחשב נייד GIGABYTE AERO X16 2WH R9 HX370 32GB DDR5 1TB 5070 WIN11'
    },
    // Lenovo
    {
        category: 'Lenovo',
        company: 'lenovo',
        name: 'נייד LENOVO IP 3 15 i3-1115G4 8GB 256NVME Intel UHD DOS',
        description: 'מחשב בסיסי IdeaPad 3 עם מעבד i3-1115G4, זיכרון 8GB, אחסון 256GB NVMe, מסך 15 אינץ\'.',
        price: 1780,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/ip3 156 grey(8).jpg',
        imgAlt: 'נייד LENOVO IP 3 15 i3-1115G4 8GB 256NVME Intel UHD DOS'
    },
    {
        category: 'Lenovo',
        company: 'lenovo',
        name: 'נייד LENOVO IdeaPad 3 I5-12450H 8GB DDR5 256Nvme FHD IPS DOS 15.6',
        description: 'IdeaPad 3 עם מעבד I5-12450H, זיכרון 8GB DDR5, אחסון 256GB NVMe, מסך FHD IPS 15.6.',
        price: 1917,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/ip slim 3 silver(1).jpg',
        imgAlt: 'נייד LENOVO IdeaPad 3 I5-12450H 8GB DDR5 256Nvme FHD IPS DOS 15.6'
    },
    {
        category: 'Lenovo',
        company: 'lenovo',
        name: 'נייד Lenovo ThinkBook 14 G7 Ultra 7 155H 16GB 512NVME DOS FHD PLS',
        description: 'מחשב עסקי ThinkBook 14 G7 עם מעבד Ultra 7, זיכרון 16GB, אחסון 512GB NVMe, מסך FHD PLS.',
        price: 5138,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/thinkbook 14 g7.jpg',
        imgAlt: 'נייד Lenovo ThinkBook 14 G7 Ultra 7 155H 16GB 512NVME DOS FHD PLS'
    },
    {
        category: 'Lenovo',
        company: 'lenovo',
        name: 'נייד Lenovo ThinkBook 16 G7 Ultra 5 125U 16GB 512NVME WUXGA DOS',
        description: 'מחשב עסקי ThinkBook 16 G7 עם מעבד Ultra 5, זיכרון 16GB, אחסון 512GB NVMe, מסך WUXGA.',
        price: 4316,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/thinkbook 14 g7(5).jpg',
        imgAlt: 'נייד Lenovo ThinkBook 16 G7 Ultra 5 125U 16GB 512NVME WUXGA DOS'
    },
    {
        category: 'Lenovo',
        company: 'lenovo',
        name: 'מחשב נייד Lenovo V14 G4 i3-1315U 8GB 256NVME FHD DOS',
        description: 'מחשב V14 G4 עם מעבד i3-1315U דור 13, זיכרון 8GB, אחסון 256GB NVMe, מסך FHD.',
        price: 1465,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/v14 g3 iap 1.PNG',
        imgAlt: 'מחשב נייד Lenovo V14 G4 i3-1315U 8GB 256NVME FHD DOS'
    },
    {
        category: 'Lenovo',
        company: 'lenovo',
        name: 'נייד LENOVO V14 i3-1215U 8GB 256NVME 14 FHD DOS Black',
        description: 'מחשב V14 עם מעבד i3-1215U, זיכרון 8GB, אחסון 256GB NVMe, מסך 14 FHD.',
        price: 1506,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/v14 g3 iap 1.PNG',
        imgAlt: 'נייד LENOVO V14 i3-1215U 8GB 256NVME 14 FHD DOS Black'
    },
    {
        category: 'Lenovo',
        company: 'lenovo',
        name: 'נייד LENOVO V14 i7-13620H 16GB 512NVME 14 FHD Intel UHD DOS Black',
        description: 'מחשב V14 עוצמתי עם מעבד i7-13620H, זיכרון 16GB, אחסון 512GB NVMe, מסך 14 FHD.',
        price: 2602,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/v14 g3 iap 1.PNG',
        imgAlt: 'נייד LENOVO V14 i7-13620H 16GB 512NVME 14 FHD Intel UHD DOS Black'
    },
    {
        category: 'Lenovo',
        company: 'lenovo',
        name: 'נייד Lenovo V14 i5-13420H 8GB 512NVME FHD intel UHD DOS',
        description: 'מחשב V14 עם מעבד i5-13420H, זיכרון 8GB, אחסון 512GB NVMe, מסך FHD.',
        price: 1917,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/v14 g3 iap 1(1).PNG',
        imgAlt: 'נייד Lenovo V14 i5-13420H 8GB 512NVME FHD intel UHD DOS'
    },
    {
        category: 'Lenovo',
        company: 'lenovo',
        name: 'מחשב נייד Lenovo V14 G4 i3-1315U 8GB 256NVME FHD DOS',
        description: 'מחשב V14 G4 עם מעבד i3-1315U דור 13, זיכרון 8GB, אחסון 256GB NVMe, מסך FHD.',
        price: 1437,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/v14 g3 iap 1.PNG',
        imgAlt: 'מחשב נייד Lenovo V14 G4 i3-1315U 8GB 256NVME FHD DOS'
    },
    {
        category: 'Lenovo',
        company: 'lenovo',
        name: 'נייד Lenovo V14 i5-13420H 16GB 512NVME FHD Intel UHD DOS',
        description: 'מחשב V14 עם מעבד i5-13420H, זיכרון 16GB, אחסון 512GB NVMe, מסך FHD.',
        price: 1987,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/v14 g3 iap 1(1).PNG',
        imgAlt: 'נייד Lenovo V14 i5-13420H 16GB 512NVME FHD Intel UHD DOS'
    },
    {
        category: 'Lenovo',
        company: 'lenovo',
        name: 'נייד LENOVO V14 i7-1355U 16GB 512NVME 14 FHD Intel XE DOS Black',
        description: 'מחשב V14 עם מעבד i7-1355U, זיכרון 16GB, אחסון 512GB NVMe, מסך 14 FHD.',
        price: 2739,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/v14 g3 iap 1.PNG',
        imgAlt: 'נייד LENOVO V14 i7-1355U 16GB 512NVME 14 FHD Intel XE DOS Black'
    },
    {
        category: 'Lenovo',
        company: 'lenovo',
        name: 'מחשב נייד Lenovo V14 G4 i3-1315U 8GB 512NVME FHD DOS',
        description: 'מחשב V14 G4 עם מעבד i3-1315U דור 13, זיכרון 8GB, אחסון 512GB NVMe, מסך FHD.',
        price: 1630,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/v14 g3 iap 1.PNG',
        imgAlt: 'מחשב נייד Lenovo V14 G4 i3-1315U 8GB 512NVME FHD DOS'
    },
    {
        category: 'Lenovo',
        company: 'lenovo',
        name: 'נייד LENOVO V15 ATHELON Silver 7120U 8GB 256NVME 15.6 FHD DOS bla',
        description: 'מחשב V15 בסיסי עם מעבד ATHELON Silver, זיכרון 8GB, אחסון 256GB NVMe, מסך 15.6 FHD.',
        price: 1137,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/v15 amd G4 AMN.PNG',
        imgAlt: 'נייד LENOVO V15 ATHELON Silver 7120U 8GB 256NVME 15.6 FHD DOS bla'
    },
    // Asus
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook Go 14 i3-N305 8GB 512NVME FHD DOS Green Grey',
        description: 'מחשב VivoBook Go 14 עם מעבד i3-N305, זיכרון 8GB, אחסון 512GB NVMe, מסך FHD.',
        price: 1493,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/1404 green grey(1).jpg',
        imgAlt: 'נייד ASUS VivoBook Go 14 i3-N305 8GB 512NVME FHD DOS Green Grey'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook 14 i5-1235U 8GB 512NVME 15.6 FHD DOS Blue',
        description: 'מחשב VivoBook 14 עם מעבד i5-1235U, זיכרון 8GB, אחסון 512GB NVMe, מסך 15.6 FHD.',
        price: 2014,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1404 BLUE.png',
        imgAlt: 'נייד ASUS VivoBook 14 i5-1235U 8GB 512NVME 15.6 FHD DOS Blue'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook 14 i5-1235U 16GB 1TB NVME Intel UHD FHD DOS',
        description: 'מחשב VivoBook 14 עם מעבד i5-1235U, זיכרון 16GB, אחסון 1TB NVMe, מסך FHD.',
        price: 2054,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1405ZA silver 3(1).jpg',
        imgAlt: 'נייד ASUS VivoBook 14 i5-1235U 16GB 1TB NVME Intel UHD FHD DOS'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook GO 14 i5-1334U 16GB 512NVME FHD DOS Silver',
        description: 'מחשב VivoBook Go 14 עם מעבד i5-1334U, זיכרון 16GB, אחסון 512GB NVMe, מסך FHD.',
        price: 2082,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/1404 silver.png',
        imgAlt: 'נייד ASUS VivoBook GO 14 i5-1334U 16GB 512NVME FHD DOS Silver'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook 14 i5-1335U 8GB 512NVME intel UHD FHD DOS Blue',
        description: 'מחשב VivoBook 14 עם מעבד i5-1335U, זיכרון 8GB, אחסון 512GB NVMe, מסך FHD.',
        price: 2054,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1404 BLUE.png',
        imgAlt: 'נייד ASUS VivoBook 14 i5-1335U 8GB 512NVME intel UHD FHD DOS Blue'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS Vivobook 15 I5-13420H 16GB 1TB FHD WIN11H Silver 3Y',
        description: 'מחשב Vivobook 15 עם מעבד I5-13420H, זיכרון 16GB, אחסון 1TB, כולל מערכת הפעלה Win11 Home.',
        price: 2876,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1504ZA icelight(4).jpg',
        imgAlt: 'נייד ASUS Vivobook 15 I5-13420H 16GB 1TB FHD WIN11H Silver 3Y'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook X1502VA I9-13900H 16GB 1TB WIN11 Home 3Y Silve',
        description: 'מחשב VivoBook חזק עם מעבד I9-13900H, זיכרון 16GB, אחסון 1TB, כולל Win11 Home.',
        price: 3698,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1504ZA icelight(4).jpg',
        imgAlt: 'נייד ASUS VivoBook X1502VA I9-13900H 16GB 1TB WIN11 Home 3Y Silve'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook Go 15 i3-N305 8GB 256UFS FHD DOS Silver',
        description: 'מחשב VivoBook Go 15 בסיסי עם מעבד i3-N305, זיכרון 8GB, אחסון 256UFS, מסך FHD.',
        price: 1369,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/e1504 silver(1).jpg',
        imgAlt: 'נייד ASUS VivoBook Go 15 i3-N305 8GB 256UFS FHD DOS Silver'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS Vivobook 15 I7-1355U 16GB 512NVME Intel Iris DOS FHD',
        description: 'מחשב Vivobook 15 עם מעבד I7-1355U, זיכרון 16GB, אחסון 512GB NVMe, מסך FHD.',
        price: 2535,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/x1504 TC.jpg',
        imgAlt: 'נייד ASUS Vivobook 15 I7-1355U 16GB 512NVME Intel Iris DOS FHD'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS Vivobook 15 I7-1355U 16GB 1TB NVME Intel Iris DOS FHD T',
        description: 'מחשב Vivobook 15 עם מעבד I7-1355U, זיכרון 16GB, אחסון 1TB NVMe, מסך FHD מגע.',
        price: 2672,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/x1504 TC.jpg',
        imgAlt: 'נייד ASUS Vivobook 15 I7-1355U 16GB 1TB NVME Intel Iris DOS FHD T'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook 15 i7-1355U 16GB 512NVME 15.6 FHD DOS Silver',
        description: 'מחשב VivoBook 15 עם מעבד i7-1355U, זיכרון 16GB, אחסון 512GB NVMe, מסך 15.6 FHD.',
        price: 2465,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1504VA silver.jpeg',
        imgAlt: 'נייד ASUS VivoBook 15 i7-1355U 16GB 512NVME 15.6 FHD DOS Silver'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS Vivobook 15 I5-1344U 16GB 512NVME DOS FHD Terra Cota',
        description: 'מחשב Vivobook 15 עם מעבד I5-1344U, זיכרון 16GB, אחסון 512GB NVMe, צבע Terra Cota.',
        price: 2081,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/x1504 TC.jpg',
        imgAlt: 'נייד ASUS Vivobook 15 I5-1344U 16GB 512NVME DOS FHD Terra Cota'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS Vivobook 15 I5-1344U 8GB 512NVME DOS FHD Terra Cota',
        description: 'מחשב Vivobook 15 עם מעבד I5-1344U, זיכרון 8GB, אחסון 512GB NVMe, צבע Terra Cota.',
        price: 1904,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/x1504 TC.jpg',
        imgAlt: 'נייד ASUS Vivobook 15 I5-1344U 8GB 512NVME DOS FHD Terra Cota'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS Vivobook 15 I7-1355U 16GB 1TB NVME FHD WIN11 H Silver',
        description: 'מחשב Vivobook 15 עם מעבד I7-1355U, זיכרון 16GB, אחסון 1TB NVMe, כולל Win11 Home.',
        price: 3233,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1504ZA icelight(4).jpg',
        imgAlt: 'נייד ASUS Vivobook 15 I7-1355U 16GB 1TB NVME FHD WIN11 H Silver'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook 15 Core 5 120U 8GB 512NVME 15.6 FHD DOS Blue',
        description: 'מחשב VivoBook 15 עם מעבד Core 5, זיכרון 8GB, אחסון 512GB NVMe, מסך 15.6 FHD.',
        price: 1917,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1504 Blue 11(4).png',
        imgAlt: 'נייד ASUS VivoBook 15 Core 5 120U 8GB 512NVME 15.6 FHD DOS Blue'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook 15 Core 5 120U 16GB 1TB NVME 15.6 FHD DOS Blue',
        description: 'מחשב VivoBook 15 עם מעבד Core 5, זיכרון 16GB, אחסון 1TB NVMe, מסך 15.6 FHD.',
        price: 2465,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1504 Blue 11(4).png',
        imgAlt: 'נייד ASUS VivoBook 15 Core 5 120U 16GB 1TB NVME 15.6 FHD DOS Blue'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook 15 i3-1315U 8GB 512NVME 15.6 FHD DOS Silver',
        description: 'מחשב VivoBook 15 בסיסי עם מעבד i3-1315U, זיכרון 8GB, אחסון 512GB NVMe, מסך 15.6 FHD.',
        price: 1506,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1504VA silver(1).jpeg',
        imgAlt: 'נייד ASUS VivoBook 15 i3-1315U 8GB 512NVME 15.6 FHD DOS Silver'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS Vivobook 15 I7-1355U 16GB 1TB NVME DOS FHD TOUCH BLUE',
        description: 'מחשב Vivobook 15 עם מעבד I7-1355U, זיכרון 16GB, אחסון 1TB NVMe, מסך מגע FHD.',
        price: 3013,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1504(5).png',
        imgAlt: 'נייד ASUS Vivobook 15 I7-1355U 16GB 1TB NVME DOS FHD TOUCH BLUE'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'ASUS Vivobook 15 I5-1344U 16GB 1TB NVME FHD TOUCH Silver WIN11 H',
        description: 'מחשב Vivobook 15 עם מעבד I5-1344U, זיכרון 16GB, אחסון 1TB NVMe, מסך מגע, כולל Win11 Home.',
        price: 2876,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1504ZA icelight 3(1).jpg',
        imgAlt: 'ASUS Vivobook 15 I5-1344U 16GB 1TB NVME FHD TOUCH Silver WIN11 H'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS Vivobook 15 I5-1344U 16GB 1TB NVME DOS FHD TOUCH Silver',
        description: 'מחשב Vivobook 15 עם מעבד I5-1344U, זיכרון 16GB, אחסון 1TB NVMe, מסך מגע FHD.',
        price: 2602,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1504ZA icelight 3(1).jpg',
        imgAlt: 'נייד ASUS Vivobook 15 I5-1344U 16GB 1TB NVME DOS FHD TOUCH Silver'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'ASUS Vivobook 15 Core 5 120U 16GB 512GB NVME DOS FHD TOUCH Silver',
        description: 'מחשב Vivobook 15 עם מעבד Core 5, זיכרון 16GB, אחסון 512GB NVMe, מסך מגע FHD.',
        price: 2328,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1504ZA icelight 3(1).jpg',
        imgAlt: 'ASUS Vivobook 15 Core 5 120U 16GB 512GB NVME DOS FHD TOUCH Silver'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook 16 I7-13620 16GB 1TB NVME WUXGA IPS DOS Black',
        description: 'מחשב VivoBook 16 עם מעבד I7-13620, זיכרון 16GB, אחסון 1TB NVMe, מסך WUXGA IPS.',
        price: 2739,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1605VA 1.png',
        imgAlt: 'נייד ASUS VivoBook 16 I7-13620 16GB 1TB NVME WUXGA IPS DOS Black'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook 16 I5-13420H 16GB 1TB NVME WUXGA IPS DOS Black',
        description: 'מחשב VivoBook 16 עם מעבד I5-13420H, זיכרון 16GB, אחסון 1TB NVMe, מסך WUXGA IPS.',
        price: 2191,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1605VA 1.png',
        imgAlt: 'נייד ASUS VivoBook 16 I5-13420H 16GB 1TB NVME WUXGA IPS DOS Black'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook Core 5 120U 16GB 1TB FHD 17.3 IPS DOS',
        description: 'מחשב VivoBook 17.3 אינץ\' עם מעבד Core 5, זיכרון 16GB, אחסון 1TB, מסך FHD IPS.',
        price: 2946,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X1704VA.png',
        imgAlt: 'נייד ASUS VivoBook Core 5 120U 16GB 1TB FHD 17.3 IPS DOS'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'ASUS Zenbook 14 i9-13900H 16GB DDR5 1TB OLED 14 2.8K DOS BLUE',
        description: 'מחשב Zenbook יוקרתי עם מעבד i9-13900H, זיכרון 16GB DDR5, אחסון 1TB, מסך OLED 2.8K.',
        price: 4520,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/UX3402VA Blue(1).jpg',
        imgAlt: 'ASUS Zenbook 14 i9-13900H 16GB DDR5 1TB OLED 14 2.8K DOS BLUE'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'ASUS UX3405MA Ultra 9 285H 32GB 1TB NVME 14 3K OLED DOS 1.2KG SLV',
        description: 'מחשב Ultra 9 דק וקל (1.2 ק"ג) עם זיכרון 32GB, אחסון 1TB, מסך OLED 3K.',
        price: 5658,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/UX3405MA silver.jpg',
        imgAlt: 'ASUS UX3405MA Ultra 9 285H 32GB 1TB NVME 14 3K OLED DOS 1.2KG SLV'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'ASUS UX3405CA Ultra 9 285H 32GB 1TB NVME 14 3K OLED WIN11 1.2KG',
        description: 'מחשב Ultra 9 דק וקל (1.2 ק"ג) עם זיכרון 32GB, אחסון 1TB, מסך OLED 3K, כולל Win11.',
        price: 6083,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/UX3405MA silver.jpg',
        imgAlt: 'ASUS UX3405CA Ultra 9 285H 32GB 1TB NVME 14 3K OLED WIN11 1.2KG'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'ASUS UX3405CA Ultra 7 255H 16GB 1TB NVME 14 3K OLED WIN11H TOUCH',
        description: 'מחשב Ultra 7 עם זיכרון 16GB, אחסון 1TB, מסך OLED 3K מגע, כולל Win11 Home.',
        price: 5616,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/UX3405MA silver.jpg',
        imgAlt: 'ASUS UX3405CA Ultra 7 255H 16GB 1TB NVME 14 3K OLED WIN11H TOUCH'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'ASUS UX3405CA Ultra 9 285H 32GB 1TB NVME 14 3K OLED WIN11 TOUCH',
        description: 'מחשב Ultra 9 עם זיכרון 32GB, אחסון 1TB, מסך OLED 3K מגע, כולל Win11.',
        price: 6371,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/UX3405MA silver.jpg',
        imgAlt: 'ASUS UX3405CA Ultra 9 285H 32GB 1TB NVME 14 3K OLED WIN11 TOUCH'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'ASUS UX3405MA Ultra 5 125H 16GB 1TB NVME 14 3K OLED DOS 1.2KG',
        description: 'מחשב Ultra 5 דק וקל (1.2 ק"ג) עם זיכרון 16GB, אחסון 1TB, מסך OLED 3K.',
        price: 4794,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/UX3405 blue.jpg',
        imgAlt: 'ASUS UX3405MA Ultra 5 125H 16GB 1TB NVME 14 3K OLED DOS 1.2KG'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook Flip 14 Ultra 5 226V 16GB 1TB NVME TOUCH Win11',
        description: 'מחשב מתהפך (Flip) עם מעבד Ultra 5, זיכרון 16GB, אחסון 1TB NVMe, מסך מגע, כולל Win11.',
        price: 4713,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/3407 flip silver.png',
        imgAlt: 'נייד ASUS VivoBook Flip 14 Ultra 5 226V 16GB 1TB NVME TOUCH Win11'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'Asus VivoBook 16X i7-13620H 16GB 1TB 16 QXGA RTX3050 DOS Black',
        description: 'מחשב VivoBook 16X עם מעבד i7-13620H, זיכרון 16GB, אחסון 1TB, כרטיס RTX3050, מסך QXGA.',
        price: 3698,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X3605ZU BLK 1(1).png',
        imgAlt: 'Asus VivoBook 16X i7-13620H 16GB 1TB 16 QXGA RTX3050 DOS Black'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'Asus VivoBook 16X i7-13620H 16GB 1TB 16 QXGA RTX3050 DOS Silver',
        description: 'מחשב VivoBook 16X עם מעבד i7-13620H, זיכרון 16GB, אחסון 1TB, כרטיס RTX3050, מסך QXGA.',
        price: 3822,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/k3605 silver.png',
        imgAlt: 'Asus VivoBook 16X i7-13620H 16GB 1TB 16 QXGA RTX3050 DOS Silver'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'Asus VivoBook 16X i5-12500H 16GB 1TB NVME 16 QXGA RTX2050 DOS',
        description: 'מחשב VivoBook 16X עם מעבד i5-12500H, זיכרון 16GB, אחסון 1TB NVMe, כרטיס RTX2050, מסך QXGA.',
        price: 2876,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/k3605 silver.png',
        imgAlt: 'Asus VivoBook 16X i5-12500H 16GB 1TB NVME 16 QXGA RTX2050 DOS'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'Asus VivoBook 16X i5-12500H 16GB 1TB NVME 16 QXGA RTX2050 DOS',
        description: 'מחשב VivoBook 16X עם מעבד i5-12500H, זיכרון 16GB, אחסון 1TB NVMe, כרטיס RTX2050, מסך QXGA.',
        price: 3013,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/X3605ZU BLK 1.png',
        imgAlt: 'Asus VivoBook 16X i5-12500H 16GB 1TB NVME 16 QXGA RTX2050 DOS'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'ASUS V16 Core 7 240H 32GB DDR5 1TB NVME RTX 5060 8GB DOS 144HZ',
        description: 'מחשב V16 גיימינג עם מעבד Core 7, זיכרון 32GB DDR5, אחסון 1TB NVMe, כרטיס RTX 5060, מסך 144HZ.',
        price: 6069,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/v16.png',
        imgAlt: 'ASUS V16 Core 7 240H 32GB DDR5 1TB NVME RTX 5060 8GB DOS 144HZ'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד Asus VivoBook S16 I7-13620H 16GB 1TB NVME FHD DOS 3YOS',
        description: 'מחשב VivoBook S16 עם מעבד I7-13620H, זיכרון 16GB, אחסון 1TB NVMe, מסך FHD.',
        price: 3424,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/S3607VA.png',
        imgAlt: 'נייד Asus VivoBook S16 I7-13620H 16GB 1TB NVME FHD DOS 3YOS'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'ASUS V16 Core 7 240H 16GB DDR5 1TB NVME RTX 5060 8GB DOS 144HZ',
        description: 'מחשב V16 גיימינג עם מעבד Core 7, זיכרון 16GB DDR5, אחסון 1TB NVMe, כרטיס RTX 5060, מסך 144HZ.',
        price: 5329,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/v16.png',
        imgAlt: 'ASUS V16 Core 7 240H 16GB DDR5 1TB NVME RTX 5060 8GB DOS 144HZ'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד Asus VivoBook S16 I5-13420H 16GB 512NVME FHD DOS Silver 3YOS',
        description: 'מחשב VivoBook S16 עם מעבד I5-13420H, זיכרון 16GB, אחסון 512GB NVMe, מסך FHD.',
        price: 2739,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/S3607VA.png',
        imgAlt: 'נייד Asus VivoBook S16 I5-13420H 16GB 512NVME FHD DOS Silver 3YOS'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS TUF Gaming F15 i7-12700H 16GB DDR5 1TB NVME 3050 15.6',
        description: 'מחשב TUF Gaming F15 עם מעבד i7-12700H, זיכרון 16GB DDR5, אחסון 1TB NVMe, כרטיס 3050.',
        price: 3685,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/tuf F17 BLK 2.jpg',
        imgAlt: 'נייד ASUS TUF Gaming F15 i7-12700H 16GB DDR5 1TB NVME 3050 15.6'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS TUF Gaming F15 i7-13620H 32GB 2TB NVME RTX 4060 15.6',
        description: 'מחשב TUF Gaming F15 עם מעבד i7-13620H, זיכרון 32GB, אחסון 2TB NVMe, כרטיס RTX 4060.',
        price: 6438,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/tuf F17 BLK 2.jpg',
        imgAlt: 'נייד ASUS TUF Gaming F15 i7-13620H 32GB 2TB NVME RTX 4060 15.6'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook S14 Ultra 7 258V 32GB 1TB NVME 3K OLED DOS Blk',
        description: 'מחשב VivoBook S14 עם מעבד Ultra 7, זיכרון 32GB, אחסון 1TB NVMe, מסך OLED 3K.',
        price: 5001,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/S5406SA.png',
        imgAlt: 'נייד ASUS VivoBook S14 Ultra 7 258V 32GB 1TB NVME 3K OLED DOS Blk'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook S 16 OLED Ultra 7 255H 16GB 1TB NVME 3K DOS 1Y',
        description: 'מחשב VivoBook S 16 עם מעבד Ultra 7, זיכרון 16GB, אחסון 1TB NVMe, מסך OLED 3K.',
        price: 4966,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/S5606SA Silver.png',
        imgAlt: 'נייד ASUS VivoBook S 16 OLED Ultra 7 255H 16GB 1TB NVME 3K DOS 1Y'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS VivoBook S 16 OLED Ultra 5 225H 16GB 1TB NVME 3K DOS 1Y',
        description: 'מחשב VivoBook S 16 עם מעבד Ultra 5, זיכרון 16GB, אחסון 1TB NVMe, מסך OLED 3K.',
        price: 4370,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/S5606SA Silver.png',
        imgAlt: 'נייד ASUS VivoBook S 16 OLED Ultra 5 225H 16GB 1TB NVME 3K DOS 1Y'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS TUF Gaming 16 CORE 5 210H 16GB 512NVME RTX 3050 DOS',
        description: 'מחשב TUF Gaming 16 עם מעבד CORE 5, זיכרון 16GB, אחסון 512GB NVMe, כרטיס RTX 3050.',
        price: 3480,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/tuf_gaming-removebg-preview.png',
        imgAlt: 'נייד ASUS TUF Gaming 16 CORE 5 210H 16GB 512NVME RTX 3050 DOS'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS TUF Gaming 16 CORE 5 210H 16GB 1TB NVME RTX 3050 DOS',
        description: 'מחשב TUF Gaming 16 עם מעבד CORE 5, זיכרון 16GB, אחסון 1TB NVMe, כרטיס RTX 3050.',
        price: 3768,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/tuf_gaming-removebg-preview.png',
        imgAlt: 'נייד ASUS TUF Gaming 16 CORE 5 210H 16GB 1TB NVME RTX 3050 DOS'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS TUF Gaming F16 i7-13620H 16GB 1TB NVME RTX 4050 16 DOS',
        description: 'מחשב TUF Gaming F16 עם מעבד i7-13620H, זיכרון 16GB, אחסון 1TB NVMe, כרטיס RTX 4050.',
        price: 4699,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/tuf16.png',
        imgAlt: 'נייד ASUS TUF Gaming F16 i7-13620H 16GB 1TB NVME RTX 4050 16 DOS'
    },
    {
        category: 'Asus',
        company: 'asus',
        name: 'נייד ASUS TUF Gaming F16 i7-13620H 32GB 1TB NVME RTX 4050 16 DOS',
        description: 'מחשב TUF Gaming F16 עם מעבד i7-13620H, זיכרון 32GB, אחסון 1TB NVMe, כרטיס RTX 4050.',
        price: 5329,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/tuf16.png',
        imgAlt: 'נייד ASUS TUF Gaming F16 i7-13620H 32GB 1TB NVME RTX 4050 16 DOS'
    },
    // Dell
    {
        category: 'Dell',
        company: 'dell',
        name: 'נייד Dell Vostro 3530 i7-1355U 16GB 512Nvme 15.6 FHD 120hz DOS',
        description: 'מחשב עסקי Vostro 3530 עם מעבד i7-1355U, זיכרון 16GB, אחסון 512GB NVMe, מסך 15.6 FHD 120hz.',
        price: 2739,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/vostro 3530.png',
        imgAlt: 'נייד Dell Vostro 3530 i7-1355U 16GB 512Nvme 15.6 FHD 120hz DOS'
    },
    {
        category: 'Dell',
        company: 'dell',
        name: 'מחשב נייד Dell Vostro 3530 i5-1334U 16GB 512Nvme 15.6 FHD 120hz',
        description: 'מחשב עסקי Vostro 3530 עם מעבד i5-1334U, זיכרון 16GB, אחסון 512GB NVMe, מסך 15.6 FHD 120hz.',
        price: 2110,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/vostro 3530.png',
        imgAlt: 'מחשב נייד Dell Vostro 3530 i5-1334U 16GB 512Nvme 15.6 FHD 120hz'
    },
    // HP
    {
        category: 'HP',
        company: 'hp',
        name: 'נייד HP 15 i5-1334U 16GB 512NVME 15.6 FHD WHITE',
        description: 'מחשב HP 15 עם מעבד i5-1334U, זיכרון 16GB, אחסון 512GB NVMe, מסך 15.6 FHD בצבע לבן.',
        price: 2191,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/c08514504.png',
        imgAlt: 'נייד HP 15 i5-1334U 16GB 512NVME 15.6 FHD WHITE'
    },
    {
        category: 'HP',
        company: 'hp',
        name: 'נייד HP NoteBook 15 i5-1334U 8GB 512NVME 15.6 FHD WHITE',
        description: 'מחשב HP NoteBook 15 עם מעבד i5-1334U, זיכרון 8GB, אחסון 512GB NVMe, מסך 15.6 FHD בצבע לבן.',
        price: 1917,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/c08514504.png',
        imgAlt: 'נייד HP NoteBook 15 i5-1334U 8GB 512NVME 15.6 FHD WHITE'
    },
    {
        category: 'HP',
        company: 'hp',
        name: 'נייד HP NoteBook 15 i7-1335U 16GB 512NVME 15.6 FHD WHITE 1YOS',
        description: 'מחשב HP NoteBook 15 עם מעבד i7-1335U, זיכרון 16GB, אחסון 512GB NVMe, מסך 15.6 FHD.',
        price: 2452,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/hp.jpeg',
        imgAlt: 'נייד HP NoteBook 15 i7-1335U 16GB 512NVME 15.6 FHD WHITE 1YOS'
    },
    {
        category: 'HP',
        company: 'hp',
        name: 'נייד HP NoteBook 15 i5-1235U 16GB 512NVME 15.6 FHD WHITE 1YOS',
        description: 'מחשב HP NoteBook 15 עם מעבד i5-1235U, זיכרון 16GB, אחסון 512GB NVMe, מסך 15.6 FHD.',
        price: 1850,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/hp.jpeg',
        imgAlt: 'נייד HP NoteBook 15 i5-1235U 16GB 512NVME 15.6 FHD WHITE 1YOS'
    },
    {
        category: 'HP',
        company: 'hp',
        name: 'נ. HP240R G9 I5-1335U 8GB 512NVME HD 14 3YOS DOS Dark Silver',
        description: 'מחשב HP240R G9 עם מעבד I5-1335U, זיכרון 8GB, אחסון 512GB NVMe, מסך 14 HD.',
        price: 1917,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/c09033831.png',
        imgAlt: 'נ. HP240R G9 I5-1335U 8GB 512NVME HD 14 3YOS DOS Dark Silver'
    },
    {
        category: 'HP',
        company: 'hp',
        name: 'נ. HP240R G9 I5-1334U 1X16GB 512NVME FHD 14 3YOS DOS Dark Silver',
        description: 'מחשב HP240R G9 עם מעבד I5-1334U, זיכרון 16GB, אחסון 512GB NVMe, מסך 14 FHD.',
        price: 2110,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/Screenshot 2025-04-24 134537.png',
        imgAlt: 'נ. HP240R G9 I5-1334U 1X16GB 512NVME FHD 14 3YOS DOS Dark Silver'
    },
    {
        category: 'HP',
        company: 'hp',
        name: 'נ. HP250R G9 I3-1315U 8GB 256NVME FHD 15.6 3YOS DOS Dark Silver',
        description: 'מחשב HP250R G9 עם מעבד I3-1315U, זיכרון 8GB, אחסון 256GB NVMe, מסך 15.6 FHD.',
        price: 1506,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/c09033831(2).png',
        imgAlt: 'נ. HP250R G9 I3-1315U 8GB 256NVME FHD 15.6 3YOS DOS Dark Silver'
    },
    {
        category: 'HP',
        company: 'hp',
        name: 'נ. HP250R G9 I5-1334U 16GB 512NVME FHD 15.6 3YOS DOS Dark Silver',
        description: 'מחשב HP250R G9 עם מעבד I5-1334U, זיכרון 16GB, אחסון 512GB NVMe, מסך 15.6 FHD.',
        price: 2054,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/c09033831(1).png',
        imgAlt: 'נ. HP250R G9 I5-1334U 16GB 512NVME FHD 15.6 3YOS DOS Dark Silver'
    },
    {
        category: 'HP',
        company: 'hp',
        name: 'נ. HP250R i5-1334u 16GB 512NVME FHD 15.6 3YOS DOS Turbo Silver',
        description: 'מחשב HP250R עם מעבד i5-1334u, זיכרון 16GB, אחסון 512GB NVMe, מסך 15.6 FHD בצבע כסוף.',
        price: 2247,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/1(1).jpeg',
        imgAlt: 'נ. HP250R i5-1334u 16GB 512NVME FHD 15.6 3YOS DOS Turbo Silver'
    },
    {
        category: 'HP',
        company: 'hp',
        name: 'נייד HP250 G10 I7-1355U 16GB 512NVME 15.6 FHD DOS Silver',
        description: 'מחשב HP250 G10 עם מעבד I7-1355U, זיכרון 16GB, אחסון 512GB NVMe, מסך 15.6 FHD.',
        price: 2946,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/1(1).jpeg',
        imgAlt: 'נייד HP250 G10 I7-1355U 16GB 512NVME 15.6 FHD DOS Silver'
    },
    {
        category: 'HP',
        company: 'hp',
        name: 'נ. HP250R G9 I5-1335U 16GB 512NVME FHD 15.6 3YOS DOS Dark Silver',
        description: 'מחשב HP250R G9 עם מעבד I5-1335U, זיכרון 16GB, אחסון 512GB NVMe, מסך 15.6 FHD.',
        price: 2178,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/c09033831(1).png',
        imgAlt: 'נ. HP250R G9 I5-1335U 16GB 512NVME FHD 15.6 3YOS DOS Dark Silver'
    },
    {
        category: 'HP',
        company: 'hp',
        name: 'נ. HP250R G9 I3-1315U 8GB 512NVME FHD 15.6 3YOS DOS Dark Silver',
        description: 'מחשב HP250R G9 עם מעבד I3-1315U, זיכרון 8GB, אחסון 512GB NVMe, מסך 15.6 FHD.',
        price: 1643,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/c09033831(2).png',
        imgAlt: 'נ. HP250R G9 I3-1315U 8GB 512NVME FHD 15.6 3YOS DOS Dark Silver'
    },
    {
        category: 'HP',
        company: 'hp',
        name: 'נ. HP250R G9 I5-1335U 8GB 512NVME FHD 15.6 3YOS DOS Dark Silver',
        description: 'מחשב HP250R G9 עם מעבד I5-1335U, זיכרון 8GB, אחסון 512GB NVMe, מסך 15.6 FHD.',
        price: 2054,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/c09033831(3).png',
        imgAlt: 'נ. HP250R G9 I5-1335U 8GB 512NVME FHD 15.6 3YOS DOS Dark Silver'
    },
    {
        category: 'HP',
        company: 'hp',
        name: 'נ. HP250 G10 I5-1334U 16GB 512NVME FHD 15.6 3YOS DOS Dark Silver',
        description: 'מחשב HP250 G10 עם מעבד I5-1334U, זיכרון 16GB, אחסון 512GB NVMe, מסך 15.6 FHD.',
        price: 2054,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/Screenshot 2025-09-30 135315.png',
        imgAlt: 'נ. HP250 G10 I5-1334U 16GB 512NVME FHD 15.6 3YOS DOS Dark Silver'
    },
    {
        category: 'HP',
        company: 'hp',
        name: 'נ. HP250R G9 I5-1334U 16GB 512NVME FHD 15.6 3YOS DOS Dark Silver',
        description: 'מחשב HP250R G9 עם מעבד I5-1334U, זיכרון 16GB, אחסון 512GB NVMe, מסך 15.6 FHD.',
        price: 2151,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/c09033831(1).png',
        imgAlt: 'נ. HP250R G9 I5-1334U 16GB 512NVME FHD 15.6 3YOS DOS Dark Silver'
    },
   // Gigabyte
    {
        category: 'Gigabyte',
        company: 'gigabyte',
        name: 'נייד GIGABYTE A16 AMD R7 260 16GB 1TB Nvme RTX 5060 8GB IPS 3VH',
        description: 'מחשב גיימינג עוצמתי עם מעבד AMD R7, זיכרון 16GB, אחסון 1TB NVMe, וכרטיס מסך RTX 5060 8GB.',
        price: 5068,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/GIGABYTE GAMING A16 GA6H-01.png',
        imgAlt: 'נייד GIGABYTE A16 AMD R7 260 16GB 1TB Nvme RTX 5060 8GB IPS 3VH'
    },
    {
        category: 'Gigabyte',
        company: 'gigabyte',
        name: 'נייד GIGABYTE A16 AMD R7 260 32GB 1TB Nvme RTX 5060 8GB IPS 3VH',
        description: 'מחשב גיימינג עם מעבד AMD R7, זיכרון 32GB, אחסון 1TB NVMe, וכרטיס מסך RTX 5060 8GB.',
        price: 5342,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/GIGABYTE GAMING A16 GA6H-01.png',
        imgAlt: 'נייד GIGABYTE A16 AMD R7 260 32GB 1TB Nvme RTX 5060 8GB IPS 3VH'
    },
    {
        category: 'Gigabyte',
        company: 'gigabyte',
        name: 'נייד GIGABYTE A16 WH RYZEN 7 260 16GB 1TB NVME RTX 5070 8GB IPS',
        description: 'מחשב גיימינג חזק עם מעבד RYZEN 7, זיכרון 16GB, אחסון 1TB NVMe, וכרטיס מסך RTX 5070 8GB.',
        price: 6083,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/GIGABYTE GAMING A16 GA63H-02.png',
        imgAlt: 'נייד GIGABYTE A16 WH RYZEN 7 260 16GB 1TB NVME RTX 5070 8GB IPS'
    },
    {
        category: 'Gigabyte',
        company: 'gigabyte',
        name: 'נייד GIGABYTE A16 CVH i7-13620H 16GB 1TB NVME RTX 5060 8GB IPS',
        description: 'מעבד i7-13620H, זיכרון 16GB, אחסון 1TB NVMe, וכרטיס מסך RTX 5060 8GB. מסך IPS איכותי.',
        price: 5055,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/GIGABYTE GAMING A16 GA6H-01.png',
        imgAlt: 'נייד GIGABYTE A16 CVH i7-13620H 16GB 1TB NVME RTX 5060 8GB IPS'
    },
    {
        category: 'Gigabyte',
        company: 'gigabyte',
        name: 'נייד GIGABYTE A16 CVH i7-13620H 32GB 1TB NVME RTX 5060 8GB IPS',
        description: 'מעבד i7-13620H, זיכרון 32GB, אחסון 1TB NVMe, וכרטיס מסך RTX 5060 8GB. מסך IPS איכותי.',
        price: 5329,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/GIGABYTE GAMING A16 GA6H-01.png',
        imgAlt: 'נייד GIGABYTE A16 CVH i7-13620H 32GB 1TB NVME RTX 5060 8GB IPS'
    },
    {
        category: 'Gigabyte',
        company: 'gigabyte',
        name: 'נייד Gigabyte AERO X16 Ryzen AI 7 350 32GB 1TB RTX 5070 WIN11 WH',
        description: 'מחשב פרימיום AERO X16 עם מעבד Ryzen AI 7, זיכרון 32GB, אחסון 1TB, כרטיס RTX 5070.',
        price: 8015,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/aero 16X (6).png',
        imgAlt: 'נייד Gigabyte AERO X16 Ryzen AI 7 350 32GB 1TB RTX 5070 WIN11 WH'
    },
    {
        category: 'Gigabyte',
        company: 'gigabyte',
        name: 'נייד Gigabyte AERO X16 Ryzen AI 7 350 32GB 1TB RTX 5070 WIN11 Gr',
        description: 'מחשב פרימיום AERO X16 עם מעבד Ryzen AI 7, זיכרון 32GB, אחסון 1TB, כרטיס RTX 5070.',
        price: 8015,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/aero 16X (6).png',
        imgAlt: 'נייד Gigabyte AERO X16 Ryzen AI 7 350 32GB 1TB RTX 5070 WIN11 Gr'
    },
    {
        category: 'Gigabyte',
        company: 'gigabyte',
        name: 'מחשב נייד GIGABYTE AERO X16 2WH R9 HX370 32GB DDR5 1TB 5070 WIN11',
        description: 'מחשב נייד מקצועי AERO X16 עם מעבד R9 HX370, זיכרון 32GB DDR5, אחסון 1TB, וכרטיס 5070.',
        price: 9028,
        imgSrc: 'https://www.morlevi.co.il/cache/w_600/1(96).png',
        imgAlt: 'מחשב נייד GIGABYTE AERO X16 2WH R9 HX370 32GB DDR5 1TB 5070 WIN11'
    }
];