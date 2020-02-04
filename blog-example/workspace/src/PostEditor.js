import React from "react";

export default function PostEditor(props) {
	const [title, setTitle] = React.useState(props.title || "");
	const [body, setBody] = React.useState(props.body || "");

	const clearDisabled = !title && !body;
	const saveDisabled = !title || !body;

	function clear() {
		setTitle("");
		setBody("");
	}

	return (
		<>
			<button onClick={() => props.onBackToList()}>Zurück</button>
			<div className="Container">

				<h1>Create Post</h1>

				<label>
					Title
				<input value={title} onChange={e => setTitle(e.currentTarget.value)} />
				</label>

				<label>
					Body
				<textarea value={body} onChange={e => setBody(e.currentTarget.value)} />
				</label>

				<button disabled={clearDisabled} onClick={clear}>Clear</button>

				<button disabled={saveDisabled} onClick={() => props.onSavePost({ title: title, body: body })}>Save</button>

			</div>
		</>
	);
}
