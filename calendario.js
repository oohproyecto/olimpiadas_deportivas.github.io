const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const calendarGrid = document.getElementById('calendar-grid');
const monthYearDisplay = document.getElementById('month-year');
let currentDate = new Date();
let reminders = {}; 

const reminderModal = document.getElementById('reminder-modal');
const reminderText = document.getElementById('reminder-text');
let selectedDate = null;

function openReminderModal(date) {
    selectedDate = date;
    reminderModal.style.display = 'flex';
}

function closeReminderModal() {
    reminderModal.style.display = 'none';
}

function saveReminder() {
    const reminder = reminderText.value;
    if (reminder && selectedDate) {
        if (!reminders[selectedDate]) {
            reminders[selectedDate] = [];
        }
        reminders[selectedDate].push(reminder);
        generateCalendar(currentDate);
        closeReminderModal();
        reminderText.value = ''; 
    }
}
function generateCalendar(date) {
    calendarGrid.innerHTML = '';
    const year = date.getFullYear();
    const month = date.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    monthYearDisplay.textContent = `${monthNames[month]} ${year}`;
    
    // Rellenar espacios vacíos antes del primer día del mes
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDiv = document.createElement('div');
        calendarGrid.appendChild(emptyDiv);
    }
  
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        const dateString = `${year}-${month + 1}-${i}`; 
        
        dayDiv.textContent = i;
        const today = new Date();
        if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayDiv.classList.add('today');
        }

        if (reminders[dateString]) {
            reminders[dateString].forEach(reminder => {
                const reminderDiv = document.createElement('div');
                reminderDiv.classList.add('reminder');
                reminderDiv.textContent = reminder;
                dayDiv.appendChild(reminderDiv);
            });
        }
        
        dayDiv.addEventListener('click', () => openReminderModal(dateString));
        calendarGrid.appendChild(dayDiv);
    }
}

document.getElementById('prev-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate);
});

document.getElementById('next-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate);
});
document.getElementById('save-reminder').addEventListener('click', saveReminder);
document.querySelector('.close').addEventListener('click', closeReminderModal);
generateCalendar(currentDate);

