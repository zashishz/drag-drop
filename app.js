const jsonList = {
    "students": [
        { "id": 1, "name": "Ashish", "location": "Delhi", "stream": "Science" },
        { "id": 2, "name": "Pankaj", "location": "Noida", "stream": "Commerce" },
        { "id": 3, "name": "Mahesh", "location": "Gurgaon", "stream": "Science" },
        { "id": 4, "name": "Suresh", "location": "Chennai", "stream": "Commerce" },
        { "id": 5, "name": "Bhaskar", "location": "Delhi", "stream": "Commerce" },
        { "id": 6, "name": "Mohan", "location": "Noida", "stream": "Science" },
        { "id": 7, "name": "Amit", "location": "Gurgaon", "stream": "Science" },
        { "id": 8, "name": "Ajay", "location": "Chennai", "stream": "Commerce" },
    ]
};

function allowDrop(ev) {
    ev.preventDefault();
    if (ev.target.getAttribute("draggable") == "true")
        ev.dataTransfer.dropEffect = "none";
    else
        ev.dataTransfer.dropEffect = "all";
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

(function (jsonList) {
    const b1 = document.getElementById("b1");
    const b2 = document.getElementById("b2");
    const b3 = document.getElementById("b3");
    const b4 = document.getElementById("b4");

    jsonList.students.map((student) => {
        const { name, location, stream } = student;
        const text = `Hi i am ${name} from ${location}`;
        if(stream == "Commerce")
            b2.innerHTML += `<li id="row1_${name}" draggable="true" ondragstart="drag(event)">${text}</li>`;
        else
            b4.innerHTML += `<li id="row2_${name}" draggable="true" ondragstart="drag(event)">${text}</li>`;
    })

})(jsonList);