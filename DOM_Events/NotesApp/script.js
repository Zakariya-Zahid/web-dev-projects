let NotesInput = document.getElementById("noteInput");
let saveNotes_btn = document.getElementById("save_Input");
let notesContainer = document.getElementById("notesContainer");
let activeEditForm = null;

// Local Storage
let NotesCollection = JSON.parse(localStorage.getItem("Notes_saved")) || [];
NotesCollection.forEach((note) => renderNotes(note));
isEmpty(); // Initial check on load

function isEmpty() {
  if (NotesCollection.length === 0) {
    notesContainer.innerHTML = `<p class="flex justify-center text-xl text-yellow-500">No Notes Added!</p>`;
  }
}

saveNotes_btn.addEventListener("click", function () {
  let Notes_Trim_Input = NotesInput.value.trim();
  if (Notes_Trim_Input === "") return;

  let myLocalDate = new Date().toLocaleString("default", {
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  let NotesCreation = {
    time: myLocalDate,
    id: Date.now(),
    text: Notes_Trim_Input,
  };

  NotesCollection.push(NotesCreation);
  saveNotes();
  renderNotes(NotesCreation);
  NotesInput.value = "";
});

function renderNotes(note) {
  // Remove "No Notes" message if any
  if (NotesCollection.length === 1) {
    notesContainer.innerHTML = "";
  }

  const appendNotesDiv = document.createElement("div");
  appendNotesDiv.setAttribute("data-id", note.id);
  appendNotesDiv.className =
    "bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700 space-y-3";

  appendNotesDiv.innerHTML = `
        <div class="space-y-2">
          <p class="text-white text-base whitespace-pre-wrap break-words">${note.text}</p>
          <p class="text-sm text-gray-400">Created: ${note.time}</p>
        </div>
        <div class="flex flex-wrap gap-2 justify-end">
          <button class="edit_btn bg-blue-600 hover:bg-blue-500 text-white px-4 py-1 rounded">Edit</button>
          <button class="delete-btn bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded">Delete</button>
        </div>
      `;

  notesContainer.appendChild(appendNotesDiv);

  appendNotesDiv.addEventListener("click", function (e) {
    const id = parseInt(appendNotesDiv.getAttribute("data-id"));

    // Edit logic
    if (e.target.closest(".edit_btn")) {
      if (activeEditForm) {
        activeEditForm.remove();
        activeEditForm = null;
      }

      const newInputField = document.createElement("div");
      newInputField.className = "mt-3";

      newInputField.innerHTML = `
            <textarea
              id="newNoteInput"
              rows="5"
              placeholder="Update your note..."
              class="w-full p-3 rounded-lg text-black focus:outline-none resize-none"
            ></textarea>
            <button
              id="new_save_Input"
              class="mt-3 w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded-lg transition"
            >
              Save Changes
            </button>
          `;

      appendNotesDiv.insertBefore(newInputField, appendNotesDiv.children[1]);
      activeEditForm = newInputField;

      newInputField.querySelector("#newNoteInput").value = note.text;

      const NewSaveBtn = newInputField.querySelector("#new_save_Input");
      NewSaveBtn.addEventListener("click", function () {
        const NewInputText = newInputField
          .querySelector("#newNoteInput")
          .value.trim();
        if (NewInputText === "") return;

        const currentTime = new Date().toLocaleString("default", {
          month: "long",
          day: "2-digit",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        });

        NotesCollection = NotesCollection.map((n) =>
          n.id === id ? { ...n, text: NewInputText, time: currentTime } : n
        );

        saveNotes();
        notesContainer.innerHTML = "";
        NotesCollection.forEach((note) => renderNotes(note));
        isEmpty();
        activeEditForm = null;
      });
    }

    // Delete logic
    if (e.target.closest(".delete-btn")) {
      NotesCollection = NotesCollection.filter((n) => n.id !== id);
      saveNotes();
      appendNotesDiv.remove();

      if (NotesCollection.length === 0) {
        isEmpty();
      }
    }
  });
}

function saveNotes() {
  localStorage.setItem("Notes_saved", JSON.stringify(NotesCollection));
}
