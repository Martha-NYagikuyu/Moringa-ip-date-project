const form_holder = document.getElementById('form-holder');

const form = document.getElementById('form');
const form_day = document.getElementById('date');
const form_month = document.getElementById('month');
const form_year = document.getElementById('year');

let gender = ''

const results_holder = document.getElementById('results');

const akan_birthday = document.getElementById('birth-date');

const akan_name = document.getElementById('birth-name');



const male_akan_names = [
    {
      index: 0,
      day: "Sunday",
      akan: "Kwasi"
    },
    {
      index: 1,
      day: "Monday",
      akan: "Kwadwo"
    },
    {
      index: 2,
      day: "Tuesday",
      akan: "Kwabena"
    },
    {
      index: 3,
      day: "Wednesday",
      akan: "Kwaku"
    },
    {
      index: 4,
      day: "Thursday",
      akan: "Yaw"
    },
    {
      index: 5,
      day: "Friday",
      akan: "Kofi"
    },
    {
      index: 6,
      day: "Saturday",
      akan: "Kwame"
    }
  ]


const female_akan_names = [
  {
    index: 0,
    day: "Sunday",
    akan: "Akosua"
  },
  {
    index: 1,
    day: "Monday",
    akan: "Adwoa"
  },
  {
    index: 2,
    day: "Tuesday",
    akan: "Abenaa"
  },
  {
    index: 3,
    day: "Wednesday",
    akan: "Akua"
  },
  {
    index: 4,
    day: "Thursday",
    akan: "Yaa"
  },
  {
    index: 5,
    day: "Friday",
    akan: "Afua"
  },
  {
    index: 6,
    day: "Saturday",
    akan: "Ama"
  }
]

  
  const setGender = (_gender) => {
    gender = _gender
  }
  
  function centuryFromYear(year) {
  
    return Math.ceil(year / 100);
  }
  
  const getDayFromInputs = (cc, yy, mm, dd) => {
    const __day__ = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
  
    return Math.floor(__day__)
  }

  const get2LastDigitsOfYear = (fourDigits) => {

    const _digits = fourDigits.toString().substring(2, 4);
    
    return parseInt(_digits);
  }
  const getDayObjectFromAkanNames = (___index, gender) => {

    if (gender === 'male') {
      const day_obj = male_akan_names.find(akan_obj => akan_obj.index === ___index)
      return day_obj
    }
  
    else {
      const day_obj = female_akan_names.find(akan_obj => akan_obj.index === ___index)
      return day_obj
    }
  
  }


  function hideOrShowResults() {

    if (results_holder.classList.contains('d-none')) {
      results_holder.classList.remove('d-none')
      form_holder.classList.add('d-none')
    }
  
    else {
      results_holder.classList.add('d-none')
      form_holder.classList.remove('d-none')
      form.reset();
    
      gender = ''
    }
  
  }
  const getDayObject = () => {
  
  
    
    console.log(centuryFromYear(form_year.value))
    const day_index = getDayFromInputs(20, get2LastDigitsOfYear(form_year.value), parseInt(form_month.value), parseInt(form_day.value));
  

  
    const _akan_obj = getDayObjectFromAkanNames(day_index, gender)
  
    akan_birthday.innerText = _akan_obj.day
    akan_name.innerText = _akan_obj.akan
  
  }
 
  form.addEventListener('submit', (e) => {
  
    e.preventDefault();
  
    if (gender === '') {
      return;
    }
    else if (form_year.value.toString().length < 4) {
      return;
    }
    else {
      hideOrShowResults();
      getDayObject()
      return;
    }
  
  })
  