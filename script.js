document.addEventListener('DOMContentLoaded', (event) => {

  document.querySelectorAll('.carousel').forEach(carousel => {
    const carouselInner = carousel.querySelector('.carousel-inner');
    
    carousel.querySelector('.prevSlide').addEventListener('click', () => {
      carouselInner.scrollBy({ left: -400, top: 0, behavior: 'smooth' }); 
    });
    
    carousel.querySelector('.nextSlide').addEventListener('click', () => {
      carouselInner.scrollBy({ left: 400, top: 0, behavior: 'smooth' }); 
    });
  });
});