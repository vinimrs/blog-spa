import React from "react";
import { useParams } from "react-router-dom";
import ListaPosts from "../components/ListaPosts";

const Subcategoria = () => {
    const { subcategoria } = useParams();

    return <ListaPosts url={`/posts?subcategoria=${subcategoria}`} />;
};

export default Subcategoria;
