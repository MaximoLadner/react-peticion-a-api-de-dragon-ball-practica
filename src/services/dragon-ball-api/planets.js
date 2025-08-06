import { HttpStatusCode } from "axios";
import { instanceDBS } from "./index.js";

const defaultGet = async (url) => {
  const { data, status } = await instanceDBS.get(url);
  switch (status) {
    case HttpStatusCode.Ok: {
      return data;
    }
    default:
      throw new Error("Error desconocido");
  }
};

export const getAllplanets = async () => defaultGet("/planets");

export const getOnePlanetsById = async (id) =>
  defaultGet(`/planets/${id}`);

export const getOnePlanetsrByName = async (name) =>
  defaultGet(`/planets?name=${name}`);
