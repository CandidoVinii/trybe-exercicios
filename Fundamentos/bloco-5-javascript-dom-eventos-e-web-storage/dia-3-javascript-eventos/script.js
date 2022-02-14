function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDays(){
    let getDays = document.querySelector('#days');

    for(let index = 0; index < dezDaysList.length; index += 1){
        let day = dezDaysList[index];
        let addDay = document.createElement('li');

        if(day === 24 | day === 31){
            addDay.className = 'day holiday';
            addDay.innerHTML = day;
            getDays.appendChild(addDay);
    }else if (day === 4 | day === 11 | day === 18){
        addDay.className = 'day friday';
        addDay.innerHTML = day;
        getDays.appendChild(addDay);
    }else if (day === 25){
        addDay.className = 'day friday holiday'
        addDay.innerText = day;
        getDays.appendChild(addDay);
    }else{
        addDay.className = 'day'
        addDay.innerHTML = day;
        getDays.appendChild(addDay)
    }
  }
}
createDays();

function holidayButton(buttonName){
    let divButton = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');

    newButton.innerHTML = buttonName;
    newButton.id = 'btn-holiday';
    divButton.appendChild(newButton);
}

holidayButton('Feriado');


function eventHolidayClass(){
    let getButton = document.querySelector('#btn-holiday');
    let getHoliday = document.querySelectorAll('.holiday');
    let backgroundColor = 'green';
    let newColor = 'white';

    getButton.addEventListener('click', function(){
        for(let index = 0; index < getHoliday.length; index += 1){
            if(getHoliday[index].style.backgroundColor == newColor){
                getHoliday[index].style.backgroundColor = backgroundColor;
            }else{
                getHoliday[index].style.backgroundColor = newColor;
            }
        }
    })
};

eventHolidayClass();

function fridayButton(buttonName){
    let divButton = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');

    newButton.innerHTML = buttonName;
    newButton.id = 'btn-friday';
    divButton.appendChild(newButton);
}

fridayButton('Sexta-Feira');


function eventFriday (fridaysArray){
    let getFridayButton = document.querySelector('#btn-friday');
    let getFriday = document.getElementsByClassName('friday');
    let newText = 'Sextou';

    getFridayButton.addEventListener('click', function(){
      for(let index = 0; index < getFriday.length; index += 1){
        if(getFriday[index].innerHTML !== newText){
            getFriday[index].innerHTML = newText;
        }else{
            getFriday[index].innerHTML = fridaysArray[index];
        }
      }
    })
}

let dezFridays = [ 4, 11, 18, 25 ];
eventFriday(dezFridays);

function zoomIn (){
    getDays = document.querySelector('#days');

    getDays.addEventListener('mouseover', function(event){
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    })
    
}
function zoomOut (){
    getDays = document.querySelector('#days');

    getDays.addEventListener('mouseout', function(event){
        event.target.style.fontWeight = '200';
        event.target.style.fontSize = '20px';
    })
}

zoomIn();
zoomOut();

function newTask (task){
    let taskContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');

    taskName.innerHTML = task;
    taskContainer.appendChild(taskName);
}

newTask('Projeto: ');

function markerTask(color){
    let taskContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');

    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    taskContainer.appendChild(newTask);
}

markerTask('blue');

function setClass (){
    let selectedTask = document.getElementsByClassName('task selected');
    let myTask = document.querySelector('.task');

    myTask.addEventListener('click', function(event){
        if(selectedTask.length === 0){
            event.target.className ='task selected';
        }else{
            event.target.className = 'task';
        }
    })
}

setClass();

function setColor (){
    let selectedTask = document.getElementsByClassName('task selected');
    getDays = document.querySelector('#days');
    let myTask = document.querySelector('.task');
    let taskColor = myTask.style.backgroundColor;

    getDays.addEventListener('click', function(event){
        let mudaCor = event.target.style.color;
        if(selectedTask.length > 0 && mudaCor !== taskColor){
            let color = selectedTask[0].style.backgroundColor;
            event.target.style.color = color;
        }else if (mudaCor === taskColor && selectedTask.length !== 0){
            event.targe.style.color = 'rgb(119,119,119)';
        } else{

        }
    })
}

setColor();

function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', function() {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    })
  
    getInputField.addEventListener('keyup', function(event) {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  };
  
  addNewTask();