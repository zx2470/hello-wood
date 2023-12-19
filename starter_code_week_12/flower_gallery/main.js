console.log('this works');

const flowers = [
    {
        name: "Tulip",
        color: "yellow",
        image:
        "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg"
    },
    {
        name: "Daffodil",
        color: "yellow",
        image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
    },
    {
        name: "Sunflower",
        color: "yellow",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg"
    },
    {
        name: "Bluebell",
        color: "blue",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg"
    },
    {
        name: "Rose",
        color: "red",
        image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
    }
];


// grab the ul
const ul=document.quertselector("ul");

// write function
const renderFlowerToPage = (items) =>{
    console.log(items[i])};

    // create a list item
    let list_item=document.createElement("li");
    list_item.classList.add(flowers[i].color, `item--${i+1}`)
    // flower name
    let title = document.createElement
 

    image.setattributes("src", flowers[i].image);

    //append to page
    ul.appendChild(list_item);
    list_item.appendChild(title);
    list_item.appendChild(color);
    list_item.appendChild(image);




//pass data into it
renderFlowersToPage(flowers)