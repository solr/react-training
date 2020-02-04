import React from "react";
import PostList from "./PostList";
import PostEditor from "./PostEditor";

function App() {
	const [posts, setPosts] = React.useState([]);
	const [view, setView] = React.useState("POST_LIST");

	React.useEffect(() => {
		loadData();
	}, [view] // DependencyArray (Der Hook wird beim Initialen Rendern ausgeführt UND wenn sich der Wert von view zwischen den Render-Iteration geändert hat)
	);

	async function loadData() {
		const response = await fetch('http://localhost:7000/posts');
		const json = await response.json();
		setPosts(json);
	}

	function savePost(post) {
		fetch('http://localhost:7000/posts',
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(post)
			})
			.then(response => response.json());
		setView("POST_LIST");
	}

	function backToList() {
		setView("POST_LIST");
	}

	if (view === "POST_LIST") {
		return <PostList posts={posts} onAddPost={() => setView("POST_NEW")} />;
	}
	if (view === "POST_NEW") {
		return <PostEditor title="Eingabe" body="Auch Eingabe" onSavePost={savePost} onBackToList={backToList} />;
	}

	return null;
}

export default App;
