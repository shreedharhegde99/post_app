import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./posts.css";
import Modal from "../modal/modal";

function Post() {
  const [query, setQuery] = useState(' ');
  const [data, setData] = useState([])
  const[users,setUsers]=useState([])
	const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen]  = useState(false)
  const[author,setAuthor] = useState([])

	

  useEffect(() => {
    async function loadData() {
    
      const authorfetch = await  axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
      .then((res) => setUsers(res));
      const dataFetch = await axios
				.get("https://jsonplaceholder.typicode.com/posts")
				.then((res) => res.data)
				.then((res) => {
					const userData = res.slice(5, 15);
					setData(userData);
					setFiltered(userData);
				});
      
      setLoading(false);
    }
    loadData()
   
  }, []);
  

  useEffect(() => {
    for (let i = 0; i < users.length; i++){
      for (let j = 0; j < data.length; j++){
        if (users[i].id == data[j].userId) {
          data[j].author = users[i].username
        }
          
      }
    }

    

  },[data])

  useEffect(() => {
    function filterData() {
      
      let filterValue = data.filter((item) => {
        let {author, userId, title, body } = item;
        if (
          author.toLowerCase().includes(query)||
          userId==(Number(query)) ||
          title.toLowerCase().includes(query) ||
          body.toLowerCase().includes(query)
          ) {
            return  item;
          }
        });
        setFiltered(filterValue);
    }
  filterData()
    
	},[query]);

  

  const getAuthor = (author) => {
    const authorDetails = users.filter(user => user.username == author)
   setAuthor(authorDetails)
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }
	let filter = filtered.length;




	return (
		<Fragment>
			<div className="posts">
				<div className="postFilter">
					<input
						type={"text"}
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						className="filterInput"
					/>
				</div>

				<div className={"cardContainer"}>
					{filtered &&users&&
						filtered?.map((item, i) => (
							<div className="card" key={i}>
                <div className="postAuthor" onClick={() => getAuthor(item.author)}>{item.author}</div>
								<div className="title">{item.title}</div>
								<div className="postBody">{item.body}</div>
							</div>
						))}
					{!loading && filter === 0 && (
						<div>
							<img
								src="./images/404.png"
								alt="Error:Not found "
								style={{ height: "300px", width: "300px" }}
							/>
						</div>
					)}
				</div>
      </div>

     {open&& <Modal author={author} open={open} close={closeModal} />}
		</Fragment>
	);
}

export default Post;
