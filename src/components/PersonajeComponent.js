import React from "react";
import { useParams } from "react-router-dom";

export const PersonajeComponent = (props) => {
    const { id } = useParams();
    return <div>{id}</div>;
};
