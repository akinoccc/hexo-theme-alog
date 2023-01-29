export default function getUrlRelativePath() {
  const url = document.location.toString();
  const arrUrl = url.split("//");
  const start = arrUrl[1].indexOf("/");
  let relUrl = arrUrl[1].substring(start);
  if (relUrl.indexOf("?") != -1) {
    relUrl = relUrl.split("?")[0];
  }
  relUrl = relUrl.replace(/\//g, "");
  return relUrl;
}