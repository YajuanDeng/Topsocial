import path from "path-browserify";
import axios from "axios";

export function getPath(...info) {
  const dbPath = import.meta.env.VITE_DB_PATH
  const fullPath = getHttpHeader() + path.join(dbPath, ...info)
  return fullPath
}
export function IsNumber(element) {
  return element === +element
}

export function getPathWithID(id, ...info) {
  return IsNumber(id) ? getPath(...info,id):getPath(...info)
}

export function getHttpHeader() {
  if(getWebSiteRunningMode()==='development'|| getWebSiteRunningMode() ==='dev') {
    return 'http://'
  }
  return 'https://'
}

export function getWebSiteRunningMode() {
  return import.meta.env.MODE
}

export async function getIno(path) {
  try {
    return await axios.get(path);
  } catch (error) {
    console.error(error);
  }
}