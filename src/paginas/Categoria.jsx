import React, { useEffect, useState } from "react";
import { Link, Switch, useRouteMatch } from "react-router-dom";
import { Route, useParams } from "react-router-dom";
import { busca } from "../api/api";
import "../assets/css/blog.css";
import ListaCategorias from "../components/ListaCategorias";
import ListaPosts from "../components/ListaPosts";
import Subcategoria from "../paginas/Subcategoria";

const Categoria = () => {
    const { categoria } = useParams();
    const { url, path } = useRouteMatch();
    console.log(url, path);
    const [subcategorias, setSubcategorias] = useState([]);

    useEffect(() => {
        busca(`/categorias/${categoria}`, (categoria) => {
            setSubcategorias(categoria.subcategorias);
        });
    }, [categoria]);

    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategorias />
            <ul className="lista-categorias container flex">
                {subcategorias.map((subcategoria) => {
                    return (
                        <li
                            className={`lista-categorias__categoria lista-categorias__categoria--${categoria}`}
                            key={subcategoria}
                        >
                            <Link to={`${url}/${subcategoria}`}>
                                {" "}
                                {subcategoria}{" "}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPosts url={`/posts?categoria=${categoria}`} />
                </Route>
                <Route exact path={`${path}/:subcategoria`}>
                    <Subcategoria />
                </Route>
            </Switch>
        </>
    );
};

export default Categoria;
