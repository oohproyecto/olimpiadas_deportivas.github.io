const events = {
    "2024-05-01": ["Partido de fútbol: Team A vs Team B", "Maratón local"],
    "2024-05-05": ["Torneo de tenis"],
    "2024-05-12": ["Carrera de ciclismo"],
    // Añade más eventos según sea necesario
};

document.addEventListener('DOMContentLoaded', () => {
    const calendarBody = document.getElementById('calendarBody');
    const monthYear = document.getElementById('monthYear');
    const eventsList = document.getElementById('eventsList');
    const prevMonth = document.getElementById('prevMonth');
    const nextMonth = document.getElementById('nextMonth');

    let currentDate = new Date(2024, 0 , 1);
    
    function generateCalendar(date) {
        calendarBody.innerHTML = '';
        monthYear.textContent = date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        let day = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                if ((i === 0 && j < firstDay) || day > lastDate) {
                    cell.textContent = '';
                } else {
                    cell.textContent = day;
                    const fullDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    cell.dataset.date = fullDate;

                    if (events[fullDate]) {
                        cell.classList.add('event-day');
                    }

                    cell.addEventListener('click', () => {
                        showEvents(fullDate);
                    });

                    day++;
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }

    function showEvents(date) {
        eventsList.innerHTML = '';
        if (events[date]) {
            events[date].forEach(event => {
                const listItem = document.createElement('li');
                listItem.textContent = event;
                eventsList.appendChild(listItem);
            });
        } else {
            const listItem = document.createElement('li');
            listItem.textContent = 'No hay eventos';
            eventsList.appendChild(listItem);
        }
    }

    prevMonth.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
    });

    nextMonth.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
    });

    generateCalendar(currentDate);
});
document.addEventListener("DOMContentLoaded", function() {
    const calendarBody = document.getElementById("calendarBody");
    const monthYear = document.getElementById("monthYear");
    const eventDetails = document.getElementById("eventDetails");
    const eventsList = document.getElementById("eventsList");

    const events = [
        { date: '2024-10-07', title: 'Torneo de Baloncesto Intercolegial' },
        { date: '2024-10-10', title: 'Partido de Vóleibol' },
        { date: '2024-10-15', title: 'Partido voleibol' },
        { date: '2024-11-03', title: 'Competencia de baloncesto' },
    ];

    let currentDate = new Date();
    
    function generateCalendar(year, month) {
        calendarBody.innerHTML = ""; // Limpia el cuerpo del calendario
        const firstDay = new Date(year, month).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        // Actualiza el encabezado del mes y año
        monthYear.innerText = currentDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement("tr");

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");
                if (i === 0 && j < firstDay) {
                    const emptyCell = document.createTextNode("");
                    cell.appendChild(emptyCell);
                } else if (date > daysInMonth) {
                    break;
                } else {
                    const cellText = document.createTextNode(date);
                    cell.appendChild(cellText);
                    
                    // Asignar el evento de clic para mostrar los eventos del día
                    const cellDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
                    cell.addEventListener('click', () => showEvents(cellDate));
                    date++;
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }

    function showEvents(date) {
        eventsList.innerHTML = ""; // Limpia la lista de eventos
        const dayEvents = events.filter(event => event.date === date);
        
        if (dayEvents.length > 0) {
            dayEvents.forEach(event => {
                const li = document.createElement("li");
                li.textContent = event.title;
                eventsList.appendChild(li);
            });
        } else {
            const noEvent = document.createElement("li");
            noEvent.textContent = "No hay acontecimientos para esta fecha.";
            eventsList.appendChild(noEvent);
        }
    }

    function changeMonth(delta) {
        currentDate.setMonth(currentDate.getMonth() + delta);
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    }

    document.getElementById("prevMonth").addEventListener("click", () => changeMonth(-1));
    document.getElementById("nextMonth").addEventListener("click", () => changeMonth(1));

    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});
