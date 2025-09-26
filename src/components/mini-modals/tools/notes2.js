import { useState } from "react";
import "./tools.css";

function NotesAgain() {
  // State for switching between views
  const [view, setView] = useState("notes"); // "notes" or "new"

  // State for input fields
  const [inputValues, setInputValues] = useState({
    title: "",
    content: "",
  });

  // Notes array
  const [notes, setNotes] = useState([]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  // Add note
  const addNote = () => {
    if (inputValues.title.trim() === "" || inputValues.content.trim() === "") {
      alert("Please fill both title and content!");
      return;
    }
    setNotes([...notes, { ...inputValues }]);
    setInputValues({ title: "", content: "" });
    setView("notes");
  };

  // Delete note
  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="sidebar-1 p-4 min-w-[220px] bg-gray-800">
        <h2 className="text-xl font-semibold mb-4">Notes</h2>
        <nav className="flex flex-col gap-2">
          <button
            onClick={() => setView("new")}
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-indigo-500 transition"
          >
            + Add Note
          </button>
          <button
            onClick={() => setView("notes")}
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-indigo-500 transition"
          >
            Your Notes
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* New Note Form */}
        {view === "new" && (
          <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">New Note</h3>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={inputValues.title}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
            />
            <textarea
              name="content"
              placeholder="Write your notes here..."
              value={inputValues.content}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 rounded h-40 bg-gray-700 text-white outline-none resize-none"
            />
            <div className="flex justify-end">
              <button
                onClick={addNote}
                className="px-4 py-2 bg-indigo-500 rounded hover:bg-indigo-600 transition"
              >
                Add Note
              </button>
            </div>
          </div>
        )}

        {/* Notes List */}
        {view === "notes" && (
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {notes.length === 0 && (
              <p className="text-gray-400 text-center">No notes yet 😎</p>
            )}
            {notes.map((note, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-semibold">{note.title}</h4>
                  <button
                    onClick={() => deleteNote(index)}
                    className="text-red-500 hover:text-red-400"
                  >
                    Delete
                  </button>
                </div>
                <p className="mt-2 text-gray-200">{note.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NotesAgain;
