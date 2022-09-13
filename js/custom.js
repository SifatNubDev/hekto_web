$(function(){

  //mixitup product
  var containerEl = document.querySelector('.product-mix');
  var mixer = mixitup(containerEl, {
      animation: {
          duration: 1000
      },
      
  });
  //mixitup discount-product
  // var containerEl = document.querySelector('.discount-item-mix');
  // var mixer = mixitup(containerEl, {
  //     animation: {
  //         duration: 1000
  //     },
  //     load: {
  //       filter: '.wood'
  //   }
  // });



// product slider
$('.featured-product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    centerMode: false,
    centerPadding:0,
    responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                centerMode:false,
              }
            }
        ]
  });


  // top-categories-slider
  $('.top-categories-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    centerMode: false,
    centerPadding:0,
    responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                centerMode:false,
              }
            }
        ]
  });

  });



  
///////////-------------------quantity---------------////////////////


function updatedQuantity(inputField, isIncrease, single, total){
  let numberField = document.getElementById(inputField);
  const numberString = numberField.value;
  const previousNumber = parseInt(numberString);


  const singleUnit = document.getElementById(single);
  const totalUnit = document.getElementById(total);
  const singleString = singleUnit.innerText;
  const previousSingle = parseFloat(singleString);
  
  
  

  let newNumber;

  if(isIncrease === true){
      newNumber = previousNumber + 1;
  }
  else{
    if(previousNumber>1){
      newNumber = previousNumber - 1;
    }
    else{
      newNumber = 1;
    }
  }

  numberField.value = newNumber;

  let totalUnitPrice = previousSingle * newNumber;
  totalUnit.innerText = totalUnitPrice.toFixed(2);
  return totalUnitPrice;
}

document.getElementById('selected-product-main').addEventListener('click', function(event){
  let btn = event.target.id;
  var array1 = [];
  var array2 = [];
  var array3 = [];
  if(btn == 'minus-btn1'){
    var result1 = updatedQuantity('quantity1', false, 'singleUnit1', 'totalUnit1');
    array1.push(result1);
  }
  else if(btn == 'plus-btn1'){
    var result1 = updatedQuantity('quantity1', true, 'singleUnit1', 'totalUnit1');
    array1.push(result1);
  }
  else if(btn == 'minus-btn2'){
    var result1 = updatedQuantity('quantity2', false, 'singleUnit2', 'totalUnit2');
    array2.push(result1);
  }
  else if(btn == 'plus-btn2'){
    var result1 = updatedQuantity('quantity2', true, 'singleUnit2', 'totalUnit2');
    array2.push(result1);
  }
  else if(btn == 'minus-btn3'){
    var result1 = updatedQuantity('quantity3', false, 'singleUnit3', 'totalUnit3');
    array3.push(result1);
  }
  else if(btn == 'plus-btn3'){
    var result1 = updatedQuantity('quantity3', true, 'singleUnit3', 'totalUnit3');
    array3.push(result1);
  }
  
})





