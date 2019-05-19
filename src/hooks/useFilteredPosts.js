import { useState, useEffect } from "react";

const useFilteredPosts = data => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState(data.posts.edges);
  const [filteredPosts, setFilteredPosts] = useState(data.posts.edges);
  const [currentTags, setCurrentTags] = useState([]);

  const filterPostsSearch = () => {
    if (currentTags.length > 0) {
      setFilteredPosts(
        filteredPosts.filter(post => post.node.frontmatter.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()))
      );
    } else {
      setFilteredPosts(
        posts.filter(post => post.node.frontmatter.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()))
      );
    }
  };

  const filterPostsTags = () => {
    if (currentTags.length > 0) {
      setFilteredPosts(
        posts.filter(
          post => post.node.frontmatter.tags
            && currentTags.every(tag => post.node.frontmatter.tags.includes(tag))
        )
      );
    }
  };

  const updateTags = tagItem => {
    if (!currentTags.includes(tagItem)) {
      setCurrentTags([...currentTags, tagItem]);
    } else {
      setCurrentTags(currentTags.filter(tag => tagItem !== tag));
    }
  };

  const handleChange = event => {
    const { value } = event.target;

    setSearchTerm(value);
  };

  useEffect(() => {
    filterPostsSearch();
    if (searchTerm === "") {
      filterPostsTags();
    }
  }, [searchTerm]);

  useEffect(() => {
    filterPostsTags();
    if (currentTags.length === 0) {
      filterPostsSearch();
    }
  }, [currentTags]);

  return {
    searchTerm,
    filteredPosts,
    handleChange,
    currentTags,
    updateTags,
    setPosts
  };
};

export default useFilteredPosts;
