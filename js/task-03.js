const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');
const galleryList = images.map(
  (item) => `<li><img src=${item.url} alt=${item.alt} width=400/></li>`
);
gallery.insertAdjacentHTML('afterbegin', galleryList);

const galleryStyle = `<style>
  .gallery {
    list-style-type: none;
    display: flex;
    gap: 20px;
    margin-top: 40px;
  }
  .gallery li img:hover {
    display: block;
    outline: 2px solid red;
    width: 500px;
    cursor: pointer;
  }
</style>`;
gallery.insertAdjacentHTML('afterend', galleryStyle);
