import React, {useState, useEffect, useContext} from "react";

	export const MyListContext = React.createContext();

	const myListFromLocalStorage = JSON.parse(localStorage.getItem("myListFavorites") || "[]")

export const MyListProvider = (props) => {

	const [myListFavorites, setMyListFavorites] = useState(myListFromLocalStorage);

	useEffect(() => {
		localStorage.setItem("myListFavorites", JSON.stringify(myListFavorites));
	}, [myListFavorites]);

	return (
		<MyListContext.Provider value={[myListFavorites, setMyListFavorites]}>
			{props.children}
		</MyListContext.Provider>
	)
}