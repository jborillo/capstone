export let productData = [
    {description:"Pang BreakFast na Inomin", productName:"Milo Active-Go Choco Malt Powdered Milk Drink 1kg", price:"278", productThumbnail:
    "https://www.order247.ca/wp-content/uploads/2020/04/milo-33g-canada.jpg",},

    {description:"Spread Jam", productName:"Clara Olé Sugar-Free Strawberry Jam 240g", price:"102", productThumbnail:
    "https://cf.shopee.ph/file/52bed15b5367e4d3296cd17b40e940e1",},

    {description:"Pang pagising", productName:"NESCAFE CLASSIC DECAF Instant Coffee 80g", price:"85", productThumbnail:
    "https://static.wixstatic.com/media/250a2e_07016825e4da4d25aecefe0e62155866~mv2.jpg/v1/fill/w_421,h_438,al_c,q_85/250a2e_07016825e4da4d25aecefe0e62155866~mv2.jpg",},

    {description:"Cereal na masarap", productName:"Koko Krunch Duo 330g", price:"162", productThumbnail:
    "https://images-na.ssl-images-amazon.com/images/I/71jhtOvycXL._SL1000_.jpg",},

    {description:"Cereal na pang palakas", productName:"Quaker Flavored Oatmeal Original with Milk 500g", price:"105", productThumbnail:
    "https://quakeroats.ph/wp-content/uploads/2020/09/0013_Quaker-Flavored-Oatmeal-Original-with-Milk-500g-2.jpg",},

    {description:"Basta Masarap to", productName:"Piatos Sour Cream & Onions", price:"15", productThumbnail:
    "https://jessicafilipinofoods.co.uk/wp-content/uploads/2020/04/piatos.jpg",},

    {description:"Basta Masarap to", productName:"Piatos Cheese", price:"15", productThumbnail:
    "https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",},

    {description:"Masarap na sweets", productName:"Oreo Chocolate Mini Sandwich Cookies in Pouch (10x20.4g)", price:"100", productThumbnail:
    "https://cf.shopee.ph/file/84beb28f4f4695ac739a65f823cc3dcc",},

    {description:"Masarap na snack", productName:"Doritos Nacho Cheese Tortilla Chips 7oz", price:"143", productThumbnail:
    "https://i5.walmartimages.ca/images/Enlarge/300/624/6000202300624.jpg",},

    {description:"Spaghetti Pasta", productName:"San Remo Spaghetti Pasta 500g", price:"71", productThumbnail:
    "https://asiansnacks.co/wp-content/uploads/2019/04/ShotType1_540x540-1781.jpg",},

    {description:"Healthy Oil", productName:"La Española Extra Virgin Olive Oil Garlic Flavor 250mL", price:"226", productThumbnail:
    "https://cdnimages.logicommerce.cn/985/8410660101481_l.jpg",},

    {description:"Carne", productName:"Lucky 7 Carne Norte 100g", price:"13", productThumbnail:
    "https://store.iloilosupermart.com/wp-content/uploads/2020/05/302-1.jpg",},
];

export let riderDeliver = [
    {
        productName:"Lucky 7 Carne Norte 100g",
        productThumbnail:"https://store.iloilosupermart.com/wp-content/uploads/2020/05/302-1.jpg",
        productPay:null,
        customerAddress:'#2 Cacapian, San Juan, La Union',
        customerName:'Pedro',
        deliveryStatus:0, //-1 - failed, 0 - pending, 1 - delivered
    },
    {
        productName:"La Española Extra Virgin Olive Oil Garlic Flavor 250mL",
        productThumbnail:"https://cdnimages.logicommerce.cn/985/8410660101481_l.jpg",
        productPay:null,
        customerAddress:'#45 Ilocos Norte, San Juan, La Union',
        customerName:'Pepito',
        deliveryStatus:0, //-1 - failed, 0 - pending, 1 - delivered
    },
    {
        productName:"Piatos Cheese",
        productThumbnail:"https://goshoppers.eu/1091-large_default/jj-piatos-cheese-85g.jpg",
        productPay:15,
        customerAddress:'Urbiztondo, La Union',
        customerName:'Alfredo',
        deliveryStatus:0, //-1 - failed, 0 - pending, 1 - delivered
    },
]

/*

*/

let product = {
    id:0,
    sellerID:0,
    categoryID:0,
    name:'',
    description:'',
    specification:'',
    price:'',
    stocks:0,
    pictures:{thumbnail:'', carousel:''},
}

let userReviews = {
    id:0,
    userID:0,
    productID:0,
    rating:0,
    comment:''
}

let userProfile={
    id:0,
    accountType:0, //0 - buyer, 1 - seller, 2 - rider, -1 - admin
    addressId:0,
    phoneID:0,
    profilePicture:'',
    firstName:'',
    lastName:'',
    username:'',
    email:'',
    password:'',
    gender:'',
    verificationId:''
}

//form separte yung house unit, city tpos barangay then concatenate nlng sa address 
let addressBook={
    id:0,
    userID:0,
    receiverName:'',
    address:'',
    barangay:'',
    municipality:'',
    gps:'',
    phoneNumber:'',
    zipCode:''
}

let orderInfo={
    id:0,
    userID:0,
    addressBookID:0,
    productId:0,
    quantity:0,
    status:1, //0 - waiting for seller to accept, 1 - seller accepted, 2 - order success, -1 - order cancelled
    time:'',
    date:'',
    method:0 //0 - delivery, 1 - pickup
}

export const comments = [
    {
        name:'Penduko', 
        profilePicture: 'https://i.ytimg.com/vi/JFMXpntAyVc/hqdefault.jpg',
        rating:4,
        comment:"masarap naman"
    },
    {
        name:'Manaloto',
        profilePicture: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFhUVGBUYGBgaGRkYGBgYGBkaGBgaGRkaGBocIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISGjEhISExNDQ0MTQ0NDQxMTE0NDQ0NDQxMTQ0NDQ0NDQ0NDQ0NDQ/PzQ/NDQ0PzQ0NDQ0NDQ/NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYDBwj/xAA+EAACAQIEAwUGBAUDAwUAAAABAgADEQQFEiExQVEGImFxgRMykaGxwQdC0eEUM2Jy8BUjUoLS8SRDU5Ky/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECBAMFBv/EACQRAAICAgICAgMBAQAAAAAAAAABAhEDMRIhBEEyUSIzcRQT/9oADAMBAAIRAxEAPwDQxLRYWiGLEi2hAQQhGmACmJeca+JRRdjaUeZdrsPSHEu3JV4/tChmiDXg08yx3b+s+1OmieJ3aVr9q8YRY1LA8goufKPiKz0/MM2o0QS7gHpfc+QmEzft2zFlopYcAzcR6CZXFVnc63ZmbxkNjKoVls/aTElixqk3+A9J3XtXibW1i3l+koQIFvhCgLVs3YnUw1seOq5BkzKs5RSRUpoQT0HpvM5eAMQHqKYul7MVaPdII2F7cQD6bzVYPEBkB/8AE8ToZk6hVv3V4D1Bt8psct7VgIEI0sFv84mhnoYcQBmRwmdu+6ozf2lZZ4bOrW1o6eJFx8uEQ6LxY6R6GJR91IM7CAhY2LaBEAEMSEIAF4l4pEbaBQt4RIQA7QhCAggYQMBBK/G4wjuoLt5ScfCZvPs4XDLZe9Va9hxt4wAqs+IQFq1V9R4Ihtx6mYutX1EikgVf+XEnrdjFx9d3Ys7Ek8bnYesKFQqNt25DawlIGMSlp25nj/5jHZE56mttblH6WJ5DrtI76mOlRGIbVa/D685yalbdtvCWdPBBOO7258B5SPUW/I7jjCwIBMaROz0rnac3QjjBgMiwtHWMAHIg5wdwYgbj1nMmFgScLiXVgUZgR0JmsyntawstTfqbX29ZjFMmU2UgXiqws9Nw1dHGumwHVR+kt8NjCAeJtxHP06zybD4t6TalJt4GbTs/nftLE7keO9vvJoq7NrSqBhcGdJEpWNmUWvxtwPiJKBgFARGx8S0BDYtoumJAA0xI68WACwhaLaAxIRbRGNgTygBX5xmlPDoWc3PJRxJnmONzBqrs3G536AdBHdsc7Nasyj3ENhbn1meGJNrDbqY0hWXDU12uR5ch+8FdQLKPX9JUrVLEC+0nBwBcHlt4eYjoLFrMBtfc7+UKT6RtYX4yEzXaw68YjOWNhwHzhQrJr4kH3VBPWNYaje9rcunlOqDStr7+AkKpTZjt53+witFcW/QpG5uDHI1+KqD4wXLKnEAiMOBqX4NeTzj9lf8AKW6Eq4a24JJ8tpHemelpJCOhu2q3SR3q3PQS1JMhwaGaIy06+0sCLcec4iMQ8LcRLGdaJG1/jFqJa49YwCjUJ2Mk0KrU3DKT12+0iKnOTmS6hrcDEwPQuzOdawoJ8/1muB8NuU8byrFNSfUptbfwPUT1vKMUtWkjrzG46HpIZRKtC0dCAhIkWJaABCLCADotosIAAEpO1+O9jhncbMRpB6Ftry7mO/EVl9goJ21XIvxA+8APK6177k3jAJ2xKFTYqwvuNQ3sZzUbSxHel/T63nUPY24na0jNU5DYTvhgeMLoEm2cnJL2tvwkvCUNwJ1weCub2Nzwl/hMr91rdbzhPKkaIYG9lcmD1HfgOPpLLL8s1MGKjSPdH3MuKGXAi1h3jb9Ze4fBgWsNpleRs2LFFFZQy7wk0ZWlvd+UuaOEFo9qEhI6NrRkcbkqHlKWpkoHBfkJ6A+EvtODZaDGnJaJcY+0eYZlkR95QOFyNuHWVCZcxUtwsCeHSexYjJ1ZSvW1zz23tMxmeUlNKAWvxPgZ2x5npmfJgT7RgAm1+RAgzbEHj9pPr0NDuhGwPdlZV2Nv88JtUk0YZRaZJpr3V6kH6SRQcaCB0ufSJW7ioOfP4QwRsjt0t84NiQgb9Zt+wmYHUaJOzd5fPnMTpsPLb485NwGLNJ0dTcowuOdufykM6I9khacsHiVqIrqbhgCPXrOt4CC0baPvGwAbaLFhAB94R1oloCYlpg/xMey0wBex1N/aDN5Mz20wSPTLkd5VYenjADzfMHp1G16tKlRZb6mBA5+crXrDZVG3Hx8YzRwFze07ZZhS7bchKbpCSt0dKOD1AEDnw8pbUMHYcJOwGXES1oZeTMk8j9G3HiS2cMtwnhvL2hhTwtJWAwFhLKnhJmbbNapLoiYbD8pbYahHUMNJ9KmBKSE5DVox7UJKprOpSXxs5ORWmhEFMSeyCcXSKmPkRXpyuzPCBhw3tLVwROVSSUjyjtblRRlcepmXajrcC3MevhPZc+y0VKZB6bTyfM6TYd9xtuPjwM1YZ+mZM2P2iLiSGY9B9BtI1J7KUJ2P+CdK5v3l4cpFZdr/AOeM0mVkvDG62uPet6CJhql3IPC4+sbgKd309Re/h1nCidL/APVb05SWUj2zIaemkg/pH7S0lfkjXoJ4qJYRAIYkdaJAQkIt4QA6QhCABImY4UVabofzKQPMjaSYtoAeH1cuZFe4IamxVgehl/8AhxloqiuxHuqv3ln2/phHVgLF0IPQlevjvH/hh3cPiWA4soH3ildFx+SJFeiENpKwtZb7kSlz/wBqznTe17SrTLcSO8NUzOKumzUpv6PS8K6kbWkxHAnm2AzWvSbQ6m01WHzDUoN+U5SXE7xfI0yVNo1sSBIOGxGpbSDmNVr7cokynEt8Rn1Oncs4FuUgP2wQnYHTyJmafAhzdrn7y2wOV0wO/a3iZamkcnBstUz7WLgeU6U82J4i0dQFAbBkFvESQaKEbWt4RuQKNC0sVr5cuM6c5FKBdxJCG+85saFrrdTPPO2eWBkJt3t956Rp2me7S4TUjeUadNMUlyjR4fSexKnhf4RxQq2/A/MGSM7wuhyepjg6uoPMbEfcT0IytWedKNOh2BqKjkHYgHSeW/I+E5tSvVPiRYjhNfklIey/kU6rLtdveXn6x2Ny4VEaotMUnpWLKD74O1wPD7zi8y5cTusL48jbZCn/AKen/bLCQ8lH+wn9o/eTTOiOLCEIXjEJCLCAx0LRseICEhFiGAGV7eUFaipPEE2+E4/hNQ1YaqOtQA+FgJK7dNbDqTwD/acPw5qezwNR14mq3ytE2XFWy77R0qdIgW1Pa+kC5sOJPSZ9O1FNbhlFue4k3tBiWrFiuoK4T2lrB9KWuiHpuT8Ji85y7WtsOjWDbBraivInxnCUYt22aIyklSRqf9Rw1fgQG9JFxA0DY7cpRZT2YrtpNSnoVQwupGsseBPlLz/TnWigf3+DA7g24EGcckUtM74pSe1RfZI+oCxkvMsKbaozs3h7KLrYy/xWHW3ePKc1o6N9nnuKzHQD1H+bylbOKjanVdYQXNyQo9Oc02a5MjMykEKTq7v5v6T4Ssp5fTS66WAPnaVBxW+yZqT+LKnC9rMSwOk0jYgaAhZjfmLchbfzl9gc2ratJo1Fc2N0uVPmp4Szyx6NId2kBfwlrRxes2VG6bC3zlylF6REYyjt2OwuKZrK6OG8RYestKW3A3nXDYYgC7HyO+/hOrUxIKGqZBx9O6kEX2MmAR9ajdY0rFdHjfavLNOojkSZkFUgkT17tZgdSPYb6TPKMcul9ugmnDLqjPnitm97BVLu6Nv3A3wFpq6uCU69uNM/UTH/AIfAjEqCPfpMPpPRtFkY9bD5mcskbmjrjlWJkTA09CKvQfPnO8ULC01mFhaJCEBBCEIDHgRYQtAQkDFtC0AKLtbgzUwzgcQNQ9JW/h4t8A6HlWPzAO01zLyPDp1nDA5SuHoWTbW7P8dhIno6Y/kVuYYkIhD0mZfylRfTy+EzaYrfuofK283CWIsbGKKSDkB5ATFJtnoRikZ/A0Kr2LAqvjxi49LkKD4kmaJ3UCZxqpep3OF7X5RO2UkaLJaNgTfgLDzlu2HFt9zbnIuUUdgJMr9JajUSHK5FXjsDqF1NjylelNgbOoPjYSzxb1ACUsZQ/wCsAPpddJnJ9HWMWy4o4dDyA9BLDD0FXhKvD4lXFwbSxpYi3HhLjTJkmiZac3HhHhwRecmeU1RyObcuknIoA3kNNzJOIO0qPRMt0Uuc4MMG24g/SeGZnhf95xyW314T6JRAwtvvPHs4yV3xVdETZW3JB85UZcXYnHkq+iV+H511xU4BFPwtPRW9xfEk+n+Gee9h6Iplqb3R9XMHfoBN+9dXJ020qdNxzI4xr8p2Tk/DHX2IYhixk0mMdGx0QwASEIQA6QhCABCLCACSzx6f7CHkF/cyslvT7+HZOYG0matFwdSMxTrRKuItvK41LMR0Mg51iyqGx3MwtdnqpqrOv8WcTUNJG7oF2I5eEusLhFpg2mc7C1aae1WowWo2lkLbXG9xvNcqaqZdGV7HfSQdvKUodWc5ZO6LPKaoHhJNc3J6TPUMba2864nODyG/QfePl1QnHu0XbUhaZTtBloZrrs9rgidDnNYm2lQB/Vxk7AguC77seXQdImlIpPj3ZjMNj3pvocWPDfn5TS4PMLicM4ytXG4/UeUzlOo+HcI5uhPdbl5NJpo6clI36YvaAr7yjw2KuBvJlKteDZFIucNU3kisbyqw1TcGWlI6j5bS4u0cpKmdMMu8rcbQs76QN2+fjLrDpvKjPsypYZ/910QMNQ1HfbbYc5Uo9ExmuRT5myYWkarlS7HTTW27VD08J1yukUpIG962pvNtz9ZS4Vxj6/8AEsGGHpjRRQ8W5s5HifpNJadcceKM+bJydAY20dEnY4BGxbQtABIRbRIAdbQtFhGAkIQjAJMwFXTfw+8hzpQO5HUEevKSxx2Z3O6Wl2I4E3lDmfu3mpzGndSeRB9GB4TMZrSZqZ9LDpbjMU1Uj0oSbiV1DLTVTVpuJHoCph2vT1I3UcPUcCJbdm+1+GwqGniEcnVsVGrbqRtNDmuDWsmukBoZWYMRY2W17jiOM7cWo2mcFJOVMztDOKhAuih+dr2PjblLPBLVc3KnfqbCUKM6NxPnyIvxlpg8W5NrsZwfb7Nij10arB5cNtRUSxFSmgsGX4zKe1qkEgG17EnleNfKqj6CSbOSBbwjtLRDgttmgxNdWGzCUWZUVcFTYhhb16yuxOXMj6NbJuBqJ4dbyHl1Wt7R0YlkUnQ/MgG0adoTilossjYshU+8jFT6cDLQKQQZT5EbVKw6sD8hLxxawvOUkWiZgze3gZpMImx8ZnsvXeaPDMNE64kcMzJVATyj8SaZxGYJSG+imieWs6j67z1ei3Xz9BMHhcvL4ipiXHed2K34gDZflNEUZXKifgcMKaIiiwUW+E72imFp0OIloWhCFAFoWhaEAC0IQgAsWFosoYl4kWFoAJaKNtxxixIhFdmFUU3Gr+TVNr8kqHr4GVlbDWLI3O9poMVhkqo1N91cfA8jM3QZ1Jw9T+bSBKMf/cpj7iZcsaNmGdnn/aTA7kjiCZ6H2MxntKNPS6mqURWUkXNu44K+RlHnmH76va4a23K4/adMw7CsifxWGqMpUB7A7gE32tHjlyjTCcalaNdRyRWdlYDQuybcNW5BkvJsqRXe6qbNb/OkwGVdp8bTDanDkkbutypAtta0knN6zs7a9JqEFtN+QtObSTs0KGRxqzft7JUqoSOJHjccOUgYnHAUkRiA694Hjw8pQ0q7PfXUIDW1W528ZZ0kQEaBqJG7HcwXZX/Lj8mU+Jyr+JqLUqFgBvoBIB6Ey3TBqi7CWOGw1rs3E8vpErptCWqJT7M1gaNq7kDY2+Ms2a7RqU9JY23O874WjczhsvSJmDTh1Mu6B2Aldh1tLLDCaIKjNN2SMS4RGPM7CUUsc3f3U6C/qZXzVFGOT7GkQAjoSyRLRLR14hgAkSLEiYBCEIgHwhCUMQwEWFoAEIWgRAAkDtBlJr0g9M6cRSN0brbk3VSNvWTwJ3wz2Nv+W3rykyjaKhJxdmGpt7ZFcLYhrOh/K6nceRl9g8foRqL+5Y6DzseRkTPaAw1b+JUE03stZRyHJwOo+kXH4cOoKm9hsRzB4TK049o1XyozOY4dAxIYgX6Tnh0U7AOfSWjU7t3h8pPoYXcFeU5uVmmNpELBYQtbuMR47TTYCiVAAUCc8Km+4ltSUi20EKUmxopHnOVVefSSq9QAcd5U4vFbWEUmQji259ZY4elYSuw673PGWAe0URt9EpOMscMJWUGEmpUnaLOMkR8xN3PkPpIokTtDiq1FxWCh8PpHtEH8xAOLp/yA5jjJNKorqGUhlYAhhwIO4I9Jqi+jJJUxxhFtC0okaBFtFiQASJFiWiAIQtCAD4WjrRLQAbCLaV+NzZKe3vNe1hta3WXGMpdJETnGKtsmu4UFiQAOZkKhnWGcEioosbG50/AHjM3i83qOxv7h/KOA6SoGFVrueJNvK5/aaF4yS7ZmflNvo9Dp46k4JWohA3NmG3nK+p2iomolJCXZ2I1D3BpFzvzO0wVHADWx3429AZcaFT2bqP5T6rdVIKsD6EmYJS/JxXo9GMHwUn7NdjsUHDKQCQO8p/MttmEyy4z+HIRjeiTZH5J/Q3QeMbmmM3GlxcC9J+TK3Gm8qv8AUw4KMtiffQ8PNTOcjvBdF8+LW95Mw+OHLhMVTDp/LfUn/Bvy+HWTaGKcfkPoZxlFHaMn7NkmLF77yWM0PpMjTxbn8h9TO6M7cSF8uMi6Kqy6xGP6mcaTFjqb0HhI1OkBx38TJSPttJcilEnI86e0kBXvJFJSYWFFhRrWkvD1LyBTpzujWlKTOcokjMFunlf4W39JmuyuJ0o9PcolZ1Rv6Sb2HgCbekn9ocyKU9Cb1ancReZLbX8hH5blq0aSU13IFy3Ms27MfUzsptKzjKCb7J4IheRlpEcDOqseY+E6xzJ7OMsLWh5MIXhOyaeji7QkIsIwGwjoRAPvOFfFInFt+nGc2w7txY26cPpGrlwEzPN9GmOD7ZGxGYllcBStgCCTvubSqzCkDY8yx38pY46lpYgdF+s44lbgf9X1nreJ+tM8fzXWRpFJ7AEkevwkXD8CDyZfqZaMu/ykFRZ3Hhf/AOpB+81tGK6Yq4ezt5/rG13Kgg8Dx/aWlRL97kbH5XnCpRDcZ85lbhN/0+pw1PHH+GRxFdqJKsNdBjcH/gx+0ecOHAZCHHLfvD1l7Xy+9xa4PEHgZmsTlNSixaiTbmp+0Smpe6ZfBx9WjotBr2Bueh2YfrJCNUXjf1/accNnCP3aq6W/q2+Bl7hQCO4+3Q7znJyW0XFxZDo4p+gk2nimkj+GbmiN4iOXDj/4/hOTkdUhiVj/AIZMovecv4f+iSsNTI/LExkzD05PRbSPSWdqldEF3ZVA5kxpENnYSBmmbLRAFi7tsiD3mJ4WHIeMgPnD1rphU1HnUcEIo8ObGT8pyRaZLuxeq3vVG4+SjkPCXXtnNs4ZTljl/wCIrm9U7KPy01P5U8bc5olWOp053SnGhPo5rTjvZTsqx4EtENlfXw+xtttykTBIVUBizWG5O597beWuIPdPl9ZVk2U28vh+5no+HC7vR53nT4pVsSnidV9rC/GPSspNgecihLCIKfeA5Hj4DiZtl48W+jBHyZIstDdPmISu36fMwk/50X/ql9F1F5QhPBjs+gWiizT3z5L/APqRMRy9frCE9/xf1I+e8z9rIL+8JXv/AD3/ALW+kWE1GFlnQ/lp/YPtGwhPm/K/Y/6fU+H+pfwdV4SoxvvxYTL7Rs9GT7SxezvERITXP4ozLZusHwkxYQmN7NEdAY9IQjKJY4TH9qeK+cITpHRxZssj9xPL7S1TiIQgL0SlnRYQjQmPESEJYiNivd9RK78vx+sIT1fC+LPH8/5I5PG/9rfSLCbjzvolQhCAz//Z',
        rating:5,
        comment:"Kung mayaman lang sana ako matitikman ko to, pero nilibre ako ng kapitbahay ko nito hehehe"
    },
    {
        name:'vitas',
        profilePicture: 'https://i1.sndcdn.com/artworks-NAJtZZzzLDrQkVfW-yBCvRw-t500x500.jpg',
        rating:5,
        comment:"Я пришёл дать эту песню"
    },
    {
        name:'empoy',
        profilePicture:'https://images-na.ssl-images-amazon.com/images/I/61ps+qkSpPL._RI_.jpg',
        rating:5,
        comment:'Kapag bumalik ka sa product na to ibig sabihin palpak ang pinalit mo'
    }
];

export const deliveryInfo=[
    {
        OrderID:Math.round((Math.random()*100000000)).toString(),
        userID:123,
        name:'Test User',
        address:'Wakanda',
        paymentMethod:'G Cash',
        deliveryMethod:'Pickup',
        deliveryDate:'June 5, 2020'
    },
]

export const userInfo=[
    {
        id:123,
        userName:'jalil',
        defaultName:'Test User ',
        defaultAddress:'Cacapian, San Juan',
        gender:'N/A',
        defaultPaymentMethod:'G Cash',
        defaultDeliveryMethod:'Delivery'
    },
    {
        id:34,
        userName:'hamil',
        defaultName:'Kakoy Popito',
        defaultAddress:'Mars',
        gender:'Elon Musk',
        defaultPaymentMethod:'Doge Coin',
        defaultDeliveryMethod:'Walang pambayad sa shipping fee',
    },
    {
        id:45,
        userName:'galil',
        defaultName:'Buboy binaboy',
        defaultAddress:'Uranus',
        gender:'Jeff Bezos',
        defaultPaymentMethod:'AI Coin',
        defaultDeliveryMethod:'Delivery',
        DeliveryDate:'May,27,2050'
    },
    {
        id:5,
        userName:'lolil',
        defaultName:'Gragoy ',
        defaultAddress:'Milky Way Galaxy',
        gender:'Jack Ma',
        defaultPaymentMethod:'Alibaba',
        defaultDeliveryMethod:'Delivery',
        DeliveryDate:'January 12,2090'
    }

];