import { useState } from "react";
import { FaEdit } from "react-icons/fa";
const EditTutorial = ({ item, editTutorial }) => {
  const [tutorialTitle, setTutorialTitle] = useState(item.title);
  const [tutorialDesc, setTutorialDesc] = useState(item.description);
  return (
    <>
      <FaEdit
        size={20}
        type="button"
        className="me-2 text-warning"
        data-bs-toggle="modal"
        data-bs-target="#edit-tutor"
      />
      <div className="modal" tabIndex="-1" id="edit-tutor">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Title
                <input
                  type="text"
                  value={tutorialTitle}
                  className="form-control"
                  onChange={(e) => {
                    setTutorialTitle(e.target.value);
                  }}
                />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5>Description</h5>
              <p>
                <input
                  type="text"
                  value={tutorialDesc}
                  className="form-control"
                  onChange={(e) => {
                    setTutorialDesc(e.target.value);
                  }}
                />
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  editTutorial({
                    id: item.id,
                    title: tutorialTitle,
                    description: tutorialDesc,
                  });
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditTutorial;
