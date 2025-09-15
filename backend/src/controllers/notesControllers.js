export function getAllNotes(req, res) {
    res.status(200).send("Your notes");
}

export function createNote(req, res) {
    res.status(201).json({message: "Note has been created successfully!"});
}

export function updateNote(req, res) {
    res.status(200).json({message: "Note has been updated successfully!"});
}

export function deleteNote(req, res) {
    res.status(200).json({message: "Note has been deleted successfully!"});
}
