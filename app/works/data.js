// data.js
"use client";

import { useEffect, useState } from "react";

const useFetchData = () => {
    const [projects, setProjects] = useState([]);
    const [tags, setTags] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        // Fetch projects
        const fetchProjects = async () => {
            try {
                const res = await fetch("https://66dc247a47d749b72acada24.mockapi.io/api/portfolio/Projects");
                const projectData = await res.json();
                setProjects(projectData);
            } catch (err) {
                console.error("Error fetching projects:", err);
                setError(err);
            }
        };

        // Fetch tags
        const fetchTags = async () => {
            try {
                const res = await fetch("https://66dc247a47d749b72acada24.mockapi.io/api/portfolio/Tags");
                const tagData = await res.json();
                setTags(tagData);
            } catch (err) {
                console.error("Error fetching tags:", err);
                setError(err);
            }
        };

        fetchProjects();
        fetchTags();
    }, []);

    // Function to get tags related to a project
    const getProjectTags = (projectId) => {
        return tags.filter(tag => tag.ProjectId === projectId); // Assuming each tag has a 'ProjectId'
    };

    return { projects, tags, getProjectTags, error };
};

export default useFetchData;
